import { useState, useMemo } from 'react';
import { INITIAL_PATIENTS } from '@/data/mockData';
import { Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { formatDate } from '@/utils/formatters';

const STORAGE_KEY = 'nuskha_patients_data_v3';

function getStoredPatients(fallback: Patient[]): Patient[] {
  if (typeof window === 'undefined') return fallback;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to load patient records from storage:', e);
  }
  return fallback;
}

function persistPatients(data: Patient[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to persist patient records to storage:', e);
  }
}

export function usePatients(initialData: Patient[] = INITIAL_PATIENTS) {
  const [patients, setPatients] = useState<Patient[]>(() =>
    getStoredPatients(initialData)
  );
  const [selectedPatientId, setSelectedPatientId] = useState<string>(() => {
    const initial = getStoredPatients(initialData);
    return initial[0]?.id || '';
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [todayCount, setTodayCount] = useState<number>(48);

  const selectedPatient = useMemo(() => {
    return patients.find((p) => p.id === selectedPatientId) || patients[0];
  }, [patients, selectedPatientId]);

  // Disambiguated Filter Logic
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

  // Register a new walk-in patient
  const registerPatient = (
    newPatientData: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
  ) => {
    const newId = `p-${Date.now()}`;
    const todayDateString = formatDate(new Date());

    const newPatient: Patient = {
      ...newPatientData,
      id: newId,
      pastVisits: [],
      severityTrend: {
        overallRelief: 'First Visit',
        history: [{ label: 'Today', date: todayDateString, score: 100 }],
      },
    };

    setPatients((prev) => {
      const next = [newPatient, ...prev];
      persistPatients(next);
      return next;
    });
    setSelectedPatientId(newId);
    setTodayCount((prev) => prev + 1);
    return newPatient;
  };

  // Save consultation visit
  const saveConsultation = (data: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: PrescriptionItem[];
    doctorNotes: string;
    durationDays?: number;
    fee: number;
    feeStatus: 'Paid' | 'Free' | 'Due';
  }) => {
    if (!selectedPatient) return;

    const todayDateString = formatDate(new Date());

    const newVisit: PastVisit = {
      id: `v-${Date.now()}`,
      patientId: selectedPatient.id,
      date: todayDateString,
      tokenNo: todayCount + 1,
      reaction: data.reaction,
      symptoms: data.symptoms,
      prescriptions: data.prescriptions,
      doctorNotes: data.doctorNotes,
      durationDays: data.durationDays || CLINIC_CONFIG.defaultCourseDays,
      fee: data.fee,
      feeStatus: data.feeStatus,
    };

    // Update patient's pastVisits
    setPatients((prev) => {
      const next = prev.map((patient) => {
        if (patient.id === selectedPatient.id) {
          return {
            ...patient,
            totalVisits: patient.totalVisits + 1,
            lastVisitDate: 'Today',
            pastVisits: [newVisit, ...patient.pastVisits],
          };
        }
        return patient;
      });
      persistPatients(next);
      return next;
    });

    setTodayCount((prev) => prev + 1);
  };

  // Update an existing patient's demographic information
  const updatePatient = (updatedPatient: Patient) => {
    setPatients((prev) => {
      const next = prev.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      );
      persistPatients(next);
      return next;
    });
  };

  // Delete/Archive a patient record
  const deletePatient = (patientId: string) => {
    setPatients((prev) => {
      const remaining = prev.filter((p) => p.id !== patientId);
      persistPatients(remaining);
      if (selectedPatientId === patientId) {
        setSelectedPatientId(remaining[0]?.id || '');
      }
      return remaining;
    });
  };

  // Reset demo data back to default static records
  const resetToDefaultData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear storage:', e);
    }
    setPatients(INITIAL_PATIENTS);
    setSelectedPatientId(INITIAL_PATIENTS[0]?.id || '');
  };

  return {
    patients,
    selectedPatient,
    selectedPatientId,
    setSelectedPatientId,
    searchQuery,
    setSearchQuery,
    filteredPatients,
    todayCount,
    registerPatient,
    saveConsultation,
    updatePatient,
    deletePatient,
    resetToDefaultData,
  };
}
