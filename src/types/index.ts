// Persisted values and their display metadata are defined once in the
// vocabulary registry; these unions are derived from it.
export type {
  ReactionType,
  DispensingVehicle,
  FeeStatus,
  RelationType,
  Gender,
  Severity,
  Trend,
  DemographicCohort,
} from '@/constants/vocab';

import type {
  DispensingVehicle,
  FeeStatus,
  Gender,
  ReactionType,
  RelationType,
  Severity,
  Trend,
} from '@/constants/vocab';

export interface PrescriptionItem {
  id: string;
  remedy: string;
  potency: string;
  vehicle: DispensingVehicle;
  dosage: string;
  isRepeat?: boolean;
}

export interface PastVisit {
  id: string;
  patientId: string;
  /** Clinic-local ISO date (YYYY-MM-DD). The canonical value for filtering. */
  clinicDate?: string;
  /** Pre-formatted display date, derived from clinicDate at the API boundary. */
  date: string;
  tokenNo: number;
  reaction: ReactionType;
  symptoms: string;
  prescriptions: PrescriptionItem[];
  doctorNotes?: string;
  durationDays?: number; // Course duration in days: e.g. 3, 7, 15, 30
  fee: number;
  feeStatus: FeeStatus;
  editedAt?: string;
}

export interface ChiefComplaint {
	id: string;
	name: string; // e.g. "Migraine", "Gastric Acidity", "Knee Pain"
	severity: Severity;
	trend: Trend;
	duration?: string; // e.g. "4 yrs", "6 mos"
}

export interface Patient {
  id: string;
  mrn: string; // Lifetime Medical Record Number (e.g. NK-1492)
  fullName: string;
  relationType: RelationType;
  relativeName: string;
  age: number;
  gender: Gender;
  phone: string;
  locality: string;
  totalVisits: number;
  /** Canonical clinic-local ISO date of the most recent visit. */
  lastVisitClinicDate?: string;
  lastVisitDate: string;
  chiefComplaints?: ChiefComplaint[];
  pastVisits: PastVisit[];
  severityTrend?: {
    complaintName?: string; // Name of complaint being tracked
    overallRelief: string; // e.g. "-70%"
    history: Array<{ label: string; date: string; score: number }>;
  };
}

export interface DemographicStyle {
  label: string;
  barColor: string;       // Accent / bar color
  chipBg: string;         // Light pill background
  chipText: string;       // Text color on light pill
  chipDarkBg: string;     // Pill background on dark card
  chipDarkText: string;   // Text on dark card
  dotColor: string;       // Dot color
  // Selected Card (Pane 1 - Left)
  selectedCardBg: string;
  selectedCardSubtext: string;
  // Identity Banner (Pane 2 - Center)
  bannerBg: string;
  bannerAccentText: string;
  bannerTokenBg: string;
  bannerStroke: string;
  // Active Action & Badges (Pane 3 - Right)
  actionButtonBg: string;
  lightTintBg: string;
}

// Re-export utility and config for backwards compatibility
export { getDemographicCohort } from '@/utils/demographics';
export { DEMOGRAPHIC_CONFIG } from '@/constants/demographics';
