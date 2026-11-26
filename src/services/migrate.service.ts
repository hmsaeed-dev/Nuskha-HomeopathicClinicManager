import { getPool, sql } from '@/db/pool';
import {
  buildVisitedAtIso,
  parseDisplayDateToClinicDate,
} from '@/lib/clinicDate';
import { MigrateLocalPayload } from '@/lib/validations/schemas';
import { CLINIC_CONFIG } from '@/config/clinic.config';

export interface MigrateLocalResult {
  importedPatients: number;
  skippedPatients: number;
  importedVisits: number;
  skippedVisits: number;
  importedPrescriptions: number;
  adjustedTokens: number;
  importedMacros: number;
  updatedSettings: boolean;
}

export async function migrateLocalData(
  payload: MigrateLocalPayload
): Promise<MigrateLocalResult> {
  const pool = await getPool();
  const tzRes = await pool
    .request()
    .query<{ timezone: string }>('SELECT TOP 1 timezone FROM dbo.clinic_settings WHERE id = 1');
  const timeZone = tzRes.recordset[0]?.timezone || 'Asia/Karachi';

  const tx = new sql.Transaction(pool);
  await tx.begin();

  try {
    const existingPatientsRes = await new sql.Request(tx).query<{
      id: number;
      public_id: string;
      mrn: string;
    }>('SELECT id, public_id, mrn FROM dbo.patients');

    const patientIdMap = new Map<string, number>();
    const usedMrns = new Set<string>();
    let maxMrnNum = 1999;

    for (const row of existingPatientsRes.recordset) {
      patientIdMap.set(row.public_id, row.id);
      usedMrns.add(row.mrn.toUpperCase());
      const match = /^NK-(\d+)$/i.exec(row.mrn);
      if (match) {
        maxMrnNum = Math.max(maxMrnNum, Number(match[1]));
      }
    }

    const existingVisitsRes = await new sql.Request(tx).query<{
      public_id: string;
      clinic_date: Date;
      token_no: number;
    }>('SELECT public_id, clinic_date, token_no FROM dbo.visits');

    const existingVisitIds = new Set<string>();
    const usedTokensByDate = new Map<string, Set<number>>();
    const maxTokenByDate = new Map<string, number>();

    for (const v of existingVisitsRes.recordset) {
      existingVisitIds.add(v.public_id);
      const dateStr = v.clinic_date.toISOString().slice(0, 10);
      if (!usedTokensByDate.has(dateStr)) usedTokensByDate.set(dateStr, new Set());
      usedTokensByDate.get(dateStr)!.add(v.token_no);
      maxTokenByDate.set(dateStr, Math.max(maxTokenByDate.get(dateStr) ?? 0, v.token_no));
    }

    let importedPatients = 0;
    let skippedPatients = 0;
    let importedVisits = 0;
    let skippedVisits = 0;
    let importedPrescriptions = 0;
    let adjustedTokens = 0;
    let importedMacros = 0;
    let updatedSettings = false;

    for (const patient of payload.patients) {
      let dbPatientId = patientIdMap.get(patient.id);

      if (!dbPatientId) {
        let candidateMrn = patient.mrn.trim();
        if (!candidateMrn || usedMrns.has(candidateMrn.toUpperCase())) {
          const seqRes = await new sql.Request(tx).query<{ nextNum: number }>(
            'SELECT NEXT VALUE FOR dbo.seq_patient_mrn AS nextNum'
          );
          candidateMrn = `NK-${seqRes.recordset[0].nextNum}`;
        }
        usedMrns.add(candidateMrn.toUpperCase());
        const mrnMatch = /^NK-(\d+)$/i.exec(candidateMrn);
        if (mrnMatch) {
          maxMrnNum = Math.max(maxMrnNum, Number(mrnMatch[1]));
        }

        const insertPatientRes = await new sql.Request(tx)
          .input('publicId', sql.NVarChar(50), patient.id)
          .input('mrn', sql.NVarChar(20), candidateMrn)
          .input('fullName', sql.NVarChar(150), patient.fullName)
          .input('relationType', sql.NVarChar(10), patient.relationType)
          .input('relativeName', sql.NVarChar(150), patient.relativeName)
          .input('age', sql.Int, patient.age)
          .input('gender', sql.NVarChar(20), patient.gender)
          .input('phone', sql.NVarChar(30), patient.phone)
          .input('locality', sql.NVarChar(120), patient.locality)
          .input('trackedComplaint', sql.NVarChar(200), patient.severityTrend?.complaintName ?? null)
          .input('overallRelief', sql.NVarChar(100), patient.severityTrend?.overallRelief ?? null)
          .query<{ id: number }>(`
            INSERT INTO dbo.patients (
              public_id, mrn, full_name, relation_type, relative_name,
              age, gender, phone, locality, tracked_complaint, overall_relief
            )
            OUTPUT INSERTED.id
            VALUES (
              @publicId, @mrn, @fullName, @relationType, @relativeName,
              @age, @gender, @phone, @locality, @trackedComplaint, @overallRelief
            );
          `);

        dbPatientId = insertPatientRes.recordset[0].id;
        patientIdMap.set(patient.id, dbPatientId);
        importedPatients++;

        for (const cc of patient.chiefComplaints ?? []) {
          await new sql.Request(tx)
            .input('publicId', sql.NVarChar(50), cc.id)
            .input('patientId', sql.Int, dbPatientId)
            .input('name', sql.NVarChar(200), cc.name)
            .input('severity', sql.NVarChar(20), cc.severity)
            .input('trend', sql.NVarChar(20), cc.trend)
            .input('duration', sql.NVarChar(50), cc.duration ?? null)
            .query(`
              IF NOT EXISTS (SELECT 1 FROM dbo.chief_complaints WHERE public_id = @publicId)
              BEGIN
                INSERT INTO dbo.chief_complaints (public_id, patient_id, name, severity, trend, duration)
                VALUES (@publicId, @patientId, @name, @severity, @trend, @duration);
              END
            `);
        }

        for (const point of patient.severityTrend?.history ?? []) {
          const recordedDate = parseDisplayDateToClinicDate(point.date, timeZone);
          await new sql.Request(tx)
            .input('patientId', sql.Int, dbPatientId)
            .input('complaintName', sql.NVarChar(200), patient.severityTrend?.complaintName ?? null)
            .input('recordedAt', sql.Date, recordedDate)
            .input('label', sql.NVarChar(30), point.label)
            .input('score', sql.Int, point.score)
            .query(`
              INSERT INTO dbo.severity_history (patient_id, complaint_name, recorded_at, label, score)
              VALUES (@patientId, @complaintName, @recordedAt, @label, @score);
            `);
        }
      } else {
        skippedPatients++;
      }

      for (const visit of patient.pastVisits ?? []) {
        if (existingVisitIds.has(visit.id)) {
          skippedVisits++;
          continue;
        }

        const clinicDate = parseDisplayDateToClinicDate(visit.date, timeZone);
        if (!usedTokensByDate.has(clinicDate)) {
          usedTokensByDate.set(clinicDate, new Set());
        }
        const dateSet = usedTokensByDate.get(clinicDate)!;
        let tokenNo = visit.tokenNo;

        if (dateSet.has(tokenNo)) {
          tokenNo = (maxTokenByDate.get(clinicDate) ?? 0) + 1;
          adjustedTokens++;
        }
        dateSet.add(tokenNo);
        maxTokenByDate.set(clinicDate, Math.max(maxTokenByDate.get(clinicDate) ?? 0, tokenNo));

        const visitedAtIso = buildVisitedAtIso(clinicDate, tokenNo);
        const visitInsertRes = await new sql.Request(tx)
          .input('publicId', sql.NVarChar(50), visit.id)
          .input('patientId', sql.Int, dbPatientId)
          .input('clinicDate', sql.Date, clinicDate)
          .input('visitedAt', sql.DateTimeOffset, new Date(visitedAtIso))
          .input('tokenNo', sql.Int, tokenNo)
          .input('reaction', sql.NVarChar(30), visit.reaction)
          .input('symptoms', sql.NVarChar(sql.MAX), visit.symptoms)
          .input('doctorNotes', sql.NVarChar(sql.MAX), visit.doctorNotes ?? null)
          .input('durationDays', sql.Int, visit.durationDays ?? null)
          .input('fee', sql.Decimal(10, 2), visit.fee)
          .input('feeStatus', sql.NVarChar(10), visit.feeStatus)
          .query<{ id: number }>(`
            INSERT INTO dbo.visits (
              public_id, patient_id, clinic_date, visited_at, token_no,
              reaction, symptoms, doctor_notes, duration_days, fee, fee_status
            )
            OUTPUT INSERTED.id
            VALUES (
              @publicId, @patientId, @clinicDate, @visitedAt, @tokenNo,
              @reaction, @symptoms, @doctorNotes, @durationDays, @fee, @feeStatus
            );
          `);

        const dbVisitId = visitInsertRes.recordset[0].id;
        existingVisitIds.add(visit.id);
        importedVisits++;

        const prescriptions = visit.prescriptions ?? [];
        for (let idx = 0; idx < prescriptions.length; idx++) {
          const rx = prescriptions[idx];
          const rxPublicId = rx.id || `rx-${visit.id}-${idx}`;
          await new sql.Request(tx)
            .input('publicId', sql.NVarChar(50), rxPublicId)
            .input('visitId', sql.Int, dbVisitId)
            .input('remedy', sql.NVarChar(150), rx.remedy)
            .input('potency', sql.NVarChar(50), rx.potency)
            .input('vehicle', sql.NVarChar(50), rx.vehicle)
            .input('dosage', sql.NVarChar(250), rx.dosage)
            .input('isRepeat', sql.Bit, rx.isRepeat ? 1 : 0)
            .input('sortOrder', sql.Int, idx)
            .query(`
              IF NOT EXISTS (SELECT 1 FROM dbo.prescriptions WHERE public_id = @publicId)
              BEGIN
                INSERT INTO dbo.prescriptions (
                  public_id, visit_id, remedy, potency, vehicle, dosage, is_repeat, sort_order
                )
                VALUES (
                  @publicId, @visitId, @remedy, @potency, @vehicle, @dosage, @isRepeat, @sortOrder
                );
              END
            `);
          importedPrescriptions++;
        }
      }
    }

    for (const [clinicDate, maxToken] of maxTokenByDate.entries()) {
      await new sql.Request(tx)
        .input('clinicDate', sql.Date, clinicDate)
        .input('lastTokenNo', sql.Int, maxToken)
        .query(`
          MERGE dbo.daily_counters WITH (HOLDLOCK) AS target
          USING (SELECT @clinicDate AS clinic_date, @lastTokenNo AS last_token_no) AS src
            ON target.clinic_date = src.clinic_date
          WHEN MATCHED THEN
            UPDATE SET last_token_no = CASE
              WHEN target.last_token_no < src.last_token_no THEN src.last_token_no
              ELSE target.last_token_no
            END
          WHEN NOT MATCHED THEN
            INSERT (clinic_date, last_token_no)
            VALUES (src.clinic_date, src.last_token_no);
        `);
    }

    if (payload.clinicConfig && Object.keys(payload.clinicConfig).length > 0) {
      const merged = { ...CLINIC_CONFIG, ...payload.clinicConfig };
      await new sql.Request(tx)
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
      updatedSettings = true;
    }

    for (const macro of payload.dosageMacros ?? []) {
      const res = await new sql.Request(tx)
        .input('macroText', sql.NVarChar(200), macro)
        .query(`
          IF NOT EXISTS (SELECT 1 FROM dbo.dosage_macros WHERE macro_text = @macroText)
          BEGIN
            DECLARE @nextOrder INT = ISNULL((SELECT MAX(sort_order) + 1 FROM dbo.dosage_macros), 0);
            INSERT INTO dbo.dosage_macros (macro_text, sort_order)
            VALUES (@macroText, @nextOrder);
            SELECT 1 AS inserted;
          END
          ELSE
          BEGIN
            SELECT 0 AS inserted;
          END
        `);
      if (res.recordset[0]?.inserted === 1) {
        importedMacros++;
      }
    }

    const seqInfo = await new sql.Request(tx).query<{ current_value: number }>(
      "SELECT CAST(current_value AS INT) AS current_value FROM sys.sequences WHERE name = 'seq_patient_mrn'"
    );
    const currentSeq = seqInfo.recordset[0]?.current_value ?? 2000;
    if (maxMrnNum >= currentSeq) {
      await new sql.Request(tx).query(
        `ALTER SEQUENCE dbo.seq_patient_mrn RESTART WITH ${maxMrnNum + 1};`
      );
    }

    await tx.commit();

    return {
      importedPatients,
      skippedPatients,
      importedVisits,
      skippedVisits,
      importedPrescriptions,
      adjustedTokens,
      importedMacros,
      updatedSettings,
    };
  } catch (err) {
    await tx.rollback();
    throw err;
  }
}
