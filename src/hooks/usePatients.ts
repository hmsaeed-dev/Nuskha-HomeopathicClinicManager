import { useState, useMemo, useEffect, useCallback } from 'react';
import { Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { ensureLocalStorageMigrated } from '@/lib/migrateLocalClient';

async function parseJsonOrThrow<T>(res: Response): Promise<T> {
  const payload = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message =
      (payload as { error?: string })?.error ||
      `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return payload as T;
}

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [todayCount, setTodayCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const applyFetchedData = useCallback(
    (data: { patients: Patient[]; todayCount: number }) => {
      setPatients(data.patients);
      setTodayCount(data.todayCount);
      setSelectedPatientId((prev) => {
        if (prev && data.patients.some((p) => p.id === prev)) return prev;
        return data.patients[0]?.id || '';
      });
    },
    []
  );

  const refreshPatients = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/patients', { cache: 'no-store' });
      const data = await parseJsonOrThrow<{
        patients: Patient[];
        todayCount: number;
      }>(res);
      applyFetchedData(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to load patients from database.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [applyFetchedData]);

  useEffect(() => {
    let active = true;

    ensureLocalStorageMigrated()
      .then(() => fetch('/api/patients', { cache: 'no-store' }))
      .then((res) =>
        parseJsonOrThrow<{ patients: Patient[]; todayCount: number }>(res)
      )
      .then((data) => {
        if (!active) return;
        setError(null);
        applyFetchedData(data);
      })
      .catch((err) => {
        if (!active) return;
        const message =
          err instanceof Error
            ? err.message
            : 'Failed to load patients from database.';
        setError(message);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [applyFetchedData]);

  const selectedPatient = useMemo<Patient | null>(() => {
    if (patients.length === 0) return null;
    return patients.find((p) => p.id === selectedPatientId) || patients[0];
  }, [patients, selectedPatientId]);

  const filteredPatients = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return patients;
    return patients.filter((patient) => {
      return (
        patient.fullName.toLowerCase().includes(q) ||
        patient.relativeName.toLowerCase().includes(q) ||
        patient.phone.includes(q) ||
        patient.mrn.toLowerCase().includes(q) ||
        patient.locality.toLowerCase().includes(q)
      );
    });
  }, [patients, searchQuery]);

  const registerPatient = useCallback(
    async (
      newPatientData: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
    ): Promise<Patient> => {
      setIsSaving(true);
      try {
        const res = await fetch('/api/patients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: newPatientData.fullName,
            relationType: newPatientData.relationType,
            relativeName: newPatientData.relativeName,
            age: newPatientData.age,
            gender: newPatientData.gender,
            phone: newPatientData.phone,
            locality: newPatientData.locality,
            initialFee: newPatientData.initialFee,
          }),
        });

        const { patient, todayCount: nextTodayCount } = await parseJsonOrThrow<{
          patient: Patient;
          todayCount?: number;
        }>(res);
        setPatients((prev) => [patient, ...prev]);
        setSelectedPatientId(patient.id);
        if (typeof nextTodayCount === 'number') {
          setTodayCount(nextTodayCount);
        }
        return patient;
      } finally {
        setIsSaving(false);
      }
    },
    []
  );

  const saveConsultation = useCallback(
    async (data: {
      reaction: ReactionType;
      symptoms: string;
      prescriptions: PrescriptionItem[];
      doctorNotes: string;
      durationDays?: number;
      fee: number;
      feeStatus: 'Paid' | 'Free' | 'Due';
      idempotencyKey?: string;
    }): Promise<PastVisit | undefined> => {
      if (!selectedPatient) return undefined;

      setIsSaving(true);
      try {
        const idempotencyKey =
          data.idempotencyKey ||
          (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `idem-${Date.now()}-${Math.random().toString(36).slice(2)}`);

        const res = await fetch(`/api/patients/${encodeURIComponent(selectedPatient.id)}/visits`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
          },
          body: JSON.stringify({
            reaction: data.reaction,
            symptoms: data.symptoms,
            prescriptions: data.prescriptions,
            doctorNotes: data.doctorNotes,
            durationDays: data.durationDays || CLINIC_CONFIG.defaultCourseDays,
            fee: data.fee,
            feeStatus: data.feeStatus,
            idempotencyKey,
          }),
        });

        const { visit, todayCount: nextTodayCount } = await parseJsonOrThrow<{
          visit: PastVisit;
          todayCount: number;
        }>(res);

        setPatients((prev) =>
          prev.map((patient) => {
            if (patient.id !== selectedPatient.id) return patient;
            const alreadyPresent = patient.pastVisits.some((v) => v.id === visit.id);
            if (alreadyPresent) return patient;
            return {
              ...patient,
              totalVisits: patient.totalVisits + 1,
              lastVisitDate: 'Today',
              pastVisits: [visit, ...patient.pastVisits],
            };
          })
        );
        setTodayCount(nextTodayCount);
        return visit;
      } finally {
        setIsSaving(false);
      }
    },
    [selectedPatient]
  );

  const updatePatient = useCallback(async (updatedPatient: Patient): Promise<Patient> => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/patients/${encodeURIComponent(updatedPatient.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: updatedPatient.fullName,
          relationType: updatedPatient.relationType,
          relativeName: updatedPatient.relativeName,
          age: updatedPatient.age,
          gender: updatedPatient.gender,
          phone: updatedPatient.phone,
          locality: updatedPatient.locality,
        }),
      });

      const { patient } = await parseJsonOrThrow<{ patient: Patient }>(res);
      setPatients((prev) =>
        prev.map((item) => (item.id === patient.id ? patient : item))
      );
      return patient;
    } finally {
      setIsSaving(false);
    }
  }, []);

  const settlePatientDues = useCallback(async (patientId: string): Promise<void> => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/patients/${encodeURIComponent(patientId)}/settle-dues`, {
        method: 'POST',
      });
      await parseJsonOrThrow<{ settledCount: number }>(res);

      setPatients((prev) =>
        prev.map((patient) => {
          if (patient.id !== patientId) return patient;
          return {
            ...patient,
            pastVisits: patient.pastVisits.map((v) =>
              v.feeStatus === 'Due' ? { ...v, feeStatus: 'Paid' as const } : v
            ),
          };
        })
      );
    } finally {
      setIsSaving(false);
    }
  }, []);

  const deletePatient = useCallback(
    async (patientId: string): Promise<void> => {
      setIsSaving(true);
      try {
        const res = await fetch(`/api/patients/${encodeURIComponent(patientId)}`, {
          method: 'DELETE',
        });
        await parseJsonOrThrow<{ archived: boolean }>(res);

        setPatients((prev) => {
          const remaining = prev.filter((p) => p.id !== patientId);
          if (selectedPatientId === patientId) {
            setSelectedPatientId(remaining[0]?.id || '');
          }
          return remaining;
        });
      } finally {
        setIsSaving(false);
      }
    },
    [selectedPatientId]
  );

  return {
    patients,
    selectedPatient,
    selectedPatientId,
    setSelectedPatientId,
    searchQuery,
    setSearchQuery,
    filteredPatients,
    todayCount,
    isLoading,
    isSaving,
    error,
    refreshPatients,
    registerPatient,
    saveConsultation,
    updatePatient,
    settlePatientDues,
    deletePatient,
  };
}
