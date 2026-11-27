'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PatientsProvider, usePatientsContext } from '@/context/PatientsContext';
import { SettingsProvider, useSettingsContext } from '@/context/SettingsContext';
import { Header } from '@/components/layout/Header';
import { NewPatientDrawer } from '@/components/patients/NewPatientDrawer';
import { SettingsModal } from '@/components/settings/SettingsModal';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

function AppShellInner({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    isNewPatientOpen,
    setIsNewPatientOpen,
    registerPatient,
    todayCount,
  } = usePatientsContext();

  const { openSettings, closeSettings } = useSettingsContext();

  // Global Page & Modal Keyboard Navigation
  useKeyboardShortcuts({
    onOpenNewPatient: () => setIsNewPatientOpen(true),
    onOpenSettings: () => openSettings('shortcuts'),
    onCloseModals: () => {
      setIsNewPatientOpen(false);
      closeSettings();
    },
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

      {/* Main Page Content — keyed by route for a soft enter transition */}
      <div className="flex-1 flex flex-col">
        <div key={pathname} className="page-enter flex flex-1 flex-col">
          {children}
        </div>
      </div>

      {/* Slide-over Walk-In Registration Drawer (Active on any page via F2) */}
      <NewPatientDrawer
        isOpen={isNewPatientOpen}
        onClose={() => setIsNewPatientOpen(false)}
        onRegisterPatient={registerPatient}
        nextDailyToken={todayCount + 1}
      />

      {/* Shortcuts Guide & Clinic Settings Modal (Active on any page via ?) */}
      <SettingsModal />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <PatientsProvider>
        <AppShellInner>{children}</AppShellInner>
      </PatientsProvider>
    </SettingsProvider>
  );
}
