'use client';

import React, { useMemo, useState } from 'react';
import {
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Patient, PastVisit } from '@/types';
import { formatCurrency } from '@/utils/formatters';
import { playSuccessChime } from '@/utils/sound';
import { usePatientsContext } from '@/context/PatientsContext';
import { HistoryVisitCard } from '@/components/ui/clinical';

interface HistoryTimelineRailProps {
  patient: Patient;
  onEditVisit?: (visit: PastVisit) => void;
}

export const HistoryTimelineRail: React.FC<HistoryTimelineRailProps> = ({
  patient,
  onEditVisit,
}) => {
  const { settlePatientDues } = usePatientsContext();
  const [isSettledJustNow, setIsSettledJustNow] = useState(false);

  // Calculate outstanding dues for this patient
  const totalDue = useMemo(() => {
    return patient.pastVisits
      .filter((v) => v.feeStatus === 'Due')
      .reduce((sum, v) => sum + (v.fee || 0), 0);
  }, [patient.pastVisits]);

  // 1-Click Settle Dues handler
  const handleSettleDues = () => {
    if (totalDue <= 0) return;
    settlePatientDues(patient.id);
    playSuccessChime();
    setIsSettledJustNow(true);
    setTimeout(() => setIsSettledJustNow(false), 2500);
  };

  return (
    <section className="rounded-2x p-5 shadow-xs flex flex-col gap-5 h-full overflow-hidden">
      {/* Patient Identity Banner (Unified Brand Hero Dark Green) */}
      <div
        className="rounded-2xl bg-brand-primary-dark text-white p-5 shadow-sm flex flex-col gap-4 shrink-0 transition-colors duration-200"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-2xl font-bold tracking-tight text-white">
              {patient.fullName}
            </h1>

            <div
              className="text-xs text-white/90 flex items-center gap-2 flex-wrap mt-0.5"
            >
              <span className="font-semibold text-white">
                {patient.relationType} {patient.relativeName}
              </span>
              <span>·</span>
              <span
                className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/20 border border-white/25 text-white"
              >
                {patient.age} Y
              </span>
            </div>
          </div>

          {/* 1-Click Settle Dues Action on Patient Banner */}
          {totalDue > 0 ? (
            <button
              type="button"
              onClick={handleSettleDues}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0 animate-in fade-in"
              title={`Click to settle outstanding dues of ${formatCurrency(totalDue)}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Settle Due: {formatCurrency(totalDue)}</span>
            </button>
          ) : isSettledJustNow ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-xs animate-in fade-in">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dues Cleared!</span>
            </span>
          ) : null}
        </div>

        {/* Secondary Contact Bar */}
        <div className="flex items-center gap-4 text-xs text-white/80 font-medium pt-1">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-primary-light" />
            {patient.locality}
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 text-brand-primary-light" />
            {patient.phone}
          </span>
        </div>
      </div>

      {/* History Feed */}
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-content-primary">
            History
          </h2>
          <span className="text-xs text-content-secondary font-bold">
            {patient.pastVisits.length} visits
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {patient.pastVisits.length === 0 ? (
            <div className="text-center py-12 text-xs text-content-secondary bg-brand-surface-subtle rounded-2xl p-6 shadow-2xs">
              No past visits.
              <div className="mt-1 text-xs text-brand-primary font-bold">
                First visit today.
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 my-1">
              {patient.pastVisits.map((visit, index) => (
                <HistoryVisitCard
                  key={visit.id}
                  visit={visit}
                  isLatest={index === 0}
                  onEdit={onEditVisit}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
