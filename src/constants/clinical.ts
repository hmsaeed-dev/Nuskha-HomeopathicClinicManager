import { ReactionType, DispensingVehicle, PrescriptionItem } from '@/types';

/**
 * Reaction Types in Homoeopathic OPD Assessment
 */
export const REACTION_TYPES: readonly ReactionType[] = [
  'Improved',
  'No Change',
  'Aggravated',
  'New',
  'First Visit',
] as const;

/**
 * Visual metadata and styling classes for clinical reactions
 * Uses semantic tokens defined in globals.css @theme
 */
export interface ReactionMeta {
  label: ReactionType;
  shortcut: string;
  badgeClass: string;
  activeButtonClass: string;
  idleButtonClass: string;
}

export const REACTION_CONFIG: Record<ReactionType, ReactionMeta> = {
  Improved: {
    label: 'Improved',
    shortcut: '1',
    badgeClass: 'text-reaction-improved bg-reaction-improved-container',
    activeButtonClass: 'bg-reaction-improved text-white shadow-xs',
    idleButtonClass: 'text-content-secondary hover:bg-white/60',
  },
  'No Change': {
    label: 'No Change',
    shortcut: '2',
    badgeClass: 'text-reaction-stable bg-reaction-stable-container',
    activeButtonClass: 'bg-reaction-stable text-white shadow-xs',
    idleButtonClass: 'text-content-secondary hover:bg-white/60',
  },
  Aggravated: {
    label: 'Aggravated',
    shortcut: '3',
    badgeClass: 'text-reaction-aggravated bg-reaction-aggravated-container',
    activeButtonClass: 'bg-reaction-aggravated text-white shadow-xs',
    idleButtonClass: 'text-content-secondary hover:bg-white/60',
  },
  New: {
    label: 'New',
    shortcut: '4',
    badgeClass: 'text-reaction-new bg-reaction-new-container',
    activeButtonClass: 'bg-reaction-new text-white shadow-xs',
    idleButtonClass: 'text-content-secondary hover:bg-white/60',
  },
  'First Visit': {
    label: 'First Visit',
    shortcut: '5',
    badgeClass: 'text-brand-primary text-content-primary bg-brand-primary-container',
    activeButtonClass: 'bg-brand-primary text-white shadow-xs',
    idleButtonClass: 'text-content-secondary hover:bg-white/60',
  },
};

/**
 * Homoeopathic Dispensing Vehicles
 */
export const DISPENSING_VEHICLES: readonly DispensingVehicle[] = [
  'Drops (Water)',
  'Pills (Globules)',
  'Powder (Packets)',
  'Mother Tincture',
] as const;

/**
 * Common Potencies
 */
export const COMMON_POTENCIES: readonly string[] = [
  '30C',
  '200C',
  '1M',
  '10M',
  '50M',
  'Q (Mother Tincture)',
  '6X',
  '12X',
] as const;

/**
 * Quick Dosage Macros for rapid keyboard-driven prescription
 */
export const DOSAGE_MACROS: readonly string[] = [
  '3 drops BD in water',
  '4 pills TDS',
  '1 powder HS',
  '4 pills BD',
  '1 dose SOS',
] as const;

/**
 * Geographic Locality Presets
 */
export const LOCALITY_PRESETS: readonly string[] = [
  'Taxila Cantt',
  'Mohallah Farooqia',
  'Wah Model Town',
  'Lala Rukh',
  'Sarai Kala',
  'Museum Road',
  'Faisal Hills',
] as const;

/**
 * Verified Materia Medica Remedy Catalog
 */
export const COMMON_REMEDIES: readonly string[] = [
  'Aconitum Napellus',
  'Allium Cepa',
  'Apis Mellifica',
  'Arnica Montana',
  'Arsenicum Album',
  'Belladonna',
  'Bryonia Alba',
  'Calcarea Carbonica',
  'Carbo Vegetabilis',
  'Causticum',
  'Chamomilla',
  'Cinchona (China)',
  'Dulcamara',
  'Gelsemium',
  'Hepar Sulphuris',
  'Hypericum',
  'Ignatia Amara',
  'Ipecacuanha',
  'Lachesis',
  'Lycopodium',
  'Mercurius Solubilis',
  'Natrum Muriaticum',
  'Nux Vomica',
  'Phosphorus',
  'Pulsatilla',
  'Rhus Toxicodendron',
  'Ruta Graveolens',
  'Sepia',
  'Silicea',
  'Sulphur',
  'Thuja Occidentalis',
] as const;

/**
 * Initial Default Prescription Template
 */
export const DEFAULT_INITIAL_PRESCRIPTIONS: PrescriptionItem[] = [
  {
    id: 'rx-default-1',
    remedy: 'Bryonia Alba',
    potency: '200C',
    vehicle: 'Drops (Water)',
    dosage: '3 drops BD in water',
    isRepeat: true,
  },
  {
    id: 'rx-default-2',
    remedy: 'Nux Vomica',
    potency: '30C',
    vehicle: 'Pills (Globules)',
    dosage: '4 pills HS',
  },
];
