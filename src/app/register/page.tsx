'use client';

import React, { Suspense } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { DailyRegisterView } from '@/components/register/DailyRegisterView';
import { usePatientsContext } from '@/context/PatientsContext';

function RegisterContent() {
  const { patients, isLoading, error, refreshPatients } = usePatientsContext();

  if (isLoading) {
    return <div className="h-96 rounded-2xl bg-white/70 animate-pulse" />;
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-2xl p-6 shadow-sm border border-rose-200 flex flex-col gap-3 text-center">
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
    );
  }

  return <DailyRegisterView patients={patients} />;
}

export default function RegisterPage() {
  return (
    <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
      <Suspense fallback={<div className="p-8 text-center text-xs text-content-secondary font-medium">Loading register...</div>}>
        <RegisterContent />
      </Suspense>
    </main>
  );
}
