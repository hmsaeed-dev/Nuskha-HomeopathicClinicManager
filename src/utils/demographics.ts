import { DemographicCohort } from '@/types';

/**
 * Calculates demographic cohort based on clinical age and gender.
 * Separation of concerns: pure domain logic helper.
 */
export function getDemographicCohort(
  age: number,
  gender: 'Male' | 'Female' | 'Child'
): DemographicCohort {
  if (age < 15 || gender === 'Child') return 'Child';
  if (age >= 60) return 'Senior';
  return gender === 'Female' ? 'Female' : 'Male';
}
