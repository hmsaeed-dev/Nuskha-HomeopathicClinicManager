'use client';

import React, { useState, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { PatientSearchRail } from '@/components/patients/PatientSearchRail';
import { HistoryTimelineRail } from '@/components/history/HistoryTimelineRail';
import { ConsultationComposer } from '@/components/opd/ConsultationComposer';
import { NewPatientDrawer } from '@/components/patients/NewPatientDrawer';
import { DailyRegisterView } from '@/components/register/DailyRegisterView';
import { PatientsView } from '@/components/archive/PatientsView';
import { usePatients } from '@/hooks/usePatients';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { Patient } from '@/types';

type ActiveTab = 'opd' | 'analytics' | 'patients';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('opd');
  const [isNewPatientOpen, setIsNewPatientOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Separation of Concerns: Domain state and operations managed by hook
  const {
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
  } = usePatients();

  // Separation of Concerns: Global keyboard shortcuts (F1-F4, Alt+S, Escape)
  useKeyboardShortcuts({
    onOpenNewPatient: () => setIsNewPatientOpen(true),
    onFocusSearch: () => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    },
    onCloseModals: () => setIsNewPatientOpen(false),
    onSelectTab: setActiveTab,
  });

  // Switch to OPD consultation when selecting a patient from archive
  const handleSelectPatientForOPD = (patient: Patient) => {
    setSelectedPatientId(patient.id);
    setActiveTab('opd');
  };

  // Wrap save consultation to refocus search for rapid OPD throughput
  const handleSaveConsultation = (data: Parameters<typeof saveConsultation>[0]) => {
    saveConsultation(data);
    searchInputRef.current?.focus();
    searchInputRef.current?.select();
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-content-primary">
      {/* Top Application Shell */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenNewPatient={() => setIsNewPatientOpen(true)}
        todayCount={todayCount}
      />

      {/* Main Content Area */}
      {activeTab === 'opd' ? (
        <main className="flex-1 p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Pane 1 (Left 3 cols): Find Patient */}
          <div className="lg:col-span-3 h-full">
            <PatientSearchRail
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filteredPatients={filteredPatients}
              selectedPatientId={selectedPatientId}
              onSelectPatient={(p) => setSelectedPatientId(p.id)}
              searchInputRef={searchInputRef}
            />
          </div>

          {/* Pane 2 (Center 4 cols): Patient Banner, Sparkline & Historical Timeline */}
          <div className="lg:col-span-4 h-full">
            <HistoryTimelineRail patient={selectedPatient} />
          </div>

          {/* Pane 3 (Right 5 cols): Consultation Composer & Prescription Builder */}
          <div className="lg:col-span-5 h-full">
            <ConsultationComposer
              key={selectedPatient.id}
              patient={selectedPatient}
              onSaveConsultation={handleSaveConsultation}
            />
          </div>
        </main>
      ) : activeTab === 'analytics' ? (
        <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
          <DailyRegisterView patients={patients} />
        </main>
      ) : (
        <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
          <PatientsView
            patients={patients}
            onSelectPatientForOPD={handleSelectPatientForOPD}
          />
        </main>
      )}

      {/* Slide-over Walk-In Registration Drawer (F2) */}
      <NewPatientDrawer
        isOpen={isNewPatientOpen}
        onClose={() => setIsNewPatientOpen(false)}
        onRegisterPatient={registerPatient}
        nextDailyToken={todayCount + 1}
      />
    </div>
  );
}
