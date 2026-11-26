import { z } from 'zod';

export const relationTypeSchema = z.enum(['s/o', 'w/o', 'd/o']);
export const genderSchema = z.enum(['Male', 'Female', 'Child']);
export const reactionTypeSchema = z.enum([
  'Decline',
  'No Change',
  'Improved',
  'First Visit',
]);
export const dispensingVehicleSchema = z.enum([
  'Pills (Globules)',
  'Drops (Water)',
  'Powder (Packets)',
  'Mother Tincture',
]);
export const feeStatusSchema = z.enum(['Paid', 'Free', 'Due']);

export const createPatientSchema = z.object({
  fullName: z.string().trim().min(1, 'Patient full name is required').max(150),
  relationType: relationTypeSchema,
  relativeName: z.string().trim().min(1, 'Relative name is required').max(150),
  age: z.coerce.number().int().min(0).max(150),
  gender: genderSchema,
  phone: z.string().trim().max(30).default(''),
  locality: z.string().trim().min(1, 'Locality is required').max(120),
  initialFee: z.coerce.number().min(0).max(1000000).optional(),
});

export const updatePatientSchema = z.object({
  fullName: z.string().trim().min(1, 'Patient full name is required').max(150),
  relationType: relationTypeSchema,
  relativeName: z.string().trim().min(1, 'Relative name is required').max(150),
  age: z.coerce.number().int().min(0).max(150),
  gender: genderSchema,
  phone: z.string().trim().max(30).default(''),
  locality: z.string().trim().min(1, 'Locality is required').max(120),
});

export const prescriptionItemSchema = z.object({
  id: z.string().trim().max(50).optional(),
  remedy: z.string().trim().min(1, 'Remedy name is required').max(150),
  potency: z.string().trim().min(1, 'Potency is required').max(50),
  vehicle: dispensingVehicleSchema,
  dosage: z.string().trim().min(1, 'Dosage is required').max(250),
  isRepeat: z.boolean().optional(),
});

export const createVisitSchema = z.object({
  reaction: reactionTypeSchema,
  symptoms: z.string().trim().max(10000).default(''),
  prescriptions: z.array(prescriptionItemSchema).default([]),
  doctorNotes: z.string().trim().max(10000).optional(),
  durationDays: z.coerce.number().int().min(1).max(365).optional(),
  fee: z.coerce.number().min(0).max(1000000),
  feeStatus: feeStatusSchema,
  idempotencyKey: z.string().trim().min(1).max(64).optional(),
});

export const updateClinicSettingsSchema = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  doctorName: z.string().trim().min(1).max(120).optional(),
  subtitle: z.string().trim().min(1).max(200).optional(),
  licenseNumber: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(40).optional(),
  address: z.string().trim().max(250).optional(),
  currency: z.string().trim().min(1).max(20).optional(),
  defaultConsultationFee: z.coerce.number().min(0).max(1000000).optional(),
  defaultCourseDays: z.coerce.number().int().min(1).max(365).optional(),
  sessionTimings: z.string().trim().min(1).max(150).optional(),
  availableCourseDurations: z.array(z.coerce.number().int().min(1).max(365)).min(1).optional(),
});

export const createMacroSchema = z.object({
  macro: z.string().trim().min(1, 'Dosage macro cannot be empty').max(200),
});

export const migrateLocalSchema = z.object({
  patients: z
    .array(
      z.object({
        id: z.string().trim().min(1).max(50),
        mrn: z.string().trim().max(20).optional().default(''),
        fullName: z.string().trim().min(1).max(150),
        relationType: relationTypeSchema,
        relativeName: z.string().trim().min(1).max(150),
        age: z.coerce.number().int().min(0).max(150),
        gender: genderSchema,
        phone: z.string().trim().max(30).default(''),
        locality: z.string().trim().max(120).default(''),
        chiefComplaints: z
          .array(
            z.object({
              id: z.string().trim().min(1).max(50),
              name: z.string().trim().min(1).max(200),
              severity: z.enum(['Severe', 'Moderate', 'Mild', 'Relieved']),
              trend: z.enum(['Declining', 'Stable', 'Improving']),
              duration: z.string().max(50).optional(),
            })
          )
          .optional(),
        severityTrend: z
          .object({
            complaintName: z.string().max(200).optional(),
            overallRelief: z.string().max(100),
            history: z.array(
              z.object({
                label: z.string().max(30),
                date: z.string().max(40),
                score: z.coerce.number().int().min(0).max(100),
              })
            ),
          })
          .optional(),
        pastVisits: z
          .array(
            z.object({
              id: z.string().trim().min(1).max(50),
              date: z.string().trim().min(1).max(40),
              tokenNo: z.coerce.number().int().min(1),
              reaction: reactionTypeSchema,
              symptoms: z.string().default(''),
              prescriptions: z.array(prescriptionItemSchema).default([]),
              doctorNotes: z.string().optional(),
              durationDays: z.coerce.number().int().min(1).max(365).optional(),
              fee: z.coerce.number().min(0),
              feeStatus: feeStatusSchema,
            })
          )
          .default([]),
      })
    )
    .default([]),
  clinicConfig: updateClinicSettingsSchema.optional(),
  dosageMacros: z.array(z.string().trim().min(1).max(200)).optional(),
});

export type MigrateLocalPayload = z.infer<typeof migrateLocalSchema>;
