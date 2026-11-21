'use client';

import React, { useState } from 'react';
import { Search, Users, Banknote, Clock, TrendingUp } from 'lucide-react';
import { Patient, getDemographicCohort, DEMOGRAPHIC_CONFIG } from '@/types';

interface DailyRegisterViewProps {
  patients: Patient[];
}

export const DailyRegisterView: React.FC<DailyRegisterViewProps> = ({ patients }) => {
  const [filterText, setFilterText] = useState('');

  // Flatten consultations for today
  const allVisits = patients.flatMap((p) =>
    p.pastVisits.map((v) => ({
      ...v,
      patientName: p.fullName,
      patientUrdu: p.urduName,
      relation: `${p.relationType} ${p.relativeName}`,
      locality: p.locality,
      phone: p.phone,
      age: p.age,
      gender: p.gender,
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
    <div className="flex flex-col gap-6">
      {/* Title & Date Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="font-['Schibsted_Grotesk'] text-2xl font-bold tracking-tight text-[#131C1A]">
              Daily Register
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#085E52] text-white font-['Spline_Sans_Mono'] font-bold">
              Live Session
            </span>
          </div>
          <p className="text-xs text-[#3A4B47] mt-1">
            Saturday, 21 November 2026 · Morning &amp; Evening Sessions · Dr. Aslam Clinic
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#5E706B] absolute left-3 pointer-events-none" />
            <input
              type="search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search patient or medicine..."
              className="pl-9 pr-3 py-2 rounded-xl bg-white text-xs text-[#131C1A] placeholder:text-[#5E706B] focus:outline-none focus:ring-2 focus:ring-[#085E52] shadow-2xs w-64"
            />
          </div>
        </div>
      </div>

      {/* 4-Column KPI Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {/* KPI 1 */}
        <article className="rounded-2xl bg-[#122B27] text-white p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-[#8FE0D1]">Patients Seen</span>
          <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-white">48</span>
          <p className="text-[11px] text-[#8FE0D1]/80">Today&#39;s completed visits</p>
        </article>

        {/* KPI 2 */}
        <article className="rounded-2xl bg-[#D8F0E9] text-[#0E3B33] p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-[#0E3B33]">Total Fees</span>
          <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#085E52]">
            Rs. 22,500
          </span>
          <p className="text-[11px] text-[#3D665E]">Cash: Rs. 20,500 · Digital: Rs. 2,000</p>
        </article>

        {/* KPI 3 */}
        <article className="rounded-2xl bg-[#FFE8DF] text-[#4D2010] p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-[#4D2010]">New vs. Return</span>
          <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#7A402A]">
            11 : 37
          </span>
          <p className="text-[11px] text-[#7A402A]/80">23% New · 77% Return</p>
        </article>

        {/* KPI 4 */}
        <article className="rounded-2xl bg-[#D2EEFA] text-[#063245] p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-[#063245]">Avg. Time / Patient</span>
          <span className="font-['Schibsted_Grotesk'] text-3xl font-bold text-[#0C5A7A]">
            2m 18s
          </span>
          <p className="text-[11px] text-[#0C5A7A]/80">Across today&#39;s consultations</p>
        </article>
      </section>

      {/* Visual Throughput Chart + Outcome Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Hourly Patient Throughput */}
        <article className="lg:col-span-8 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between gap-4">
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#085E52]" />
                Patients / hr
              </span>
            </div>
          </div>

          {/* Bar Chart SVG */}
          <div className="w-full pt-3">
            <svg viewBox="0 0 680 140" className="w-full h-auto">
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
        <article className="lg:col-span-4 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between gap-4">
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

            {/* Demographic Cohort Distribution */}
            <div className="pt-2 border-t border-[#E1EBE8]/60 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#3A4B47] font-medium">Demographics</span>
                <span className="font-['Spline_Sans_Mono'] text-[#5E706B] text-[10px]">
                  48 visits
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden flex bg-[#E9F0EE]">
                <div className="h-full bg-[#2B6684]" style={{ width: '38%' }} title="Men 38%" />
                <div className="h-full bg-[#8A3C59]" style={{ width: '42%' }} title="Women 42%" />
                <div className="h-full bg-[#B86B08]" style={{ width: '12%' }} title="Children 12%" />
                <div className="h-full bg-[#5B556D]" style={{ width: '8%' }} title="Seniors 8%" />
              </div>
              <div className="grid grid-cols-4 gap-1 text-[10px]">
                <span className="flex items-center gap-1 text-[#2B6684] font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-[#2B6684] shrink-0" />
                  Men (18)
                </span>
                <span className="flex items-center gap-1 text-[#8A3C59] font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-[#8A3C59] shrink-0" />
                  Women (20)
                </span>
                <span className="flex items-center gap-1 text-[#B86B08] font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-[#B86B08] shrink-0" />
                  Child (6)
                </span>
                <span className="flex items-center gap-1 text-[#5B556D] font-semibold truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B556D] shrink-0" />
                  Senior (4)
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Consultation Log Table */}
      <section className="rounded-2xl bg-white p-6 shadow-xs flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-['Schibsted_Grotesk'] text-base font-bold text-[#131C1A]">
            Today&#39;s Log ({filteredVisits.length})
          </h3>
          <span className="text-xs text-[#5E706B]">
            Showing recorded consultations for today&#39;s session
          </span>
        </div>

        <div className="w-full overflow-x-auto rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-[#E9F0EE] text-[#131C1A]">
              <tr>
                <th className="px-4 py-3 font-bold rounded-l-lg">Token</th>
                <th className="px-4 py-3 font-bold">Patient &amp; Guardian</th>
                <th className="px-4 py-3 font-bold">Result</th>
                <th className="px-4 py-3 font-bold">Medicines</th>
                <th className="px-4 py-3 font-bold text-right rounded-r-lg">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1EBE8]/60">
              {filteredVisits.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#5E706B]">
                    No consultations found matching &quot;{filterText}&quot;
                  </td>
                </tr>
              ) : (
                filteredVisits.map((item, idx) => {
                  const cohort = getDemographicCohort(item.age, item.gender);
                  const demo = DEMOGRAPHIC_CONFIG[cohort];

                  return (
                    <tr key={idx} className="hover:bg-[#F1F5F4] transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1 h-5 rounded-full shrink-0 ${demo.barColor}`}
                            title={`${demo.label} (${item.age}y)`}
                          />
                          <span className="font-['Spline_Sans_Mono'] font-bold text-[#085E52]">
                            #T-{String(item.tokenNo).padStart(3, '0')}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-[#131C1A] flex items-center gap-1.5">
                          <span>{item.patientName}</span>
                          {item.patientUrdu && (
                            <span className="text-xs font-urdu text-[#085E52]">
                              ({item.patientUrdu})
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-['Spline_Sans_Mono'] font-bold px-1.5 py-0.5 rounded ${demo.chipBg} ${demo.chipText}`}
                          >
                            {item.age}y
                          </span>
                        </div>
                        <div className="text-[11px] text-[#5E706B]">
                          {item.relation} · {item.locality}
                        </div>
                      </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
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
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.prescriptions.map((rx, rIdx) => (
                          <span
                            key={rIdx}
                            className="px-2.5 py-0.5 rounded-full bg-[#D8F0E9] text-[#0E3B33] font-medium text-[11px]"
                          >
                            {rx.remedy} {rx.potency} ({rx.vehicle.split(' ')[0]})
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-['Spline_Sans_Mono'] font-bold text-right text-[#131C1A]">
                      Rs. {item.fee}
                    </td>
                  </tr>
                );
              })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
