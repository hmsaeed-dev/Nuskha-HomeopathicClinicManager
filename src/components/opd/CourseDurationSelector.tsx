"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface CourseDurationSelectorProps {
  durationDays: number;
  availableDurations?: number[];
  onChangeDuration: (days: number) => void;
  className?: string;
}

interface DurationOption {
  days: number;
  label: string;
  subLabel?: string;
}

const DEFAULT_OPTIONS: DurationOption[] = [
  { days: 3, label: "3 Days" },
  { days: 7, label: "1 Week", subLabel: "(7d)" },
  { days: 15, label: "15 Days" },
  { days: 21, label: "21 Days" },
  { days: 30, label: "1 Month", subLabel: "(30d)" },
];

export const CourseDurationSelector: React.FC<CourseDurationSelectorProps> = ({
  durationDays,
  availableDurations,
  onChangeDuration,
  className = "",
}) => {
  const options = availableDurations
    ? availableDurations.map((d) => {
        const found = DEFAULT_OPTIONS.find((opt) => opt.days === d);
        if (found) return found;
        return { days: d, label: `${d} Days` };
      })
    : DEFAULT_OPTIONS;

  const activeIndex = options.findIndex((opt) => opt.days === durationDays);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const progressPercent =
    options.length > 1 ? (safeActiveIndex / (options.length - 1)) * 100 : 0;

  return (
    <div className={`flex flex-col gap-3 pt-1 ${className}`}>
      <label className="text-md font-bold text-content-primary">
        Course Duration
      </label>

      {/* Stepper Container with connecting line and nodes */}
      <div className="relative py-2 px-1">
        {/* Background track line running behind the circle nodes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-7 left-[10%] right-[10%] h-[2px] -translate-y-1/2 rounded-full bg-slate-200 overflow-hidden"
        >
          {/* Active green progress track fill */}
          <div
            className="h-full bg-brand-primary transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* The 5 interactive duration step nodes */}
        <div className="grid grid-cols-5 relative z-10">
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
                {/* Circular calendar icon node */}
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-primary border-brand-primary text-white shadow-sm ring-8 ring-brand-primary/15 scale-105"
                      : "bg-white border-slate-200 text-slate-600 group-hover:border-brand-primary/50 group-hover:text-brand-primary group-hover:scale-105"
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

                {/* Text Label Below */}
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
                      className={`text-[10px] leading-tight ${
                        isSelected
                          ? "font-bold text-brand-primary/80"
                          : "font-normal text-content-secondary/70"
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
