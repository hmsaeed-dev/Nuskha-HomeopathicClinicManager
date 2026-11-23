'use client';

import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Patient } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';

interface PatientSearchRailProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredPatients: Patient[];
  selectedPatientId: string;
  onSelectPatient: (patient: Patient) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export const PatientSearchRail: React.FC<PatientSearchRailProps> = ({
  searchQuery,
  onSearchChange,
  filteredPatients,
  selectedPatientId,
  onSelectPatient,
  searchInputRef,
}) => {
  return (
    <aside className="rounded-2xl bg-brand-surface-subtle p-4 flex flex-col gap-5 h-full">
      {/* Search Bar with Alt+S Badge */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="patient-search" className="text-xs font-bold text-content-primary">
            Find Patient
          </label>
          <span className="text-[11px] text-content-secondary flex items-center gap-1 font-mono">
            Smart Search
          </span>
        </div>

        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-content-muted absolute left-3 pointer-events-none" />
          <input
            id="patient-search"
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, phone, or MRN..."
            className="w-full pl-9 pr-14 py-2.5 rounded-xl bg-white text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all shadow-2xs"
          />
          <kbd className="absolute right-2.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-surface text-content-secondary font-semibold">
            Alt+S
          </kbd>
        </div>
      </div>

      {/* Search Results */}
      <section className="flex flex-col gap-2.5 flex-1 min-h-[200px] overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-content-secondary">
            Patients ({filteredPatients.length})
          </h2>
          {searchQuery && (
            <span className="text-[10px] text-brand-primary font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Live
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-8 text-xs text-content-muted bg-white/50 rounded-xl p-5">
              No patients found.
              <div className="mt-1 text-[11px] text-brand-primary font-semibold">
                Press F2 for new patient
              </div>
            </div>
          ) : (
            filteredPatients.map((patient) => {
              const isSelected = patient.id === selectedPatientId;
              const cohort = getDemographicCohort(patient.age, patient.gender);
              const demo = DEMOGRAPHIC_CONFIG[cohort];

              return (
                <div
                  key={patient.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectPatient(patient)}
                  className={`p-3 rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? `${demo.selectedCardBg} text-white shadow-sm`
                      : 'bg-white text-content-primary hover:bg-white/90 shadow-2xs'
                  }`}
                >
                  {/* Demographic Vertical Indicator Bar */}
                  <div
                    className={`w-1 self-stretch rounded-full shrink-0 ${
                      isSelected ? 'bg-white/60' : demo.barColor
                    }`}
                    title={`${demo.label} (${patient.age}y)`}
                  />

                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Patient Name & Demographic Age Chip */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-display text-sm font-bold truncate ${
                          isSelected ? 'text-white' : 'text-content-primary'
                        }`}
                      >
                        {patient.fullName}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : `${demo.chipBg} ${demo.chipText}`
                        }`}
                      >
                        {patient.age}y
                      </span>
                    </div>

                    {/* Relation & Locality */}
                    <p
                      className={`text-xs truncate ${
                        isSelected ? 'text-white/85' : 'text-content-secondary'
                      }`}
                    >
                      <span className="font-semibold">
                        {patient.relationType} {patient.relativeName}
                      </span>{' '}
                      · {patient.locality}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </aside>
  );
};
