'use client';

import React, { useState } from 'react';
import {
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  Droplet,
  Pill,
  Sparkles,
  TrendingUp,
  Minus,
  TrendingDown,
  User,
  AlertCircle,
} from 'lucide-react';
import {
  Patient,
  ReactionType,
  PrescriptionItem,
  DispensingVehicle,
  getDemographicCohort,
  DEMOGRAPHIC_CONFIG,
} from '@/types';
import {
  COMMON_REMEDIES,
  COMMON_POTENCIES,
  DISPENSING_VEHICLES,
  DOSAGE_MACROS,
} from '@/data/mockData';

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

  const [reaction, setReaction] = useState<ReactionType>('Improved');
  const [symptoms, setSymptoms] = useState<string>(
    'Migraine 70% better; occasional morning gastric acidity persists after heavy meals.'
  );
  const [durationDays, setDurationDays] = useState<number>(15);
  const [prescriptions, setPrescriptions] = useState<PrescriptionItem[]>([
    {
      id: 'rx-new-1',
      remedy: 'Bryonia Alba',
      potency: '200C',
      vehicle: 'Drops (Water)',
      dosage: '3 drops BD in water',
      isRepeat: true,
    },
    {
      id: 'rx-new-2',
      remedy: 'Nux Vomica',
      potency: '30C',
      vehicle: 'Pills (Globules)',
      dosage: '4 pills HS',
    },
  ]);
  const [doctorNotes, setDoctorNotes] = useState<string>(
    'Continue Bryonia 200C for 2 weeks; review if acidity persists.'
  );
  const [fee, setFee] = useState<number>(500);
  const [feeStatus, setFeeStatus] = useState<'Paid' | 'Free' | 'Due'>('Paid');
  const [activeRemedySearchIndex, setActiveRemedySearchIndex] = useState<number | null>(null);

  // Repeat Previous Prescription handler
  const handleRepeatLastRx = () => {
    if (patient.pastVisits.length > 0) {
      const lastVisit = patient.pastVisits[0];
      if (lastVisit.prescriptions.length > 0) {
        setPrescriptions(
          lastVisit.prescriptions.map((rx, idx) => ({
            ...rx,
            id: `rx-repeat-${Date.now()}-${idx}`,
            isRepeat: true,
          }))
        );
      }
    }
  };

  // Add new remedy row
  const handleAddRemedy = () => {
    setPrescriptions((prev) => [
      ...prev,
      {
        id: `rx-new-${Date.now()}`,
        remedy: 'Arnica Montana',
        potency: '200C',
        vehicle: 'Pills (Globules)',
        dosage: '4 pills TDS',
        isRepeat: false,
      },
    ]);
  };

  // Remove remedy row
  const handleRemoveRemedy = (id: string) => {
    setPrescriptions((prev) => prev.filter((p) => p.id !== id));
  };

  // Update specific field in a prescription
  const handleUpdatePrescription = (
    id: string,
    field: keyof PrescriptionItem,
    value: string
  ) => {
    setPrescriptions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  // Submit consultation
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
          <h2 className="font-['Schibsted_Grotesk'] text-lg font-bold text-[#131C1A]">
            Today&#39;s Consultation
          </h2>
          <span className="font-['Spline_Sans_Mono'] text-xs text-[#5E706B]">
            21 Nov 2026 · 11:42 AM · Visit #{patient.totalVisits + 1}
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
          <kbd className="px-1 py-0.5 rounded text-[10px] font-['Spline_Sans_Mono'] bg-black/5 font-semibold">
            Alt+R
          </kbd>
        </button>
      </div>

      {/* 1. Reaction to Previous Remedy with 1-5 Hotkeys */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[#131C1A]">
            Medicine Effect
          </label>
          <span className="text-[10px] text-[#5E706B] font-['Spline_Sans_Mono']">
            Keys [1] to [5]
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5 bg-[#E9F0EE] p-1.5 rounded-xl">
          <button
            type="button"
            onClick={() => setReaction('Improved')}
            className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              reaction === 'Improved'
                ? 'bg-[#146C43] text-white shadow-xs'
                : 'text-[#3A4B47] hover:bg-white/60'
            }`}
          >
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Improved</span>
            </span>
            <kbd className={`px-1 rounded text-[9px] font-['Spline_Sans_Mono'] ${reaction === 'Improved' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5E706B]'}`}>1</kbd>
          </button>

          <button
            type="button"
            onClick={() => setReaction('No Change')}
            className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              reaction === 'No Change'
                ? 'bg-[#8F4F00] text-white shadow-xs'
                : 'text-[#3A4B47] hover:bg-white/60'
            }`}
          >
            <span className="flex items-center gap-1">
              <Minus className="w-3.5 h-3.5" />
              <span>No Change</span>
            </span>
            <kbd className={`px-1 rounded text-[9px] font-['Spline_Sans_Mono'] ${reaction === 'No Change' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5E706B]'}`}>2</kbd>
          </button>

          <button
            type="button"
            onClick={() => setReaction('Aggravated')}
            className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              reaction === 'Aggravated'
                ? 'bg-[#BA1A1A] text-white shadow-xs'
                : 'text-[#3A4B47] hover:bg-white/60'
            }`}
          >
            <span className="flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Aggravated</span>
            </span>
            <kbd className={`px-1 rounded text-[9px] font-['Spline_Sans_Mono'] ${reaction === 'Aggravated' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5E706B]'}`}>3</kbd>
          </button>

          <button
            type="button"
            onClick={() => setReaction('New')}
            className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              reaction === 'New'
                ? 'bg-[#0C5A7A] text-white shadow-xs'
                : 'text-[#3A4B47] hover:bg-white/60'
            }`}
          >
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New</span>
            </span>
            <kbd className={`px-1 rounded text-[9px] font-['Spline_Sans_Mono'] ${reaction === 'New' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5E706B]'}`}>4</kbd>
          </button>

          <button
            type="button"
            onClick={() => setReaction('First Visit')}
            className={`py-2 px-1 rounded-lg flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
              reaction === 'First Visit'
                ? 'bg-[#085E52] text-white shadow-xs'
                : 'text-[#3A4B47] hover:bg-white/60'
            }`}
          >
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>First Visit</span>
            </span>
            <kbd className={`px-1 rounded text-[9px] font-['Spline_Sans_Mono'] ${reaction === 'First Visit' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5E706B]'}`}>5</kbd>
          </button>
        </div>
      </div>

      {/* 2. Symptoms */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="complaints" className="text-xs font-bold text-[#131C1A]">
          Symptoms
        </label>
        <textarea
          id="complaints"
          rows={3}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Type patient symptoms, complaints, modalities..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7FAF8] text-sm text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52] focus:bg-white transition-all shadow-2xs resize-none"
        />
      </div>

      {/* 3. Prescription with Potency, Vehicle & Presets */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="font-['Schibsted_Grotesk'] text-xs font-bold text-[#131C1A] flex items-center gap-1.5">
            Prescription ({prescriptions.length})
          </span>
          <button
            type="button"
            onClick={handleAddRemedy}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#085E52] hover:text-[#0E7668] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Medicine</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] font-['Spline_Sans_Mono'] bg-[#E9F0EE] text-[#3A4B47]">
              Alt+A
            </kbd>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {prescriptions.map((rx, idx) => (
            <div
              key={rx.id}
              className="p-3.5 rounded-xl bg-[#F7FAF8] shadow-2xs flex flex-col gap-2.5"
            >
              {/* Row 1: Remedy + Potency + Vehicle + Delete */}
              <div className="grid grid-cols-12 gap-2 items-center">
                {/* Remedy Name Input with Autocomplete */}
                <div className="col-span-5 relative">
                  <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white rounded-lg shadow-2xs focus-within:ring-2 focus-within:ring-[#085E52]">
                    {rx.vehicle.includes('Drops') ? (
                      <Droplet className="w-4 h-4 text-[#085E52] shrink-0" />
                    ) : (
                      <Pill className="w-4 h-4 text-[#085E52] shrink-0" />
                    )}
                    <input
                      type="text"
                      value={rx.remedy}
                      onFocus={() => setActiveRemedySearchIndex(idx)}
                      onChange={(e) =>
                        handleUpdatePrescription(rx.id, 'remedy', e.target.value)
                      }
                      className="w-full text-xs font-semibold text-[#131C1A] bg-transparent border-0 p-0 focus:outline-none"
                      placeholder="Medicine Name"
                    />
                  </div>

                  {/* Simple Quick Autocomplete Dropdown */}
                  {activeRemedySearchIndex === idx && (
                    <div className="absolute z-20 left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-lg max-h-36 overflow-y-auto p-1">
                      {COMMON_REMEDIES.filter((r) =>
                        r.toLowerCase().includes(rx.remedy.toLowerCase())
                      )
                        .slice(0, 5)
                        .map((rem) => (
                          <button
                            key={rem}
                            type="button"
                            onMouseDown={() => {
                              handleUpdatePrescription(rx.id, 'remedy', rem);
                              setActiveRemedySearchIndex(null);
                            }}
                            className="w-full text-left px-3 py-1.5 text-xs hover:bg-[#D8F0E9] hover:text-[#085E52] font-medium rounded-md"
                          >
                            {rem}
                          </button>
                        ))}
                    </div>
                  )}
                </div>

                {/* Potency Dropdown */}
                <div className="col-span-3">
                  <select
                    value={rx.potency}
                    onChange={(e) =>
                      handleUpdatePrescription(rx.id, 'potency', e.target.value)
                    }
                    className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-xs font-['Spline_Sans_Mono'] font-bold text-[#085E52] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
                  >
                    {COMMON_POTENCIES.map((pot) => (
                      <option key={pot} value={pot}>
                        {pot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vehicle Selector */}
                <div className="col-span-3">
                  <select
                    value={rx.vehicle}
                    onChange={(e) =>
                      handleUpdatePrescription(
                        rx.id,
                        'vehicle',
                        e.target.value as DispensingVehicle
                      )
                    }
                    className="w-full px-2 py-2 rounded-lg bg-white shadow-2xs text-[11px] font-medium text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
                  >
                    {DISPENSING_VEHICLES.map((veh) => (
                      <option key={veh} value={veh}>
                        {veh}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Remove Remedy */}
                <div className="col-span-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveRemedy(rx.id)}
                    className="p-1 rounded text-[#5E706B] hover:text-[#BA1A1A] hover:bg-white transition-colors"
                    title="Remove medicine"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Row 2: Dosage Input + Presets */}
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  value={rx.dosage}
                  onChange={(e) =>
                    handleUpdatePrescription(rx.id, 'dosage', e.target.value)
                  }
                  placeholder="Dosage (e.g. 3 drops BD in water)"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white shadow-2xs text-xs text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
                />

                {/* Presets */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-[#5E706B] font-medium">Presets:</span>
                  {DOSAGE_MACROS.map((macro) => (
                    <button
                      key={macro}
                      type="button"
                      onClick={() => handleUpdatePrescription(rx.id, 'dosage', macro)}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white hover:bg-[#D8F0E9] text-[#085E52] shadow-2xs transition-colors"
                    >
                      {macro}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Course Duration */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[#131C1A]">
            Course Duration
          </label>
          <span className="text-[10px] text-[#5E706B] font-['Spline_Sans_Mono']">
            {durationDays} Days Supply
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { days: 3, label: '3 Days' },
            { days: 7, label: '1 Week (7d)' },
            { days: 15, label: '15 Days' },
            { days: 30, label: '1 Month (30d)' },
          ].map((item) => (
            <button
              key={item.days}
              type="button"
              onClick={() => setDurationDays(item.days)}
              className={`py-1.5 rounded-xl text-xs font-semibold transition-all ${
                durationDays === item.days
                  ? `${demo.bannerTokenBg} text-white shadow-xs`
                  : 'bg-[#E9F0EE] text-[#3A4B47] hover:bg-[#d8e3e0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Doctor's Notes & Consultation Fee */}
      <div className="grid grid-cols-12 gap-3 pt-1">
        <div className="col-span-8 flex flex-col gap-1.5">
          <label htmlFor="doctor-notes" className="text-xs font-bold text-[#131C1A]">
            Doctor Notes
          </label>
          <input
            id="doctor-notes"
            type="text"
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            placeholder="Follow-up notes..."
            className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] text-xs text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52] shadow-2xs"
          />
        </div>

        <div className="col-span-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="fee" className="text-xs font-bold text-[#131C1A]">
              Fee (Rs.)
            </label>
            <span className="text-[10px] text-[#085E52] font-semibold">{feeStatus}</span>
          </div>
          <div className="relative flex items-center">
            <input
              id="fee"
              type="number"
              value={fee}
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] text-xs font-['Spline_Sans_Mono'] font-bold text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52] shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* 5. Primary Action Button (Ctrl + Enter) */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSave}
          className={`w-full py-3 rounded-xl ${demo.actionButtonBg} text-white shadow-md flex items-center justify-center gap-2 text-sm font-bold transition-all active:scale-98`}
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>Save &amp; Next</span>
          <kbd className="px-2 py-0.5 rounded text-[11px] font-['Spline_Sans_Mono'] bg-white/20 text-white font-semibold">
            Ctrl + ↵
          </kbd>
        </button>
      </div>
    </section>
  );
};
