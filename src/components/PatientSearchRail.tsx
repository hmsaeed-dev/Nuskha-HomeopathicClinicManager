'use client';

import React, { useRef } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Patient, getDemographicCohort, DEMOGRAPHIC_CONFIG } from '@/types';

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
    <aside className="rounded-2xl bg-[#E9F0EE] p-4 flex flex-col gap-5 h-full">
      {/* Search Bar with Alt+S Badge */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="patient-search" className="text-xs font-bold text-[#131C1A]">
            Find Patient
          </label>
          <span className="text-[11px] text-[#3A4B47] flex items-center gap-1 font-['Spline_Sans_Mono']">
            Smart Search
          </span>
        </div>

        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#5E706B] absolute left-3 pointer-events-none" />
          <input
            id="patient-search"
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Name, phone, or MRN..."
            className="w-full pl-9 pr-14 py-2.5 rounded-xl bg-white text-sm text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52] transition-all shadow-2xs"
          />
          <kbd className="absolute right-2.5 px-1.5 py-0.5 rounded text-[10px] font-['Spline_Sans_Mono'] bg-[#E9F0EE] text-[#3A4B47] font-semibold">
            Alt+S
          </kbd>
        </div>
      </div>

      {/* Search Results */}
      <section className="flex flex-col gap-2.5 flex-1 min-h-[200px] overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#3A4B47]">
            Patients ({filteredPatients.length})
          </h2>
          {searchQuery && (
            <span className="text-[10px] text-[#085E52] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Live
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#5E706B] bg-white/50 rounded-xl p-5">
              No patients found.
              <div className="mt-1 text-[11px] text-[#085E52] font-semibold">
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
                      ? 'bg-[#085E52] text-white shadow-sm'
                      : 'bg-white text-[#131C1A] hover:bg-white/90 shadow-2xs'
                  }`}
                >
                  {/* Demographic Vertical Indicator Bar */}
                  <div
                    className={`w-1 self-stretch rounded-full shrink-0 ${
                      isSelected ? 'bg-white/80' : demo.barColor
                    }`}
                    title={`${demo.label} (${patient.age}y)`}
                  />

                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Patient Name & MRN */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <span
                          className={`font-['Schibsted_Grotesk'] text-sm font-bold truncate ${
                            isSelected ? 'text-white' : 'text-[#131C1A]'
                          }`}
                        >
                          {patient.fullName}
                        </span>
                        {patient.urduName && (
                          <span
                            className={`text-xs font-urdu opacity-85 truncate ${
                              isSelected ? 'text-[#8FE0D1]' : 'text-[#085E52]'
                            }`}
                          >
                            {patient.urduName}
                          </span>
                        )}
                      </div>
                      <span
                        className={`font-['Spline_Sans_Mono'] text-[11px] shrink-0 font-medium ${
                          isSelected ? 'text-[#8FE0D1]' : 'text-[#5E706B]'
                        }`}
                      >
                        {patient.mrn}
                      </span>
                    </div>

                    {/* Relation & Locality & Demographic Age Chip */}
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-xs truncate ${
                          isSelected ? 'text-white/85' : 'text-[#3A4B47]'
                        }`}
                      >
                        <span className="font-semibold">
                          {patient.relationType} {patient.relativeName}
                        </span>{' '}
                        · {patient.locality}
                      </p>
                      <span
                        className={`text-[10px] font-['Spline_Sans_Mono'] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : `${demo.chipBg} ${demo.chipText}`
                        }`}
                      >
                        {patient.age}y
                      </span>
                    </div>
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
