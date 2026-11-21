export type ReactionType = 'Improved' | 'No Change' | 'Aggravated' | 'New' | 'First Visit';

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
  fee: number;
  feeStatus: 'Paid' | 'Free' | 'Due';
  editedAt?: string;
}

export interface Patient {
  id: string;
  mrn: string; // Lifetime Medical Record Number (e.g. NK-1492)
  fullName: string;
  urduName?: string;
  relationType: 's/o' | 'w/o' | 'd/o';
  relativeName: string;
  relativeUrduName?: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child';
  phone: string;
  locality: string;
  totalVisits: number;
  lastVisitDate: string;
  pastVisits: PastVisit[];
  severityTrend?: {
    overallRelief: string; // e.g. "-70%"
    history: Array<{ label: string; date: string; score: number }>;
  };
}

export type DemographicCohort = 'Male' | 'Female' | 'Child' | 'Senior';

export function getDemographicCohort(age: number, gender: 'Male' | 'Female' | 'Child'): DemographicCohort {
  if (age < 15 || gender === 'Child') return 'Child';
  if (age >= 60) return 'Senior';
  return gender === 'Female' ? 'Female' : 'Male';
}

export interface DemographicStyle {
  label: string;
  barColor: string;       // Accent / bar color
  chipBg: string;         // Light pill background
  chipText: string;       // Text color on light pill
  chipDarkBg: string;     // Pill background on dark card
  chipDarkText: string;   // Text on dark card
  dotColor: string;       // Dot color
}

export const DEMOGRAPHIC_CONFIG: Record<DemographicCohort, DemographicStyle> = {
  Male: {
    label: 'Adult Male',
    barColor: 'bg-[#2B6684]',
    chipBg: 'bg-[#DCEEF7]',
    chipText: 'text-[#113E54]',
    chipDarkBg: 'bg-[#2B6684]/40',
    chipDarkText: 'text-[#BCE3F5]',
    dotColor: 'bg-[#2B6684]',
  },
  Female: {
    label: 'Adult Female',
    barColor: 'bg-[#8A3C59]',
    chipBg: 'bg-[#FCEBF2]',
    chipText: 'text-[#541930]',
    chipDarkBg: 'bg-[#8A3C59]/40',
    chipDarkText: 'text-[#F9CDE0]',
    dotColor: 'bg-[#8A3C59]',
  },
  Child: {
    label: 'Child',
    barColor: 'bg-[#B86B08]',
    chipBg: 'bg-[#FEF1D8]',
    chipText: 'text-[#633600]',
    chipDarkBg: 'bg-[#B86B08]/40',
    chipDarkText: 'text-[#FCE1B2]',
    dotColor: 'bg-[#B86B08]',
  },
  Senior: {
    label: 'Senior',
    barColor: 'bg-[#5B556D]',
    chipBg: 'bg-[#EDE8F5]',
    chipText: 'text-[#2F293F]',
    chipDarkBg: 'bg-[#5B556D]/50',
    chipDarkText: 'text-[#E1DCEB]',
    dotColor: 'bg-[#5B556D]',
  },
};
