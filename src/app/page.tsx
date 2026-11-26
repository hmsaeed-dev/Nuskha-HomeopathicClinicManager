'use client';

import React, { useRef, useEffect } from 'react';
import { AlertTriangle, RefreshCw, UserPlus } from 'lucide-react';
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
    isLoading,
    error,
    refreshPatients,
    setIsNewPatientOpen,
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

  // Wrap save consultation to refocus search only after successful database save
  const handleSaveConsultation = async (
    data: Parameters<typeof saveConsultation>[0]
  ) => {
    const saved = await saveConsultation(data);
    if (saved) {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    }
    return saved;
  };

  if (isLoading) {
    return (
      <main className="flex-1 p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        <div className="lg:col-span-3 rounded-2xl bg-white/70 animate-pulse min-h-96" />
        <div className="lg:col-span-4 rounded-2xl bg-white/70 animate-pulse min-h-96" />
        <div className="lg:col-span-5 rounded-2xl bg-white/70 animate-pulse min-h-96" />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-sm border border-rose-200 flex flex-col gap-3 text-center">
          <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-content-primary">
            Database Connection Unavailable
          </h2>
          <p className="text-xs text-content-secondary leading-relaxed">{error}</p>
          <button
            type="button"
            onClick={() => void refreshPatients()}
            className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry Connection
          </button>
        </div>
      </main>
    );
  }

  if (!selectedPatient) {
    return (
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-sm border border-border-subtle flex flex-col gap-3 text-center">
          <h2 className="font-display text-lg font-bold text-content-primary">
            No Patient Records Found
          </h2>
          <p className="text-xs text-content-secondary">
            Register a walk-in patient to begin today&#39;s OPD session.
          </p>
          <button
            type="button"
            onClick={() => setIsNewPatientOpen(true)}
            className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold cursor-pointer transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Register First Patient (F2)
          </button>
        </div>
      </main>
    );
  }

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
