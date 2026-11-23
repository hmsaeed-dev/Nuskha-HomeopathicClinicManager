import { useState, useMemo } from 'react';
import { INITIAL_PATIENTS } from '@/data/mockData';
import { Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { formatDate } from '@/utils/formatters';

export function usePatients(initialData: Patient[] = INITIAL_PATIENTS) {
  const [patients, setPatients] = useState<Patient[]>(initialData);
  const [selectedPatientId, setSelectedPatientId] = useState<string>(
    initialData[0]?.id || ''
  );
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

    setPatients((prev) => [newPatient, ...prev]);
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
    setPatients((prev) =>
      prev.map((patient) => {
        if (patient.id === selectedPatient.id) {
          return {
            ...patient,
            totalVisits: patient.totalVisits + 1,
            lastVisitDate: 'Today',
            pastVisits: [newVisit, ...patient.pastVisits],
          };
        }
        return patient;
      })
    );

    setTodayCount((prev) => prev + 1);
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
  };
}
