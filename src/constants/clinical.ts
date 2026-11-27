import { PrescriptionItem } from "@/types";
import {
  DISPENSING_VEHICLE_VALUES,
  getReactionMeta,
  POTENCIES,
  REACTIONS,
  type DispensingVehicle,
  type ReactionType,
} from "./vocab";

// Re-exported so existing callers keep working while the vocabulary registry
// remains the only place where these values are declared.
export {
  DEMOGRAPHIC_COHORTS,
  DURATION_PRESETS,
  FEE_STATUSES,
  FEE_STATUS_VALUES,
  GENDERS,
  getDurationOptions,
  getFeeStatusMeta,
  getGenderLabel,
  getReactionMeta,
  getRelationLabel,
  POTENCIES,
  RELATIONS,
  REACTIONS,
  REACTION_TYPES,
  SEVERITIES,
  TRENDS,
  VEHICLES,
} from "./vocab";

export type { ReactionOption as ReactionMeta } from "./vocab";

/** Visual metadata and styling classes for clinical reactions */
export const REACTION_CONFIG = Object.fromEntries(
  REACTIONS.map((reaction) => [reaction.value, getReactionMeta(reaction.value)])
) as Record<ReactionType, ReturnType<typeof getReactionMeta>>;

/** Homoeopathic Dispensing Vehicles */
export const DISPENSING_VEHICLES: readonly DispensingVehicle[] =
  DISPENSING_VEHICLE_VALUES;

/** Common Potencies */
export const COMMON_POTENCIES: readonly string[] = POTENCIES;

/**
 * Quick Dosage Macros for rapid keyboard-driven prescription
 */
export const DOSAGE_MACROS: readonly string[] = [
  "3 drops BD in water",
  "4 pills TDS",
  "1 powder HS",
  "4 pills BD",
  "1 dose SOS",
] as const;

/**
 * Geographic Locality Presets
 */
export const LOCALITY_PRESETS: readonly string[] = [
  "Taxila Cantt",
  "Mohallah Farooqia",
  "Wah Model Town",
  "Lala Rukh",
  "Sarai Kala",
  "Museum Road",
  "Faisal Hills",
] as const;

/**
 * Verified Materia Medica Remedy Catalog
 */
export const COMMON_REMEDIES: readonly string[] = [
  "Aconitum Napellus",
  "Allium Cepa",
  "Apis Mellifica",
  "Arnica Montana",
  "Arsenicum Album",
  "Belladonna",
  "Bryonia Alba",
  "Calcarea Carbonica",
  "Carbo Vegetabilis",
  "Causticum",
  "Chamomilla",
  "Cinchona (China)",
  "Dulcamara",
  "Gelsemium",
  "Hepar Sulphuris",
  "Hypericum",
  "Ignatia Amara",
  "Ipecacuanha",
  "Lachesis",
  "Lycopodium",
  "Mercurius Solubilis",
  "Natrum Muriaticum",
  "Nux Vomica",
  "Phosphorus",
  "Pulsatilla",
  "Rhus Toxicodendron",
  "Ruta Graveolens",
  "Sepia",
  "Silicea",
  "Sulphur",
  "Thuja Occidentalis",
] as const;

/**
 * Initial Default Prescription Template
 */
export const DEFAULT_INITIAL_PRESCRIPTIONS: PrescriptionItem[] = [
  {
    id: "rx-default-1",
    remedy: "Bryonia Alba",
    potency: "200C",
    vehicle: "Drops (Water)",
    dosage: "3 drops BD in water",
    isRepeat: true,
  },
  {
    id: "rx-default-2",
    remedy: "Nux Vomica",
    potency: "30C",
    vehicle: "Pills (Globules)",
    dosage: "4 pills HS",
  },
];
