import crypto from 'node:crypto';
import { getPool, sql } from '@/db/pool';
import {
  ChiefComplaint,
  DispensingVehicle,
  PastVisit,
  Patient,
  PrescriptionItem,
  ReactionType,
} from '@/types';
import {
  formatClinicDisplayDate,
  formatLastVisitLabel,
  getClinicDateString,
} from '@/lib/clinicDate';
import { ApiError } from '@/lib/api/response';

interface PatientRow {
  id: number;
  public_id: string;
  mrn: string;
  full_name: string;
  relation_type: 's/o' | 'w/o' | 'd/o';
  relative_name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child';
  phone: string;
  locality: string;
  tracked_complaint: string | null;
  overall_relief: string | null;
}

interface ComplaintRow {
  id: number;
  public_id: string;
  patient_id: number;
  name: string;
  severity: 'Severe' | 'Moderate' | 'Mild' | 'Relieved';
  trend: 'Declining' | 'Stable' | 'Improving';
  duration: string | null;
}

interface VisitRow {
  id: number;
  public_id: string;
  patient_id: number;
  clinic_date: Date;
  visited_at: Date;
  token_no: number;
  reaction: ReactionType;
  symptoms: string;
  doctor_notes: string | null;
  duration_days: number | null;
  fee: number;
  fee_status: 'Paid' | 'Free' | 'Due';
  edited_at: Date | null;
}

interface PrescriptionRow {
  id: number;
  public_id: string;
  visit_id: number;
  remedy: string;
  potency: string;
  vehicle: DispensingVehicle;
  dosage: string;
  is_repeat: boolean;
  sort_order: number;
}

interface SeverityHistoryRow {
  id: number;
  patient_id: number;
  complaint_name: string | null;
  recorded_at: Date;
  label: string;
  score: number;
}

function toIsoDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10);
}

async function getClinicTimezone(executor: sql.ConnectionPool): Promise<string> {
  const res = await executor.request().query<{ timezone: string }>(
    'SELECT TOP 1 timezone FROM dbo.clinic_settings WHERE id = 1'
  );
  return res.recordset[0]?.timezone || 'Asia/Karachi';
}

function hydratePatients(
  patientRows: PatientRow[],
  complaintRows: ComplaintRow[],
  visitRows: VisitRow[],
  prescriptionRows: PrescriptionRow[],
  severityRows: SeverityHistoryRow[],
  timeZone: string
): Patient[] {
  const sortedPrescriptions = [...prescriptionRows].sort(
    (a, b) => a.visit_id - b.visit_id || a.sort_order - b.sort_order || a.id - b.id
  );
  const rxByVisitId = new Map<number, PrescriptionItem[]>();
  for (const r of sortedPrescriptions) {
    if (!rxByVisitId.has(r.visit_id)) rxByVisitId.set(r.visit_id, []);
    rxByVisitId.get(r.visit_id)!.push({
      id: r.public_id,
      remedy: r.remedy,
      potency: r.potency,
      vehicle: r.vehicle,
      dosage: r.dosage,
      isRepeat: Boolean(r.is_repeat),
    });
  }

  const patientPublicIdById = new Map<number, string>();
  for (const p of patientRows) {
    patientPublicIdById.set(p.id, p.public_id);
  }

  const sortedComplaints = [...complaintRows].sort((a, b) => a.id - b.id);
  const complaintsByPatientId = new Map<number, ChiefComplaint[]>();
  for (const c of sortedComplaints) {
    if (!complaintsByPatientId.has(c.patient_id)) {
      complaintsByPatientId.set(c.patient_id, []);
    }
    complaintsByPatientId.get(c.patient_id)!.push({
      id: c.public_id,
      name: c.name,
      severity: c.severity,
      trend: c.trend,
      duration: c.duration ?? undefined,
    });
  }

  const sortedVisits = [...visitRows].sort(
    (a, b) => b.visited_at.getTime() - a.visited_at.getTime() || b.id - a.id
  );
  const visitsByPatientId = new Map<number, { visits: PastVisit[]; latestClinicDate?: string }>();
  for (const v of sortedVisits) {
    if (!visitsByPatientId.has(v.patient_id)) {
      visitsByPatientId.set(v.patient_id, { visits: [] });
    }
    const bucket = visitsByPatientId.get(v.patient_id)!;
    const clinicDateStr = toIsoDateOnly(v.clinic_date);
    if (!bucket.latestClinicDate || clinicDateStr > bucket.latestClinicDate) {
      bucket.latestClinicDate = clinicDateStr;
    }

    bucket.visits.push({
      id: v.public_id,
      patientId: patientPublicIdById.get(v.patient_id) ?? '',
      date: formatClinicDisplayDate(clinicDateStr, timeZone),
      tokenNo: v.token_no,
      reaction: v.reaction,
      symptoms: v.symptoms,
      prescriptions: rxByVisitId.get(v.id) ?? [],
      doctorNotes: v.doctor_notes ?? undefined,
      durationDays: v.duration_days ?? undefined,
      fee: Number(v.fee),
      feeStatus: v.fee_status,
      editedAt: v.edited_at ? v.edited_at.toISOString() : undefined,
    });
  }

  const sortedSeverity = [...severityRows].sort(
    (a, b) => a.recorded_at.getTime() - b.recorded_at.getTime() || a.id - b.id
  );
  const severityByPatientId = new Map<
    number,
    Array<{ label: string; date: string; score: number }>
  >();
  for (const s of sortedSeverity) {
    if (!severityByPatientId.has(s.patient_id)) {
      severityByPatientId.set(s.patient_id, []);
    }
    severityByPatientId.get(s.patient_id)!.push({
      label: s.label,
      date: formatClinicDisplayDate(toIsoDateOnly(s.recorded_at), timeZone),
      score: s.score,
    });
  }

  return patientRows.map((p) => {
    const visitBucket = visitsByPatientId.get(p.id);
    const pastVisits = visitBucket?.visits ?? [];
    const lastVisitDate = visitBucket?.latestClinicDate
      ? formatLastVisitLabel(visitBucket.latestClinicDate, timeZone)
      : 'Today';

    const history = severityByPatientId.get(p.id) ?? [];
    const severityTrend =
      history.length > 0 || p.overall_relief
        ? {
            complaintName: p.tracked_complaint ?? undefined,
            overallRelief: p.overall_relief ?? 'First Visit',
            history,
          }
        : undefined;

    return {
      id: p.public_id,
      mrn: p.mrn,
      fullName: p.full_name,
      relationType: p.relation_type,
      relativeName: p.relative_name,
      age: p.age,
      gender: p.gender,
      phone: p.phone,
      locality: p.locality,
      totalVisits: pastVisits.length,
      lastVisitDate,
      chiefComplaints: complaintsByPatientId.get(p.id) ?? [],
      pastVisits,
      severityTrend,
    };
  });
}

function buildSearchWhereClause(
  searchQuery: string | undefined,
  alias: string
): { clause: string; param?: string } {
  const trimmed = searchQuery?.trim();
  if (!trimmed) {
    return { clause: `${alias}.archived_at IS NULL` };
  }

  return {
    clause: `
      ${alias}.archived_at IS NULL
      AND (
        ${alias}.full_name LIKE @q
        OR ${alias}.relative_name LIKE @q
        OR ${alias}.phone LIKE @q
        OR ${alias}.mrn LIKE @q
        OR ${alias}.locality LIKE @q
      )
    `,
    param: `%${trimmed}%`,
  };
}

function makeScopedRequest(
  pool: sql.ConnectionPool,
  searchParam?: string
): sql.Request {
  const req = pool.request();
  if (searchParam !== undefined) {
    req.input('q', sql.NVarChar(200), searchParam);
  }
  return req;
}

async function allocateNextDailyToken(
  tx: sql.Transaction,
  clinicDate: string
): Promise<number> {
  const tokenRes = await new sql.Request(tx)
    .input('clinicDate', sql.Date, clinicDate)
    .query<{ tokenNo: number }>(`
      MERGE dbo.daily_counters WITH (HOLDLOCK) AS target
      USING (SELECT @clinicDate AS clinic_date) AS src
        ON target.clinic_date = src.clinic_date
      WHEN MATCHED THEN
        UPDATE SET last_token_no = target.last_token_no + 1
      WHEN NOT MATCHED THEN
        INSERT (clinic_date, last_token_no)
        VALUES (src.clinic_date, 1)
      OUTPUT INSERTED.last_token_no AS tokenNo;
    `);
  return tokenRes.recordset[0].tokenNo;
}

export async function listPatientsWithMeta(searchQuery?: string): Promise<{
  patients: Patient[];
  todayCount: number;
}> {
  const pool = await getPool();
  const timeZone = await getClinicTimezone(pool);
  const todayClinicDate = getClinicDateString(new Date(), timeZone);
  const { clause: patientClause, param: searchParam } = buildSearchWhereClause(
    searchQuery,
    'p'
  );

  const patientsRes = await makeScopedRequest(pool, searchParam).query<PatientRow>(`
    SELECT p.id, p.public_id, p.mrn, p.full_name, p.relation_type, p.relative_name,
           p.age, p.gender, p.phone, p.locality, p.tracked_complaint, p.overall_relief
    FROM dbo.patients p
    WHERE ${patientClause}
    ORDER BY p.id DESC
  `);

  const todayCounterRes = await pool
    .request()
    .input('todayDate', sql.Date, todayClinicDate)
    .query<{ last_token_no: number }>(
      'SELECT last_token_no FROM dbo.daily_counters WHERE clinic_date = @todayDate'
    );

  const todayCount = todayCounterRes.recordset[0]?.last_token_no ?? 0;

  if (patientsRes.recordset.length === 0) {
    return { patients: [], todayCount };
  }

  const patientIdsJson = JSON.stringify(patientsRes.recordset.map((p) => p.id));

  const [complaintsRes, visitsRes, prescriptionsRes, severityRes] = await Promise.all([
    pool
      .request()
      .input('patientIds', sql.NVarChar(sql.MAX), patientIdsJson)
      .query<ComplaintRow>(`
        SELECT cc.id, cc.public_id, cc.patient_id, cc.name, cc.severity, cc.trend, cc.duration
        FROM dbo.chief_complaints cc
        INNER JOIN OPENJSON(@patientIds) ids ON cc.patient_id = CAST(ids.value AS INT)
      `),
    pool
      .request()
      .input('patientIds', sql.NVarChar(sql.MAX), patientIdsJson)
      .query<VisitRow>(`
        SELECT v.id, v.public_id, v.patient_id, v.clinic_date, v.visited_at, v.token_no,
               v.reaction, v.symptoms, v.doctor_notes, v.duration_days, v.fee, v.fee_status, v.edited_at
        FROM dbo.visits v
        INNER JOIN OPENJSON(@patientIds) ids ON v.patient_id = CAST(ids.value AS INT)
      `),
    pool
      .request()
      .input('patientIds', sql.NVarChar(sql.MAX), patientIdsJson)
      .query<PrescriptionRow>(`
        SELECT rx.id, rx.public_id, rx.visit_id, rx.remedy, rx.potency, rx.vehicle, rx.dosage, rx.is_repeat, rx.sort_order
        FROM dbo.prescriptions rx
        INNER JOIN dbo.visits v ON v.id = rx.visit_id
        INNER JOIN OPENJSON(@patientIds) ids ON v.patient_id = CAST(ids.value AS INT)
        OPTION (LOOP JOIN)
      `),
    pool
      .request()
      .input('patientIds', sql.NVarChar(sql.MAX), patientIdsJson)
      .query<SeverityHistoryRow>(`
        SELECT sh.id, sh.patient_id, sh.complaint_name, sh.recorded_at, sh.label, sh.score
        FROM dbo.severity_history sh
        INNER JOIN OPENJSON(@patientIds) ids ON sh.patient_id = CAST(ids.value AS INT)
      `),
  ]);

  const patients = hydratePatients(
    patientsRes.recordset,
    complaintsRes.recordset,
    visitsRes.recordset,
    prescriptionsRes.recordset,
    severityRes.recordset,
    timeZone
  );

  return { patients, todayCount };
}

export async function getPatientByPublicId(publicId: string): Promise<Patient> {
  const pool = await getPool();
  const timeZone = await getClinicTimezone(pool);

  const patientRes = await pool
    .request()
    .input('publicId', sql.NVarChar(50), publicId)
    .query<PatientRow>(`
      SELECT id, public_id, mrn, full_name, relation_type, relative_name,
             age, gender, phone, locality, tracked_complaint, overall_relief
      FROM dbo.patients
      WHERE public_id = @publicId AND archived_at IS NULL
    `);

  const patientRow = patientRes.recordset[0];
  if (!patientRow) {
    throw new ApiError(404, 'Patient not found.');
  }

  const [complaintsRes, visitsRes, prescriptionsRes, severityRes] = await Promise.all([
    pool
      .request()
      .input('patientId', sql.Int, patientRow.id)
      .query<ComplaintRow>(
        'SELECT id, public_id, patient_id, name, severity, trend, duration FROM dbo.chief_complaints WHERE patient_id = @patientId'
      ),
    pool
      .request()
      .input('patientId', sql.Int, patientRow.id)
      .query<VisitRow>(`
        SELECT id, public_id, patient_id, clinic_date, visited_at, token_no,
               reaction, symptoms, doctor_notes, duration_days, fee, fee_status, edited_at
        FROM dbo.visits
        WHERE patient_id = @patientId
      `),
    pool
      .request()
      .input('patientId', sql.Int, patientRow.id)
      .query<PrescriptionRow>(`
        SELECT rx.id, rx.public_id, rx.visit_id, rx.remedy, rx.potency, rx.vehicle, rx.dosage, rx.is_repeat, rx.sort_order
        FROM dbo.prescriptions rx
        INNER JOIN dbo.visits v ON v.id = rx.visit_id
        WHERE v.patient_id = @patientId
        OPTION (LOOP JOIN)
      `),
    pool
      .request()
      .input('patientId', sql.Int, patientRow.id)
      .query<SeverityHistoryRow>(
        'SELECT id, patient_id, complaint_name, recorded_at, label, score FROM dbo.severity_history WHERE patient_id = @patientId'
      ),
  ]);

  return hydratePatients(
    [patientRow],
    complaintsRes.recordset,
    visitsRes.recordset,
    prescriptionsRes.recordset,
    severityRes.recordset,
    timeZone
  )[0];
}

export async function createPatient(input: {
  fullName: string;
  relationType: 's/o' | 'w/o' | 'd/o';
  relativeName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child';
  phone: string;
  locality: string;
  initialFee?: number;
}): Promise<{ patient: Patient; todayCount: number }> {
  const pool = await getPool();
  const timeZone = await getClinicTimezone(pool);
  const now = new Date();
  const todayClinicDate = getClinicDateString(now, timeZone);
  const publicId = `p-${crypto.randomUUID().slice(0, 8)}`;

  const tx = new sql.Transaction(pool);
  await tx.begin();
  try {
    const seqRes = await new sql.Request(tx).query<{ nextNum: number }>(
      'SELECT NEXT VALUE FOR dbo.seq_patient_mrn AS nextNum'
    );
    const mrn = `NK-${seqRes.recordset[0].nextNum}`;

    const insertRes = await new sql.Request(tx)
      .input('publicId', sql.NVarChar(50), publicId)
      .input('mrn', sql.NVarChar(20), mrn)
      .input('fullName', sql.NVarChar(150), input.fullName)
      .input('relationType', sql.NVarChar(10), input.relationType)
      .input('relativeName', sql.NVarChar(150), input.relativeName)
      .input('age', sql.Int, input.age)
      .input('gender', sql.NVarChar(20), input.gender)
      .input('phone', sql.NVarChar(30), input.phone)
      .input('locality', sql.NVarChar(120), input.locality)
      .input('overallRelief', sql.NVarChar(100), 'First Visit')
      .query<{ id: number }>(`
        INSERT INTO dbo.patients (
          public_id, mrn, full_name, relation_type, relative_name,
          age, gender, phone, locality, overall_relief
        )
        OUTPUT INSERTED.id
        VALUES (
          @publicId, @mrn, @fullName, @relationType, @relativeName,
          @age, @gender, @phone, @locality, @overallRelief
        );
      `);

    const dbPatientId = insertRes.recordset[0].id;

    await new sql.Request(tx)
      .input('patientId', sql.Int, dbPatientId)
      .input('recordedAt', sql.Date, todayClinicDate)
      .input('label', sql.NVarChar(30), 'Today')
      .input('score', sql.Int, 100)
      .query(`
        INSERT INTO dbo.severity_history (patient_id, recorded_at, label, score)
        VALUES (@patientId, @recordedAt, @label, @score);
      `);

    let todayCount: number;
    if (input.initialFee !== undefined) {
      const tokenNo = await allocateNextDailyToken(tx, todayClinicDate);
      const visitPublicId = `v-${crypto.randomUUID().slice(0, 8)}`;
      const feeStatus = input.initialFee > 0 ? 'Paid' : 'Free';

      await new sql.Request(tx)
        .input('publicId', sql.NVarChar(50), visitPublicId)
        .input('patientId', sql.Int, dbPatientId)
        .input('clinicDate', sql.Date, todayClinicDate)
        .input('visitedAt', sql.DateTimeOffset, now)
        .input('tokenNo', sql.Int, tokenNo)
        .input('reaction', sql.NVarChar(30), 'First Visit')
        .input('symptoms', sql.NVarChar(sql.MAX), 'Walk-in registration')
        .input('doctorNotes', sql.NVarChar(sql.MAX), 'Initial registration & OPD check-in')
        .input('fee', sql.Decimal(10, 2), input.initialFee)
        .input('feeStatus', sql.NVarChar(10), feeStatus)
        .query(`
          INSERT INTO dbo.visits (
            public_id, patient_id, clinic_date, visited_at, token_no,
            reaction, symptoms, doctor_notes, fee, fee_status
          )
          VALUES (
            @publicId, @patientId, @clinicDate, @visitedAt, @tokenNo,
            @reaction, @symptoms, @doctorNotes, @fee, @feeStatus
          );
        `);

      todayCount = tokenNo;
    } else {
      const counterRes = await new sql.Request(tx)
        .input('todayDate', sql.Date, todayClinicDate)
        .query<{ last_token_no: number }>(
          'SELECT last_token_no FROM dbo.daily_counters WHERE clinic_date = @todayDate'
        );
      todayCount = counterRes.recordset[0]?.last_token_no ?? 0;
    }

    await tx.commit();
    const patient = await getPatientByPublicId(publicId);
    return { patient, todayCount };
  } catch (err) {
    await tx.rollback();
    throw err;
  }
}

export async function updatePatient(
  publicId: string,
  input: {
    fullName: string;
    relationType: 's/o' | 'w/o' | 'd/o';
    relativeName: string;
    age: number;
    gender: 'Male' | 'Female' | 'Child';
    phone: string;
    locality: string;
  }
): Promise<Patient> {
  const pool = await getPool();
  const res = await pool
    .request()
    .input('publicId', sql.NVarChar(50), publicId)
    .input('fullName', sql.NVarChar(150), input.fullName)
    .input('relationType', sql.NVarChar(10), input.relationType)
    .input('relativeName', sql.NVarChar(150), input.relativeName)
    .input('age', sql.Int, input.age)
    .input('gender', sql.NVarChar(20), input.gender)
    .input('phone', sql.NVarChar(30), input.phone)
    .input('locality', sql.NVarChar(120), input.locality)
    .query(`
      UPDATE dbo.patients
      SET full_name = @fullName,
          relation_type = @relationType,
          relative_name = @relativeName,
          age = @age,
          gender = @gender,
          phone = @phone,
          locality = @locality,
          updated_at = SYSDATETIMEOFFSET()
      WHERE public_id = @publicId AND archived_at IS NULL;
    `);

  if (res.rowsAffected[0] === 0) {
    throw new ApiError(404, 'Patient not found.');
  }

  return getPatientByPublicId(publicId);
}

export async function archivePatient(publicId: string): Promise<void> {
  const pool = await getPool();
  const res = await pool
    .request()
    .input('publicId', sql.NVarChar(50), publicId)
    .query(`
      UPDATE dbo.patients
      SET archived_at = SYSDATETIMEOFFSET(),
          updated_at = SYSDATETIMEOFFSET()
      WHERE public_id = @publicId AND archived_at IS NULL;
    `);

  if (res.rowsAffected[0] === 0) {
    throw new ApiError(404, 'Patient not found.');
  }
}

export async function saveConsultation(
  patientPublicId: string,
  input: {
    reaction: ReactionType;
    symptoms: string;
    prescriptions: Array<{
      remedy: string;
      potency: string;
      vehicle: DispensingVehicle;
      dosage: string;
      isRepeat?: boolean;
    }>;
    doctorNotes?: string;
    durationDays?: number;
    fee: number;
    feeStatus: 'Paid' | 'Free' | 'Due';
    idempotencyKey?: string;
  }
): Promise<{ visit: PastVisit; todayCount: number }> {
  const pool = await getPool();
  const timeZone = await getClinicTimezone(pool);
  const now = new Date();
  const clinicDate = getClinicDateString(now, timeZone);

  const tx = new sql.Transaction(pool);
  await tx.begin();

  try {
    // 1. Verify active patient
    const patientRes = await new sql.Request(tx)
      .input('publicId', sql.NVarChar(50), patientPublicId)
      .query<{ id: number }>(
        'SELECT id FROM dbo.patients WHERE public_id = @publicId AND archived_at IS NULL'
      );

    const patientRow = patientRes.recordset[0];
    if (!patientRow) {
      throw new ApiError(404, 'Patient not found.');
    }

    // 2. Idempotency guard against double-submits (e.g., rapid Ctrl+Enter)
    if (input.idempotencyKey) {
      const existingRes = await new sql.Request(tx)
        .input('idemKey', sql.NVarChar(64), input.idempotencyKey)
        .query<VisitRow>(`
          SELECT id, public_id, patient_id, clinic_date, visited_at, token_no,
                 reaction, symptoms, doctor_notes, duration_days, fee, fee_status, edited_at
          FROM dbo.visits
          WHERE idempotency_key = @idemKey
        `);

      if (existingRes.recordset[0]) {
        const existingVisit = existingRes.recordset[0];
        const rxRes = await new sql.Request(tx)
          .input('visitId', sql.Int, existingVisit.id)
          .query<PrescriptionRow>(
            'SELECT public_id, visit_id, remedy, potency, vehicle, dosage, is_repeat FROM dbo.prescriptions WHERE visit_id = @visitId ORDER BY sort_order ASC'
          );
        const counterRes = await new sql.Request(tx)
          .input('clinicDate', sql.Date, clinicDate)
          .query<{ last_token_no: number }>(
            'SELECT last_token_no FROM dbo.daily_counters WHERE clinic_date = @clinicDate'
          );

        await tx.commit();
        return {
          visit: {
            id: existingVisit.public_id,
            patientId: patientPublicId,
            date: formatClinicDisplayDate(toIsoDateOnly(existingVisit.clinic_date), timeZone),
            tokenNo: existingVisit.token_no,
            reaction: existingVisit.reaction,
            symptoms: existingVisit.symptoms,
            prescriptions: rxRes.recordset.map((r) => ({
              id: r.public_id,
              remedy: r.remedy,
              potency: r.potency,
              vehicle: r.vehicle,
              dosage: r.dosage,
              isRepeat: Boolean(r.is_repeat),
            })),
            doctorNotes: existingVisit.doctor_notes ?? undefined,
            durationDays: existingVisit.duration_days ?? undefined,
            fee: Number(existingVisit.fee),
            feeStatus: existingVisit.fee_status,
          },
          todayCount: counterRes.recordset[0]?.last_token_no ?? existingVisit.token_no,
        };
      }
    }

    // 3. Atomically allocate next daily token using MERGE WITH (HOLDLOCK)
    const tokenNo = await allocateNextDailyToken(tx, clinicDate);
    const visitPublicId = `v-${crypto.randomUUID().slice(0, 8)}`;

    // 4. Insert visit
    const visitInsertRes = await new sql.Request(tx)
      .input('publicId', sql.NVarChar(50), visitPublicId)
      .input('patientId', sql.Int, patientRow.id)
      .input('clinicDate', sql.Date, clinicDate)
      .input('visitedAt', sql.DateTimeOffset, now)
      .input('tokenNo', sql.Int, tokenNo)
      .input('reaction', sql.NVarChar(30), input.reaction)
      .input('symptoms', sql.NVarChar(sql.MAX), input.symptoms)
      .input('doctorNotes', sql.NVarChar(sql.MAX), input.doctorNotes ?? null)
      .input('durationDays', sql.Int, input.durationDays ?? null)
      .input('fee', sql.Decimal(10, 2), input.fee)
      .input('feeStatus', sql.NVarChar(10), input.feeStatus)
      .input('idemKey', sql.NVarChar(64), input.idempotencyKey ?? null)
      .query<{ id: number }>(`
        INSERT INTO dbo.visits (
          public_id, patient_id, clinic_date, visited_at, token_no,
          reaction, symptoms, doctor_notes, duration_days, fee, fee_status, idempotency_key
        )
        OUTPUT INSERTED.id
        VALUES (
          @publicId, @patientId, @clinicDate, @visitedAt, @tokenNo,
          @reaction, @symptoms, @doctorNotes, @durationDays, @fee, @feeStatus, @idemKey
        );
      `);

    const dbVisitId = visitInsertRes.recordset[0].id;

    // 5. Insert prescriptions
    const insertedRx: PrescriptionItem[] = [];
    for (let i = 0; i < input.prescriptions.length; i++) {
      const rx = input.prescriptions[i];
      const rxPublicId = `rx-${crypto.randomUUID().slice(0, 8)}`;
      await new sql.Request(tx)
        .input('publicId', sql.NVarChar(50), rxPublicId)
        .input('visitId', sql.Int, dbVisitId)
        .input('remedy', sql.NVarChar(150), rx.remedy)
        .input('potency', sql.NVarChar(50), rx.potency)
        .input('vehicle', sql.NVarChar(50), rx.vehicle)
        .input('dosage', sql.NVarChar(250), rx.dosage)
        .input('isRepeat', sql.Bit, rx.isRepeat ? 1 : 0)
        .input('sortOrder', sql.Int, i)
        .query(`
          INSERT INTO dbo.prescriptions (
            public_id, visit_id, remedy, potency, vehicle, dosage, is_repeat, sort_order
          )
          VALUES (
            @publicId, @visitId, @remedy, @potency, @vehicle, @dosage, @isRepeat, @sortOrder
          );
        `);

      insertedRx.push({
        id: rxPublicId,
        remedy: rx.remedy,
        potency: rx.potency,
        vehicle: rx.vehicle,
        dosage: rx.dosage,
        isRepeat: Boolean(rx.isRepeat),
      });
    }

    await new sql.Request(tx)
      .input('patientId', sql.Int, patientRow.id)
      .query('UPDATE dbo.patients SET updated_at = SYSDATETIMEOFFSET() WHERE id = @patientId');

    await tx.commit();

    return {
      visit: {
        id: visitPublicId,
        patientId: patientPublicId,
        date: formatClinicDisplayDate(clinicDate, timeZone),
        tokenNo,
        reaction: input.reaction,
        symptoms: input.symptoms,
        prescriptions: insertedRx,
        doctorNotes: input.doctorNotes,
        durationDays: input.durationDays,
        fee: Number(input.fee),
        feeStatus: input.feeStatus,
      },
      todayCount: tokenNo,
    };
  } catch (err) {
    await tx.rollback();
    throw err;
  }
}

export async function settlePatientDues(patientPublicId: string): Promise<{
  settledCount: number;
}> {
  const pool = await getPool();
  const patientRes = await pool
    .request()
    .input('publicId', sql.NVarChar(50), patientPublicId)
    .query<{ id: number }>(
      'SELECT id FROM dbo.patients WHERE public_id = @publicId AND archived_at IS NULL'
    );

  const patientRow = patientRes.recordset[0];
  if (!patientRow) {
    throw new ApiError(404, 'Patient not found.');
  }

  const updateRes = await pool
    .request()
    .input('patientId', sql.Int, patientRow.id)
    .query(`
      UPDATE dbo.visits
      SET fee_status = 'Paid',
          edited_at = SYSDATETIMEOFFSET()
      WHERE patient_id = @patientId AND fee_status = 'Due';
    `);

  return { settledCount: updateRes.rowsAffected[0] ?? 0 };
}

export async function listVisitsByDateRange(from?: string, to?: string) {
  const pool = await getPool();
  const timeZone = await getClinicTimezone(pool);

  const req = pool.request();
  const conditions = ['p.archived_at IS NULL'];
  if (from && /^\d{4}-\d{2}-\d{2}$/.test(from)) {
    req.input('fromDate', sql.Date, from);
    conditions.push('v.clinic_date >= @fromDate');
  }
  if (to && /^\d{4}-\d{2}-\d{2}$/.test(to)) {
    req.input('toDate', sql.Date, to);
    conditions.push('v.clinic_date <= @toDate');
  }

  const visitsRes = await req.query<
    VisitRow & {
      patient_public_id: string;
      full_name: string;
      relation_type: string;
      relative_name: string;
      locality: string;
      phone: string;
      age: number;
      gender: 'Male' | 'Female' | 'Child';
    }
  >(`
    SELECT v.id, v.public_id, v.patient_id, v.clinic_date, v.visited_at, v.token_no,
           v.reaction, v.symptoms, v.doctor_notes, v.duration_days, v.fee, v.fee_status, v.edited_at,
           p.public_id AS patient_public_id, p.full_name, p.relation_type, p.relative_name,
           p.locality, p.phone, p.age, p.gender
    FROM dbo.visits v
    INNER JOIN dbo.patients p ON p.id = v.patient_id
    WHERE ${conditions.join(' AND ')}
    OPTION (LOOP JOIN)
  `);

  if (visitsRes.recordset.length === 0) return [];

  const visitIdsJson = JSON.stringify(visitsRes.recordset.map((v) => v.id));

  const rxRes = await pool
    .request()
    .input('visitIds', sql.NVarChar(sql.MAX), visitIdsJson)
    .query<PrescriptionRow>(`
      SELECT rx.id, rx.public_id, rx.visit_id, rx.remedy, rx.potency, rx.vehicle, rx.dosage, rx.is_repeat, rx.sort_order
      FROM dbo.prescriptions rx
      INNER JOIN OPENJSON(@visitIds) ids ON rx.visit_id = CAST(ids.value AS INT)
    `);

  const sortedRx = [...rxRes.recordset].sort(
    (a, b) => a.visit_id - b.visit_id || a.sort_order - b.sort_order || a.id - b.id
  );
  const rxByVisitId = new Map<number, PrescriptionItem[]>();
  for (const r of sortedRx) {
    if (!rxByVisitId.has(r.visit_id)) rxByVisitId.set(r.visit_id, []);
    rxByVisitId.get(r.visit_id)!.push({
      id: r.public_id,
      remedy: r.remedy,
      potency: r.potency,
      vehicle: r.vehicle,
      dosage: r.dosage,
      isRepeat: Boolean(r.is_repeat),
    });
  }

  const sortedVisits = [...visitsRes.recordset].sort(
    (a, b) => b.clinic_date.getTime() - a.clinic_date.getTime() || a.token_no - b.token_no
  );

  return sortedVisits.map((v) => ({
    id: v.public_id,
    patientId: v.patient_public_id,
    patientName: v.full_name,
    relation: `${v.relation_type} ${v.relative_name}`,
    locality: v.locality,
    phone: v.phone,
    age: v.age,
    gender: v.gender,
    date: formatClinicDisplayDate(toIsoDateOnly(v.clinic_date), timeZone),
    clinicDate: toIsoDateOnly(v.clinic_date),
    tokenNo: v.token_no,
    reaction: v.reaction,
    symptoms: v.symptoms,
    prescriptions: rxByVisitId.get(v.id) ?? [],
    durationDays: v.duration_days ?? undefined,
    fee: Number(v.fee),
    feeStatus: v.fee_status,
    doctorNotes: v.doctor_notes ?? undefined,
  }));
}
