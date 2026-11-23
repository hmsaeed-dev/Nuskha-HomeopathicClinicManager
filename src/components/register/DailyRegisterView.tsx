'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Patient } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { REACTION_CONFIG } from '@/constants/clinical';
import { formatCurrency, formatDate } from '@/utils/formatters';

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
      relation: `${p.relationType} ${p.relativeName}`,
      locality: p.locality,
      phone: p.phone,
      age: p.age,
      gender: p.gender,
      durationDays: v.durationDays,
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
            <h1 className="font-display text-2xl font-bold tracking-tight text-content-primary">
              Daily Register
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-primary text-white font-mono font-bold">
              Live Session
            </span>
          </div>
          <p className="text-xs text-content-secondary mt-1">
            {formatDate(new Date())} · {CLINIC_CONFIG.sessionTimings} · {CLINIC_CONFIG.doctorName} Clinic
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-content-muted absolute left-3 pointer-events-none" />
            <input
              type="search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search patient or medicine..."
              className="pl-9 pr-3 py-2 rounded-xl bg-white text-xs text-content-primary placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-2xs w-64"
            />
          </div>
        </div>
      </div>

      {/* 4-Column KPI Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {/* KPI 1 */}
        <article className="rounded-2xl bg-brand-dark text-white p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-brand-dark-accent">Patients Seen</span>
          <span className="font-display text-3xl font-bold text-white">48</span>
          <p className="text-[11px] text-brand-dark-accent/80">Today&#39;s completed visits</p>
        </article>

        {/* KPI 2 */}
        <article className="rounded-2xl bg-brand-primary-container text-brand-primary-dark p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-brand-primary-dark">Total Fees</span>
          <span className="font-display text-3xl font-bold text-brand-primary">
            {formatCurrency(22500)}
          </span>
          <p className="text-[11px] text-brand-secondary">
            Cash: {formatCurrency(20500)} · Digital: {formatCurrency(2000)}
          </p>
        </article>

        {/* KPI 3 */}
        <article className="rounded-2xl bg-demo-child-container text-demo-child-text p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-demo-child-text">New vs. Return</span>
          <span className="font-display text-3xl font-bold text-demo-child">
            11 : 37
          </span>
          <p className="text-[11px] text-demo-child/80">23% New · 77% Return</p>
        </article>

        {/* KPI 4 */}
        <article className="rounded-2xl bg-demo-male-container text-demo-male-text p-5 shadow-xs flex flex-col justify-between gap-3">
          <span className="text-xs font-semibold text-demo-male-text">Avg. Time / Patient</span>
          <span className="font-display text-3xl font-bold text-demo-male">
            2m 18s
          </span>
          <p className="text-[11px] text-demo-male/80">Across today&#39;s consultations</p>
        </article>
      </section>

      {/* Visual Throughput Chart + Outcome Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Hourly Patient Throughput */}
        <article className="lg:col-span-8 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-sm font-bold text-content-primary">
                Patients per Hour
              </h3>
              <span className="text-xs text-content-muted">
                Peak 10 AM – 12 PM · 48 visits logged
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-brand-primary font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                Patients / hr
              </span>
            </div>
          </div>

          {/* Bar Chart SVG */}
          <div className="w-full pt-3">
            <svg viewBox="0 0 680 140" className="w-full h-auto">
              <line x1="20" y1="110" x2="660" y2="110" stroke="var(--color-border-subtle)" strokeWidth="1.5" />

              {/* 9 AM */}
              <rect x="36" y="65" width="38" height="45" rx="6" fill="var(--color-brand-primary-hover)" />
              <text x="55" y="58" textAnchor="middle" fill="var(--color-content-primary)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">6</text>
              <text x="55" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">9 AM</text>

              {/* 10 AM */}
              <rect x="108" y="30" width="38" height="80" rx="6" fill="var(--color-brand-primary)" />
              <text x="127" y="23" textAnchor="middle" fill="var(--color-brand-primary)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">11</text>
              <text x="127" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">10 AM</text>

              {/* 11 AM */}
              <rect x="180" y="22" width="38" height="88" rx="6" fill="var(--color-brand-primary)" />
              <text x="199" y="15" textAnchor="middle" fill="var(--color-brand-primary)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">12</text>
              <text x="199" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">11 AM</text>

              {/* 12 PM */}
              <rect x="252" y="50" width="38" height="60" rx="6" fill="var(--color-brand-primary-hover)" />
              <text x="271" y="43" textAnchor="middle" fill="var(--color-content-primary)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">8</text>
              <text x="271" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">12 PM</text>

              {/* 1 PM */}
              <rect x="324" y="85" width="38" height="25" rx="6" fill="var(--color-brand-primary-container)" />
              <text x="343" y="78" textAnchor="middle" fill="var(--color-content-muted)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">3</text>
              <text x="343" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">1 PM</text>

              {/* 4 PM */}
              <rect x="396" y="50" width="38" height="60" rx="6" fill="var(--color-brand-primary-hover)" />
              <text x="415" y="43" textAnchor="middle" fill="var(--color-content-primary)" fontSize="11" fontFamily="Spline Sans Mono" fontWeight="bold">8</text>
              <text x="415" y="128" textAnchor="middle" fill="var(--color-content-muted)" fontSize="10">4 PM</text>

              {/* 5 PM (Upcoming) */}
              <rect x="468" y="104" width="38" height="6" rx="3" fill="var(--color-brand-surface-subtle)" />
              <text x="487" y="128" textAnchor="middle" fill="var(--color-border-strong)" fontSize="10">5 PM</text>

              {/* 6 PM (Upcoming) */}
              <rect x="540" y="104" width="38" height="6" rx="3" fill="var(--color-brand-surface-subtle)" />
              <text x="559" y="128" textAnchor="middle" fill="var(--color-border-strong)" fontSize="10">6 PM</text>

              {/* 7 PM (Upcoming) */}
              <rect x="612" y="104" width="38" height="6" rx="3" fill="var(--color-brand-surface-subtle)" />
              <text x="631" y="128" textAnchor="middle" fill="var(--color-border-strong)" fontSize="10">7 PM</text>
            </svg>
          </div>
        </article>

        {/* Case Mix & Outcomes */}
        <article className="lg:col-span-4 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between gap-4">
          <h3 className="font-display text-sm font-bold text-content-primary">
            Patient Progress
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-content-secondary font-medium">Overall Improvement</span>
              <span className="font-mono text-reaction-improved font-bold">62% Improved</span>
            </div>

            {/* Stacked Outcome Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-brand-surface-subtle">
              <div className="h-full bg-reaction-improved" style={{ width: '62%' }} title="Improved 62%" />
              <div className="h-full bg-reaction-stable" style={{ width: '19%' }} title="No Change 19%" />
              <div className="h-full bg-reaction-new" style={{ width: '15%' }} title="New Visit 15%" />
              <div className="h-full bg-reaction-aggravated" style={{ width: '4%' }} title="Aggravated 4%" />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <span className="flex items-center gap-1.5 text-reaction-improved font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-reaction-improved" />
                Improved (30)
              </span>
              <span className="flex items-center gap-1.5 text-reaction-stable font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-reaction-stable" />
                No Change (9)
              </span>
              <span className="flex items-center gap-1.5 text-reaction-new font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-reaction-new" />
                New Visit (7)
              </span>
              <span className="flex items-center gap-1.5 text-reaction-aggravated font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-reaction-aggravated" />
                Aggravated (2)
              </span>
            </div>

            {/* Demographic Cohort Distribution */}
            <div className="pt-2 border-t border-border-subtle/60 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-content-secondary font-medium">Demographics</span>
                <span className="font-mono text-content-muted text-[10px]">
                  48 visits
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden flex bg-brand-surface-subtle">
                <div className="h-full bg-demo-male" style={{ width: '38%' }} title="Men 38%" />
                <div className="h-full bg-demo-female" style={{ width: '42%' }} title="Women 42%" />
                <div className="h-full bg-demo-child" style={{ width: '12%' }} title="Children 12%" />
                <div className="h-full bg-demo-senior" style={{ width: '8%' }} title="Seniors 8%" />
              </div>
              <div className="grid grid-cols-4 gap-1 text-[10px]">
                <span className="flex items-center gap-1 text-demo-male font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-demo-male shrink-0" />
                  Men (18)
                </span>
                <span className="flex items-center gap-1 text-demo-female font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-demo-female shrink-0" />
                  Women (20)
                </span>
                <span className="flex items-center gap-1 text-demo-child font-semibold truncate">
                  <span className="w-2 h-2 rounded-full bg-demo-child shrink-0" />
                  Child (6)
                </span>
                <span className="flex items-center gap-1 text-demo-senior font-semibold truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-demo-senior shrink-0" />
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
          <h3 className="font-display text-base font-bold text-content-primary">
            Today&#39;s Log ({filteredVisits.length})
          </h3>
          <span className="text-xs text-content-muted">
            Showing recorded consultations for today&#39;s session
          </span>
        </div>

        <div className="w-full overflow-x-auto rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-brand-surface-subtle text-content-primary">
              <tr>
                <th className="px-4 py-3 font-bold rounded-l-lg">#</th>
                <th className="px-4 py-3 font-bold">Patient &amp; Guardian</th>
                <th className="px-4 py-3 font-bold">Result</th>
                <th className="px-4 py-3 font-bold">Medicines</th>
                <th className="px-4 py-3 font-bold text-right rounded-r-lg">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/60">
              {filteredVisits.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-content-muted">
                    No consultations found matching &quot;{filterText}&quot;
                  </td>
                </tr>
              ) : (
                filteredVisits.map((item, idx) => {
                  const cohort = getDemographicCohort(item.age, item.gender);
                  const demo = DEMOGRAPHIC_CONFIG[cohort];
                  const reactionMeta = REACTION_CONFIG[item.reaction] || REACTION_CONFIG['First Visit'];

                  return (
                    <tr key={idx} className="hover:bg-brand-surface transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1 h-5 rounded-full shrink-0 ${demo.barColor}`}
                            title={`${demo.label} (${item.age}y)`}
                          />
                          <span className="font-mono font-bold text-brand-primary">
                            #{item.tokenNo}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-content-primary flex items-center gap-1.5">
                          <span>{item.patientName}</span>
                          <span
                            className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${demo.chipBg} ${demo.chipText}`}
                          >
                            {item.age}y
                          </span>
                        </div>
                        <div className="text-[11px] text-content-muted">
                          {item.relation} · {item.locality}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${reactionMeta.badgeClass}`}>
                          {item.reaction}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.prescriptions.map((rx, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2.5 py-0.5 rounded-full bg-brand-primary-container text-brand-primary-dark font-medium text-[11px]"
                            >
                              {rx.remedy} {rx.potency} ({rx.vehicle.split(' ')[0]})
                            </span>
                          ))}
                          {item.durationDays && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-surface text-content-muted font-mono font-bold">
                              {item.durationDays}d
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-right text-content-primary">
                        {formatCurrency(item.fee)}
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
