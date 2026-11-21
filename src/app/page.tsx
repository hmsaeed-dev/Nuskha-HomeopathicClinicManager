'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { PatientSearchRail } from '@/components/PatientSearchRail';
import { HistoryTimelineRail } from '@/components/HistoryTimelineRail';
import { ConsultationComposer } from '@/components/ConsultationComposer';
import { NewPatientDrawer } from '@/components/NewPatientDrawer';
import { DailyRegisterView } from '@/components/DailyRegisterView';
import { INITIAL_PATIENTS } from '@/data/mockData';
import { Patient, PastVisit, ReactionType, PrescriptionItem } from '@/types';

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS);
  const [selectedPatientId, setSelectedPatientId] = useState<string>(INITIAL_PATIENTS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isNewPatientOpen, setIsNewPatientOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'opd' | 'analytics'>('opd');
  const [todayCount, setTodayCount] = useState<number>(48);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedPatient =
    patients.find((p) => p.id === selectedPatientId) || patients[0];

  // Disambiguated Filter Logic
  const filteredPatients = patients.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      p.fullName.toLowerCase().includes(q) ||
      p.relativeName.toLowerCase().includes(q) ||
      p.phone.includes(q) ||
      p.mrn.toLowerCase().includes(q) ||
      p.locality.toLowerCase().includes(q)
    );
  });

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input/textarea (except for Alt combinations)
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInputFocused = targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      // F2: Open New Patient
      if (e.key === 'F2') {
        e.preventDefault();
        setIsNewPatientOpen(true);
        return;
      }

      // Alt + S or / : Focus Search Bar
      if ((e.altKey && (e.key === 's' || e.key === 'S')) || (!isInputFocused && e.key === '/')) {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
        return;
      }

      // Esc: Close drawers / modals
      if (e.key === 'Escape') {
        setIsNewPatientOpen(false);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Tab Switch
  const handleTabChange = (tab: 'opd' | 'analytics') => {
    setActiveTab(tab);
  };

  // Register new patient
  const handleRegisterPatient = (
    newPatientData: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
  ) => {
    const newId = `p-${Date.now()}`;
    const newPatient: Patient = {
      ...newPatientData,
      id: newId,
      pastVisits: [],
      severityTrend: {
        overallRelief: 'First Visit',
        history: [{ label: 'Today', date: '21 Nov 2026', score: 100 }],
      },
    };

    setPatients((prev) => [newPatient, ...prev]);
    setSelectedPatientId(newId);
    setTodayCount((prev) => prev + 1);
  };

  // Save consultation for current patient
  const handleSaveConsultation = (data: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: PrescriptionItem[];
    doctorNotes: string;
    fee: number;
    feeStatus: 'Paid' | 'Free' | 'Due';
  }) => {
    const newVisit: PastVisit = {
      id: `v-${Date.now()}`,
      patientId: selectedPatient.id,
      date: '21 Nov 2026',
      tokenNo: todayCount + 1,
      reaction: data.reaction,
      symptoms: data.symptoms,
      prescriptions: data.prescriptions,
      doctorNotes: data.doctorNotes,
      fee: data.fee,
      feeStatus: data.feeStatus,
    };

    // Update patient's pastVisits
    setPatients((prev) =>
      prev.map((p) => {
        if (p.id === selectedPatient.id) {
          return {
            ...p,
            totalVisits: p.totalVisits + 1,
            lastVisitDate: 'Today',
            pastVisits: [newVisit, ...p.pastVisits],
          };
        }
        return p;
      })
    );

    setTodayCount((prev) => prev + 1);

    // Focus search bar for rapid next consultation
    searchInputRef.current?.focus();
    searchInputRef.current?.select();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F5F4] text-[#131C1A]">
      {/* Top Application Shell */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenNewPatient={() => setIsNewPatientOpen(true)}
        todayCount={todayCount}
      />

      {/* Main Content Area: OPD Workspace vs Daily Register Tab */}
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
      ) : (
        <main className="flex-1 p-4 sm:p-5 lg:p-6 max-w-7xl w-full mx-auto">
          <DailyRegisterView patients={patients} />
        </main>
      )}

      {/* Slide-over Walk-In Drawer (F2) */}
      <NewPatientDrawer
        isOpen={isNewPatientOpen}
        onClose={() => setIsNewPatientOpen(false)}
        onRegisterPatient={handleRegisterPatient}
        nextDailyToken={todayCount + 1}
      />
    </div>
  );
}
