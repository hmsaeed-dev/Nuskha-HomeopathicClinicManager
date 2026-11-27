'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { usePatients } from '@/hooks/usePatients';
import { FeeStatus, Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';

interface PatientsContextValue {
  patients: Patient[];
  selectedPatient: Patient | null;
  selectedPatientId: string;
  setSelectedPatientId: (id: string) => void;
  focusedVisitId: string | null;
  setFocusedVisitId: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPatients: Patient[];
  todayCount: number;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
  refreshPatients: (silent?: boolean) => Promise<void>;
  registerPatient: (
    newPatientData: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
  ) => Promise<Patient>;
  saveConsultation: (data: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: PrescriptionItem[];
    doctorNotes: string;
    durationDays?: number;
    fee: number;
    feeStatus: FeeStatus;
    idempotencyKey?: string;
  }) => Promise<PastVisit | undefined>;
  updatePatient: (updatedPatient: Patient) => Promise<Patient>;
  settlePatientDues: (patientId: string) => Promise<void>;
  deletePatient: (patientId: string) => Promise<void>;
  isNewPatientOpen: boolean;
  setIsNewPatientOpen: (open: boolean) => void;
}

const PatientsContext = createContext<PatientsContextValue | null>(null);

export const PatientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const patientState = usePatients();
  const [isNewPatientOpen, setIsNewPatientOpen] = useState(false);
  const [focusedVisitId, setFocusedVisitId] = useState<string | null>(null);

  return (
    <PatientsContext.Provider
      value={{
        ...patientState,
        focusedVisitId,
        setFocusedVisitId,
        isNewPatientOpen,
        setIsNewPatientOpen,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export function usePatientsContext(): PatientsContextValue {
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error('usePatientsContext must be used within a PatientsProvider');
  }
  return context;
}
