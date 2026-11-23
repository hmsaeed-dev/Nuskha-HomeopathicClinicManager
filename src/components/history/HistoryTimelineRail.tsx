'use client';

import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Pill,
  Droplet,
  Edit2,
  Phone,
  MapPin,
} from 'lucide-react';
import { Patient, PastVisit } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { REACTION_CONFIG } from '@/constants/clinical';
import { formatCurrency } from '@/utils/formatters';

interface HistoryTimelineRailProps {
  patient: Patient;
  onEditVisit?: (visit: PastVisit) => void;
}

export const HistoryTimelineRail: React.FC<HistoryTimelineRailProps> = ({
  patient,
  onEditVisit,
}) => {
  const cohort = getDemographicCohort(patient.age, patient.gender);
  const demo = DEMOGRAPHIC_CONFIG[cohort];

  return (
    <section className="rounded-2xl bg-white p-5 shadow-xs flex flex-col gap-5 h-full overflow-hidden border border-border-subtle">
      {/* Patient Identity Anchor (Demographic Cohort Characteristic Card) */}
      <div className={`rounded-2xl ${demo.bannerBg} text-white p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200 border border-white/10`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-2xl font-bold tracking-tight text-white">
              {patient.fullName}
            </h1>

            <div className={`text-xs text-white flex items-center gap-2 flex-wrap mt-0.5`}>
              <span className="font-semibold text-white">
                {patient.relationType} {patient.relativeName}
              </span>
              <span>·</span>
              <span
                className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-bold ${demo.chipDarkBg} ${demo.chipDarkText}`}
                title={demo.label}
              >
                {patient.age} yrs
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className={`px-2.5 py-1 rounded-full ${demo.bannerTokenBg} text-white text-xs font-bold shadow-xs border border-white/20`}>
              {patient.totalVisits > 0 ? `Visit #${patient.totalVisits}` : 'First Visit'}
            </span>
            <span className="text-xs text-white font-medium">
              Last seen: {patient.lastVisitDate}
            </span>
          </div>
        </div>

        {/* Secondary Contact Bar */}
        <div className="flex items-center gap-4 text-xs text-white font-medium pt-1">
          <span className="flex items-center gap-1.5">
            <MapPin className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
            {patient.locality}
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            <Phone className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
            {patient.phone}
          </span>
        </div>

        {/* Visual Symptom Recovery Curve (Sparkline) */}
        {patient.severityTrend && (
          <div className="rounded-xl bg-black/25 border border-white/20 p-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Sparkles className={`w-3.5 h-3.5 ${demo.bannerAccentText}`} />
                {patient.severityTrend.complaintName || patient.chiefComplaints?.[0]?.name || 'Symptom'} Relief Trajectory
              </span>
              <span className={`font-mono text-white font-bold px-2 py-0.5 rounded ${demo.bannerTokenBg} border border-white/20`}>
                {patient.severityTrend.overallRelief}
              </span>
            </div>

            <svg viewBox="0 0 300 44" className="w-full h-9 overflow-visible" role="img" aria-label="Relief trajectory curve">
              <polyline
                fill="none"
                stroke={demo.bannerStroke}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="15,10 95,16 195,30 285,38"
              />
              <circle cx="15" cy="10" r="4" fill="var(--color-reaction-new)" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="95" cy="16" r="4" fill="var(--color-reaction-stable)" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="195" cy="30" r="4" fill="var(--color-reaction-improved)" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="285" cy="38" r="5" fill={demo.bannerStroke} stroke="currentColor" strokeWidth="2" />
            </svg>

            <div className="flex items-center justify-between text-[11px] font-mono text-white font-semibold px-1">
              {patient.severityTrend.history.map((h, i) => (
                <span key={i}>{h.label}</span>
              ))}
            </div>
          </div>
        )}

        {/* Active Chief Complaints */}
        {patient.chiefComplaints && patient.chiefComplaints.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
            {patient.chiefComplaints.map((cc) => (
              <span
                key={cc.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/25 border border-white/20 text-xs text-white"
              >
                <span className="font-semibold">{cc.name}</span>
                {cc.duration && (
                  <span className={`text-[11px] ${demo.bannerAccentText} font-medium`}>({cc.duration})</span>
                )}
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-bold shadow-2xs ${
                    cc.trend === 'Improving'
                      ? 'bg-reaction-improved text-white'
                      : cc.trend === 'Aggravating'
                      ? 'bg-reaction-aggravated text-white'
                      : 'bg-white/30 text-white border border-white/30'
                  }`}
                >
                  {cc.trend}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* History Timeline */}
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-content-primary">
            Visit History
          </h2>
          <span className="text-xs text-content-secondary font-bold">
            {patient.pastVisits.length} past visits
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {patient.pastVisits.length === 0 ? (
            <div className="text-center py-12 text-xs text-content-secondary bg-brand-surface-subtle rounded-2xl p-6 border border-border-subtle">
              No past visits.
              <div className="mt-1 text-xs text-brand-primary font-bold">
                First visit today.
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 my-1">
              {patient.pastVisits.map((visit) => {
                const reactionMeta = REACTION_CONFIG[visit.reaction] || REACTION_CONFIG['First Visit'];

                return (
                  <article
                    key={visit.id}
                    className="rounded-xl bg-brand-surface-subtle p-4 shadow-2xs flex flex-col gap-2.5 hover:bg-brand-surface transition-colors border border-border-subtle"
                  >
                    {/* Visit Header */}
                    <header className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full shrink-0 shadow-2xs ${
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
                          <span className="text-[11px] px-2 py-0.5 rounded bg-brand-surface border border-border-subtle text-content-primary font-mono font-bold">
                            {visit.durationDays}d course
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${reactionMeta.badgeClass}`}>
                          {visit.reaction === 'Improved' && <TrendingUp className="w-3.5 h-3.5" />}
                          {visit.reaction === 'No Change' && <Minus className="w-3.5 h-3.5" />}
                          {visit.reaction === 'Aggravated' && <TrendingDown className="w-3.5 h-3.5" />}
                          {visit.reaction === 'New' && <Sparkles className="w-3.5 h-3.5" />}
                          {visit.reaction}
                        </span>

                        {onEditVisit && (
                          <button
                            type="button"
                            onClick={() => onEditVisit(visit)}
                            className="p-1 rounded text-content-secondary hover:text-brand-primary hover:bg-white transition-colors cursor-pointer"
                            title="Edit visit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </header>

                    {/* Symptoms Recorded */}
                    <p className="text-xs text-content-primary leading-relaxed font-medium">
                      <span className="font-bold text-content-primary">Symptoms: </span>
                      {visit.symptoms}
                    </p>

                    {/* Prescribed Remedies with Potency and Vehicle */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {visit.prescriptions.map((rx, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary-container text-brand-primary-dark text-xs font-semibold border border-brand-primary/20"
                        >
                          {rx.vehicle.includes('Drops') ? (
                            <Droplet className="w-3.5 h-3.5 text-brand-primary" />
                          ) : (
                            <Pill className="w-3.5 h-3.5 text-brand-primary" />
                          )}
                          <span className="font-bold">{rx.remedy}</span>
                          <span className="font-mono text-xs font-bold text-brand-primary">
                            {rx.potency}
                          </span>
                          <span className="text-[11px] text-brand-primary-dark pl-0.5 font-medium">
                            · {rx.dosage}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Doctor Notes & Fee */}
                    <footer className="flex items-center justify-between text-xs text-content-secondary font-medium pt-1 border-t border-border-subtle/50">
                      <span className="truncate max-w-[240px]">
                        {visit.doctorNotes || 'No notes'}
                      </span>
                      <span className="font-mono font-bold text-content-primary">
                        {formatCurrency(visit.fee)} ({visit.feeStatus})
                      </span>
                    </footer>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
