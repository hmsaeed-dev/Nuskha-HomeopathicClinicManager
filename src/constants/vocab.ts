/**
 * THE vocabulary registry.
 *
 * Every clinical/administrative label, its persisted value, and its visual
 * metadata live here. TypeScript unions are derived from these arrays, so the
 * type system, the UI, validation and the database CHECK constraints all read
 * from the same list. Add a value here, not in five different files.
 */

export interface OptionMeta {
  label: string;
  shortLabel?: string;
}

export interface ReactionOption extends OptionMeta {
  value: string;
  shortcut: string;
  badgeClass: string;
  activeButtonClass: string;
  idleButtonClass: string;
  nodeActiveClass: string;
  labelActiveClass: string;
  trackClass: string;
}

export interface FeeStatusOption extends OptionMeta {
  value: string;
  badgeClass: string;
  textClass: string;
}

export interface DurationOption {
  days: number;
  label: string;
  subLabel?: string;
}

export const REACTIONS = [
  {
    value: 'Decline',
    label: 'Decline',
    shortLabel: 'Decline',
    shortcut: '1',
    badgeClass:
      'text-reaction-aggravated font-bold bg-reaction-aggravated-container border border-reaction-aggravated/25',
    activeButtonClass: 'bg-reaction-aggravated text-white shadow-xs font-bold',
    idleButtonClass:
      'text-content-secondary hover:bg-white hover:text-content-primary hover:shadow-2xs',
    nodeActiveClass:
      'bg-reaction-aggravated border-reaction-aggravated text-white ring-4 ring-reaction-aggravated/20 shadow-sm',
    labelActiveClass: 'text-reaction-aggravated',
    trackClass: 'bg-reaction-aggravated/60',
  },
  {
    value: 'No Change',
    label: 'No Change',
    shortLabel: 'Stable',
    shortcut: '2',
    badgeClass:
      'text-reaction-stable font-bold bg-reaction-stable-container border border-reaction-stable/25',
    activeButtonClass: 'bg-reaction-stable text-white shadow-xs font-bold',
    idleButtonClass:
      'text-content-secondary hover:bg-white hover:text-content-primary hover:shadow-2xs',
    nodeActiveClass:
      'bg-reaction-stable border-reaction-stable text-white ring-4 ring-reaction-stable/20 shadow-sm',
    labelActiveClass: 'text-reaction-stable',
    trackClass: 'bg-reaction-stable/60',
  },
  {
    value: 'Improved',
    label: 'Improved',
    shortLabel: 'Improved',
    shortcut: '3',
    badgeClass:
      'text-reaction-improved font-bold bg-reaction-improved-container border border-reaction-improved/25',
    activeButtonClass: 'bg-reaction-improved text-white shadow-xs font-bold',
    idleButtonClass:
      'text-content-secondary hover:bg-white hover:text-content-primary hover:shadow-2xs',
    nodeActiveClass:
      'bg-reaction-improved border-reaction-improved text-white ring-4 ring-reaction-improved/20 shadow-sm',
    labelActiveClass: 'text-reaction-improved',
    trackClass: 'bg-reaction-improved/60',
  },
  {
    value: 'First Visit',
    label: 'First Visit',
    shortLabel: 'First Visit',
    shortcut: '4',
    badgeClass:
      'text-reaction-first font-bold bg-reaction-first-container border border-reaction-first/25',
    activeButtonClass: 'bg-reaction-first text-white shadow-xs font-bold',
    idleButtonClass:
      'text-content-secondary hover:bg-white hover:text-content-primary hover:shadow-2xs',
    nodeActiveClass:
      'bg-reaction-first border-reaction-first text-white ring-4 ring-reaction-first/20 shadow-sm',
    labelActiveClass: 'text-reaction-first',
    trackClass: 'bg-reaction-first/60',
  },
] as const satisfies readonly ReactionOption[];

export const FEE_STATUSES = [
  {
    value: 'Paid',
    label: 'Paid',
    badgeClass:
      'text-reaction-improved font-bold bg-reaction-improved-container border border-reaction-improved/25',
    textClass: 'text-reaction-improved',
  },
  {
    value: 'Free',
    label: 'Free',
    badgeClass:
      'text-content-secondary font-bold bg-brand-surface border border-border-subtle/70',
    textClass: 'text-content-secondary',
  },
  {
    value: 'Due',
    label: 'Due',
    badgeClass:
      'text-amber-700 font-bold bg-amber-50 border border-amber-200',
    textClass: 'text-amber-600',
  },
] as const satisfies readonly FeeStatusOption[];

export const RELATIONS = [
  { value: 's/o', label: 's/o', longLabel: 'Son of' },
  { value: 'w/o', label: 'w/o', longLabel: 'Wife of' },
  { value: 'd/o', label: 'd/o', longLabel: 'Daughter of' },
] as const;

export const GENDERS = [
  { value: 'Male', label: 'Male', longLabel: 'Male (Adult)' },
  { value: 'Female', label: 'Female', longLabel: 'Female (Adult)' },
  { value: 'Child', label: 'Child', longLabel: 'Child (Pediatric)' },
] as const;

export const SEVERITIES = [
  { value: 'Severe', label: 'Severe' },
  { value: 'Moderate', label: 'Moderate' },
  { value: 'Mild', label: 'Mild' },
  { value: 'Relieved', label: 'Relieved' },
] as const;

export const TRENDS = [
  { value: 'Declining', label: 'Declining' },
  { value: 'Stable', label: 'Stable' },
  { value: 'Improving', label: 'Improving' },
] as const;

export const VEHICLES = [
  { value: 'Pills (Globules)', label: 'Pills (Globules)' },
  { value: 'Drops (Water)', label: 'Drops (Water)' },
  { value: 'Powder (Packets)', label: 'Powder (Packets)' },
  { value: 'Mother Tincture', label: 'Mother Tincture' },
] as const;

export const POTENCIES = [
  '30C',
  '200C',
  '1M',
  '10M',
  '50M',
  'Q (Mother Tincture)',
  '6X',
  '12X',
] as const;

export const DURATION_PRESETS = [
  { days: 3, label: '3 Days' },
  { days: 7, label: '1 Week', subLabel: '(7d)' },
  { days: 15, label: '15 Days' },
  { days: 21, label: '21 Days' },
  { days: 30, label: '1 Month', subLabel: '(30d)' },
] as const satisfies readonly DurationOption[];

export const DEMOGRAPHIC_COHORTS = ['Male', 'Female', 'Child', 'Senior'] as const;

export type ReactionType = (typeof REACTIONS)[number]['value'];
export type FeeStatus = (typeof FEE_STATUSES)[number]['value'];
export type RelationType = (typeof RELATIONS)[number]['value'];
export type Gender = (typeof GENDERS)[number]['value'];
export type Severity = (typeof SEVERITIES)[number]['value'];
export type Trend = (typeof TRENDS)[number]['value'];
export type DispensingVehicle = (typeof VEHICLES)[number]['value'];
export type DemographicCohort = (typeof DEMOGRAPHIC_COHORTS)[number];

export const REACTION_TYPES: readonly ReactionType[] = REACTIONS.map(
  (r) => r.value
);
export const FEE_STATUS_VALUES: readonly FeeStatus[] = FEE_STATUSES.map(
  (f) => f.value
);
export const DISPENSING_VEHICLE_VALUES: readonly DispensingVehicle[] =
  VEHICLES.map((v) => v.value);

export function getReactionMeta(reaction: ReactionType): ReactionOption {
  return (
    REACTIONS.find((r) => r.value === reaction) ??
    REACTIONS.find((r) => r.value === 'First Visit')!
  );
}

export function getFeeStatusMeta(status: FeeStatus): FeeStatusOption {
  return (
    FEE_STATUSES.find((f) => f.value === status) ??
    FEE_STATUSES.find((f) => f.value === 'Free')!
  );
}

export function getDurationOptions(
  configuredDays?: readonly number[]
): DurationOption[] {
  if (!configuredDays || configuredDays.length === 0) {
    return [...DURATION_PRESETS];
  }
  return configuredDays.map(
    (days) =>
      DURATION_PRESETS.find((preset) => preset.days === days) ?? {
        days,
        label: `${days} Days`,
      }
  );
}

export function getRelationLabel(value: RelationType): string {
  return RELATIONS.find((r) => r.value === value)?.label ?? value;
}

export function getGenderLabel(value: Gender): string {
  return GENDERS.find((g) => g.value === value)?.label ?? value;
}
