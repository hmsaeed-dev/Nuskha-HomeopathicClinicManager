'use client';

import React, { useState } from 'react';
import {
  Users,
  Banknote,
  Activity,
  Timer,
  Search,
  Filter,
  TrendingUp,
  Download,
  X,
} from 'lucide-react';
import { Patient, PastVisit } from '@/types';

interface DailyRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  patients: Patient[];
}

export const DailyRegisterModal: React.FC<DailyRegisterModalProps> = ({
  isOpen,
  onClose,
  patients,
}) => {
  const [filterText, setFilterText] = useState('');

  if (!isOpen) return null;

  // Flatten consultations for today
  const allVisits = patients.flatMap((p) =>
    p.pastVisits.map((v) => ({
      ...v,
      patientName: p.fullName,
      patientUrdu: p.urduName,
      relation: `${p.relationType} ${p.relativeName}`,
      locality: p.locality,
      phone: p.phone,
    }))
  );

  const filteredVisits = allVisits.filter(
    (v) =>
      v.patientName.toLowerCase().includes(filterText.toLowerCase()) ||
      v.relation.toLowerCase().includes(filterText.toLowerCase()) ||
      v.prescriptions.some((rx) =>
        rx.remedy.toLowerCase().includes(filterText.toLowerCase())
      )
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="w-full max-w-6xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <header className="px-6 py-4 bg-[#E9F0EE] flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="font-['Schibsted_Grotesk'] text-xl font-bold text-[#131C1A]">
                Daily Register
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#085E52] text-white font-['Spline_Sans_Mono'] font-bold">
                Live Session
              </span>
            </div>
            <p className="text-xs text-[#3A4B47] mt-0.5">
              Saturday, 21 November 2026 · Morning &amp; Evening Sessions · Dr. Aslam Clinic
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#3A4B47] hover:bg-[#D8F0E9] hover:text-[#131C1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* 4-Column KPI Strip */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1 */}
            <article className="rounded-xl bg-[#122B27] text-white p-4 shadow-sm flex flex-col justify-between gap-2">
              <span className="text-xs font-semibold text-[#8FE0D1]">Patients Seen</span>
              <div className="flex items-baseline gap-2">
                <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-white">48</span>
                <span className="font-['Spline_Sans_Mono'] text-xs text-[#8FE0D1]">/ 100 target</span>
              </div>
              <p className="text-[11px] text-[#8FE0D1]/80">3 patients waiting in queue</p>
            </article>

            {/* KPI 2 */}
            <article className="rounded-xl bg-[#D8F0E9] text-[#0E3B33] p-4 shadow-sm flex flex-col justify-between gap-2">
              <span className="text-xs font-semibold text-[#0E3B33]">Total Fees</span>
              <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#085E52]">
                Rs. 22,500
              </span>
              <p className="text-[11px] text-[#3D665E]">Cash: Rs. 20,500 · Digital: Rs. 2,000</p>
            </article>

            {/* KPI 3 */}
            <article className="rounded-xl bg-[#FFE8DF] text-[#4D2010] p-4 shadow-sm flex flex-col justify-between gap-2">
              <span className="text-xs font-semibold text-[#4D2010]">New vs. Return</span>
              <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#7A402A]">
                11 : 37
              </span>
              <p className="text-[11px] text-[#7A402A]/80">23% New · 77% Return</p>
            </article>

            {/* KPI 4 */}
            <article className="rounded-xl bg-[#D2EEFA] text-[#063245] p-4 shadow-sm flex flex-col justify-between gap-2">
              <span className="text-xs font-semibold text-[#063245]">Avg. Time / Patient</span>
              <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#0C5A7A]">
                2m 18s
              </span>
              <p className="text-[11px] text-[#0C5A7A]/80">On track for 100</p>
            </article>
          </section>

          {/* Visual Throughput Chart + Outcome Breakdown */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Hourly Patient Throughput */}
            <article className="lg:col-span-8 rounded-2xl bg-[#F7FAF8] p-5 shadow-2xs flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-['Schibsted_Grotesk'] text-sm font-bold text-[#131C1A]">
                    Patients per Hour
                  </h3>
                  <span className="text-xs text-[#5E706B]">
                    Peak 10 AM – 12 PM · 48 visits logged
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-[#085E52] font-semibold">
                    <span className="w-2.5 h-2.5 rounded bg-[#085E52]" />
                    Patients / hr
                  </span>
                  <span className="flex items-center gap-1.5 text-[#5E706B]">
                    <span className="w-2.5 h-2.5 rounded bg-[#D8F0E9]" />
                    Target (10/hr)
                  </span>
                </div>
              </div>

              {/* Bar Chart SVG */}
              <div className="w-full pt-2">
                <svg viewBox="0 0 680 140" className="w-full h-auto">
                  <line x1="20" y1="40" x2="660" y2="40" stroke="#D8F0E9" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="20" y1="110" x2="660" y2="110" stroke="#C9D8D3" strokeWidth="1.5" />

                  {/* 9 AM */}
                  <rect x="36" y="65" width="38" height="45" rx="6" fill="#0E7668" />
                  <text x="55" y="58" textAnchor="middle" fill="#131C1A" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">6</text>
                  <text x="55" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">9 AM</text>

                  {/* 10 AM */}
                  <rect x="108" y="30" width="38" height="80" rx="6" fill="#085E52" />
                  <text x="127" y="23" textAnchor="middle" fill="#085E52" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">11</text>
                  <text x="127" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">10 AM</text>

                  {/* 11 AM */}
                  <rect x="180" y="22" width="38" height="88" rx="6" fill="#085E52" />
                  <text x="199" y="15" textAnchor="middle" fill="#085E52" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">12</text>
                  <text x="199" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">11 AM</text>

                  {/* 12 PM */}
                  <rect x="252" y="50" width="38" height="60" rx="6" fill="#0E7668" />
                  <text x="271" y="43" textAnchor="middle" fill="#131C1A" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">8</text>
                  <text x="271" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">12 PM</text>

                  {/* 1 PM */}
                  <rect x="324" y="85" width="38" height="25" rx="6" fill="#D8F0E9" />
                  <text x="343" y="78" textAnchor="middle" fill="#5E706B" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">3</text>
                  <text x="343" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">1 PM</text>

                  {/* 4 PM */}
                  <rect x="396" y="50" width="38" height="60" rx="6" fill="#0E7668" />
                  <text x="415" y="43" textAnchor="middle" fill="#131C1A" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">8</text>
                  <text x="415" y="128" textAnchor="middle" fill="#5E706B" fontSize="10">4 PM</text>

                  {/* 5 PM (Upcoming) */}
                  <rect x="468" y="104" width="38" height="6" rx="3" fill="#E9F0EE" />
                  <text x="487" y="128" textAnchor="middle" fill="#8FA59E" fontSize="10">5 PM</text>

                  {/* 6 PM (Upcoming) */}
                  <rect x="540" y="104" width="38" height="6" rx="3" fill="#E9F0EE" />
                  <text x="559" y="128" textAnchor="middle" fill="#8FA59E" fontSize="10">6 PM</text>

                  {/* 7 PM (Upcoming) */}
                  <rect x="612" y="104" width="38" height="6" rx="3" fill="#E9F0EE" />
                  <text x="631" y="128" textAnchor="middle" fill="#8FA59E" fontSize="10">7 PM</text>
                </svg>
              </div>
            </article>

            {/* Case Mix & Outcomes */}
            <article className="lg:col-span-4 rounded-2xl bg-[#F7FAF8] p-5 shadow-2xs flex flex-col justify-between gap-3">
              <h3 className="font-['Schibsted_Grotesk'] text-sm font-bold text-[#131C1A]">
                Patient Progress
              </h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#3A4B47] font-medium">Overall Improvement</span>
                  <span className="font-['Spline_Sans_Mono'] text-[#146C43] font-bold">62% Improved</span>
                </div>

                {/* Stacked Outcome Bar */}
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#E9F0EE]">
                  <div className="h-full bg-[#146C43]" style={{ width: '62%' }} title="Improved 62%" />
                  <div className="h-full bg-[#8F4F00]" style={{ width: '19%' }} title="No Change 19%" />
                  <div className="h-full bg-[#0C5A7A]" style={{ width: '15%' }} title="New Visit 15%" />
                  <div className="h-full bg-[#BA1A1A]" style={{ width: '4%' }} title="Aggravated 4%" />
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <span className="flex items-center gap-1.5 text-[#146C43] font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#146C43]" />
                    Improved (30)
                  </span>
                  <span className="flex items-center gap-1.5 text-[#8F4F00] font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8F4F00]" />
                    No Change (9)
                  </span>
                  <span className="flex items-center gap-1.5 text-[#0C5A7A] font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0C5A7A]" />
                    New Visit (7)
                  </span>
                  <span className="flex items-center gap-1.5 text-[#BA1A1A] font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A]" />
                    Aggravated (2)
                  </span>
                </div>
              </div>
            </article>
          </section>

          {/* Consultation Log Table */}
          <section className="rounded-2xl bg-[#F7FAF8] p-5 shadow-2xs flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-['Schibsted_Grotesk'] text-sm font-bold text-[#131C1A]">
                Today&#39;s Log ({filteredVisits.length})
              </h3>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#5E706B] absolute left-2.5 pointer-events-none" />
                <input
                  type="search"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Search patient or medicine..."
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-white shadow-2xs text-xs text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52]"
                />
              </div>
            </div>

            <div className="w-full overflow-x-auto rounded-xl bg-white shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-[#E9F0EE] text-[#131C1A]">
                  <tr>
                    <th className="px-4 py-2.5 font-bold">Token</th>
                    <th className="px-4 py-2.5 font-bold">Patient &amp; Guardian</th>
                    <th className="px-4 py-2.5 font-bold">Result</th>
                    <th className="px-4 py-2.5 font-bold">Medicines</th>
                    <th className="px-4 py-2.5 font-bold text-right">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1EBE8]/60">
                  {filteredVisits.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F1F5F4] transition-colors">
                      <td className="px-4 py-2.5 font-['Spline_Sans_Mono'] font-bold text-[#085E52]">
                        #T-{String(item.tokenNo).padStart(3, '0')}
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="font-bold text-[#131C1A] flex items-center gap-1.5">
                          <span>{item.patientName}</span>
                          {item.patientUrdu && (
                            <span className="text-xs font-urdu text-[#085E52]">
                              ({item.patientUrdu})
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#5E706B]">
                          {item.relation} · {item.locality}
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                            item.reaction === 'Improved'
                              ? 'bg-[#D1F2E1] text-[#146C43]'
                              : item.reaction === 'Aggravated'
                              ? 'bg-[#FFDAD6] text-[#BA1A1A]'
                              : item.reaction === 'No Change'
                              ? 'bg-[#FFE5C2] text-[#8F4F00]'
                              : 'bg-[#D2EEFA] text-[#0C5A7A]'
                          }`}
                        >
                          {item.reaction}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex flex-wrap gap-1">
                          {item.prescriptions.map((rx, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2 py-0.5 rounded bg-[#D8F0E9] text-[#0E3B33] font-medium text-[11px]"
                            >
                              {rx.remedy} {rx.potency} ({rx.vehicle.split(' ')[0]})
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-2.5 font-['Spline_Sans_Mono'] font-bold text-right text-[#131C1A]">
                        Rs. {item.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
