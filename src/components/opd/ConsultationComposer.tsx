'use client';

import React from 'react';
import { RotateCcw, Plus, CheckCircle2 } from 'lucide-react';
import { Patient, ReactionType, PrescriptionItem } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { useConsultationForm } from '@/hooks/useConsultationForm';
import { ReactionSelector } from './ReactionSelector';
import { PrescriptionRow } from './PrescriptionRow';

interface ConsultationComposerProps {
  patient: Patient;
  onSaveConsultation: (consultationData: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: PrescriptionItem[];
    doctorNotes: string;
    durationDays: number;
    fee: number;
    feeStatus: 'Paid' | 'Free' | 'Due';
  }) => void;
}

export const ConsultationComposer: React.FC<ConsultationComposerProps> = ({
  patient,
  onSaveConsultation,
}) => {
  const cohort = getDemographicCohort(patient.age, patient.gender);
  const demo = DEMOGRAPHIC_CONFIG[cohort];

  const {
    reaction,
    setReaction,
    symptoms,
    setSymptoms,
    durationDays,
    setDurationDays,
    prescriptions,
    doctorNotes,
    setDoctorNotes,
    fee,
    setFee,
    feeStatus,
    activeRemedySearchIndex,
    setActiveRemedySearchIndex,
    handleRepeatLastRx,
    handleAddRemedy,
    handleRemoveRemedy,
    handleUpdateRemedy,
  } = useConsultationForm({ patient });

  const handleSave = () => {
    onSaveConsultation({
      reaction,
      symptoms,
      prescriptions,
      doctorNotes,
      durationDays,
      fee,
      feeStatus,
    });
  };

  return (
    <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-5 sm:gap-6 h-full overflow-y-auto">
      {/* Top Consultation Header */}
      <div className="flex items-center justify-between gap-2 pb-1">
        <div className="flex flex-col">
          <h2 className="font-display text-lg font-bold text-content-primary">
            Today&#39;s Consultation
          </h2>
          <span className="font-mono text-xs text-content-muted">
            Visit #{patient.totalVisits + 1}
          </span>
        </div>

        {/* Repeat Last Button */}
        <button
          type="button"
          onClick={handleRepeatLastRx}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${demo.chipBg} ${demo.chipText} hover:opacity-90 text-xs font-semibold transition-all active:scale-98`}
          title="Repeat Previous Prescription (Alt+R)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Repeat Last</span>
          <kbd className="px-1 py-0.5 rounded text-[10px] font-mono bg-black/5 font-semibold">
            Alt+R
          </kbd>
        </button>
      </div>

      {/* 1. Reaction to Previous Remedy with 1-5 Hotkeys */}
      <ReactionSelector
        currentReaction={reaction}
        onSelectReaction={setReaction}
      />

      {/* 2. Symptoms */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="complaints" className="text-xs font-bold text-content-primary">
          Symptoms
        </label>
        <textarea
          id="complaints"
          rows={3}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Type patient symptoms, complaints, modalities..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all shadow-2xs resize-none"
        />
      </div>

      {/* 3. Prescription with Potency, Vehicle & Presets */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="font-display text-xs font-bold text-content-primary flex items-center gap-1.5">
            Prescription ({prescriptions.length})
          </span>
          <button
            type="button"
            onClick={handleAddRemedy}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-primary-hover transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Medicine</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-surface text-content-secondary">
              Alt+A
            </kbd>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {prescriptions.map((rx, idx) => (
            <PrescriptionRow
              key={rx.id}
              prescription={rx}
              isSearchActive={activeRemedySearchIndex === idx}
              onOpenSearch={() => setActiveRemedySearchIndex(idx)}
              onCloseSearch={() => setActiveRemedySearchIndex(null)}
              onUpdateField={(field, value) => handleUpdateRemedy(idx, field, value)}
              onRemove={() => handleRemoveRemedy(idx)}
            />
          ))}
        </div>
      </div>

      {/* 4. Course Duration */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-content-primary">
            Course Duration
          </label>
          <span className="text-[10px] text-content-muted font-mono">
            {durationDays} Days Supply
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {CLINIC_CONFIG.availableCourseDurations.map((days) => (
            <button
              key={days}
              type="button"
              onClick={() => setDurationDays(days)}
              className={`py-1.5 rounded-xl text-xs font-semibold transition-all ${
                durationDays === days
                  ? `${demo.bannerTokenBg} text-white shadow-xs`
                  : 'bg-brand-surface-subtle text-content-secondary hover:bg-brand-surface'
              }`}
            >
              {days === 7 ? '1 Week (7d)' : days === 30 ? '1 Month (30d)' : `${days} Days`}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Doctor's Notes & Consultation Fee */}
      <div className="grid grid-cols-12 gap-3 pt-1">
        <div className="col-span-8 flex flex-col gap-1.5">
          <label htmlFor="doctor-notes" className="text-xs font-bold text-content-primary">
            Doctor Notes
          </label>
          <input
            id="doctor-notes"
            type="text"
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            placeholder="Follow-up notes..."
            className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle text-xs text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-2xs"
          />
        </div>

        <div className="col-span-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="fee" className="text-xs font-bold text-content-primary">
              Fee ({CLINIC_CONFIG.currency})
            </label>
            <span className="text-[10px] text-brand-primary font-semibold">{feeStatus}</span>
          </div>
          <div className="relative flex items-center">
            <input
              id="fee"
              type="number"
              value={fee}
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle text-xs font-mono font-bold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* 6. Primary Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSave}
          className={`w-full py-3 rounded-xl ${demo.actionButtonBg} text-white shadow-md flex items-center justify-center gap-2 text-sm font-bold transition-all active:scale-98`}
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>Save &amp; Next</span>
          <kbd className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/20 text-white font-semibold">
            Ctrl + ↵
          </kbd>
        </button>
      </div>
    </section>
  );
};
