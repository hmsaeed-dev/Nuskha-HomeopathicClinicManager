'use client';

import React, { useState } from 'react';
import { X, UserPlus, Phone, MapPin } from 'lucide-react';
import { Patient } from '@/types';
import { LOCALITY_PRESETS } from '@/constants/clinical';
import { useSettingsContext } from '@/context/SettingsContext';

interface NewPatientDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterPatient: (
    newPatient: Omit<Patient, 'id' | 'pastVisits'> & { initialFee: number }
  ) => Promise<Patient> | Patient;
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
  const [feeOverride, setFeeOverride] = useState<number | null>(null);
  const fee = feeOverride ?? clinicConfig.defaultConsultationFee;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!fullName.trim() || !relativeName.trim()) {
      setSubmitError('Please fill in Patient Name and Relative Name.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onRegisterPatient({
        mrn: '',
        fullName: fullName.trim(),
        relationType,
        relativeName: relativeName.trim(),
        age,
        gender,
        phone,
        locality,
        totalVisits: 0,
        lastVisitDate: 'Today',
        initialFee: fee,
      });

      setFullName('');
      setRelativeName('');
      setFeeOverride(null);
      onClose();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Failed to register patient.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 sm:p-6 transition-opacity duration-150"
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-border-subtle flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <header className="px-6 sm:px-7 py-4.5 bg-brand-surface-subtle border-b border-border-subtle flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-display text-sm font-bold shadow-xs shrink-0">
              <UserPlus className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-display text-lg font-bold text-content-primary leading-snug">
                New Patient Registration
              </h2>
              <span className="text-xs text-content-secondary font-medium">
                Create record and initialize today&#39;s OPD consultation session
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full text-content-secondary hover:bg-white hover:text-content-primary transition-colors cursor-pointer border border-transparent hover:border-border-subtle"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-7 flex flex-col gap-5">
          {/* Main 2-Column Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            {/* Full Name (Spans 2 columns) */}
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary flex items-center justify-between">
                <span>
                  Patient Full Name <span className="text-reaction-aggravated">*</span>
                </span>
                <span className="text-[11px] font-normal text-content-secondary">
                  Primary identification
                </span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Muhammad Tariq"
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
              />
            </div>

            {/* Relation */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Relation Type
              </label>
              <select
                value={relationType}
                onChange={(e) => setRelationType(e.target.value as 's/o' | 'w/o' | 'd/o')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all cursor-pointer"
              >
                <option value="s/o">s/o (Son of)</option>
                <option value="w/o">w/o (Wife of)</option>
                <option value="d/o">d/o (Daughter of)</option>
              </select>
            </div>

            {/* Relative Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Relative / Guardian Name <span className="text-reaction-aggravated">*</span>
              </label>
              <input
                type="text"
                required
                value={relativeName}
                onChange={(e) => setRelativeName(e.target.value)}
                placeholder="e.g. Abdul Rehman"
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Age (Years)
              </label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-mono"
              />
            </div>

            {/* Gender / Demographic Cohort */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Demographic Cohort / Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'Male' | 'Female' | 'Child')}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all cursor-pointer"
              >
                <option value="Male">Male (Adult)</option>
                <option value="Female">Female (Adult)</option>
                <option value="Child">Child (Pediatric)</option>
              </select>
            </div>

            {/* Mobile Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Mobile Phone
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-content-secondary absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300-1234567"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all font-mono"
                />
              </div>
            </div>

            {/* Locality */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-content-primary">
                Locality / Area
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-content-secondary absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  list="localities-list"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="Select or enter area..."
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle shadow-2xs text-sm text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                />
                <datalist id="localities-list">
                  {LOCALITY_PRESETS.map((loc) => (
                    <option key={loc} value={loc} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>

          {/* Session Token & Fee Section (Aligned 50/50) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Token Card */}
            <div className="p-4 rounded-xl bg-brand-surface-subtle border border-border-subtle flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-content-secondary uppercase tracking-wider">
                  Today&#39;s Token
                </span>
                <span className="text-xs text-content-secondary">
                  OPD Queue sequence
                </span>
              </div>
              <span className="font-mono text-2xl font-bold text-brand-primary">
                #{nextDailyToken}
              </span>
            </div>

            {/* Fee Card */}
            <div className="p-4 rounded-xl bg-brand-surface-subtle border border-border-subtle flex items-center justify-between gap-3">
              <div className="flex flex-col min-w-0">
                <label
                  htmlFor="opd-initial-fee"
                  className="text-[11px] font-bold text-content-secondary uppercase tracking-wider cursor-pointer"
                >
                  Consultation Fee
                </label>
                <span className="text-xs text-content-secondary truncate">
                  Currency ({clinicConfig.currency})
                </span>
              </div>
              <input
                id="opd-initial-fee"
                type="number"
                value={fee}
                onChange={(e) => setFeeOverride(Number(e.target.value))}
                className="w-28 px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-sm font-mono font-bold text-content-primary text-right focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
          </div>

          {/* Modal Actions */}
          {submitError && (
            <div className="px-3.5 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              {submitError}
            </div>
          )}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-border-subtle mt-2">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-border-strong text-xs font-bold text-content-primary hover:bg-brand-surface-subtle transition-colors cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-sm hover:bg-brand-primary-hover active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? 'Registering...' : 'Register & Open OPD'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
