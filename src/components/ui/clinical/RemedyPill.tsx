"use client";

import React from "react";
import { Droplet, Pill as PillIcon, RotateCw } from "lucide-react";
import { PrescriptionItem } from "@/types";

interface RemedyPillProps {
  prescription: PrescriptionItem;
  size?: "sm" | "md";
  showDosage?: boolean;
  className?: string;
}

export const RemedyPill: React.FC<RemedyPillProps> = ({
  prescription,
  size = "md",
  showDosage = true,
  className = "",
}) => {
  const isDrops =
    prescription.vehicle.includes("Drops") ||
    prescription.vehicle.includes("Tincture");

  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2.5 py-1 gap-1.5"
      : "text-xs px-3.5 py-1.5 gap-2";

  return (
    <div
      className={`inline-flex items-center rounded-full bg-brand-primary-container text-brand-primary-dark border border-brand-primary/20 shadow-2xs transition-colors hover:bg-brand-primary-container/90 ${sizeClasses} ${className}`}
    >
      {/* Dispensing Vehicle Icon */}
      {isDrops ? (
        <Droplet className="w-3.5 h-3.5 text-brand-primary shrink-0" />
      ) : (
        <PillIcon className="w-3.5 h-3.5 text-brand-primary shrink-0" />
      )}

      {/* Remedy Name */}
      <span className="font-bold tracking-tight">
        {prescription.remedy}
      </span>

      {/* Potency Monospace Tag */}
      <span className="font-mono text-[11px] font-bold text-brand-primary bg-white/70 px-1.5 py-0.2 rounded">
        {prescription.potency}
      </span>

      {/* Dosage Instructions */}
      {showDosage && prescription.dosage && (
        <span className="text-[11px] text-brand-primary-dark/80 font-medium pl-0.5">
          · {prescription.dosage}
        </span>
      )}

      {/* Repeat Indicator */}
      {prescription.isRepeat && (
        <span
          className="inline-flex items-center gap-0.5 text-[9px] uppercase tracking-wider font-mono font-bold text-amber-700 bg-amber-100/80 px-1.5 py-0.2 rounded-full"
          title="Repeat Prescription"
        >
          <RotateCw className="w-2.5 h-2.5" />
          Rpt
        </span>
      )}
    </div>
  );
};
