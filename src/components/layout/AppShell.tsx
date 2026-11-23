'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PatientsProvider, usePatientsContext } from '@/context/PatientsContext';
import { Header } from '@/components/layout/Header';
import { NewPatientDrawer } from '@/components/patients/NewPatientDrawer';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

function AppShellInner({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {
    isNewPatientOpen,
    setIsNewPatientOpen,
    registerPatient,
    todayCount,
  } = usePatientsContext();

  // Global Page & Modal Keyboard Navigation
  useKeyboardShortcuts({
    onOpenNewPatient: () => setIsNewPatientOpen(true),
    onCloseModals: () => setIsNewPatientOpen(false),
    onSelectTab: (tab) => {
      if (tab === 'opd') {
        router.push('/');
      } else if (tab === 'analytics') {
        router.push('/register');
      } else if (tab === 'patients') {
        router.push('/patients');
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-content-primary">
      {/* Top Application Shell Header */}
      <Header
        onOpenNewPatient={() => setIsNewPatientOpen(true)}
        todayCount={todayCount}
      />

      {/* Main Page Content */}
      <div className="flex-1 flex flex-col">{children}</div>

      {/* Slide-over Walk-In Registration Drawer (Active on any page via F2) */}
      <NewPatientDrawer
        isOpen={isNewPatientOpen}
        onClose={() => setIsNewPatientOpen(false)}
        onRegisterPatient={registerPatient}
        nextDailyToken={todayCount + 1}
      />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <PatientsProvider>
      <AppShellInner>{children}</AppShellInner>
    </PatientsProvider>
  );
}
