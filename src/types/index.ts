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

export interface QueueItem {
  tokenNo: number;
  patientId: string;
  patientName: string;
  relation: string;
  status: 'Waiting' | 'In Consultation' | 'Completed';
  time: string;
}
