'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { usePatients } from '@/hooks/usePatients';
import { Patient, ReactionType, PrescriptionItem } from '@/types';

interface PatientsContextValue {
  patients: Patient[];
  selectedPatient: Patient;
  selectedPatientId: string;
  setSelectedPatientId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPatients: Patient[];
  todayCount: number;
  registerPatient: (
    newPatientData: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
  ) => Patient;
  saveConsultation: (data: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: PrescriptionItem[];
    doctorNotes: string;
    durationDays?: number;
    fee: number;
    feeStatus: 'Paid' | 'Free' | 'Due';
  }) => void;
  updatePatient: (updatedPatient: Patient) => void;
  deletePatient: (patientId: string) => void;
  resetToDefaultData: () => void;
  isNewPatientOpen: boolean;
  setIsNewPatientOpen: (open: boolean) => void;
}

const PatientsContext = createContext<PatientsContextValue | null>(null);

export const PatientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const patientState = usePatients();
  const [isNewPatientOpen, setIsNewPatientOpen] = useState(false);

  return (
    <PatientsContext.Provider
      value={{
        ...patientState,
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
