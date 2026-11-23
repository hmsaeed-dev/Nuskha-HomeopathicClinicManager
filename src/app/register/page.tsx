'use client';

import React, { Suspense } from 'react';
import { DailyRegisterView } from '@/components/register/DailyRegisterView';
import { usePatientsContext } from '@/context/PatientsContext';

function RegisterContent() {
  const { patients } = usePatientsContext();
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
