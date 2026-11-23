'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PatientsView } from '@/components/archive/PatientsView';
import { usePatientsContext } from '@/context/PatientsContext';
import { Patient } from '@/types';

export default function PatientsPage() {
  const router = useRouter();
  const { patients, setSelectedPatientId } = usePatientsContext();

  const handleSelectPatientForOPD = (patient: Patient) => {
    setSelectedPatientId(patient.id);
    router.push('/');
  };

  return (
    <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
      <PatientsView
        patients={patients}
        onSelectPatientForOPD={handleSelectPatientForOPD}
      />
    </main>
  );
}
