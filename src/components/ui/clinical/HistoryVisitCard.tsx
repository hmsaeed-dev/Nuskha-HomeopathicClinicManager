"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";
import { PastVisit } from "@/types";
import { formatCurrency } from "@/utils/formatters";
import { getFeeStatusMeta, type FeeStatus } from "@/constants/vocab";
import { ReactionBadge } from "./ReactionBadge";
import { RemedyPill } from "./RemedyPill";
import { VisitActionsMenu } from "./VisitActionsMenu";

export interface HistoryVisitCardProps {
  visit: PastVisit;
  consultationNumber?: number;
  onEdit?: (visit: PastVisit) => void;
  onOpen?: (visit: PastVisit) => void;
  isLatest?: boolean;
  isFocused?: boolean;
  /** Live currency symbol from clinic settings. */
  currency: string;
  patientName?: string;
  className?: string;
}

export const HistoryVisitCard: React.FC<HistoryVisitCardProps> = ({
  visit,
  consultationNumber,
  onEdit,
  onOpen,
  isLatest = false,
  isFocused = false,
  currency,
  patientName,
  className = "",
}) => {
  const feeStatus = getFeeStatusMeta(visit.feeStatus as FeeStatus);

  return (
    <article
      data-visit-id={visit.id}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen ? () => onOpen(visit) : undefined}
      onKeyDown={
        onOpen
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpen(visit);
              }
            }
          : undefined
      }
      className={`rounded-2xl bg-white border p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
        isFocused
          ? "border-brand-primary ring-2 ring-brand-primary/25 bg-brand-primary-container/30 focus-settle"
          : isLatest
          ? "border-brand-primary/40 ring-1 ring-brand-primary/10"
          : "border-border-subtle hover:border-brand-primary/30"
      } ${onOpen ? "cursor-pointer" : ""} ${className}`}
    >
      {/* 1. Header: Reaction Badge (Left) vs Duration, Date & Edit (Right) */}
      <header className="flex items-center justify-between gap-3 flex-wrap">
        {/* Left: Reaction outcome badge + optional consultation count */}
        <div className="flex items-center gap-2">
          <ReactionBadge reaction={visit.reaction} size="md" />

          {consultationNumber && (
            <span className="label-chip">#{consultationNumber}</span>
          )}
        </div>

        {/* Right: Duration chip, Date & persistent actions affordance */}
        <div className="flex items-center gap-2 ml-auto">
          {visit.durationDays && (
            <span className="label-chip">
              <Calendar className="w-3 h-3 text-brand-primary shrink-0" />
              <span>{visit.durationDays} days</span>
            </span>
          )}

          <span className="font-mono text-xs font-bold text-content-primary">
            {visit.date}
          </span>

          <VisitActionsMenu
            visit={visit}
            onOpen={onOpen}
            onEdit={onEdit}
            patientName={patientName}
          />
        </div>
      </header>

      {/* 2. Clinical Narrative: Symptoms */}
      <div className="label-caption !text-content-primary">
        <span className="font-bold">Symptoms: </span>
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
        <div className="flex items-center gap-1.5 truncate max-w-[65%] label-caption">
          <Clock className="w-3.5 h-3.5 text-content-secondary shrink-0" />
          <span className="truncate">
            {visit.doctorNotes || "Follow-up consultation logged."}
          </span>
        </div>

        {/* Fee & Payment Status */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
          <span className="font-mono font-bold text-content-primary text-xs">
            {formatCurrency(visit.fee, currency)}
          </span>
          <span className={`label-chip ${feeStatus.badgeClass}`}>
            {feeStatus.label}
          </span>
        </div>
      </footer>
    </article>
  );
};
