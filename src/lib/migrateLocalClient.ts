const LEGACY_KEYS = {
  PATIENTS: 'nuskha_patients_data_v3',
  CLINIC: 'nuskha_clinic_config',
  MACROS: 'nuskha_dosage_macros',
  MIGRATED_FLAG: 'nuskha_db_migrated_v1',
} as const;

let inFlightMigration: Promise<void> | null = null;

function readJsonSafely<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return undefined;
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

/**
 * Performs a one-time idempotent upload of any legacy localStorage records
 * into MS SQL Server before initial client reads.
 */
export function ensureLocalStorageMigrated(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (inFlightMigration) return inFlightMigration;

  inFlightMigration = (async () => {
    try {
      if (localStorage.getItem(LEGACY_KEYS.MIGRATED_FLAG) === 'true') {
        return;
      }

      const patients = readJsonSafely<unknown[]>(LEGACY_KEYS.PATIENTS);
      const clinicConfig = readJsonSafely<Record<string, unknown>>(LEGACY_KEYS.CLINIC);
      const dosageMacros = readJsonSafely<string[]>(LEGACY_KEYS.MACROS);

      const hasPatients = Array.isArray(patients) && patients.length > 0;
      const hasClinic =
        clinicConfig !== undefined &&
        typeof clinicConfig === 'object' &&
        clinicConfig !== null &&
        Object.keys(clinicConfig).length > 0;
      const hasMacros = Array.isArray(dosageMacros) && dosageMacros.length > 0;

      if (!hasPatients && !hasClinic && !hasMacros) {
        localStorage.setItem(LEGACY_KEYS.MIGRATED_FLAG, 'true');
        return;
      }

      const res = await fetch('/api/migrate-local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patients: hasPatients ? patients : [],
          ...(hasClinic ? { clinicConfig } : {}),
          ...(hasMacros ? { dosageMacros } : {}),
        }),
      });

      if (res.ok) {
        localStorage.setItem(LEGACY_KEYS.MIGRATED_FLAG, 'true');
        localStorage.removeItem(LEGACY_KEYS.PATIENTS);
        localStorage.removeItem(LEGACY_KEYS.CLINIC);
        localStorage.removeItem(LEGACY_KEYS.MACROS);
      }
    } catch (err) {
      console.warn('Legacy localStorage migration skipped or deferred:', err);
    } finally {
      inFlightMigration = null;
    }
  })();

  return inFlightMigration;
}
