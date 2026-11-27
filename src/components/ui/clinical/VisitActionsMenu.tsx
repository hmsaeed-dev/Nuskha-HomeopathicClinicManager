"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Copy,
  MoreHorizontal,
  Pencil,
  Printer,
} from "lucide-react";
import { PastVisit } from "@/types";
import { useSettingsContext } from "@/context/SettingsContext";
import { playUiCue } from "@/utils/sound";
import { copyVisitPrescription, printVisit } from "@/utils/printVisit";

interface VisitActionsMenuProps {
  visit: PastVisit;
  onOpen?: (visit: PastVisit) => void;
  onEdit?: (visit: PastVisit) => void;
  patientName?: string;
}

interface Action {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  run: () => void;
}

/**
 * A single, reusable actions affordance for a history card. Kept visible at
 * rest (rather than hover-only) so keyboard and touch users can discover it.
 */
export const VisitActionsMenu: React.FC<VisitActionsMenuProps> = ({
  visit,
  onOpen,
  onEdit,
  patientName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { audioChimeEnabled, clinicConfig } = useSettingsContext();

  useEffect(() => {
    if (!isOpen) return;

    const firstEnabledItem = containerRef.current?.querySelector<HTMLButtonElement>(
      '[role="menuitem"]:not(:disabled)'
    );
    firstEnabledItem?.focus();

    const handlePointer = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey, true);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey, true);
    };
  }, [isOpen]);

  const handleCopy = async () => {
    const copied = await copyVisitPrescription(visit);
    playUiCue(copied ? "save" : "error", audioChimeEnabled);
  };

  const actions: Action[] = [
    {
      id: "open",
      label: "Open in OPD",
      icon: ArrowUpRight,
      disabled: !onOpen,
      run: () => onOpen?.(visit),
    },
    {
      id: "edit",
      label: "Edit consultation",
      icon: Pencil,
      disabled: !onEdit,
      run: () => onEdit?.(visit),
    },
    {
      id: "copy",
      label: "Copy prescription",
      icon: Copy,
      disabled: visit.prescriptions.length === 0,
      run: () => void handleCopy(),
    },
    {
      id: "print",
      label: "Print visit",
      icon: Printer,
      run: () => printVisit(visit, patientName, clinicConfig.currency),
    },
  ];

  return (
    <div ref={containerRef} className="relative shrink-0" onClick={(e) => e.stopPropagation()}>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Visit actions"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.stopPropagation();
          }
        }}
        className="p-1 rounded-md text-content-secondary hover:text-brand-primary hover:bg-brand-surface transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Visit actions"
          className="absolute right-0 top-full mt-1 z-30 w-48 rounded-xl border border-border-subtle bg-white p-1 shadow-lg animate-in fade-in zoom-in-95 duration-150"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(event) => {
            if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
            event.preventDefault();
            const enabledItems = Array.from(
              containerRef.current?.querySelectorAll<HTMLButtonElement>(
                '[role="menuitem"]:not(:disabled)'
              ) ?? []
            );
            if (enabledItems.length === 0) return;
            const currentIndex = enabledItems.indexOf(
              document.activeElement as HTMLButtonElement
            );
            const step = event.key === "ArrowDown" ? 1 : -1;
            const nextIndex =
              currentIndex === -1
                ? 0
                : (currentIndex + step + enabledItems.length) % enabledItems.length;
            enabledItems[nextIndex]?.focus();
          }}
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                type="button"
                role="menuitem"
                disabled={action.disabled}
                onClick={() => {
                  action.run();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-semibold text-content-primary hover:bg-brand-surface hover:text-brand-primary transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
