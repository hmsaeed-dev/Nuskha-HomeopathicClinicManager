'use client';

import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Calendar,
  Pill,
  Droplet,
  FileText,
  Edit2,
  Clock,
  Phone,
  MapPin,
} from 'lucide-react';
import { Patient, PastVisit, ReactionType, getDemographicCohort, DEMOGRAPHIC_CONFIG } from '@/types';

interface HistoryTimelineRailProps {
  patient: Patient;
  onEditVisit?: (visit: PastVisit) => void;
}

export const HistoryTimelineRail: React.FC<HistoryTimelineRailProps> = ({
  patient,
  onEditVisit,
}) => {
  const getReactionBadge = (reaction: ReactionType) => {
    switch (reaction) {
      case 'Improved':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#146C43] bg-[#D1F2E1] px-2 py-0.5 rounded-full">
            <TrendingUp className="w-3.5 h-3.5" />
            Improved
          </span>
        );
      case 'No Change':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8F4F00] bg-[#FFE5C2] px-2 py-0.5 rounded-full">
            <Minus className="w-3.5 h-3.5" />
            No Change
          </span>
        );
      case 'Aggravated':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#BA1A1A] bg-[#FFDAD6] px-2 py-0.5 rounded-full">
            <TrendingDown className="w-3.5 h-3.5" />
            Aggravated
          </span>
        );
      case 'New':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0C5A7A] bg-[#D2EEFA] px-2 py-0.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            New
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3D665E] bg-[#D8F0E9] px-2 py-0.5 rounded-full">
            First Visit
          </span>
        );
    }
  };

  const cohort = getDemographicCohort(patient.age, patient.gender);
  const demo = DEMOGRAPHIC_CONFIG[cohort];

  return (
    <section className="rounded-2xl bg-white p-5 shadow-xs flex flex-col gap-5 h-full overflow-hidden">
      {/* Patient Identity Anchor (Dark Botanical Teal Card) */}
      <div className="rounded-2xl bg-[#122B27] text-[#F4FAF8] p-5 shadow-sm flex flex-col gap-4 shrink-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="font-['Schibsted_Grotesk'] text-2xl font-bold tracking-tight text-white">
                {patient.fullName}
              </h1>
              {patient.urduName && (
                <span className="text-base font-urdu text-[#8FE0D1] leading-none">
                  {patient.urduName}
                </span>
              )}
            </div>

            <div className="text-xs text-[#8FE0D1] flex items-center gap-2 flex-wrap mt-0.5">
              <span className="font-semibold">
                {patient.relationType} {patient.relativeName}
                {patient.relativeUrduName && (
                  <span className="ml-1 font-urdu opacity-90">({patient.relativeUrduName})</span>
                )}
              </span>
              <span>·</span>
              <span
                className={`px-2 py-0.5 rounded-md font-['Spline_Sans_Mono'] text-[11px] font-bold ${demo.chipDarkBg} ${demo.chipDarkText}`}
                title={demo.label}
              >
                {patient.age} yrs
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="px-2.5 py-1 rounded-full bg-[#085E52] text-white font-['Spline_Sans_Mono'] text-xs font-bold shadow-xs">
              Today: #T-048
            </span>
            <span className="text-[11px] font-['Spline_Sans_Mono'] text-[#8FE0D1] font-medium">
              MRN: {patient.mrn}
            </span>
          </div>
        </div>

        {/* Secondary Contact Bar */}
        <div className="flex items-center gap-4 text-xs text-[#8FE0D1]/90 pt-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#8FE0D1]" />
            {patient.locality}
          </span>
          <span className="flex items-center gap-1 font-['Spline_Sans_Mono']">
            <Phone className="w-3.5 h-3.5 text-[#8FE0D1]" />
            {patient.phone}
          </span>
          <span className="ml-auto text-[11px] bg-white/10 px-2 py-0.5 rounded text-white font-medium">
            {patient.totalVisits} Total Visits
          </span>
        </div>

        {/* Visual Symptom Recovery Curve (Sparkline) */}
        {patient.severityTrend && (
          <div className="rounded-xl bg-white/10 p-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8FE0D1] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Migraine Progress
              </span>
              <span className="font-['Spline_Sans_Mono'] text-white font-bold px-1.5 py-0.5 rounded bg-[#085E52]/60">
                {patient.severityTrend.overallRelief}
              </span>
            </div>

            <svg viewBox="0 0 300 44" className="w-full h-9 overflow-visible" role="img" aria-label="Relief trajectory curve">
              <polyline
                fill="none"
                stroke="#8FE0D1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="15,10 95,16 195,30 285,38"
              />
              <circle cx="15" cy="10" r="4" fill="#0C5A7A" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="95" cy="16" r="4" fill="#8F4F00" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="195" cy="30" r="4" fill="#146C43" stroke="#F4FAF8" strokeWidth="1.5" />
              <circle cx="285" cy="38" r="5" fill="#8FE0D1" stroke="#085E52" strokeWidth="2" />
            </svg>

            <div className="flex items-center justify-between text-[10px] font-['Spline_Sans_Mono'] text-[#8FE0D1]/80 px-1">
              {patient.severityTrend.history.map((h, i) => (
                <span key={i}>{h.label}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* History Timeline */}
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-['Schibsted_Grotesk'] text-base font-bold text-[#131C1A]">
            Visit History
          </h2>
          <span className="text-xs text-[#3A4B47] font-medium">
            {patient.pastVisits.length} past visits
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {patient.pastVisits.length === 0 ? (
            <div className="text-center py-12 text-xs text-[#5E706B] bg-[#F7FAF8] rounded-2xl p-6">
              No past visits.
              <div className="mt-1 text-[11px] text-[#085E52] font-semibold">
                First visit today.
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 my-1">
              {patient.pastVisits.map((visit) => (
                <article
                  key={visit.id}
                  className="rounded-xl bg-[#F7FAF8] p-4 shadow-2xs flex flex-col gap-2.5 hover:bg-[#EFF5F2] transition-colors"
                >
                  {/* Visit Header */}
                  <header className="flex items-center justify-between gap-2">
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
                      <span className="text-[10px] text-[#5E706B] font-['Spline_Sans_Mono']">
                        (#T-{String(visit.tokenNo).padStart(3, '0')})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {getReactionBadge(visit.reaction)}
                      {onEditVisit && (
                        <button
                          type="button"
                          onClick={() => onEditVisit(visit)}
                          className="p-1 rounded text-[#5E706B] hover:text-[#085E52] hover:bg-white transition-colors"
                          title="Edit visit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </header>

                  {/* Symptoms Recorded */}
                  <p className="text-xs text-[#3A4B47] leading-relaxed">
                    <span className="font-semibold text-[#131C1A]">Symptoms: </span>
                    {visit.symptoms}
                  </p>

                  {/* Prescribed Remedies with Potency and Vehicle */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {visit.prescriptions.map((rx, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D8F0E9] text-[#0E3B33] text-xs font-medium"
                      >
                        {rx.vehicle.includes('Drops') ? (
                          <Droplet className="w-3 h-3 text-[#085E52]" />
                        ) : (
                          <Pill className="w-3 h-3 text-[#085E52]" />
                        )}
                        <span className="font-semibold">{rx.remedy}</span>
                        <span className="font-['Spline_Sans_Mono'] text-[11px] font-bold text-[#085E52]">
                          {rx.potency}
                        </span>
                        <span className="text-[10px] text-[#3D665E] pl-0.5">
                          · {rx.dosage}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Doctor Notes & Fee */}
                  <footer className="flex items-center justify-between text-[11px] text-[#5E706B] pt-1">
                    <span className="truncate max-w-[240px]">
                      {visit.doctorNotes || 'No notes'}
                    </span>
                    <span className="font-['Spline_Sans_Mono'] font-bold text-[#131C1A]">
                      Rs. {visit.fee} ({visit.feeStatus})
                    </span>
                  </footer>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
