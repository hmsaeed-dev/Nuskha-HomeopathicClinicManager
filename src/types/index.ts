export type ReactionType = "Decline" | "No Change" | "Improved" | "First Visit";

export type DispensingVehicle =
  | 'Pills (Globules)'
  | 'Drops (Water)'
  | 'Powder (Packets)'
  | 'Mother Tincture';

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
  date: string;
  tokenNo: number;
  reaction: ReactionType;
  symptoms: string;
  prescriptions: PrescriptionItem[];
  doctorNotes?: string;
  durationDays?: number; // Course duration in days: e.g. 3, 7, 15, 30
  fee: number;
  feeStatus: 'Paid' | 'Free' | 'Due';
  editedAt?: string;
}

export interface ChiefComplaint {
	id: string;
	name: string; // e.g. "Migraine", "Gastric Acidity", "Knee Pain"
	severity: "Severe" | "Moderate" | "Mild" | "Relieved";
	trend: "Declining" | "Stable" | "Improving";
	duration?: string; // e.g. "4 yrs", "6 mos"
}

export interface Patient {
  id: string;
  mrn: string; // Lifetime Medical Record Number (e.g. NK-1492)
  fullName: string;
  relationType: 's/o' | 'w/o' | 'd/o';
  relativeName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child';
  phone: string;
  locality: string;
  totalVisits: number;
  lastVisitDate: string;
  chiefComplaints?: ChiefComplaint[];
  pastVisits: PastVisit[];
  severityTrend?: {
    complaintName?: string; // Name of complaint being tracked
    overallRelief: string; // e.g. "-70%"
    history: Array<{ label: string; date: string; score: number }>;
  };
}

export type DemographicCohort = 'Male' | 'Female' | 'Child' | 'Senior';

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
