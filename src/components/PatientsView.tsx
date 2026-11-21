'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  Activity,
  CheckCircle2,
  Pill,
  AlertCircle,
  FileText,
  UserCheck,
} from 'lucide-react';
import {
  Patient,
  PastVisit,
  ReactionType,
  getDemographicCohort,
  DEMOGRAPHIC_CONFIG,
} from '@/types';

interface PatientsViewProps {
  patients: Patient[];
  onSelectPatientForOPD: (patient: Patient) => void;
}

type FilterTab = 'all' | 'chronic' | 'recent' | 'dues';

export const PatientsView: React.FC<PatientsViewProps> = ({
  patients,
  onSelectPatientForOPD,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [selectedPatientId, setSelectedPatientId] = useState<string>(
    patients[0]?.id || ''
  );

  // Compute stats and filtered patient list
  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      // 1. Filter Tab
      if (activeFilter === 'chronic' && patient.totalVisits < 3) return false;
      if (
        activeFilter === 'recent' &&
        !patient.lastVisitDate.toLowerCase().includes('nov') &&
        patient.lastVisitDate !== 'Today'
      )
        return false;
      if (
        activeFilter === 'dues' &&
        !patient.pastVisits.some((v) => v.feeStatus === 'Due')
      )
        return false;

      // 2. Search Query
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      const matchesName = patient.fullName.toLowerCase().includes(q);
      const matchesRelative = patient.relativeName.toLowerCase().includes(q);
      const matchesPhone = patient.phone.includes(q);
      const matchesLocality = patient.locality.toLowerCase().includes(q);
      const matchesComplaint = patient.chiefComplaints?.some((c) =>
        c.name.toLowerCase().includes(q)
      );

      return (
        matchesName ||
        matchesRelative ||
        matchesPhone ||
        matchesLocality ||
        matchesComplaint
      );
    });
  }, [patients, searchQuery, activeFilter]);

  // Selected patient for dossier view
  const selectedPatient = useMemo(() => {
    return (
      patients.find((p) => p.id === selectedPatientId) ||
      filteredPatients[0] ||
      patients[0]
    );
  }, [patients, selectedPatientId, filteredPatients]);

  // Selected patient demographic configuration
  const cohort = selectedPatient
    ? getDemographicCohort(selectedPatient.age, selectedPatient.gender)
    : 'Female';
  const demo = DEMOGRAPHIC_CONFIG[cohort];

  // Calculate lifetime financial ledger for selected patient
  const totalPaid = useMemo(() => {
    if (!selectedPatient) return 0;
    return selectedPatient.pastVisits
      .filter((v) => v.feeStatus === 'Paid')
      .reduce((sum, v) => sum + v.fee, 0);
  }, [selectedPatient]);

  const totalDue = useMemo(() => {
    if (!selectedPatient) return 0;
    return selectedPatient.pastVisits
      .filter((v) => v.feeStatus === 'Due')
      .reduce((sum, v) => sum + v.fee, 0);
  }, [selectedPatient]);

  // Unique remedies prescribed across lifetime
  const lifetimeRemedies = useMemo(() => {
    if (!selectedPatient) return [];
    const remedySet = new Set<string>();
    selectedPatient.pastVisits.forEach((v) => {
      v.prescriptions.forEach((rx) => {
        remedySet.add(`${rx.remedy} ${rx.potency}`);
      });
    });
    return Array.from(remedySet);
  }, [selectedPatient]);

  // Helper for reaction badges
  const renderReactionBadge = (reaction: ReactionType) => {
    switch (reaction) {
      case 'Improved':
        return (
          <span className="text-[11px] font-semibold text-[#146C43] bg-[#D1F2E1] px-2.5 py-0.5 rounded-full">
            Improved
          </span>
        );
      case 'No Change':
        return (
          <span className="text-[11px] font-semibold text-[#8F4F00] bg-[#FFE5C2] px-2.5 py-0.5 rounded-full">
            No Change
          </span>
        );
      case 'Aggravated':
        return (
          <span className="text-[11px] font-semibold text-[#BA1A1A] bg-[#FFDAD6] px-2.5 py-0.5 rounded-full">
            Aggravated
          </span>
        );
      case 'New':
        return (
          <span className="text-[11px] font-semibold text-[#0C5A7A] bg-[#D2EEFA] px-2.5 py-0.5 rounded-full">
            New
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold text-[#3D665E] bg-[#D8F0E9] px-2.5 py-0.5 rounded-full">
            First Visit
          </span>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch h-[calc(100vh-100px)]">
      {/* ============================================================== */}
      {/* LEFT PANE (40% width / 5 cols): Master Patient Directory Roster */}
      {/* ============================================================== */}
      <aside className="lg:col-span-5 rounded-2xl bg-[#E9F0EE] p-4 flex flex-col gap-4 h-full overflow-hidden">
        {/* Top Search & Filter Bar */}
        <div className="flex flex-col gap-2.5 shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="font-['Schibsted_Grotesk'] text-base font-bold text-[#131C1A]">
              Patient Archive
            </h2>
            <span className="font-['Spline_Sans_Mono'] text-xs text-[#5E706B] font-semibold">
              {filteredPatients.length} of {patients.length} cases
            </span>
          </div>

          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#5E706B] absolute left-3 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, phone, or locality..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white text-sm text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52] transition-all shadow-2xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full font-semibold transition-all shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#085E52] text-white shadow-2xs'
                  : 'bg-white text-[#3A4B47] hover:bg-white/80'
              }`}
            >
              All Cases ({patients.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('chronic')}
              className={`px-3 py-1 rounded-full font-semibold transition-all shrink-0 ${
                activeFilter === 'chronic'
                  ? 'bg-[#085E52] text-white shadow-2xs'
                  : 'bg-white text-[#3A4B47] hover:bg-white/80'
              }`}
            >
              Chronic (3+ visits)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('recent')}
              className={`px-3 py-1 rounded-full font-semibold transition-all shrink-0 ${
                activeFilter === 'recent'
                  ? 'bg-[#085E52] text-white shadow-2xs'
                  : 'bg-white text-[#3A4B47] hover:bg-white/80'
              }`}
            >
              Recent Visits
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('dues')}
              className={`px-3 py-1 rounded-full font-semibold transition-all shrink-0 ${
                activeFilter === 'dues'
                  ? 'bg-[#BA1A1A] text-white shadow-2xs'
                  : 'bg-white text-[#3A4B47] hover:bg-white/80'
              }`}
            >
              With Dues
            </button>
          </div>
        </div>

        {/* Patients Roster List */}
        <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-12 text-xs text-[#5E706B] bg-white/60 rounded-xl p-5">
              No patient records found matching your filter.
            </div>
          ) : (
            filteredPatients.map((p) => {
              const pCohort = getDemographicCohort(p.age, p.gender);
              const pDemo = DEMOGRAPHIC_CONFIG[pCohort];
              const isSelected = p.id === selectedPatient?.id;

              return (
                <div
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPatientId(p.id)}
                  className={`p-3.5 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-150 relative ${
                    isSelected
                      ? `${pDemo.selectedCardBg} text-white shadow-sm`
                      : 'bg-white text-[#131C1A] hover:bg-white/90 shadow-2xs'
                  }`}
                >
                  {/* Left demographic accent bar */}
                  <div
                    className={`w-1 self-stretch rounded-full shrink-0 ${
                      isSelected ? 'bg-white/70' : pDemo.barColor
                    }`}
                    title={`${pDemo.label} (${p.age}y)`}
                  />

                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Line 1: Name + Age Chip */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-['Schibsted_Grotesk'] text-sm font-bold truncate ${
                          isSelected ? 'text-white' : 'text-[#131C1A]'
                        }`}
                      >
                        {p.fullName}
                      </span>
                      <span
                        className={`text-[10px] font-['Spline_Sans_Mono'] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : `${pDemo.chipBg} ${pDemo.chipText}`
                        }`}
                      >
                        {p.age}y
                      </span>
                    </div>

                    {/* Line 2: Relation + Locality */}
                    <p
                      className={`text-xs truncate ${
                        isSelected ? 'text-white/85' : 'text-[#3A4B47]'
                      }`}
                    >
                      <span className="font-semibold">
                        {p.relationType} {p.relativeName}
                      </span>{' '}
                      · {p.locality}
                    </p>

                    {/* Line 3: Snapshot Metrics */}
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span
                        className={`font-['Spline_Sans_Mono'] ${
                          isSelected ? 'text-white/80' : 'text-[#5E706B]'
                        }`}
                      >
                        {p.phone}
                      </span>
                      <span
                        className={`font-semibold ${
                          isSelected ? 'text-white' : 'text-[#085E52]'
                        }`}
                      >
                        {p.totalVisits} {p.totalVisits === 1 ? 'visit' : 'visits'}
                      </span>
                    </div>

                    {/* Chief Complaint Tag if present */}
                    {p.chiefComplaints && p.chiefComplaints.length > 0 && (
                      <div className="pt-0.5">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-medium inline-block truncate max-w-full ${
                            isSelected
                              ? 'bg-white/15 text-white'
                              : 'bg-[#E9F0EE] text-[#3D665E]'
                          }`}
                        >
                          {p.chiefComplaints[0].name} ({p.chiefComplaints[0].trend})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </aside>

      {/* ============================================================== */}
      {/* RIGHT PANE (60% width / 7 cols): Patient Dossier & Case Archive */}
      {/* ============================================================== */}
      <main className="lg:col-span-7 rounded-2xl bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-5 h-full overflow-y-auto">
        {selectedPatient ? (
          <>
            {/* 1. Header Card (Patient Identity in Demographic Theme) */}
            <div
              className={`rounded-2xl ${demo.bannerBg} text-[#F4FAF8] p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h1 className="font-['Schibsted_Grotesk'] text-2xl font-bold tracking-tight text-white">
                      {selectedPatient.fullName}
                    </h1>
                    <span
                      className={`px-2 py-0.5 rounded-md font-['Spline_Sans_Mono'] text-xs font-bold ${demo.chipDarkBg} ${demo.chipDarkText}`}
                    >
                      {selectedPatient.age} yrs
                    </span>
                  </div>

                  <p className={`text-xs ${demo.bannerAccentText} flex items-center gap-2 flex-wrap`}>
                    <span className="font-semibold text-white/95">
                      {selectedPatient.relationType} {selectedPatient.relativeName}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
                      {selectedPatient.locality}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-['Spline_Sans_Mono']">
                      <Phone className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
                      {selectedPatient.phone}
                    </span>
                  </p>
                </div>

                {/* Direct Action: Start OPD Consultation */}
                <button
                  type="button"
                  onClick={() => onSelectPatientForOPD(selectedPatient)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#131C1A] hover:bg-white/90 text-xs font-bold shadow-md transition-all active:scale-98 shrink-0"
                >
                  <UserCheck className="w-4 h-4 text-[#085E52]" />
                  <span>Start OPD Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#085E52]" />
                </button>
              </div>

              {/* Active Chronic Complaints Badges */}
              {selectedPatient.chiefComplaints && selectedPatient.chiefComplaints.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-white/10">
                  <span className={`text-[11px] font-semibold ${demo.bannerAccentText}`}>
                    Active Complaints:
                  </span>
                  {selectedPatient.chiefComplaints.map((cc) => (
                    <span
                      key={cc.id}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-xs text-white"
                    >
                      <span className="font-semibold">{cc.name}</span>
                      {cc.duration && (
                        <span className={`text-[10px] ${demo.bannerAccentText}`}>
                          ({cc.duration})
                        </span>
                      )}
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                          cc.trend === 'Improving'
                            ? 'bg-[#146C43]/80 text-[#D1F2E1]'
                            : cc.trend === 'Aggravating'
                            ? 'bg-[#BA1A1A]/80 text-[#FFDAD6]'
                            : 'bg-white/20 text-white'
                        }`}
                      >
                        {cc.trend}
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Lifetime Case Summary Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch">
              <div className="p-3.5 rounded-xl bg-[#F7FAF8] flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-medium text-[#5E706B] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#085E52]" /> First Visit
                </span>
                <span className="font-['Spline_Sans_Mono'] text-sm font-bold text-[#131C1A]">
                  {selectedPatient.pastVisits.length > 0
                    ? selectedPatient.pastVisits[selectedPatient.pastVisits.length - 1].date
                    : 'Today'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7FAF8] flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-medium text-[#5E706B] flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-[#085E52]" /> Total Consultations
                </span>
                <span className="font-['Spline_Sans_Mono'] text-sm font-bold text-[#131C1A]">
                  {selectedPatient.totalVisits} Visits
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7FAF8] flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-medium text-[#5E706B] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#085E52]" /> Last Visit
                </span>
                <span className="font-['Spline_Sans_Mono'] text-sm font-bold text-[#131C1A]">
                  {selectedPatient.lastVisitDate}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7FAF8] flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-medium text-[#5E706B] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#146C43]" /> Total Fees Paid
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-['Spline_Sans_Mono'] text-sm font-bold text-[#131C1A]">
                    Rs. {totalPaid}
                  </span>
                  {totalDue > 0 && (
                    <span className="text-[10px] font-bold text-[#BA1A1A] bg-[#FFDAD6] px-1.5 py-0.5 rounded">
                      Due: Rs. {totalDue}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Constitutional Remedies Favored */}
            {lifetimeRemedies.length > 0 && (
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#E9F0EE]/70">
                <span className="text-xs font-bold text-[#131C1A] flex items-center gap-1.5">
                  <Pill className="w-3.5 h-3.5 text-[#085E52]" />
                  Constitutional Remedies Prescribed ({lifetimeRemedies.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {lifetimeRemedies.map((rem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white text-[#0E3B33] font-medium text-xs shadow-2xs"
                    >
                      {rem}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Complete Lifetime Visit History Feed */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between pt-1">
                <h3 className="font-['Schibsted_Grotesk'] text-sm font-bold text-[#131C1A] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#085E52]" />
                  Complete Case History ({selectedPatient.pastVisits.length} Consultations)
                </h3>
              </div>

              {selectedPatient.pastVisits.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#5E706B] bg-[#F7FAF8] rounded-xl p-6">
                  No historical consultations recorded yet.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selectedPatient.pastVisits.map((visit, index) => (
                    <article
                      key={visit.id}
                      className="rounded-xl bg-[#F7FAF8] p-4 shadow-2xs flex flex-col gap-2.5 hover:bg-[#EFF5F2] transition-colors"
                    >
                      {/* Visit Header */}
                      <header className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                              visit.reaction === 'Improved'
                                ? 'bg-[#146C43]'
                                : visit.reaction === 'Aggravated'
                                ? 'bg-[#BA1A1A]'
                                : visit.reaction === 'No Change'
                                ? 'bg-[#8F4F00]'
                                : 'bg-[#0C5A7A]'
                            }`}
                          />
                          <span className="font-['Spline_Sans_Mono'] text-xs font-bold text-[#131C1A]">
                            {visit.date}
                          </span>
                          {visit.durationDays && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[#E9F0EE] text-[#3D665E] font-['Spline_Sans_Mono'] font-bold">
                              {visit.durationDays}d course
                            </span>
                          )}
                          <span className="text-[11px] text-[#5E706B]">
                            (Consultation #{selectedPatient.pastVisits.length - index})
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {renderReactionBadge(visit.reaction)}
                          <span className="font-['Spline_Sans_Mono'] text-xs font-bold text-[#131C1A]">
                            Rs. {visit.fee}
                          </span>
                        </div>
                      </header>

                      {/* Symptoms Recorded */}
                      <p className="text-xs text-[#3A4B47] leading-relaxed">
                        {visit.symptoms}
                      </p>

                      {/* Prescriptions Dispensed */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {visit.prescriptions.map((rx) => (
                          <div
                            key={rx.id}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white shadow-2xs text-xs text-[#0E3B33]"
                          >
                            <span className="font-semibold">{rx.remedy}</span>
                            <span className="font-['Spline_Sans_Mono'] text-[11px] text-[#085E52] font-bold">
                              {rx.potency}
                            </span>
                            <span className="text-[10px] text-[#5E706B]">
                              ({rx.vehicle.split(' ')[0]})
                            </span>
                            <span className="text-[10px] text-[#3A4B47] italic">
                              · {rx.dosage}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Doctor Notes */}
                      {visit.doctorNotes && (
                        <div className="text-[11px] text-[#5E706B] italic pt-0.5">
                          Note: {visit.doctorNotes}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-xs text-[#5E706B]">
            Select a patient from the left roster to view their complete dossier.
          </div>
        )}
      </main>
    </div>
  );
};
