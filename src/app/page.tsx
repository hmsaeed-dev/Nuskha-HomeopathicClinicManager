'use client';

import React, { useRef, useEffect } from 'react';
import { PatientSearchRail } from '@/components/patients/PatientSearchRail';
import { HistoryTimelineRail } from '@/components/history/HistoryTimelineRail';
import { ConsultationComposer } from '@/components/opd/ConsultationComposer';
import { usePatientsContext } from '@/context/PatientsContext';

export default function OpdPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    selectedPatient,
    selectedPatientId,
    setSelectedPatientId,
    searchQuery,
    setSearchQuery,
    filteredPatients,
    saveConsultation,
  } = usePatientsContext();

  // Focus search input on Alt+S or '/' when on OPD page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInputFocused =
        targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      if (
        (e.altKey && (e.key === 's' || e.key === 'S')) ||
        (!isInputFocused && e.key === '/')
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Wrap save consultation to refocus search for rapid OPD throughput
  const handleSaveConsultation = (data: Parameters<typeof saveConsultation>[0]) => {
    saveConsultation(data);
    searchInputRef.current?.focus();
    searchInputRef.current?.select();
  };

  return (
    <main className="flex-1 p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
      {/* Pane 1 (Left 3 cols): Find Patient */}
      <div className="lg:col-span-3 h-full">
        <PatientSearchRail
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredPatients={filteredPatients}
          selectedPatientId={selectedPatientId}
          onSelectPatient={(patient) => setSelectedPatientId(patient.id)}
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
  );
}
