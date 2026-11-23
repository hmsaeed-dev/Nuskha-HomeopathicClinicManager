'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  Activity,
  CheckCircle2,
  Pill,
  FileText,
  UserCheck,
  Phone,
} from 'lucide-react';
import { Patient } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { REACTION_CONFIG } from '@/constants/clinical';
import { formatCurrency } from '@/utils/formatters';

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch h-[calc(100vh-100px)]">
      {/* ============================================================== */}
      {/* LEFT PANE (40% width / 5 cols): Master Patient Directory Roster */}
      {/* ============================================================== */}
      <aside className="lg:col-span-5 rounded-2xl bg-brand-surface-subtle border border-border-subtle p-4 flex flex-col gap-4 h-full overflow-hidden">
        {/* Top Search & Filter Bar */}
        <div className="flex flex-col gap-2.5 shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-bold text-content-primary">
              Patient Archive
            </h2>
            <span className="font-mono text-xs text-content-secondary font-bold">
              {filteredPatients.length} of {patients.length} cases
            </span>
          </div>

          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-content-secondary absolute left-3 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, phone, or locality..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-border-subtle text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all shadow-2xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'bg-white text-content-secondary hover:bg-white/90 border border-border-subtle'
              }`}
            >
              All Cases ({patients.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('chronic')}
              className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
                activeFilter === 'chronic'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'bg-white text-content-secondary hover:bg-white/90 border border-border-subtle'
              }`}
            >
              Chronic (3+ visits)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('recent')}
              className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
                activeFilter === 'recent'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'bg-white text-content-secondary hover:bg-white/90 border border-border-subtle'
              }`}
            >
              Recent Visits
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('dues')}
              className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
                activeFilter === 'dues'
                  ? 'bg-reaction-aggravated text-white shadow-2xs'
                  : 'bg-white text-content-secondary hover:bg-white/90 border border-border-subtle'
              }`}
            >
              With Dues
            </button>
          </div>
        </div>

        {/* Patients Roster List */}
        <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-12 text-xs text-content-secondary font-medium bg-white border border-border-subtle rounded-xl p-5">
              No patient records found matching your filter.
            </div>
          ) : (
            filteredPatients.map((patientItem) => {
              const pCohort = getDemographicCohort(patientItem.age, patientItem.gender);
              const pDemo = DEMOGRAPHIC_CONFIG[pCohort];
              const isSelected = patientItem.id === selectedPatient?.id;

              return (
                <div
                  key={patientItem.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPatientId(patientItem.id)}
                  className={`p-3.5 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-150 relative ${
                    isSelected
                      ? `${pDemo.selectedCardBg} text-white shadow-sm border border-transparent`
                      : 'bg-white border border-border-subtle text-content-primary hover:bg-brand-surface shadow-2xs'
                  }`}
                >
                  {/* Left demographic accent bar */}
                  <div
                    className={`w-1.5 self-stretch rounded-full shrink-0 ${
                      isSelected ? 'bg-white' : pDemo.barColor
                    }`}
                    title={`${pDemo.label} (${patientItem.age}y)`}
                  />

                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Line 1: Name + Age Chip */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-display text-sm font-bold truncate ${
                          isSelected ? 'text-white' : 'text-content-primary'
                        }`}
                      >
                        {patientItem.fullName}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected
                            ? 'bg-white/25 text-white'
                            : `${pDemo.chipBg} ${pDemo.chipText}`
                        }`}
                      >
                        {patientItem.age}y
                      </span>
                    </div>

                    {/* Line 2: Relation + Locality */}
                    <p
                      className={`text-xs truncate ${
                        isSelected ? 'text-white font-medium' : 'text-content-secondary font-medium'
                      }`}
                    >
                      <span className="font-bold">
                        {patientItem.relationType} {patientItem.relativeName}
                      </span>{' '}
                      · {patientItem.locality}
                    </p>

                    {/* Line 3: Snapshot Metrics */}
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span
                        className={`font-mono font-semibold ${
                          isSelected ? 'text-white' : 'text-content-secondary'
                        }`}
                      >
                        {patientItem.phone}
                      </span>
                      <span
                        className={`font-bold ${
                          isSelected ? 'text-white' : 'text-brand-primary'
                        }`}
                      >
                        {patientItem.totalVisits} {patientItem.totalVisits === 1 ? 'visit' : 'visits'}
                      </span>
                    </div>

                    {/* Chief Complaint Tag if present */}
                    {patientItem.chiefComplaints && patientItem.chiefComplaints.length > 0 && (
                      <div className="pt-0.5">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold inline-block truncate max-w-full ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-brand-surface-subtle text-brand-primary-dark border border-border-subtle'
                          }`}
                        >
                          {patientItem.chiefComplaints[0].name} ({patientItem.chiefComplaints[0].trend})
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
      <main className="lg:col-span-7 rounded-2xl bg-white border border-border-subtle p-5 sm:p-6 shadow-xs flex flex-col gap-5 h-full overflow-y-auto">
        {selectedPatient ? (
          <>
            {/* 1. Header Card (Patient Identity in Demographic Theme) */}
            <div
              className={`rounded-2xl ${demo.bannerBg} text-white p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h1 className="font-display text-2xl font-bold tracking-tight text-white">
                      {selectedPatient.fullName}
                    </h1>
                    <span
                      className={`px-2 py-0.5 rounded-md font-mono text-xs font-bold ${demo.chipDarkBg} ${demo.chipDarkText}`}
                    >
                      {selectedPatient.age} yrs
                    </span>
                  </div>

                  <p className={`text-xs ${demo.bannerAccentText} flex items-center gap-2 flex-wrap font-medium`}>
                    <span className="font-bold text-white">
                      {selectedPatient.relationType} {selectedPatient.relativeName}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
                      {selectedPatient.locality}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <Phone className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
                      {selectedPatient.phone}
                    </span>
                  </p>
                </div>

                {/* Direct Action: Start OPD Consultation */}
                <button
                  type="button"
                  onClick={() => onSelectPatientForOPD(selectedPatient)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-content-primary hover:bg-brand-surface text-xs font-bold shadow-md transition-all active:scale-98 shrink-0 border border-border-subtle cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-brand-primary" />
                  <span>Start OPD Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-primary" />
                </button>
              </div>

              {/* Active Chronic Complaints Badges */}
              {selectedPatient.chiefComplaints && selectedPatient.chiefComplaints.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-white/20">
                  <span className={`text-[11px] font-bold ${demo.bannerAccentText}`}>
                    Active Complaints:
                  </span>
                  {selectedPatient.chiefComplaints.map((cc) => (
                    <span
                      key={cc.id}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/15 border border-white/25 text-xs text-white"
                    >
                      <span className="font-bold">{cc.name}</span>
                      {cc.duration && (
                        <span className={`text-[10px] font-medium ${demo.bannerAccentText}`}>
                          ({cc.duration})
                        </span>
                      )}
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                          cc.trend === 'Improving'
                            ? 'bg-reaction-improved text-white'
                            : cc.trend === 'Aggravating'
                            ? 'bg-reaction-aggravated text-white'
                            : 'bg-white/30 text-white'
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
              <div className="p-3.5 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-primary" /> First Visit
                </span>
                <span className="font-mono text-sm font-bold text-content-primary">
                  {selectedPatient.pastVisits.length > 0
                    ? selectedPatient.pastVisits[selectedPatient.pastVisits.length - 1].date
                    : 'Today'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-brand-primary" /> Total Consultations
                </span>
                <span className="font-mono text-sm font-bold text-content-primary">
                  {selectedPatient.totalVisits} Visits
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-primary" /> Last Visit
                </span>
                <span className="font-mono text-sm font-bold text-content-primary">
                  {selectedPatient.lastVisitDate}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col justify-between gap-1 shadow-2xs">
                <span className="text-[11px] font-bold text-content-secondary flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-reaction-improved" /> Total Fees Paid
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-content-primary">
                    {formatCurrency(totalPaid)}
                  </span>
                  {totalDue > 0 && (
                    <span className="text-[10px] font-bold text-white bg-reaction-aggravated px-1.5 py-0.5 rounded shadow-2xs">
                      Due: {formatCurrency(totalDue)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Constitutional Remedies Favored */}
            {lifetimeRemedies.length > 0 && (
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-brand-surface-subtle border border-border-subtle">
                <span className="text-xs font-bold text-content-primary flex items-center gap-1.5">
                  <Pill className="w-3.5 h-3.5 text-brand-primary" />
                  Constitutional Remedies Prescribed ({lifetimeRemedies.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {lifetimeRemedies.map((rem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-border-subtle text-brand-primary-dark font-bold text-xs shadow-2xs"
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
                <h3 className="font-display text-sm font-bold text-content-primary flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-brand-primary" />
                  Complete Case History ({selectedPatient.pastVisits.length} Consultations)
                </h3>
              </div>

              {selectedPatient.pastVisits.length === 0 ? (
                <div className="text-center py-10 text-xs text-content-secondary font-medium bg-brand-surface-subtle border border-border-subtle rounded-xl p-6">
                  No historical consultations recorded yet.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selectedPatient.pastVisits.map((visit, index) => {
                    const reactionMeta = REACTION_CONFIG[visit.reaction] || REACTION_CONFIG['First Visit'];

                    return (
                      <article
                        key={visit.id}
                        className="rounded-xl bg-brand-surface-subtle border border-border-subtle p-4 shadow-2xs flex flex-col gap-2.5 hover:bg-brand-surface transition-colors"
                      >
                        {/* Visit Header */}
                        <header className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                                visit.reaction === 'Improved'
                                    ? 'bg-reaction-improved'
                                    : visit.reaction === 'Aggravated'
                                    ? 'bg-reaction-aggravated'
                                    : visit.reaction === 'No Change'
                                    ? 'bg-reaction-stable'
                                    : 'bg-reaction-new'
                              }`}
                            />
                            <span className="font-mono text-xs font-bold text-content-primary">
                              {visit.date}
                            </span>
                            {visit.durationDays && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-border-subtle text-content-primary font-mono font-bold">
                                {visit.durationDays}d course
                              </span>
                            )}
                            <span className="text-[11px] text-content-secondary font-semibold">
                              (Consultation #{selectedPatient.pastVisits.length - index})
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${reactionMeta.badgeClass}`}>
                              {visit.reaction}
                            </span>
                            <span className="font-mono text-xs font-bold text-content-primary">
                              {formatCurrency(visit.fee)}
                            </span>
                          </div>
                        </header>

                        {/* Symptoms Recorded */}
                        <p className="text-xs text-content-primary font-medium leading-relaxed">
                          {visit.symptoms}
                        </p>

                        {/* Prescriptions Dispensed */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {visit.prescriptions.map((rx) => (
                            <div
                              key={rx.id}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-border-subtle shadow-2xs text-xs text-brand-primary-dark"
                            >
                              <span className="font-bold">{rx.remedy}</span>
                              <span className="font-mono text-[11px] text-brand-primary font-bold">
                                {rx.potency}
                              </span>
                              <span className="text-[10px] text-content-secondary font-semibold">
                                ({rx.vehicle.split(' ')[0]})
                              </span>
                              <span className="text-[10px] text-content-primary font-medium">
                                · {rx.dosage}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Doctor Notes */}
                        {visit.doctorNotes && (
                          <div className="text-[11px] text-content-secondary font-medium italic pt-0.5">
                            Note: {visit.doctorNotes}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-xs text-content-secondary font-medium">
            Select a patient from the left roster to view their complete dossier.
          </div>
        )}
      </main>
    </div>
  );
};
