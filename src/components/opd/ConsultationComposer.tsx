'use client';

import React, { useEffect, useCallback } from 'react';
import { RotateCcw, Plus, CheckCircle2 } from 'lucide-react';
import { Patient, ReactionType, PrescriptionItem } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { useSettingsContext } from '@/context/SettingsContext';
import { playSuccessChime } from '@/utils/sound';
import { useConsultationForm } from '@/hooks/useConsultationForm';
import { ReactionSelector } from './ReactionSelector';
import { PrescriptionRow } from './PrescriptionRow';
import { CourseDurationSelector } from './CourseDurationSelector';

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
  const { clinicConfig, audioChimeEnabled, singleKeyShortcutsEnabled } = useSettingsContext();

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

  const handleSave = useCallback(() => {
    if (audioChimeEnabled) {
      playSuccessChime();
    }

    onSaveConsultation({
      reaction,
      symptoms,
      prescriptions,
      doctorNotes,
      durationDays,
      fee,
      feeStatus,
    });
  }, [
    onSaveConsultation,
    audioChimeEnabled,
    reaction,
    symptoms,
    prescriptions,
    doctorNotes,
    durationDays,
    fee,
    feeStatus,
  ]);

  // Global & OPD Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInputFocused =
        targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select';

      // 1. Ctrl + Enter (or Cmd + Enter): Save & Next
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSave();
        return;
      }

      // 2. Alt + R: Repeat Previous Prescription
      if (e.altKey && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        handleRepeatLastRx();
        return;
      }

      // 3. Alt + A: Add Medicine Row
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        handleAddRemedy();
        return;
      }

      // 4. Reactions: Keys [1] to [4] strictly matching the visible UI order
      const reactionKeys: Record<string, ReactionType> = {
        '1': 'Decline',
        '2': 'No Change',
        '3': 'Improved',
        '4': 'First Visit',
      };

      if (e.key in reactionKeys) {
        const isAllowed = singleKeyShortcutsEnabled ? (!isInputFocused || e.altKey) : e.altKey;
        if (isAllowed) {
          e.preventDefault();
          setReaction(reactionKeys[e.key]);
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSave, handleRepeatLastRx, handleAddRemedy, setReaction, singleKeyShortcutsEnabled]);

  return (
    <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-5 sm:gap-6 h-full overflow-y-auto">
      {/* Top Consultation Header */}
      <div className="flex items-center justify-between gap-2 pb-1">
        <div className="flex flex-col">
          <h2 className="font-display text-xl font-bold text-content-primary">
            Consultation
          </h2>
          <span className="text-sm font-bold text-brand-primary">
            Visit {patient.totalVisits + 1}
          </span>
        </div>

        {/* Repeat Last Button */}
        <button
          type="button"
          onClick={handleRepeatLastRx}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:shadow-xs text-xs font-bold transition-all active:scale-98 cursor-pointer`}
          title="Repeat Previous Prescription (Alt+R)"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* 1. Reaction to Previous Remedy with 1-5 Hotkeys */}
      <ReactionSelector
        currentReaction={reaction}
        onSelectReaction={setReaction}
      />

      {/* 2. Symptoms */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="complaints" className="text-md font-bold text-content-primary">
          Observations
        </label>
        <textarea
          id="complaints"
          rows={3}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Type patient symptoms, modalities, complaints... (Ctrl+Enter to save)"
          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface-subtle text-sm text-content-primary font-medium placeholder:text-content-secondary placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all shadow-2xs resize-none border border-border-subtle"
        />
      </div>

      {/* 3. Prescription with Potency, Vehicle & Presets */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="font-display text-md font-bold text-content-primary flex items-center gap-1.5">
            Prescriptions
          </span>
          <button
            type="button"
            onClick={handleAddRemedy}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-2xl font-bold text-brand-primary hover:text-white transition-colors cursor-pointer"
            title="Add Medicine Row (Alt+A)"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {prescriptions.map((prescriptionItem, idx) => (
            <PrescriptionRow
              key={prescriptionItem.id}
              prescription={prescriptionItem}
              isSearchActive={activeRemedySearchIndex === idx}
              onOpenSearch={() => setActiveRemedySearchIndex(idx)}
              onCloseSearch={() => setActiveRemedySearchIndex(null)}
              onUpdateField={(field, value) => handleUpdateRemedy(idx, field, value)}
              onRemove={() => handleRemoveRemedy(idx)}
            />
          ))}
        </div>
      </div>

      {/* 4. Course Duration Stepper */}
      <CourseDurationSelector
        durationDays={durationDays}
        availableDurations={clinicConfig.availableCourseDurations}
        onChangeDuration={setDurationDays}
      />

      {/* 5. Doctor's Notes & Consultation Fee */}
      <div className="grid grid-cols-12 gap-3 pt-1">
        <div className="col-span-8 flex flex-col gap-1.5">
          <label htmlFor="doctor-notes" className="text-md font-bold text-content-primary">
            Doctor Notes
          </label>
          <input
            id="doctor-notes"
            type="text"
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            placeholder="Clinical follow-up notes..."
            className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle text-xs font-semibold text-content-primary placeholder:text-content-secondary placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-2xs border border-border-subtle"
          />
        </div>

        <div className="col-span-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="fee" className="text-xs font-bold text-content-primary">
              Fee ({clinicConfig.currency})
            </label>
            <span className="text-xs text-brand-primary font-bold">{feeStatus}</span>
          </div>
          <div className="relative flex items-center">
            <input
              id="fee"
              type="number"
              value={fee}
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-brand-surface-subtle text-xs font-mono font-bold text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-2xs border border-border-subtle"
            />
          </div>
        </div>
      </div>

      {/* 6. Primary Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSave}
          className={`w-full py-3.5 rounded-xl ${demo.actionButtonBg} text-white shadow-md flex items-center justify-center gap-2 text-md font-bold transition-all active:scale-98 cursor-pointer`}
          title="Save & Proceed to Next Patient (Ctrl + Enter)"
        >
          <span>Save</span>
          <CheckCircle2 className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};
