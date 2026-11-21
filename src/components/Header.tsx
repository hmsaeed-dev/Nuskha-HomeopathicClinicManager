'use client';

import React from 'react';
import { Stethoscope, UserPlus, FileSpreadsheet, LayoutDashboard, Clock } from 'lucide-react';

interface HeaderProps {
  activeTab: 'opd' | 'analytics';
  onTabChange: (tab: 'opd' | 'analytics') => void;
  onOpenNewPatient: () => void;
  todayCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenNewPatient,
  todayCount,
}) => {
  return (
    <header className="sticky top-3 z-30 mx-4 sm:mx-5 lg:mx-6 mt-3 rounded-2xl bg-white shadow-xs px-6 py-3.5">
      <div className="flex items-center justify-between gap-4">
        {/* Logo & Clinic Title */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D8F0E9] text-[#085E52] flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 text-[#085E52]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-['Schibsted_Grotesk'] text-xl font-bold text-[#131C1A] leading-none tracking-tight">
                  Nuskha
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#085E52]/10 text-[#085E52] font-semibold">
                  نسخہ
                </span>
              </div>
              <span className="text-xs text-[#3A4B47] mt-0.5">
                Dr. Aslam · Homoeopathic OPD Clinic
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav aria-label="Primary navigation" className="flex items-center gap-1.5 ml-2">
            <button
              onClick={() => onTabChange('opd')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                activeTab === 'opd'
                  ? 'bg-[#D8F0E9] text-[#0E3B33]'
                  : 'text-[#3A4B47] hover:bg-[#E9F0EE] hover:text-[#131C1A]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>OPD</span>
            </button>
            <button
              onClick={() => onTabChange('analytics')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                activeTab === 'analytics'
                  ? 'bg-[#D8F0E9] text-[#0E3B33]'
                  : 'text-[#3A4B47] hover:bg-[#E9F0EE] hover:text-[#131C1A]'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Daily Register</span>
            </button>
          </nav>
        </div>

        {/* Right Stats & New Patient Button */}
        <div className="flex items-center gap-5">
          {/* Patient Visits Today */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9F0EE]">
            <span className="w-2 h-2 rounded-full bg-[#085E52]" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-['Spline_Sans_Mono'] text-sm font-bold text-[#131C1A] leading-none">
                {todayCount}
              </span>
              <span className="text-xs text-[#3A4B47] font-medium leading-none">
                Visits Today
              </span>
            </div>
          </div>

          {/* New Patient Button with F2 Badge */}
          <button
            onClick={onOpenNewPatient}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#085E52] text-white hover:bg-[#0E7668] shadow-sm transition-all duration-150 active:scale-98"
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-xs font-bold">New Patient</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-['Spline_Sans_Mono'] bg-white/20 text-white font-semibold">
              F2
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
