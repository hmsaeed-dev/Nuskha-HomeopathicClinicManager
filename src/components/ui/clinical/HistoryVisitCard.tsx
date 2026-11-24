"use client";

import React from "react";
import { Calendar, Clock, Edit2 } from "lucide-react";
import { PastVisit } from "@/types";
import { formatCurrency } from "@/utils/formatters";
import { ReactionBadge } from "./ReactionBadge";
import { RemedyPill } from "./RemedyPill";

export interface HistoryVisitCardProps {
  visit: PastVisit;
  consultationNumber?: number;
  onEdit?: (visit: PastVisit) => void;
  isLatest?: boolean;
  className?: string;
}

export const HistoryVisitCard: React.FC<HistoryVisitCardProps> = ({
  visit,
  consultationNumber,
  onEdit,
  isLatest = false,
  className = "",
}) => {
  // Fee status styling
  const feeStatusClass =
    visit.feeStatus === "Paid"
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : visit.feeStatus === "Due"
      ? "text-amber-700 bg-amber-50 border-amber-200"
      : "text-slate-600 bg-slate-50 border-slate-200";

  return (
    <article
      className={`rounded-2xl bg-white border p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col gap-3.5 group ${
        isLatest
          ? "border-brand-primary/40 ring-1 ring-brand-primary/10"
          : "border-border-subtle hover:border-brand-primary/30"
      } ${className}`}
    >
      {/* 1. Header: Reaction Badge (Left) vs Duration, Date & Edit (Right) */}
      <header className="flex items-center justify-between gap-3 flex-wrap">
        {/* Left: Reaction outcome badge + optional consultation count */}
        <div className="flex items-center gap-2">
          <ReactionBadge reaction={visit.reaction} size="md" />

          {consultationNumber && (
            <span className="text-[11px] font-mono font-bold text-content-secondary px-2 py-0.5 rounded-md bg-brand-surface border border-border-subtle/60">
              #{consultationNumber}
            </span>
          )}
        </div>

        {/* Right: Duration chip, Date & Actions */}
        <div className="flex items-center gap-2.5 ml-auto">
          {visit.durationDays && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-surface text-content-primary border border-border-subtle/60">
              <Calendar className="w-3 h-3 text-brand-primary shrink-0" />
              <span>{visit.durationDays} days</span>
            </span>
          )}

          <span className="font-mono text-xs font-bold text-content-primary">
            {visit.date}
          </span>

          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(visit)}
              className="p-1 rounded-md text-content-secondary hover:text-brand-primary hover:bg-brand-surface transition-colors cursor-pointer"
              title="Edit consultation"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>

      {/* 2. Clinical Narrative: Symptoms */}
      <div className="text-xs text-content-primary leading-relaxed font-medium">
        <span className="font-bold text-content-primary">Symptoms: </span>
        <span>{visit.symptoms}</span>
      </div>

      {/* 3. Prescribed Remedies */}
      {visit.prescriptions && visit.prescriptions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-0.5">
          {visit.prescriptions.map((rx, idx) => (
            <RemedyPill
              key={rx.id || `${rx.remedy}-${idx}`}
              prescription={rx}
              size="md"
            />
          ))}
        </div>
      )}

      {/* 4. Footer: Doctor Notes (Left) & Fee Accounting (Right) */}
      <footer className="flex items-center justify-between gap-3 text-xs pt-2.5 border-t border-border-subtle/60">
        {/* Doctor's Notes / Follow-up */}
        <div className="flex items-center gap-1.5 truncate max-w-[65%] text-[11px] text-content-secondary font-medium">
          <Clock className="w-3.5 h-3.5 text-content-secondary shrink-0" />
          <span className="truncate">
            {visit.doctorNotes || "Follow-up consultation logged."}
          </span>
        </div>

        {/* Fee & Payment Status */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
          <span className="font-mono font-bold text-content-primary text-xs">
            {formatCurrency(visit.fee)}
          </span>
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${feeStatusClass}`}
          >
            {visit.feeStatus}
          </span>
        </div>
      </footer>
    </article>
  );
};
