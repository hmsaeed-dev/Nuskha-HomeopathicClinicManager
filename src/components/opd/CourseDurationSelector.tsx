"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { getDurationOptions } from "@/constants/vocab";

interface CourseDurationSelectorProps {
  durationDays: number;
  availableDurations?: number[];
  onChangeDuration: (days: number) => void;
  className?: string;
}

export const CourseDurationSelector: React.FC<CourseDurationSelectorProps> = ({
  durationDays,
  availableDurations,
  onChangeDuration,
  className = "",
}) => {
  // Labels come from the shared vocabulary registry; the number of options is
  // driven by live clinic settings, not a hardcoded five-column layout. If a
  // default/custom duration is not in the configured list, keep it visible so
  // the active selection is never silently lost.
  const configuredDurations =
    availableDurations && !availableDurations.includes(durationDays)
      ? [...availableDurations, durationDays].sort((a, b) => a - b)
      : availableDurations;
  const options = getDurationOptions(configuredDurations);
  const optionCount = Math.max(options.length, 1);
  const activeIndex = options.findIndex((opt) => opt.days === durationDays);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const progressPercent =
    options.length > 1 ? (safeActiveIndex / (options.length - 1)) * 100 : 0;
  const trackInset = `${50 / optionCount}%`;

  return (
    <div className={`flex flex-col gap-3 pt-1 ${className}`}>
      <label className="text-md font-bold text-content-primary">
        Course Duration
      </label>

      {/* Stepper Container with connecting line and nodes */}
      <div className="relative py-2 px-1">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-7 h-[2px] -translate-y-1/2 rounded-full bg-border-subtle overflow-hidden"
          style={{ left: trackInset, right: trackInset }}
        >
          <div
            className="h-full bg-brand-primary transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div
          className="grid relative z-10"
          style={{ gridTemplateColumns: `repeat(${optionCount}, minmax(0, 1fr))` }}
        >
          {options.map((option) => {
            const isSelected = durationDays === option.days;

            return (
              <button
                key={option.days}
                type="button"
                onClick={() => onChangeDuration(option.days)}
                aria-pressed={isSelected}
                className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none select-none"
              >
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-primary border-brand-primary text-white shadow-sm ring-8 ring-brand-primary/15 scale-105"
                      : "bg-white border-border-subtle text-content-secondary group-hover:border-brand-primary/50 group-hover:text-brand-primary group-hover:scale-105"
                  }`}
                >
                  <Calendar
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? "text-white scale-110"
                        : "text-brand-primary/80 group-hover:scale-110"
                    }`}
                  />
                </div>

                <div className="flex flex-col items-center text-center">
                  <span
                    className={`text-xs transition-colors leading-tight ${
                      isSelected
                        ? "font-bold text-brand-primary"
                        : "font-semibold text-content-secondary group-hover:text-content-primary"
                    }`}
                  >
                    {option.label}
                  </span>

                  {option.subLabel && (
                    <span
                      className={`label-micro ${
                        isSelected ? "!text-brand-primary/80" : ""
                      }`}
                    >
                      {option.subLabel}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
