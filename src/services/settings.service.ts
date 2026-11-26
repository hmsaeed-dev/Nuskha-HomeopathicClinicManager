import { getPool, sql } from '@/db/pool';
import { CLINIC_CONFIG, ClinicConfig } from '@/config/clinic.config';
import { DOSAGE_MACROS } from '@/constants/clinical';
import { ApiError } from '@/lib/api/response';

interface ClinicSettingsRow {
  name: string;
  doctor_name: string;
  subtitle: string;
  license_number: string | null;
  phone: string | null;
  address: string | null;
  currency: string;
  default_consultation_fee: number;
  default_course_days: number;
  session_timings: string;
  available_course_durations: string;
  timezone: string;
}

export interface SettingsPayload {
  clinicConfig: ClinicConfig;
  dosageMacros: string[];
  timezone: string;
}

function mapSettingsRow(row: ClinicSettingsRow): {
  clinicConfig: ClinicConfig;
  timezone: string;
} {
  let durations = CLINIC_CONFIG.availableCourseDurations;
  try {
    const parsed = JSON.parse(row.available_course_durations);
    if (Array.isArray(parsed) && parsed.length > 0) {
      durations = parsed.map(Number);
    }
  } catch {
    // fallback to default array
  }

  return {
    clinicConfig: {
      name: row.name,
      doctorName: row.doctor_name,
      subtitle: row.subtitle,
      licenseNumber: row.license_number ?? '',
      phone: row.phone ?? '',
      address: row.address ?? '',
      currency: row.currency,
      defaultConsultationFee: Number(row.default_consultation_fee),
      defaultCourseDays: row.default_course_days,
      sessionTimings: row.session_timings,
      availableCourseDurations: durations,
    },
    timezone: row.timezone || 'Asia/Karachi',
  };
}

export async function getSettings(): Promise<SettingsPayload> {
  const pool = await getPool();

  const [settingsRes, macrosRes] = await Promise.all([
    pool.request().query<ClinicSettingsRow>(
      `SELECT name, doctor_name, subtitle, license_number, phone, address,
              currency, default_consultation_fee, default_course_days,
              session_timings, available_course_durations, timezone
       FROM dbo.clinic_settings WHERE id = 1`
    ),
    pool.request().query<{ macro_text: string }>(
      `SELECT macro_text FROM dbo.dosage_macros ORDER BY sort_order ASC, id ASC`
    ),
  ]);

  const mapped = settingsRes.recordset[0]
    ? mapSettingsRow(settingsRes.recordset[0])
    : { clinicConfig: CLINIC_CONFIG, timezone: 'Asia/Karachi' };

  const macros =
    macrosRes.recordset.length > 0
      ? macrosRes.recordset.map((r) => r.macro_text)
      : [...DOSAGE_MACROS];

  return {
    clinicConfig: mapped.clinicConfig,
    dosageMacros: macros,
    timezone: mapped.timezone,
  };
}

export async function updateClinicSettings(
  updates: Partial<ClinicConfig>
): Promise<ClinicConfig> {
  const pool = await getPool();
  const current = await getSettings();
  const merged: ClinicConfig = { ...current.clinicConfig, ...updates };

  await pool
    .request()
    .input('name', sql.NVarChar(120), merged.name)
    .input('doctorName', sql.NVarChar(120), merged.doctorName)
    .input('subtitle', sql.NVarChar(200), merged.subtitle)
    .input('licenseNumber', sql.NVarChar(100), merged.licenseNumber ?? null)
    .input('phone', sql.NVarChar(40), merged.phone ?? null)
    .input('address', sql.NVarChar(250), merged.address ?? null)
    .input('currency', sql.NVarChar(20), merged.currency)
    .input('defaultFee', sql.Decimal(10, 2), merged.defaultConsultationFee)
    .input('defaultDays', sql.Int, merged.defaultCourseDays)
    .input('sessionTimings', sql.NVarChar(150), merged.sessionTimings)
    .input(
      'availableDurations',
      sql.NVarChar(100),
      JSON.stringify(merged.availableCourseDurations)
    )
    .query(`
      MERGE dbo.clinic_settings AS target
      USING (SELECT 1 AS id) AS src ON target.id = src.id
      WHEN MATCHED THEN
        UPDATE SET
          name = @name,
          doctor_name = @doctorName,
          subtitle = @subtitle,
          license_number = @licenseNumber,
          phone = @phone,
          address = @address,
          currency = @currency,
          default_consultation_fee = @defaultFee,
          default_course_days = @defaultDays,
          session_timings = @sessionTimings,
          available_course_durations = @availableDurations,
          updated_at = SYSDATETIMEOFFSET()
      WHEN NOT MATCHED THEN
        INSERT (
          id, name, doctor_name, subtitle, license_number, phone, address,
          currency, default_consultation_fee, default_course_days,
          session_timings, available_course_durations, timezone
        )
        VALUES (
          1, @name, @doctorName, @subtitle, @licenseNumber, @phone, @address,
          @currency, @defaultFee, @defaultDays,
          @sessionTimings, @availableDurations, N'Asia/Karachi'
        );
    `);

  return merged;
}

export async function listDosageMacros(): Promise<string[]> {
  const pool = await getPool();
  const res = await pool
    .request()
    .query<{ macro_text: string }>(
      'SELECT macro_text FROM dbo.dosage_macros ORDER BY sort_order ASC, id ASC'
    );
  return res.recordset.map((r) => r.macro_text);
}

export async function addDosageMacro(macro: string): Promise<string[]> {
  const trimmed = macro.trim();
  if (!trimmed) {
    throw new ApiError(400, 'Macro text cannot be empty.');
  }

  const pool = await getPool();
  await pool
    .request()
    .input('macroText', sql.NVarChar(200), trimmed)
    .query(`
      IF NOT EXISTS (SELECT 1 FROM dbo.dosage_macros WHERE macro_text = @macroText)
      BEGIN
        DECLARE @nextOrder INT = ISNULL((SELECT MAX(sort_order) + 1 FROM dbo.dosage_macros), 0);
        INSERT INTO dbo.dosage_macros (macro_text, sort_order)
        VALUES (@macroText, @nextOrder);
      END
    `);

  return listDosageMacros();
}

export async function removeDosageMacro(macro: string): Promise<string[]> {
  const pool = await getPool();
  await pool
    .request()
    .input('macroText', sql.NVarChar(200), macro)
    .query('DELETE FROM dbo.dosage_macros WHERE macro_text = @macroText');

  return listDosageMacros();
}

export async function resetSettingsToDefaults(): Promise<SettingsPayload> {
  const pool = await getPool();
  const tx = new sql.Transaction(pool);
  await tx.begin();

  try {
    await new sql.Request(tx)
      .input('name', sql.NVarChar(120), CLINIC_CONFIG.name)
      .input('doctorName', sql.NVarChar(120), CLINIC_CONFIG.doctorName)
      .input('subtitle', sql.NVarChar(200), CLINIC_CONFIG.subtitle)
      .input('licenseNumber', sql.NVarChar(100), CLINIC_CONFIG.licenseNumber ?? null)
      .input('phone', sql.NVarChar(40), CLINIC_CONFIG.phone ?? null)
      .input('address', sql.NVarChar(250), CLINIC_CONFIG.address ?? null)
      .input('currency', sql.NVarChar(20), CLINIC_CONFIG.currency)
      .input('defaultFee', sql.Decimal(10, 2), CLINIC_CONFIG.defaultConsultationFee)
      .input('defaultDays', sql.Int, CLINIC_CONFIG.defaultCourseDays)
      .input('sessionTimings', sql.NVarChar(150), CLINIC_CONFIG.sessionTimings)
      .input(
        'availableDurations',
        sql.NVarChar(100),
        JSON.stringify(CLINIC_CONFIG.availableCourseDurations)
      )
      .query(`
        UPDATE dbo.clinic_settings
        SET name = @name,
            doctor_name = @doctorName,
            subtitle = @subtitle,
            license_number = @licenseNumber,
            phone = @phone,
            address = @address,
            currency = @currency,
            default_consultation_fee = @defaultFee,
            default_course_days = @defaultDays,
            session_timings = @sessionTimings,
            available_course_durations = @availableDurations,
            updated_at = SYSDATETIMEOFFSET()
        WHERE id = 1;
      `);

    await new sql.Request(tx).query('DELETE FROM dbo.dosage_macros;');
    for (let i = 0; i < DOSAGE_MACROS.length; i++) {
      await new sql.Request(tx)
        .input('macroText', sql.NVarChar(200), DOSAGE_MACROS[i])
        .input('sortOrder', sql.Int, i)
        .query(
          'INSERT INTO dbo.dosage_macros (macro_text, sort_order) VALUES (@macroText, @sortOrder)'
        );
    }

    await tx.commit();
    return getSettings();
  } catch (err) {
    await tx.rollback();
    throw err;
  }
}
