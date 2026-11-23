/**
 * Single Source of Truth (SSOT) - Clinic Configuration
 * Configurable via environment variables with safe defaults.
 */
export interface ClinicConfig {
  name: string;
  doctorName: string;
  subtitle: string;
  licenseNumber?: string;
  phone?: string;
  address?: string;
  currency: string;
  defaultConsultationFee: number;
  defaultCourseDays: number;
  sessionTimings: string;
  availableCourseDurations: number[];
}

export const CLINIC_CONFIG: ClinicConfig = {
  name: process.env.NEXT_PUBLIC_CLINIC_NAME || 'Nuskha',
  doctorName: process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Dr. Aslam',
  subtitle: process.env.NEXT_PUBLIC_CLINIC_SUBTITLE || 'Homoeopathic OPD Clinic',
  licenseNumber: process.env.NEXT_PUBLIC_CLINIC_LICENSE || 'DHMS / RHMP-4821',
  phone: process.env.NEXT_PUBLIC_CLINIC_PHONE || '0300-5551234',
  address: process.env.NEXT_PUBLIC_CLINIC_ADDRESS || 'Main Bazaar, Taxila Cantt',
  currency: process.env.NEXT_PUBLIC_CURRENCY || 'Rs.',
  defaultConsultationFee: Number(process.env.NEXT_PUBLIC_DEFAULT_FEE) || 500,
  defaultCourseDays: 15,
  sessionTimings: 'Morning & Evening Sessions',
  availableCourseDurations: [3, 7, 15, 21, 30],
};
