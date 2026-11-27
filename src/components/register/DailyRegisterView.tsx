'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Droplet,
  Pill,
  Clock,
  Award,
  CircleDollarSign,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import { Patient, ReactionType } from '@/types';
import { getDemographicCohort } from '@/utils/demographics';
import { useSettingsContext } from '@/context/SettingsContext';
import { REACTION_CONFIG } from '@/constants/clinical';
import { formatCurrency, formatDate } from '@/utils/formatters';

type TimeHorizon = 'daily' | 'weekly' | 'monthly' | 'yearly';
type OutcomeFilter = 'all' | 'Improved' | 'No Change' | 'Decline' | 'First Visit' | 'dues';

interface DailyRegisterViewProps {
  patients: Patient[];
  onOpenVisit?: (patientId: string, visitId: string) => void;
}

interface EnrichedVisit {
  id: string;
  patientId: string;
  patientName: string;
  relation: string;
  locality: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child';
  date: string;
  parsedDate: Date;
  tokenNo: number;
  reaction: ReactionType;
  symptoms: string;
  prescriptions: Array<{
    id: string;
    remedy: string;
    potency: string;
    vehicle: string;
    dosage: string;
    isRepeat?: boolean;
  }>;
  durationDays?: number;
  fee: number;
  feeStatus: 'Paid' | 'Free' | 'Due';
  doctorNotes?: string;
}

export const DailyRegisterView: React.FC<DailyRegisterViewProps> = ({
  patients,
  onOpenVisit,
}) => {
  const { clinicConfig } = useSettingsContext();

  // Active Horizon: Daily, Weekly, Monthly, Yearly
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>('daily');
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [filterText, setFilterText] = useState('');
  const [outcomeFilter, setOutcomeFilter] = useState<OutcomeFilter>('all');
  const [tokenSortAsc, setTokenSortAsc] = useState<boolean>(true);

  // Parse all visits across the database with dates and patient demographic info
  const allVisits: EnrichedVisit[] = useMemo(() => {
    return patients.flatMap((p) =>
      p.pastVisits.map((v) => {
        let parsed = new Date(v.date);
        if (isNaN(parsed.getTime())) {
          parsed = new Date();
        }
        return {
          ...v,
          patientName: p.fullName,
          relation: `${p.relationType} ${p.relativeName}`,
          locality: p.locality,
          phone: p.phone,
          age: p.age,
          gender: p.gender,
          parsedDate: parsed,
        };
      })
    );
  }, [patients]);

  // Navigate back/forward in time based on selected horizon
  const handleNavigatePeriod = (direction: -1 | 1) => {
    const newDate = new Date(selectedDate);
    if (timeHorizon === 'daily') {
      newDate.setDate(newDate.getDate() + direction);
    } else if (timeHorizon === 'weekly') {
      newDate.setDate(newDate.getDate() + direction * 7);
    } else if (timeHorizon === 'monthly') {
      newDate.setMonth(newDate.getMonth() + direction);
    } else if (timeHorizon === 'yearly') {
      newDate.setFullYear(newDate.getFullYear() + direction);
    }
    setSelectedDate(newDate);
  };

  const handleResetToToday = () => {
    setSelectedDate(new Date());
  };

  // Filter visits matching the selected time horizon
  const horizonVisits = useMemo(() => {
    const targetYear = selectedDate.getFullYear();
    const targetMonth = selectedDate.getMonth();
    const targetDay = selectedDate.getDate();

    if (timeHorizon === 'daily') {
      return allVisits.filter((v) => {
        const d = v.parsedDate;
        return (
          d.getFullYear() === targetYear &&
          d.getMonth() === targetMonth &&
          d.getDate() === targetDay
        );
      });
    }

    if (timeHorizon === 'weekly') {
      // Find start of week (Monday) and end of week (Sunday)
      const currentDay = selectedDate.getDay();
      const diffToMonday = (currentDay === 0 ? -6 : 1) - currentDay;
      const startOfWeek = new Date(selectedDate);
      startOfWeek.setDate(selectedDate.getDate() + diffToMonday);
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      return allVisits.filter((v) => {
        return v.parsedDate >= startOfWeek && v.parsedDate <= endOfWeek;
      });
    }

    if (timeHorizon === 'monthly') {
      return allVisits.filter((v) => {
        const d = v.parsedDate;
        return d.getFullYear() === targetYear && d.getMonth() === targetMonth;
      });
    }

    // Yearly
    return allVisits.filter((v) => {
      return v.parsedDate.getFullYear() === targetYear;
    });
  }, [allVisits, timeHorizon, selectedDate]);

  // Compute Period Label
  const periodLabel = useMemo(() => {
    const isToday =
      selectedDate.toDateString() === new Date().toDateString();

    if (timeHorizon === 'daily') {
      return isToday
        ? `Today · ${formatDate(selectedDate)}`
        : formatDate(selectedDate);
    }

    if (timeHorizon === 'weekly') {
      const currentDay = selectedDate.getDay();
      const diffToMonday = (currentDay === 0 ? -6 : 1) - currentDay;
      const startOfWeek = new Date(selectedDate);
      startOfWeek.setDate(selectedDate.getDate() + diffToMonday);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const startFmt = startOfWeek.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
      const endFmt = endOfWeek.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      return `${startFmt} – ${endFmt}`;
    }

    if (timeHorizon === 'monthly') {
      return selectedDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    }

    return `Year ${selectedDate.getFullYear()}`;
  }, [timeHorizon, selectedDate]);

  // Dynamic Metrics Aggregations
  const metrics = useMemo(() => {
    const totalPatients = horizonVisits.length;
    const totalFees = horizonVisits.reduce((acc, v) => acc + (v.fee || 0), 0);
    const totalPaid = horizonVisits
      .filter((v) => v.feeStatus === 'Paid')
      .reduce((acc, v) => acc + (v.fee || 0), 0);
    const totalDue = horizonVisits
      .filter((v) => v.feeStatus === 'Due')
      .reduce((acc, v) => acc + (v.fee || 0), 0);

    const improvedCount = horizonVisits.filter((v) => v.reaction === 'Improved').length;
    const stableCount = horizonVisits.filter((v) => v.reaction === 'No Change').length;
    const declineCount = horizonVisits.filter((v) => v.reaction === 'Decline').length;
    const firstVisitCount = horizonVisits.filter((v) => v.reaction === 'First Visit').length;

    const followUps = improvedCount + stableCount + declineCount;
    const improvementRate = followUps > 0 ? Math.round((improvedCount / followUps) * 100) : 0;

    // Demographic Counts
    const maleCount = horizonVisits.filter((v) => getDemographicCohort(v.age, v.gender) === 'Male').length;
    const femaleCount = horizonVisits.filter((v) => getDemographicCohort(v.age, v.gender) === 'Female').length;
    const childCount = horizonVisits.filter((v) => getDemographicCohort(v.age, v.gender) === 'Child').length;
    const seniorCount = horizonVisits.filter((v) => getDemographicCohort(v.age, v.gender) === 'Senior').length;

    // Remedy Distribution (Leaderboard)
    const remedyMap: Record<string, { count: number; potency: string; vehicle: string }> = {};
    let totalDrops = 0;
    let totalPills = 0;

    horizonVisits.forEach((v) => {
      v.prescriptions.forEach((rx) => {
        if (!remedyMap[rx.remedy]) {
          remedyMap[rx.remedy] = { count: 0, potency: rx.potency, vehicle: rx.vehicle };
        }
        remedyMap[rx.remedy].count += 1;
        if (rx.vehicle.toLowerCase().includes('drop') || rx.vehicle.toLowerCase().includes('tincture')) {
          totalDrops += 1;
        } else {
          totalPills += 1;
        }
      });
    });

    const topRemedies = Object.entries(remedyMap)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    const totalRx = totalDrops + totalPills;
    const dropsPercent = totalRx > 0 ? Math.round((totalDrops / totalRx) * 100) : 50;
    const pillsPercent = 100 - dropsPercent;

    return {
      totalPatients,
      totalFees,
      totalPaid,
      totalDue,
      improvedCount,
      stableCount,
      declineCount,
      firstVisitCount,
      improvementRate,
      demographics: {
        male: maleCount,
        female: femaleCount,
        child: childCount,
        senior: seniorCount,
      },
      topRemedies,
      dropsPercent,
      pillsPercent,
    };
  }, [horizonVisits]);

  // Dynamic Demographics Donut (Circle) Chart Calculation
  const demoChart = useMemo(() => {
    const total = metrics.totalPatients;
    const { male, female, child, senior } = metrics.demographics;
    const radius = 36;
    const circumference = 2 * Math.PI * radius; // ~226.195

    if (total === 0) {
      return {
        male: { count: 0, pct: 0, dasharray: '0 999', offset: 0 },
        female: { count: 0, pct: 0, dasharray: '0 999', offset: 0 },
        child: { count: 0, pct: 0, dasharray: '0 999', offset: 0 },
        senior: { count: 0, pct: 0, dasharray: '0 999', offset: 0 },
        radius,
        circumference,
        isEmpty: true,
      };
    }

    const mLen = (male / total) * circumference;
    const fLen = (female / total) * circumference;
    const cLen = (child / total) * circumference;
    const sLen = (senior / total) * circumference;

    return {
      male: {
        count: male,
        pct: Math.round((male / total) * 100),
        dasharray: `${mLen} ${circumference - mLen}`,
        offset: 0,
      },
      female: {
        count: female,
        pct: Math.round((female / total) * 100),
        dasharray: `${fLen} ${circumference - fLen}`,
        offset: -mLen,
      },
      child: {
        count: child,
        pct: Math.round((child / total) * 100),
        dasharray: `${cLen} ${circumference - cLen}`,
        offset: -(mLen + fLen),
      },
      senior: {
        count: senior,
        pct: Math.round((senior / total) * 100),
        dasharray: `${sLen} ${circumference - sLen}`,
        offset: -(mLen + fLen + cLen),
      },
      radius,
      circumference,
      isEmpty: false,
    };
  }, [metrics]);

  // Chart Data Generator based on active horizon
  const chartBars = useMemo(() => {
    if (timeHorizon === 'daily') {
      const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
      return hours.map((hour, idx) => {
        // Distribute visits dynamically across hours
        const count = horizonVisits.filter((_, vIdx) => vIdx % hours.length === idx).length;
        return { label: hour, value: count };
      });
    }

    if (timeHorizon === 'weekly') {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return days.map((day, idx) => {
        // Match day of week (Monday=1, Sunday=0)
        const dayNum = (idx + 1) % 7;
        const count = horizonVisits.filter((v) => v.parsedDate.getDay() === dayNum).length;
        return { label: day, value: count };
      });
    }

    if (timeHorizon === 'monthly') {
      const weeks = ['Week 1 (1–7)', 'Week 2 (8–14)', 'Week 3 (15–21)', 'Week 4 (22–31)'];
      return weeks.map((wLabel, idx) => {
        const count = horizonVisits.filter((v) => {
          const day = v.parsedDate.getDate();
          if (idx === 0) return day >= 1 && day <= 7;
          if (idx === 1) return day >= 8 && day <= 14;
          if (idx === 2) return day >= 15 && day <= 21;
          return day >= 22;
        }).length;
        return { label: wLabel, value: count };
      });
    }

    // Yearly
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((month, idx) => {
      const count = horizonVisits.filter((v) => v.parsedDate.getMonth() === idx).length;
      return { label: month, value: count };
    });
  }, [timeHorizon, horizonVisits]);

  const maxChartValue = useMemo(() => {
    const max = Math.max(...chartBars.map((b) => b.value), 1);
    return max;
  }, [chartBars]);

  // Filtered and sorted visits for the consultation ledger
  const filteredVisits = useMemo(() => {
    const list = horizonVisits.filter((v) => {
      // Search text filter
      const matchesSearch =
        v.patientName.toLowerCase().includes(filterText.toLowerCase()) ||
        v.relation.toLowerCase().includes(filterText.toLowerCase()) ||
        v.locality.toLowerCase().includes(filterText.toLowerCase()) ||
        v.prescriptions.some((rx) => rx.remedy.toLowerCase().includes(filterText.toLowerCase()));

      if (!matchesSearch) return false;

      // Outcome tag filter
      if (outcomeFilter === 'all') return true;
      if (outcomeFilter === 'dues') return v.feeStatus === 'Due';
      return v.reaction === outcomeFilter;
    });

    return [...list].sort((a, b) => {
      if (timeHorizon === 'daily') {
        return tokenSortAsc ? a.tokenNo - b.tokenNo : b.tokenNo - a.tokenNo;
      }
      const dateDiff = b.parsedDate.getTime() - a.parsedDate.getTime();
      if (dateDiff !== 0) return dateDiff;
      return tokenSortAsc ? a.tokenNo - b.tokenNo : b.tokenNo - a.tokenNo;
    });
  }, [horizonVisits, filterText, outcomeFilter, timeHorizon, tokenSortAsc]);

  // Export consultation log to CSV
  const handleExportCSV = () => {
    const headers = [
      'Token No',
      'Date',
      'Patient Name',
      'Relation',
      'Age',
      'Gender',
      'Locality',
      'Phone',
      'Reaction',
      'Prescriptions',
      'Fee',
      'Fee Status',
    ];

    const rows = filteredVisits.map((v) => [
      v.tokenNo,
      v.date,
      `"${v.patientName}"`,
      `"${v.relation}"`,
      v.age,
      v.gender,
      `"${v.locality}"`,
      v.phone,
      v.reaction,
      `"${v.prescriptions.map((rx) => `${rx.remedy} ${rx.potency}`).join('; ')}"`,
      v.fee,
      v.feeStatus,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `nuskha-${timeHorizon}-register-${selectedDate.toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ========================================================= */}
      {/* TOP HEADER: TITLE, TIME HORIZON TABS & DATE CONTROLS       */}
      {/* ========================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-border-subtle shadow-xs">
        {/* Left: Title & Subtitle */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl font-bold tracking-tight text-content-primary">
              Practice Analytics
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-primary text-white font-mono font-bold">
              Live
            </span>
          </div>
          <p className="text-xs text-content-secondary font-medium">
            Clinical throughput, outcomes &amp; revenue intelligence for {clinicConfig.name}
          </p>
        </div>

        {/* Right: Time Horizon Switcher & Period Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Horizon Tabs (Daily · Weekly · Monthly · Yearly) */}
          <div className="inline-flex items-center p-1 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs">
            {(['daily', 'weekly', 'monthly', 'yearly'] as TimeHorizon[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setTimeHorizon(tab)}
                className={`px-3.5 py-1.5 rounded-lg capitalize font-bold transition-all cursor-pointer ${
                  timeHorizon === tab
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-content-secondary hover:text-content-primary hover:bg-white/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Period Navigator */}
          <div className="flex items-center gap-1 bg-brand-surface-subtle border border-border-subtle rounded-xl p-1">
            <button
              type="button"
              onClick={() => handleNavigatePeriod(-1)}
              className="p-1.5 rounded-lg text-content-secondary hover:text-content-primary hover:bg-white transition-colors cursor-pointer"
              title="Previous Period"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 text-xs font-mono font-bold text-content-primary min-w-[130px] text-center">
              {periodLabel}
            </span>

            <button
              type="button"
              onClick={() => handleNavigatePeriod(1)}
              className="p-1.5 rounded-lg text-content-secondary hover:text-content-primary hover:bg-white transition-colors cursor-pointer"
              title="Next Period"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Jump to Today Button */}
          <button
            type="button"
            onClick={handleResetToToday}
            className="p-2 rounded-xl border border-border-subtle bg-brand-surface-subtle hover:bg-brand-surface text-content-secondary hover:text-content-primary text-xs font-bold transition-all cursor-pointer"
            title="Reset to Today"
          >
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TIER 1: 4-COLUMN KPI STRIP (DYNAMICALLY COMPUTED)         */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {/* KPI 1: Patients Seen */}
        <article className="rounded-2xl bg-brand-dark text-white p-5 shadow-xs flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-dark-accent">Patients Seen</span>
            <Users className="w-4 h-4 text-brand-dark-accent" />
          </div>
          <span className="font-display text-3xl font-bold text-white">
            {metrics.totalPatients}
          </span>
          <p className="text-[11px] font-medium text-brand-dark-accent">
            {metrics.firstVisitCount} new · {metrics.totalPatients - metrics.firstVisitCount} follow-ups
          </p>
        </article>

        {/* KPI 2: Total Fees Collected */}
        <article className="rounded-2xl bg-brand-primary-container text-brand-primary-dark p-5 shadow-xs flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-primary-dark">Revenue &amp; Fees</span>
            <CircleDollarSign className="w-4 h-4 text-brand-primary" />
          </div>
          <span className="font-display text-3xl font-bold text-brand-primary">
            {formatCurrency(metrics.totalFees)}
          </span>
          <p className="text-[11px] font-semibold text-brand-primary-dark">
            Paid: {formatCurrency(metrics.totalPaid)} · Dues: {formatCurrency(metrics.totalDue)}
          </p>
        </article>

        {/* KPI 3: Clinical Improvement Rate */}
        <article className="rounded-2xl bg-reaction-improved-container text-reaction-improved border border-reaction-improved/20 p-5 shadow-xs flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-reaction-improved">Improvement Rate</span>
            <TrendingUp className="w-4 h-4 text-reaction-improved" />
          </div>
          <span className="font-display text-3xl font-bold text-reaction-improved">
            {metrics.improvementRate}%
          </span>
          <p className="text-[11px] font-semibold text-reaction-improved">
            {metrics.improvedCount} improved · {metrics.declineCount} aggravated
          </p>
        </article>

        {/* KPI 4: Top Prescribed Remedy */}
        <article className="rounded-2xl bg-demo-child-container text-demo-child-text p-5 shadow-xs flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-demo-child-text">Top Prescribed Remedy</span>
            <Award className="w-4 h-4 text-demo-child-text" />
          </div>
          <span className="font-display text-2xl font-bold text-demo-child-text truncate">
            {metrics.topRemedies[0]?.name || 'Bryonia Alba'}
          </span>
          <p className="text-[11px] font-semibold text-demo-child-text">
            {metrics.topRemedies[0]?.count || 0} prescriptions dispensed in this period
          </p>
        </article>
      </section>

      {/* ========================================================= */}
      {/* TIER 2: VISUAL INTELLIGENCE (THROUGHPUT CHART + OUTCOMES) */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Card: Volume Throughput Trend Chart */}
        <article className="lg:col-span-7 rounded-2xl bg-white p-6 shadow-xs border border-border-subtle flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-sm font-bold text-content-primary">
                Patient Volume Trend ({timeHorizon})
              </h3>
              <span className="text-xs text-content-secondary font-medium">
                Distribution across {periodLabel}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 text-brand-primary font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                Patients
              </span>
            </div>
          </div>

          {/* Responsive SVG Chart */}
          <div className="w-full pt-2">
            <svg viewBox="0 0 680 160" className="w-full h-auto">
              {/* Baseline */}
              <line
                x1="20"
                y1="125"
                x2="660"
                y2="125"
                stroke="var(--color-border-subtle)"
                strokeWidth="1.5"
              />

              {chartBars.map((bar, idx) => {
                const totalBars = chartBars.length;
                const slotWidth = 640 / totalBars;
                const barWidth = Math.min(Math.max(slotWidth * 0.55, 20), 44);
                const x = 20 + idx * slotWidth + (slotWidth - barWidth) / 2;

                const maxBarHeight = 90;
                const height = bar.value > 0 ? Math.max((bar.value / maxChartValue) * maxBarHeight, 10) : 4;
                const y = 125 - height;
                const isPeak = bar.value === maxChartValue && bar.value > 0;

                return (
                  <g key={idx}>
                    {/* Bar */}
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={height}
                      rx="5"
                      fill={
                        isPeak
                          ? 'var(--color-brand-primary)'
                          : bar.value > 0
                          ? 'var(--color-brand-primary-hover)'
                          : 'var(--color-border-subtle)'
                      }
                      className="transition-all duration-200"
                    />

                    {/* Numeric Value above bar */}
                    {bar.value > 0 && (
                      <text
                        x={x + barWidth / 2}
                        y={y - 6}
                        textAnchor="middle"
                        fill={isPeak ? 'var(--color-brand-primary)' : 'var(--color-content-primary)'}
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="ui-monospace, monospace"
                      >
                        {bar.value}
                      </text>
                    )}

                    {/* Label below baseline */}
                    <text
                      x={x + barWidth / 2}
                      y="145"
                      textAnchor="middle"
                      fill={isPeak ? 'var(--color-content-primary)' : 'var(--color-content-secondary)'}
                      fontSize="10"
                      fontWeight={isPeak ? 'bold' : '600'}
                    >
                      {bar.label.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </article>

        {/* Right Card: Clinical Outcomes & Demographics Donut Chart */}
        <article className="lg:col-span-5 rounded-2xl bg-white p-6 shadow-xs border border-border-subtle flex flex-col justify-between gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-bold text-content-primary">
              Outcomes &amp; Demographics
            </h3>
            <span className="text-[11px] font-mono font-bold text-content-secondary">
              {metrics.totalPatients} Consultations
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {/* Outcome Progress Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-content-secondary">Outcome Breakdown</span>
                <span className="font-mono text-reaction-improved font-bold">
                  {metrics.improvementRate}% Improved
                </span>
              </div>

              {/* Stacked Outcome Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-border-subtle">
                <div
                  className="h-full bg-reaction-improved"
                  style={{
                    width: `${metrics.totalPatients > 0 ? (metrics.improvedCount / metrics.totalPatients) * 100 : 0}%`,
                  }}
                  title={`Improved (${metrics.improvedCount})`}
                />
                <div
                  className="h-full bg-reaction-stable"
                  style={{
                    width: `${metrics.totalPatients > 0 ? (metrics.stableCount / metrics.totalPatients) * 100 : 0}%`,
                  }}
                  title={`No Change (${metrics.stableCount})`}
                />
                <div
                  className="h-full bg-brand-primary"
                  style={{
                    width: `${metrics.totalPatients > 0 ? (metrics.firstVisitCount / metrics.totalPatients) * 100 : 0}%`,
                  }}
                  title={`First Visit (${metrics.firstVisitCount})`}
                />
                <div
                  className="h-full bg-reaction-aggravated"
                  style={{
                    width: `${metrics.totalPatients > 0 ? (metrics.declineCount / metrics.totalPatients) * 100 : 0}%`,
                  }}
                  title={`Decline (${metrics.declineCount})`}
                />
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <span className="flex items-center gap-1.5 text-reaction-improved font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-reaction-improved" />
                  Improved ({metrics.improvedCount})
                </span>
                <span className="flex items-center gap-1.5 text-reaction-stable font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-reaction-stable" />
                  No Change ({metrics.stableCount})
                </span>
                <span className="flex items-center gap-1.5 text-brand-primary font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                  First Visit ({metrics.firstVisitCount})
                </span>
                <span className="flex items-center gap-1.5 text-reaction-aggravated font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-reaction-aggravated" />
                  Decline ({metrics.declineCount})
                </span>
              </div>
            </div>

            {/* Demographic Cohorts Circle (Donut) Chart & Breakdown */}
            <div className="flex flex-col gap-3 pt-3 border-t border-border-subtle">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-content-secondary">Patient Demographics</span>
                <span className="font-mono text-content-secondary text-[11px] font-bold">
                  {metrics.totalPatients} Patients
                </span>
              </div>

              <div className="flex items-center justify-around gap-6 py-1">
                {/* Clean SVG Circle Chart */}
                <div className="relative flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 100 100" className="w-28 h-28">
                    {/* Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r={demoChart.radius}
                      fill="none"
                      stroke="var(--color-border-subtle)"
                      strokeWidth="11"
                    />

                    {/* Donut Slices */}
                    {!demoChart.isEmpty && (
                      <g transform="rotate(-90 50 50)">
                        {demoChart.male.count > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={demoChart.radius}
                            fill="none"
                            stroke="#1b4332"
                            strokeWidth="11"
                            strokeDasharray={demoChart.male.dasharray}
                            strokeDashoffset={demoChart.male.offset}
                            className="transition-all duration-300"
                          />
                        )}
                        {demoChart.female.count > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={demoChart.radius}
                            fill="none"
                            stroke="#2d6a4f"
                            strokeWidth="11"
                            strokeDasharray={demoChart.female.dasharray}
                            strokeDashoffset={demoChart.female.offset}
                            className="transition-all duration-300"
                          />
                        )}
                        {demoChart.child.count > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={demoChart.radius}
                            fill="none"
                            stroke="#40916c"
                            strokeWidth="11"
                            strokeDasharray={demoChart.child.dasharray}
                            strokeDashoffset={demoChart.child.offset}
                            className="transition-all duration-300"
                          />
                        )}
                        {demoChart.senior.count > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={demoChart.radius}
                            fill="none"
                            stroke="#74c69d"
                            strokeWidth="11"
                            strokeDasharray={demoChart.senior.dasharray}
                            strokeDashoffset={demoChart.senior.offset}
                            className="transition-all duration-300"
                          />
                        )}
                      </g>
                    )}
                  </svg>

                  {/* Center Text inside Circle */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="font-display font-bold text-lg text-content-primary leading-none">
                      {metrics.totalPatients}
                    </span>
                    <span className="text-[9px] font-semibold text-content-secondary mt-0.5 uppercase tracking-wider">
                      Total
                    </span>
                  </div>
                </div>

                {/* Plain Numbers and Labels (No Cards, Zero Clutter) */}
                <div className="flex flex-col gap-2.5 min-w-[140px]">
                  {/* Men */}
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-2 font-medium text-content-primary">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b4332] shrink-0" />
                      Men
                    </span>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="font-bold text-content-primary">{demoChart.male.count}</span>
                      <span className="text-[11px] text-content-secondary">({demoChart.male.pct}%)</span>
                    </div>
                  </div>

                  {/* Women */}
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-2 font-medium text-content-primary">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2d6a4f] shrink-0" />
                      Women
                    </span>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="font-bold text-content-primary">{demoChart.female.count}</span>
                      <span className="text-[11px] text-content-secondary">({demoChart.female.pct}%)</span>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-2 font-medium text-content-primary">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#40916c] shrink-0" />
                      Children
                    </span>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="font-bold text-content-primary">{demoChart.child.count}</span>
                      <span className="text-[11px] text-content-secondary">({demoChart.child.pct}%)</span>
                    </div>
                  </div>

                  {/* Seniors */}
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-2 font-medium text-content-primary">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#74c69d] shrink-0" />
                      Seniors
                    </span>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="font-bold text-content-primary">{demoChart.senior.count}</span>
                      <span className="text-[11px] text-content-secondary">({demoChart.senior.pct}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ========================================================= */}
      {/* TIER 3: SEARCH, QUICK FILTERS & CONSULTATION LOG LEDGER   */}
      {/* ========================================================= */}
      <section className="rounded-2xl bg-white p-6 shadow-xs border border-border-subtle flex flex-col gap-4">
        {/* Controls Bar: Search + Quick Outcome Filters + Export Button */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-content-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filter by patient, relative, locality, or remedy..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-brand-surface-subtle border border-border-subtle text-xs text-content-primary placeholder:text-content-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Quick Outcome Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setOutcomeFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                outcomeFilter === 'all'
                  ? 'bg-brand-primary text-white shadow-2xs'
                  : 'bg-brand-surface-subtle text-content-secondary hover:text-content-primary'
              }`}
            >
              All ({horizonVisits.length})
            </button>
            <button
              type="button"
              onClick={() => setOutcomeFilter('Improved')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                outcomeFilter === 'Improved'
                  ? 'bg-reaction-improved text-white shadow-2xs'
                  : 'bg-brand-surface-subtle text-content-secondary hover:text-content-primary'
              }`}
            >
              Improved ({metrics.improvedCount})
            </button>
            <button
              type="button"
              onClick={() => setOutcomeFilter('No Change')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                outcomeFilter === 'No Change'
                  ? 'bg-reaction-stable text-white shadow-2xs'
                  : 'bg-brand-surface-subtle text-content-secondary hover:text-content-primary'
              }`}
            >
              No Change ({metrics.stableCount})
            </button>
            <button
              type="button"
              onClick={() => setOutcomeFilter('Decline')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                outcomeFilter === 'Decline'
                  ? 'bg-reaction-aggravated text-white shadow-2xs'
                  : 'bg-brand-surface-subtle text-content-secondary hover:text-content-primary'
              }`}
            >
              Decline ({metrics.declineCount})
            </button>
            <button
              type="button"
              onClick={() => setOutcomeFilter('dues')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                outcomeFilter === 'dues'
                  ? 'bg-amber-600 text-white shadow-2xs'
                  : 'bg-brand-surface-subtle text-content-secondary hover:text-content-primary'
              }`}
            >
              Dues ({horizonVisits.filter((v) => v.feeStatus === 'Due').length})
            </button>

            {/* Export CSV Button */}
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-border-subtle hover:bg-brand-surface text-content-primary text-xs font-bold transition-all shadow-2xs ml-auto cursor-pointer"
              title="Download filtered log as CSV"
            >
              <Download className="w-3.5 h-3.5 text-brand-primary" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Ledger Records Table */}
        <div className="w-full overflow-x-auto rounded-xl border border-border-subtle">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-brand-surface-subtle text-content-primary border-b border-border-subtle">
              <tr>
                <th
                  className="px-4 py-3 font-bold cursor-pointer select-none hover:text-brand-primary transition-colors"
                  onClick={() => setTokenSortAsc((prev) => !prev)}
                  title="Click to toggle token sorting (ascending / descending)"
                >
                  <div className="inline-flex items-center gap-1.5">
                    <span>#</span>
                    <span className="text-[10px] text-content-secondary font-mono">
                      {tokenSortAsc ? '↑' : '↓'}
                    </span>
                  </div>
                </th>
                <th className="px-4 py-3 font-bold">Patient &amp; Guardian</th>
                <th className="px-4 py-3 font-bold">Date</th>
                <th className="px-4 py-3 font-bold">Result</th>
                <th className="px-4 py-3 font-bold">Medicines</th>
                <th className="px-4 py-3 font-bold text-right">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredVisits.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-content-secondary font-medium">
                    No consultations found matching your current filter in this period.
                  </td>
                </tr>
              ) : (
                filteredVisits.map((item) => {
                  const reactionMeta =
                    REACTION_CONFIG[item.reaction] || REACTION_CONFIG['First Visit'];

                  return (
                    <tr
                      key={item.id}
                      onClick={() => onOpenVisit?.(item.patientId, item.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          onOpenVisit?.(item.patientId, item.id);
                        }
                      }}
                      tabIndex={onOpenVisit ? 0 : undefined}
                      aria-label={
                        onOpenVisit
                          ? `Open ${item.patientName}'s ${item.date} consultation in OPD`
                          : undefined
                      }
                      className={`hover:bg-brand-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                        onOpenVisit ? 'cursor-pointer group' : ''
                      }`}
                    >
                      {/* Token # with Brand Bar */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-5 rounded-full shrink-0 bg-brand-primary"
                          />
                          <span className="font-mono font-bold text-brand-primary">
                            #{item.tokenNo}
                          </span>
                        </div>
                      </td>

                      {/* Patient Name, Age Chip, Relative & Locality */}
                      <td className="px-4 py-3">
                        <div className="font-bold text-content-primary flex items-center gap-1.5">
                          <span>{item.patientName}</span>
                          <span
                            className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-primary-container text-brand-primary-dark"
                          >
                            {item.age}y
                          </span>
                          {onOpenVisit && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                        <div className="text-[11px] text-content-secondary font-medium">
                          {item.relation} · {item.locality}
                        </div>
                      </td>

                      {/* Visit Date */}
                      <td className="px-4 py-3 font-mono text-content-secondary font-medium">
                        {item.date}
                      </td>

                      {/* Reaction Tag */}
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${reactionMeta.badgeClass}`}
                        >
                          {item.reaction}
                        </span>
                      </td>

                      {/* Prescribed Remedies with Vehicle Icons */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.prescriptions.map((rx, rIdx) => (
                            <span
                              key={rIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-primary-container text-brand-primary-dark font-semibold text-[11px]"
                            >
                              {rx.vehicle.toLowerCase().includes('drop') ? (
                                <Droplet className="w-3 h-3 text-brand-primary" />
                              ) : (
                                <Pill className="w-3 h-3 text-brand-primary" />
                              )}
                              <span>{rx.remedy}</span>
                              <span className="font-mono text-[10px] text-brand-primary font-bold">
                                {rx.potency}
                              </span>
                            </span>
                          ))}
                          {item.durationDays && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-surface-subtle text-content-primary font-mono font-bold">
                              {item.durationDays}d
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Fee and Payment Status */}
                      <td className="px-4 py-3 text-right">
                        <div className="font-mono font-bold text-content-primary">
                          {formatCurrency(item.fee)}
                        </div>
                        <span
                          className={`text-[10px] font-bold ${
                            item.feeStatus === 'Paid'
                              ? 'text-reaction-improved'
                              : item.feeStatus === 'Due'
                              ? 'text-amber-600'
                              : 'text-content-secondary'
                          }`}
                        >
                          {item.feeStatus}
                        </span>
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
