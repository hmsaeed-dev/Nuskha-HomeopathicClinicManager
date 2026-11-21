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
  relationType: 's/o' | 'w/o' | 'd/o';
  relativeName: string;
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

export const DEMOGRAPHIC_CONFIG: Record<DemographicCohort, DemographicStyle> = {
  Male: {
    label: 'Adult Male',
    barColor: 'bg-[#2B6684]',
    chipBg: 'bg-[#DCEEF7]',
    chipText: 'text-[#113E54]',
    chipDarkBg: 'bg-[#2B6684]/40',
    chipDarkText: 'text-[#BCE3F5]',
    dotColor: 'bg-[#2B6684]',
    selectedCardBg: 'bg-[#1D516B]',
    selectedCardSubtext: 'text-[#BCE3F5]',
    bannerBg: 'bg-[#0E2633]',
    bannerAccentText: 'text-[#A5D4EC]',
    bannerTokenBg: 'bg-[#1D516B]',
    bannerStroke: '#A5D4EC',
    actionButtonBg: 'bg-[#1D516B] hover:bg-[#256280]',
    lightTintBg: 'bg-[#DCEEF7] text-[#113E54]',
  },
  Female: {
    label: 'Adult Female',
    barColor: 'bg-[#8A3C59]',
    chipBg: 'bg-[#FCEBF2]',
    chipText: 'text-[#541930]',
    chipDarkBg: 'bg-[#8A3C59]/40',
    chipDarkText: 'text-[#F9CDE0]',
    dotColor: 'bg-[#8A3C59]',
    selectedCardBg: 'bg-[#7A2846]',
    selectedCardSubtext: 'text-[#F8C1D7]',
    bannerBg: 'bg-[#301220]',
    bannerAccentText: 'text-[#F8BAD1]',
    bannerTokenBg: 'bg-[#7A2846]',
    bannerStroke: '#F8BAD1',
    actionButtonBg: 'bg-[#7A2846] hover:bg-[#8F3354]',
    lightTintBg: 'bg-[#FCEBF2] text-[#541930]',
  },
  Child: {
    label: 'Child',
    barColor: 'bg-[#B86B08]',
    chipBg: 'bg-[#FEF1D8]',
    chipText: 'text-[#633600]',
    chipDarkBg: 'bg-[#B86B08]/40',
    chipDarkText: 'text-[#FCE1B2]',
    dotColor: 'bg-[#B86B08]',
    selectedCardBg: 'bg-[#995503]',
    selectedCardSubtext: 'text-[#FCE1B2]',
    bannerBg: 'bg-[#331C02]',
    bannerAccentText: 'text-[#FCD698]',
    bannerTokenBg: 'bg-[#995503]',
    bannerStroke: '#FCD698',
    actionButtonBg: 'bg-[#995503] hover:bg-[#B36404]',
    lightTintBg: 'bg-[#FEF1D8] text-[#633600]',
  },
  Senior: {
    label: 'Senior',
    barColor: 'bg-[#5B556D]',
    chipBg: 'bg-[#EDE8F5]',
    chipText: 'text-[#2F293F]',
    chipDarkBg: 'bg-[#5B556D]/50',
    chipDarkText: 'text-[#E1DCEB]',
    dotColor: 'bg-[#5B556D]',
    selectedCardBg: 'bg-[#4B4359]',
    selectedCardSubtext: 'text-[#E1DCEB]',
    bannerBg: 'bg-[#25202E]',
    bannerAccentText: 'text-[#D6CFE6]',
    bannerTokenBg: 'bg-[#4B4359]',
    bannerStroke: '#D6CFE6',
    actionButtonBg: 'bg-[#4B4359] hover:bg-[#5C536D]',
    lightTintBg: 'bg-[#EDE8F5] text-[#2F293F]',
  },
};
