'use client';

import React, { useState } from 'react';
import { X, UserPlus, Phone, MapPin } from 'lucide-react';
import { Patient } from '@/types';
import { LOCALITY_PRESETS } from '@/constants/clinical';
import { useSettingsContext } from '@/context/SettingsContext';

interface NewPatientDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterPatient: (newPatient: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }) => void;
  nextDailyToken: number;
}

export const NewPatientDrawer: React.FC<NewPatientDrawerProps> = ({
  isOpen,
  onClose,
  onRegisterPatient,
  nextDailyToken,
}) => {
  const { clinicConfig } = useSettingsContext();
  const [fullName, setFullName] = useState('');
  const [relationType, setRelationType] = useState<'s/o' | 'w/o' | 'd/o'>('s/o');
  const [relativeName, setRelativeName] = useState('');
  const [age, setAge] = useState<number>(35);
  const [gender, setGender] = useState<'Male' | 'Female' | 'Child'>('Male');
  const [phone, setPhone] = useState('0300-');
  const [locality, setLocality] = useState<string>(LOCALITY_PRESETS[0] || 'Taxila Cantt');
  const [fee, setFee] = useState<number>(clinicConfig.defaultConsultationFee);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !relativeName.trim()) {
      alert('Please fill in Patient Name and Relative Name.');
      return;
    }

    onRegisterPatient({
      mrn: `NK-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      relationType,
      relativeName,
      age,
      gender,
      phone,
      locality,
      totalVisits: 0,
      lastVisitDate: 'Today',
      initialFee: fee,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs transition-opacity duration-150">
      <aside className="w-full max-w-lg bg-white shadow-2xl flex flex-col h-full overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <header className="px-6 py-4 bg-brand-surface-subtle border-b border-border-subtle flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm font-bold shadow-xs">
              <UserPlus className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-display text-lg font-bold text-content-primary">
                New Patient
              </h2>
              <span className="text-xs text-content-secondary font-medium">
                Register for today&#39;s OPD
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-content-secondary hover:bg-brand-primary-container hover:text-content-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {/* Patient Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-content-primary">
              Patient Name <span className="text-reaction-aggravated">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Muhammad Tariq"
              className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Relation + Guardian/Spouse Name */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">Relation</label>
              <select
                value={relationType}
                onChange={(e) => setRelationType(e.target.value as 's/o' | 'w/o' | 'd/o')}
                className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option value="s/o">s/o (Son of)</option>
                <option value="w/o">w/o (Wife of)</option>
                <option value="d/o">d/o (Daughter of)</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Relative Name <span className="text-reaction-aggravated">*</span>
              </label>
              <input
                type="text"
                required
                value={relativeName}
                onChange={(e) => setRelativeName(e.target.value)}
                placeholder="e.g. Abdul Rehman"
                className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">Age (Years)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'Male' | 'Female' | 'Child')}
                className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Child">Child</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-content-primary">Mobile Phone</label>
            <div className="relative flex items-center">
              <Phone className="w-4 h-4 text-content-secondary absolute left-3 pointer-events-none" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0300-1234567"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary font-mono"
              />
            </div>
          </div>

          {/* Locality */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-content-primary">Locality / Area</label>
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-content-secondary absolute left-3 pointer-events-none" />
              <input
                type="text"
                list="localities-list"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Select or enter area..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <datalist id="localities-list">
                {LOCALITY_PRESETS.map((loc) => (
                  <option key={loc} value={loc} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Today's Token & Initial OPD Fee */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col justify-between">
              <span className="text-[11px] font-bold text-content-secondary">Token Number</span>
              <span className="font-mono text-xl font-bold text-brand-primary">
                #{nextDailyToken}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-brand-surface-subtle border border-border-subtle flex flex-col gap-1">
              <label className="text-[11px] font-bold text-content-secondary">
                Fee ({clinicConfig.currency})
              </label>
              <input
                type="number"
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                className="w-full px-2 py-1 bg-white border border-border-subtle rounded-lg text-sm font-mono font-bold text-content-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="mt-auto pt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-border-strong text-xs font-bold text-content-primary hover:bg-brand-surface-subtle transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-sm hover:bg-brand-primary-hover active:scale-[0.98] transition-all cursor-pointer"
            >
              Register &amp; Open OPD
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
};
