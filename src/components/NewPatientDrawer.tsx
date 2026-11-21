'use client';

import React, { useState } from 'react';
import { X, UserPlus, Phone, MapPin, User } from 'lucide-react';
import { Patient, getDemographicCohort, DEMOGRAPHIC_CONFIG } from '@/types';
import { LOCALITY_PRESETS } from '@/data/mockData';

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
  const [fullName, setFullName] = useState('');
  const [urduName, setUrduName] = useState('');
  const [relationType, setRelationType] = useState<'s/o' | 'w/o' | 'd/o'>('s/o');
  const [relativeName, setRelativeName] = useState('');
  const [relativeUrduName, setRelativeUrduName] = useState('');
  const [age, setAge] = useState<number>(35);
  const [gender, setGender] = useState<'Male' | 'Female' | 'Child'>('Male');
  const [phone, setPhone] = useState('0300-');
  const [locality, setLocality] = useState('Taxila Cantt');
  const [fee, setFee] = useState<number>(500);

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
      urduName: urduName.trim() || undefined,
      relationType,
      relativeName,
      relativeUrduName: relativeUrduName.trim() || undefined,
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
        <header className="px-6 py-4 bg-[#E9F0EE] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#085E52] text-white flex items-center justify-center font-['Schibsted_Grotesk'] text-sm font-bold shadow-xs">
              <UserPlus className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="font-['Schibsted_Grotesk'] text-lg font-bold text-[#131C1A]">
                  New Patient
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#D8F0E9] text-[#085E52] font-['Spline_Sans_Mono'] text-xs font-bold">
                  Token #T-{String(nextDailyToken).padStart(3, '0')}
                </span>
              </div>
              <span className="text-xs text-[#3A4B47]">
                Register for today&#39;s OPD
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#3A4B47] hover:bg-[#D8F0E9] hover:text-[#131C1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {/* Patient Name (English + Urdu) */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#131C1A]">
                Patient Name <span className="text-[#BA1A1A]">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Muhammad Tariq"
                className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              />
            </div>

            <div className="col-span-5 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#131C1A]">
                Urdu Name (نام)
              </label>
              <input
                type="text"
                dir="rtl"
                value={urduName}
                onChange={(e) => setUrduName(e.target.value)}
                placeholder="محمد طارق"
                className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm font-urdu text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              />
            </div>
          </div>

          {/* Relation + Guardian/Spouse Name */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#131C1A]">Relation</label>
              <select
                value={relationType}
                onChange={(e) => setRelationType(e.target.value as 's/o' | 'w/o' | 'd/o')}
                className="w-full px-2.5 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-xs font-bold text-[#085E52] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              >
                <option value="s/o">s/o (Son of)</option>
                <option value="w/o">w/o (Wife of)</option>
                <option value="d/o">d/o (Daughter of)</option>
              </select>
            </div>

            <div className="col-span-8 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#131C1A]">
                Guardian / Relative Name <span className="text-[#BA1A1A]">*</span>
              </label>
              <input
                type="text"
                required
                value={relativeName}
                onChange={(e) => setRelativeName(e.target.value)}
                placeholder="e.g. Abdul Rehman"
                className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              />
            </div>
          </div>

          {/* Age + Demographic Category */}
          <div className="grid grid-cols-12 gap-3 items-end">
            <div className="col-span-4 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#131C1A]">Age</label>
                {age >= 60 ? (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EDE8F5] text-[#2F293F]">
                    Senior
                  </span>
                ) : age < 15 ? (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FEF1D8] text-[#633600]">
                    Child
                  </span>
                ) : null}
              </div>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm font-['Spline_Sans_Mono'] font-bold text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              />
            </div>

            <div className="col-span-8 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#131C1A]">Category</label>
              <div className="grid grid-cols-3 gap-1 bg-[#E9F0EE] p-1 rounded-xl">
                {[
                  {
                    key: 'Male' as const,
                    label: 'Male',
                    activeClass: 'bg-[#2B6684] text-white shadow-xs',
                    dot: 'bg-[#2B6684]',
                  },
                  {
                    key: 'Female' as const,
                    label: 'Female',
                    activeClass: 'bg-[#8A3C59] text-white shadow-xs',
                    dot: 'bg-[#8A3C59]',
                  },
                  {
                    key: 'Child' as const,
                    label: 'Child',
                    activeClass: 'bg-[#B86B08] text-white shadow-xs',
                    dot: 'bg-[#B86B08]',
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setGender(item.key)}
                    className={`py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      gender === item.key
                        ? item.activeClass
                        : 'text-[#3A4B47] hover:bg-white/60'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${item.dot} ${
                        gender === item.key ? 'ring-1 ring-white' : ''
                      }`}
                    />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#131C1A]">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone className="w-4 h-4 text-[#5E706B] absolute left-3 pointer-events-none" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0300-1234567"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm font-['Spline_Sans_Mono'] text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
              />
            </div>
          </div>

          {/* Locality with 1-Tap Neighborhood Chips */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#131C1A]">
              Area / Locality
            </label>
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              placeholder="e.g. Taxila Cantt"
              className="w-full px-3 py-2 rounded-xl bg-[#F7FAF8] shadow-2xs text-sm text-[#131C1A] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
            />

            <div className="flex flex-wrap gap-1.5 pt-1">
              {LOCALITY_PRESETS.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocality(loc)}
                  className={`text-[11px] px-2.5 py-1 rounded-full transition-colors ${
                    locality === loc
                      ? 'bg-[#085E52] text-white'
                      : 'bg-[#E9F0EE] text-[#3A4B47] hover:bg-[#D8F0E9]'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* 1-Tap Consultation Fee Presets */}
          <div className="flex flex-col gap-2 pt-2">
            <label className="text-xs font-bold text-[#131C1A]">
              Consultation Fee
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[500, 300, 0].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setFee(amount)}
                  className={`py-2 rounded-xl text-xs font-['Spline_Sans_Mono'] font-bold transition-all shadow-2xs ${
                    fee === amount
                      ? 'bg-[#085E52] text-white shadow-xs'
                      : 'bg-[#F7FAF8] text-[#131C1A] hover:bg-[#E9F0EE]'
                  }`}
                >
                  {amount === 0 ? 'Free' : `Rs. ${amount}`}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setFee(0)}
                className="py-2 rounded-xl text-xs font-bold bg-[#FFE8DF] text-[#7A402A] hover:bg-[#ffdacf]"
              >
                Due
              </button>
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-4 mt-auto">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#085E52] text-white hover:bg-[#0E7668] shadow-md flex items-center justify-center gap-2 text-sm font-bold transition-all active:scale-98"
            >
              <UserPlus className="w-5 h-5 text-white" />
              <span>Save &amp; Start Visit</span>
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
};
