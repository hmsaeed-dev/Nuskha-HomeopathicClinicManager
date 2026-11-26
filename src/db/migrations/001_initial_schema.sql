-- Nuskha Initial Relational Schema for MS SQL Server (NuskhaDB)
-- Phase 2: Normalized tables, constraints, sequence, daily token counters, and indexes

IF OBJECT_ID(N'dbo.seq_patient_mrn', N'SO') IS NULL
BEGIN
  CREATE SEQUENCE dbo.seq_patient_mrn
    AS INT
    START WITH 2000
    INCREMENT BY 1;
END
GO

IF OBJECT_ID(N'dbo.patients', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.patients (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_patients PRIMARY KEY,
    public_id NVARCHAR(50) NOT NULL CONSTRAINT UQ_patients_public_id UNIQUE,
    mrn NVARCHAR(20) NOT NULL CONSTRAINT UQ_patients_mrn UNIQUE,
    full_name NVARCHAR(150) NOT NULL,
    relation_type NVARCHAR(10) NOT NULL CONSTRAINT CK_patients_relation_type CHECK (relation_type IN ('s/o', 'w/o', 'd/o')),
    relative_name NVARCHAR(150) NOT NULL,
    age INT NOT NULL CONSTRAINT CK_patients_age CHECK (age >= 0 AND age <= 150),
    gender NVARCHAR(20) NOT NULL CONSTRAINT CK_patients_gender CHECK (gender IN ('Male', 'Female', 'Child')),
    phone NVARCHAR(30) NOT NULL,
    locality NVARCHAR(120) NOT NULL,
    tracked_complaint NVARCHAR(200) NULL,
    overall_relief NVARCHAR(100) NULL,
    archived_at DATETIMEOFFSET(0) NULL,
    created_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_patients_created_at DEFAULT SYSDATETIMEOFFSET(),
    updated_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_patients_updated_at DEFAULT SYSDATETIMEOFFSET()
  );

  CREATE NONCLUSTERED INDEX IX_patients_archived_name
    ON dbo.patients (archived_at, full_name)
    INCLUDE (public_id, mrn, phone, locality);
END
GO

IF OBJECT_ID(N'dbo.chief_complaints', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.chief_complaints (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_chief_complaints PRIMARY KEY,
    public_id NVARCHAR(50) NOT NULL CONSTRAINT UQ_chief_complaints_public_id UNIQUE,
    patient_id INT NOT NULL CONSTRAINT FK_chief_complaints_patient FOREIGN KEY REFERENCES dbo.patients(id) ON DELETE CASCADE,
    name NVARCHAR(200) NOT NULL,
    severity NVARCHAR(20) NOT NULL CONSTRAINT CK_chief_complaints_severity CHECK (severity IN ('Severe', 'Moderate', 'Mild', 'Relieved')),
    trend NVARCHAR(20) NOT NULL CONSTRAINT CK_chief_complaints_trend CHECK (trend IN ('Declining', 'Stable', 'Improving')),
    duration NVARCHAR(50) NULL
  );

  CREATE NONCLUSTERED INDEX IX_chief_complaints_patient
    ON dbo.chief_complaints (patient_id);
END
GO

IF OBJECT_ID(N'dbo.daily_counters', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.daily_counters (
    clinic_date DATE NOT NULL CONSTRAINT PK_daily_counters PRIMARY KEY,
    last_token_no INT NOT NULL CONSTRAINT DF_daily_counters_last_token DEFAULT 0
  );
END
GO

IF OBJECT_ID(N'dbo.visits', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.visits (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_visits PRIMARY KEY,
    public_id NVARCHAR(50) NOT NULL CONSTRAINT UQ_visits_public_id UNIQUE,
    patient_id INT NOT NULL CONSTRAINT FK_visits_patient FOREIGN KEY REFERENCES dbo.patients(id),
    clinic_date DATE NOT NULL,
    visited_at DATETIMEOFFSET(0) NOT NULL,
    token_no INT NOT NULL,
    reaction NVARCHAR(30) NOT NULL CONSTRAINT CK_visits_reaction CHECK (reaction IN ('Decline', 'No Change', 'Improved', 'First Visit')),
    symptoms NVARCHAR(MAX) NOT NULL,
    doctor_notes NVARCHAR(MAX) NULL,
    duration_days INT NULL,
    fee DECIMAL(10, 2) NOT NULL CONSTRAINT DF_visits_fee DEFAULT 0,
    fee_status NVARCHAR(10) NOT NULL CONSTRAINT CK_visits_fee_status CHECK (fee_status IN ('Paid', 'Free', 'Due')),
    idempotency_key NVARCHAR(64) NULL,
    edited_at DATETIMEOFFSET(0) NULL,
    created_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_visits_created_at DEFAULT SYSDATETIMEOFFSET(),
    CONSTRAINT UQ_visits_date_token UNIQUE (clinic_date, token_no)
  );

  CREATE UNIQUE NONCLUSTERED INDEX UQ_visits_idempotency
    ON dbo.visits (idempotency_key)
    WHERE idempotency_key IS NOT NULL;

  CREATE NONCLUSTERED INDEX IX_visits_patient_visited
    ON dbo.visits (patient_id, visited_at DESC);

  CREATE NONCLUSTERED INDEX IX_visits_clinic_date
    ON dbo.visits (clinic_date DESC, token_no ASC);

  CREATE NONCLUSTERED INDEX IX_visits_fee_status
    ON dbo.visits (fee_status)
    INCLUDE (patient_id, fee);
END
GO

IF OBJECT_ID(N'dbo.prescriptions', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.prescriptions (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_prescriptions PRIMARY KEY,
    public_id NVARCHAR(50) NOT NULL CONSTRAINT UQ_prescriptions_public_id UNIQUE,
    visit_id INT NOT NULL CONSTRAINT FK_prescriptions_visit FOREIGN KEY REFERENCES dbo.visits(id) ON DELETE CASCADE,
    remedy NVARCHAR(150) NOT NULL,
    potency NVARCHAR(50) NOT NULL,
    vehicle NVARCHAR(50) NOT NULL,
    dosage NVARCHAR(250) NOT NULL,
    is_repeat BIT NOT NULL CONSTRAINT DF_prescriptions_is_repeat DEFAULT 0,
    sort_order INT NOT NULL CONSTRAINT DF_prescriptions_sort_order DEFAULT 0
  );

  CREATE NONCLUSTERED INDEX IX_prescriptions_visit
    ON dbo.prescriptions (visit_id, sort_order);
END
GO

IF OBJECT_ID(N'dbo.severity_history', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.severity_history (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_severity_history PRIMARY KEY,
    patient_id INT NOT NULL CONSTRAINT FK_severity_history_patient FOREIGN KEY REFERENCES dbo.patients(id) ON DELETE CASCADE,
    complaint_name NVARCHAR(200) NULL,
    recorded_at DATE NOT NULL,
    label NVARCHAR(30) NOT NULL,
    score INT NOT NULL CONSTRAINT CK_severity_history_score CHECK (score >= 0 AND score <= 100)
  );

  CREATE NONCLUSTERED INDEX IX_severity_history_patient
    ON dbo.severity_history (patient_id, recorded_at ASC, id ASC);
END
GO

IF OBJECT_ID(N'dbo.clinic_settings', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.clinic_settings (
    id INT NOT NULL CONSTRAINT PK_clinic_settings PRIMARY KEY CONSTRAINT CK_clinic_settings_singleton CHECK (id = 1),
    name NVARCHAR(120) NOT NULL,
    doctor_name NVARCHAR(120) NOT NULL,
    subtitle NVARCHAR(200) NOT NULL,
    license_number NVARCHAR(100) NULL,
    phone NVARCHAR(40) NULL,
    address NVARCHAR(250) NULL,
    currency NVARCHAR(20) NOT NULL CONSTRAINT DF_clinic_settings_currency DEFAULT N'Rs.',
    default_consultation_fee DECIMAL(10, 2) NOT NULL CONSTRAINT DF_clinic_settings_fee DEFAULT 500,
    default_course_days INT NOT NULL CONSTRAINT DF_clinic_settings_days DEFAULT 15,
    session_timings NVARCHAR(150) NOT NULL,
    available_course_durations NVARCHAR(100) NOT NULL CONSTRAINT DF_clinic_settings_durations DEFAULT N'[3,7,15,21,30]',
    timezone NVARCHAR(64) NOT NULL CONSTRAINT DF_clinic_settings_tz DEFAULT N'Asia/Karachi',
    updated_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_clinic_settings_updated_at DEFAULT SYSDATETIMEOFFSET()
  );
END
GO

IF OBJECT_ID(N'dbo.dosage_macros', N'U') IS NULL
BEGIN
  CREATE TABLE dbo.dosage_macros (
    id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_dosage_macros PRIMARY KEY,
    macro_text NVARCHAR(200) NOT NULL CONSTRAINT UQ_dosage_macros_text UNIQUE,
    sort_order INT NOT NULL CONSTRAINT DF_dosage_macros_sort DEFAULT 0,
    created_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_dosage_macros_created DEFAULT SYSDATETIMEOFFSET()
  );
END
GO
