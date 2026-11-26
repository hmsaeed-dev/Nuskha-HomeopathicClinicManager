import { loadLocalEnv } from './loadEnv';
import { getPool, sql } from './pool';
import { INITIAL_PATIENTS } from '../data/mockData';
import { CLINIC_CONFIG } from '../config/clinic.config';
import { DOSAGE_MACROS } from '../constants/clinical';
import { buildVisitedAtIso, parseDisplayDateToClinicDate } from '../lib/clinicDate';

loadLocalEnv();

async function seedDatabase(): Promise<void> {
  const pool = await getPool();
  const tx = new sql.Transaction(pool);
  await tx.begin();

  try {
    // 1. Seed singleton clinic settings if absent
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
        IF NOT EXISTS (SELECT 1 FROM dbo.clinic_settings WHERE id = 1)
        BEGIN
          INSERT INTO dbo.clinic_settings (
            id, name, doctor_name, subtitle, license_number, phone, address,
            currency, default_consultation_fee, default_course_days,
            session_timings, available_course_durations, timezone
          )
          VALUES (
            1, @name, @doctorName, @subtitle, @licenseNumber, @phone, @address,
            @currency, @defaultFee, @defaultDays,
            @sessionTimings, @availableDurations, N'Asia/Karachi'
          );
        END
      `);

    // 2. Seed default dosage macros idempotently
    for (let i = 0; i < DOSAGE_MACROS.length; i++) {
      await new sql.Request(tx)
        .input('macroText', sql.NVarChar(200), DOSAGE_MACROS[i])
        .input('sortOrder', sql.Int, i)
        .query(`
          IF NOT EXISTS (SELECT 1 FROM dbo.dosage_macros WHERE macro_text = @macroText)
          BEGIN
            INSERT INTO dbo.dosage_macros (macro_text, sort_order)
            VALUES (@macroText, @sortOrder);
          END
        `);
    }

    // 3. Load existing records to guarantee idempotency and collision-free tokens
    const existingPatientsRes = await new sql.Request(tx).query<{
      id: number;
      public_id: string;
      mrn: string;
    }>('SELECT id, public_id, mrn FROM dbo.patients');

    const patientIdMap = new Map<string, number>();
    let maxMrnNum = 1999;
    for (const row of existingPatientsRes.recordset) {
      patientIdMap.set(row.public_id, row.id);
      const mrnMatch = /^NK-(\d+)$/i.exec(row.mrn);
      if (mrnMatch) {
        maxMrnNum = Math.max(maxMrnNum, Number(mrnMatch[1]));
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

    let insertedPatients = 0;
    let insertedVisits = 0;
    let insertedPrescriptions = 0;
    let adjustedTokenCount = 0;

    // 4. Insert patients, complaints, severity history, visits, and prescriptions
    for (const patient of INITIAL_PATIENTS) {
      const mrnMatch = /^NK-(\d+)$/i.exec(patient.mrn);
      if (mrnMatch) {
        maxMrnNum = Math.max(maxMrnNum, Number(mrnMatch[1]));
      }

      let dbPatientId = patientIdMap.get(patient.id);

      if (!dbPatientId) {
        const insertPatientRes = await new sql.Request(tx)
          .input('publicId', sql.NVarChar(50), patient.id)
          .input('mrn', sql.NVarChar(20), patient.mrn)
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
        insertedPatients++;

        // Chief complaints
        for (const cc of patient.chiefComplaints ?? []) {
          await new sql.Request(tx)
            .input('publicId', sql.NVarChar(50), cc.id)
            .input('patientId', sql.Int, dbPatientId)
            .input('name', sql.NVarChar(200), cc.name)
            .input('severity', sql.NVarChar(20), cc.severity)
            .input('trend', sql.NVarChar(20), cc.trend)
            .input('duration', sql.NVarChar(50), cc.duration ?? null)
            .query(`
              INSERT INTO dbo.chief_complaints (public_id, patient_id, name, severity, trend, duration)
              VALUES (@publicId, @patientId, @name, @severity, @trend, @duration);
            `);
        }

        // Severity history points
        for (const point of patient.severityTrend?.history ?? []) {
          const recordedDate = parseDisplayDateToClinicDate(point.date);
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
      }

      // Past visits + prescriptions
      for (const visit of patient.pastVisits ?? []) {
        if (existingVisitIds.has(visit.id)) continue;

        const clinicDate = parseDisplayDateToClinicDate(visit.date);
        if (!usedTokensByDate.has(clinicDate)) {
          usedTokensByDate.set(clinicDate, new Set());
        }
        const dateSet = usedTokensByDate.get(clinicDate)!;
        let tokenNo = visit.tokenNo;

        if (dateSet.has(tokenNo)) {
          tokenNo = (maxTokenByDate.get(clinicDate) ?? 0) + 1;
          adjustedTokenCount++;
        }
        dateSet.add(tokenNo);
        maxTokenByDate.set(clinicDate, Math.max(maxTokenByDate.get(clinicDate) ?? 0, tokenNo));

        const visitedAtIso = buildVisitedAtIso(clinicDate, tokenNo);

        const insertVisitRes = await new sql.Request(tx)
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

        const dbVisitId = insertVisitRes.recordset[0].id;
        existingVisitIds.add(visit.id);
        insertedVisits++;

        const prescriptions = visit.prescriptions ?? [];
        for (let idx = 0; idx < prescriptions.length; idx++) {
          const rx = prescriptions[idx];
          await new sql.Request(tx)
            .input('publicId', sql.NVarChar(50), rx.id)
            .input('visitId', sql.Int, dbVisitId)
            .input('remedy', sql.NVarChar(150), rx.remedy)
            .input('potency', sql.NVarChar(50), rx.potency)
            .input('vehicle', sql.NVarChar(50), rx.vehicle)
            .input('dosage', sql.NVarChar(250), rx.dosage)
            .input('isRepeat', sql.Bit, rx.isRepeat ? 1 : 0)
            .input('sortOrder', sql.Int, idx)
            .query(`
              INSERT INTO dbo.prescriptions (
                public_id, visit_id, remedy, potency, vehicle, dosage, is_repeat, sort_order
              )
              VALUES (
                @publicId, @visitId, @remedy, @potency, @vehicle, @dosage, @isRepeat, @sortOrder
              );
            `);
          insertedPrescriptions++;
        }
      }
    }

    // 5. Sync daily_counters to highest token per clinic_date
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

    // 6. Advance MRN sequence beyond highest existing MRN
    const nextMrnStart = maxMrnNum + 1;
    await new sql.Request(tx).query(
      `ALTER SEQUENCE dbo.seq_patient_mrn RESTART WITH ${nextMrnStart};`
    );

    await tx.commit();

    console.log('[db:seed] Seed complete:', {
      insertedPatients,
      insertedVisits,
      insertedPrescriptions,
      adjustedTokenCount,
      nextMrnStart,
    });
  } catch (err) {
    await tx.rollback();
    throw err;
  } finally {
    await pool.close();
  }
}

seedDatabase().catch((err) => {
  console.error('[db:seed] Error:', err);
  process.exit(1);
});
