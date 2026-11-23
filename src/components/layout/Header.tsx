'use client';

import React from 'react';
import { Stethoscope, UserPlus, FileSpreadsheet, LayoutDashboard, Clock, Users } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';

interface HeaderProps {
  activeTab: 'opd' | 'analytics' | 'patients';
  onTabChange: (tab: 'opd' | 'analytics' | 'patients') => void;
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
        {/* Logo & Clinic Title (SSOT Configured) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary-container text-brand-primary flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 text-brand-primary" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold text-content-primary leading-none tracking-tight">
                  {CLINIC_CONFIG.name}
                </span>
              </div>
              <span className="text-xs text-content-secondary mt-0.5">
                {CLINIC_CONFIG.doctorName} · {CLINIC_CONFIG.subtitle}
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav aria-label="Primary navigation" className="flex items-center gap-1.5 ml-2">
            <button
              onClick={() => onTabChange('opd')}
              title="OPD Workspace (F1)"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeTab === 'opd'
                  ? 'bg-brand-primary-container text-brand-primary-dark'
                  : 'text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>OPD</span>
            </button>
            <button
              onClick={() => onTabChange('analytics')}
              title="Daily Register (F3)"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-brand-primary-container text-brand-primary-dark'
                  : 'text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Daily Register</span>
            </button>
            <button
              onClick={() => onTabChange('patients')}
              title="Patients Archive (F4)"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeTab === 'patients'
                  ? 'bg-brand-primary-container text-brand-primary-dark'
                  : 'text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Patients Archive</span>
            </button>
          </nav>
        </div>

        {/* Live Session Counter & Walk-in Action */}
        <div className="flex items-center gap-3">
          {/* Real-time Session Chip */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-surface-subtle text-content-primary text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-content-muted" />
            <span>Today&#39;s OPD:</span>
            <span className="font-mono font-bold text-brand-primary">{todayCount}</span>
            <span className="text-content-muted text-[11px]">seen</span>
          </div>

          {/* New Patient Registration Trigger (F2) */}
          <button
            onClick={onOpenNewPatient}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-semibold shadow-sm hover:bg-brand-primary-hover active:scale-[0.98] transition-all duration-150"
            title="Register New Walk-in Patient (Press F2)"
          >
            <UserPlus className="w-4 h-4" />
            <span className="hidden md:inline">New Patient</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/20 text-white rounded">
              F2
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
