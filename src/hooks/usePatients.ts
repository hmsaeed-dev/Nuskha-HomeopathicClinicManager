import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';
import { ensureLocalStorageMigrated } from '@/lib/migrateLocalClient';
import { useSettingsContext } from '@/context/SettingsContext';

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

function errorMessage(err: unknown, fallback: string): string {
  return err instanceof Error ? err.message : fallback;
}

export function usePatients() {
  const { clinicConfig } = useSettingsContext();

  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [todayCount, setTodayCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // A snapshot of the last server-confirmed list, used to roll back an
  // optimistic update when a write fails.
  const patientsRef = useRef<Patient[]>([]);
  useEffect(() => {
    patientsRef.current = patients;
  }, [patients]);

  const applyFetchedData = useCallback(
    (data: { patients: Patient[]; todayCount: number }) => {
      setPatients(data.patients);
      patientsRef.current = data.patients;
      setTodayCount(data.todayCount);
      setSelectedPatientId((prev) => {
        if (prev && data.patients.some((p) => p.id === prev)) return prev;
        return data.patients[0]?.id || '';
      });
    },
    []
  );

  const rollbackTo = useCallback((snapshot: Patient[]) => {
    setPatients(snapshot);
    patientsRef.current = snapshot;
    setSelectedPatientId((prev) =>
      snapshot.some((p) => p.id === prev) ? prev : snapshot[0]?.id || ''
    );
  }, []);

  const revalidatePatient = useCallback(async (patientId: string) => {
    const res = await fetch(`/api/patients/${encodeURIComponent(patientId)}`, {
      cache: 'no-store',
    });
    const { patient } = await parseJsonOrThrow<{ patient: Patient }>(res);
    setPatients((prev) =>
      prev.map((item) => (item.id === patient.id ? patient : item))
    );
    return patient;
  }, []);

  const revalidateInBackground = useCallback(
    (patientId: string) => {
      void revalidatePatient(patientId).catch((err) => {
        console.error('Patient revalidation failed:', err);
      });
    },
    [revalidatePatient]
  );

  const refreshPatients = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/patients', { cache: 'no-store' });
      const data = await parseJsonOrThrow<{
        patients: Patient[];
        todayCount: number;
      }>(res);
      applyFetchedData(data);
    } catch (err) {
      setError(errorMessage(err, 'Failed to load patients from database.'));
      throw err;
    } finally {
      if (!silent) setIsLoading(false);
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
        setError(errorMessage(err, 'Failed to load patients from database.'));
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
      const snapshot = patientsRef.current;
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

        setPatients((prev) => [patient, ...prev.filter((p) => p.id !== patient.id)]);
        setSelectedPatientId(patient.id);
        if (typeof nextTodayCount === 'number') {
          setTodayCount(nextTodayCount);
        }
        // The POST returns a canonical patient, but revalidate to pick up any
        // server-derived labels/derived fields without hand-maintaining them.
        revalidateInBackground(patient.id);
        return patient;
      } catch (err) {
        rollbackTo(snapshot);
        setError(errorMessage(err, 'Failed to register patient.'));
        throw err;
      } finally {
        setIsSaving(false);
      }
    },
    [revalidateInBackground, rollbackTo]
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

      const targetId = selectedPatient.id;
      const snapshot = patientsRef.current;
      setIsSaving(true);
      try {
        const idempotencyKey =
          data.idempotencyKey ||
          (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `idem-${Date.now()}-${Math.random().toString(36).slice(2)}`);

        const res = await fetch(`/api/patients/${encodeURIComponent(targetId)}/visits`, {
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
            durationDays: data.durationDays ?? clinicConfig.defaultCourseDays,
            fee: data.fee,
            feeStatus: data.feeStatus,
            idempotencyKey,
          }),
        });

        const { visit, todayCount: nextTodayCount } = await parseJsonOrThrow<{
          visit: PastVisit;
          todayCount: number;
        }>(res);

        // Optimistic patch uses values returned by the server — no manual
        // "+1 visit" or hardcoded "Today" label.
        const canonicalDate = visit.clinicDate;
        setPatients((prev) =>
          prev.map((patient) => {
            if (patient.id !== targetId) return patient;
            if (patient.pastVisits.some((v) => v.id === visit.id)) return patient;
            return {
              ...patient,
              totalVisits: patient.totalVisits + 1,
              lastVisitDate: visit.date,
              ...(canonicalDate
                ? {
                    lastVisitClinicDate:
                      !patient.lastVisitClinicDate ||
                      canonicalDate > patient.lastVisitClinicDate
                        ? canonicalDate
                        : patient.lastVisitClinicDate,
                  }
                : {}),
              pastVisits: [visit, ...patient.pastVisits],
            };
          })
        );
        setTodayCount(nextTodayCount);
        revalidateInBackground(targetId);
        return visit;
      } catch (err) {
        rollbackTo(snapshot);
        setError(errorMessage(err, 'Failed to save consultation.'));
        throw err;
      } finally {
        setIsSaving(false);
      }
    },
    [clinicConfig.defaultCourseDays, revalidateInBackground, rollbackTo, selectedPatient]
  );

  const updatePatient = useCallback(
    async (updatedPatient: Patient): Promise<Patient> => {
      const snapshot = patientsRef.current;
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
        revalidateInBackground(patient.id);
        return patient;
      } catch (err) {
        rollbackTo(snapshot);
        setError(errorMessage(err, 'Failed to update patient.'));
        throw err;
      } finally {
        setIsSaving(false);
      }
    },
    [revalidateInBackground, rollbackTo]
  );

  const settlePatientDues = useCallback(
    async (patientId: string): Promise<void> => {
      const snapshot = patientsRef.current;
      setIsSaving(true);
      try {
        const res = await fetch(`/api/patients/${encodeURIComponent(patientId)}/settle-dues`, {
          method: 'POST',
        });
        const { patient } = await parseJsonOrThrow<{ patient: Patient }>(res);

        // The server returns the canonical patient so editedAt and feeStatus
        // cannot drift between client and database.
        setPatients((prev) =>
          prev.map((item) => (item.id === patient.id ? patient : item))
        );
        revalidateInBackground(patient.id);
      } catch (err) {
        rollbackTo(snapshot);
        setError(errorMessage(err, 'Failed to settle dues.'));
        throw err;
      } finally {
        setIsSaving(false);
      }
    },
    [revalidateInBackground, rollbackTo]
  );

  const deletePatient = useCallback(
    async (patientId: string): Promise<void> => {
      const snapshot = patientsRef.current;
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
        void refreshPatients(true).catch((err) => {
          console.error('Post-delete revalidation failed:', err);
        });
      } catch (err) {
        rollbackTo(snapshot);
        setError(errorMessage(err, 'Failed to archive patient.'));
        throw err;
      } finally {
        setIsSaving(false);
      }
    },
    [refreshPatients, rollbackTo, selectedPatientId]
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
