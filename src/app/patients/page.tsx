'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { PatientsView } from '@/components/archive/PatientsView';
import { usePatientsContext } from '@/context/PatientsContext';
import { BrandedLoader } from '@/components/ui/BrandedLoader';
import { Patient } from '@/types';

export default function PatientsPage() {
  const router = useRouter();
  const {
    patients,
    setSelectedPatientId,
    setFocusedVisitId,
    isLoading,
    error,
    refreshPatients,
  } = usePatientsContext();

  const openInOpd = (patientId: string, visitId?: string) => {
    setSelectedPatientId(patientId);
    setFocusedVisitId(visitId ?? null);
    router.push('/');
  };

  const handleSelectPatientForOPD = (patient: Patient) => {
    openInOpd(patient.id);
  };

  if (isLoading) {
    return <BrandedLoader compact label="Loading patient records…" />;
  }

  if (error) {
    return (
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-sm border border-rose-200 flex flex-col gap-3 text-center">
          <AlertTriangle className="w-6 h-6 text-rose-600 mx-auto" />
          <h2 className="font-display text-base font-bold text-content-primary">
            Database Connection Unavailable
          </h2>
          <p className="text-xs text-content-secondary">{error}</p>
          <button
            type="button"
            onClick={() => void refreshPatients()}
            className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
      <PatientsView
        patients={patients}
        onSelectPatientForOPD={handleSelectPatientForOPD}
        onOpenVisit={(patientId, visitId) => openInOpd(patientId, visitId)}
      />
    </main>
  );
}
