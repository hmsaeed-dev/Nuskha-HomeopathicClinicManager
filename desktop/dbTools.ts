import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import type * as SqlTypes from 'mssql';

let cachedSql: typeof SqlTypes | null = null;

function getSql(): typeof SqlTypes {
  if (cachedSql) return cachedSql;
  const packagedMssql = process.resourcesPath
    ? path.join(process.resourcesPath, 'standalone', 'node_modules', 'mssql')
    : '';
  if (packagedMssql && fs.existsSync(packagedMssql)) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    cachedSql = require(packagedMssql) as typeof SqlTypes;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    cachedSql = require('mssql') as typeof SqlTypes;
  }
  return cachedSql;
}

export interface DbConfig {
  DB_HOST: string;
  DB_PORT: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_ENCRYPT: string;
  DB_TRUST_CERT: string;
}

export const DEFAULT_DB_CONFIG: DbConfig = {
  DB_HOST: '127.0.0.1',
  DB_PORT: '1433',
  DB_NAME: 'NuskhaDB',
  DB_USER: 'nuskha_app',
  DB_PASSWORD: '',
  DB_ENCRYPT: 'true',
  DB_TRUST_CERT: 'true',
};

export function loadConfigFromJson(configPath: string): DbConfig | null {
  if (!fs.existsSync(configPath)) return null;
  try {
    // Strip UTF-8 BOM if present (PowerShell Set-Content writes BOM by default)
    const raw = fs.readFileSync(configPath, 'utf8').replace(/^\uFEFF/, '');
    const parsed = JSON.parse(raw) as Partial<DbConfig>;
    if (!parsed.DB_USER || !parsed.DB_PASSWORD) return null;
    return {
      DB_HOST: String(parsed.DB_HOST || DEFAULT_DB_CONFIG.DB_HOST),
      DB_PORT: String(parsed.DB_PORT || DEFAULT_DB_CONFIG.DB_PORT),
      DB_NAME: String(parsed.DB_NAME || DEFAULT_DB_CONFIG.DB_NAME),
      DB_USER: String(parsed.DB_USER),
      DB_PASSWORD: String(parsed.DB_PASSWORD),
      DB_ENCRYPT: String(parsed.DB_ENCRYPT ?? DEFAULT_DB_CONFIG.DB_ENCRYPT),
      DB_TRUST_CERT: String(parsed.DB_TRUST_CERT ?? DEFAULT_DB_CONFIG.DB_TRUST_CERT),
    };
  } catch {
    return null;
  }
}

export function saveConfigToJson(configPath: string, config: DbConfig): void {
  const dir = path.dirname(configPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
}

export function loadDevEnvFile(repoRoot: string): DbConfig | null {
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.join(repoRoot, filename);
    if (!fs.existsSync(filePath)) continue;

    const envMap: Record<string, string> = {};
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx === -1) continue;
      const key = line.slice(0, eqIdx).trim();
      let val = line.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      envMap[key] = val;
    }

    if (envMap.DB_USER && envMap.DB_PASSWORD) {
      return {
        DB_HOST: envMap.DB_HOST || DEFAULT_DB_CONFIG.DB_HOST,
        DB_PORT: envMap.DB_PORT || DEFAULT_DB_CONFIG.DB_PORT,
        DB_NAME: envMap.DB_NAME || DEFAULT_DB_CONFIG.DB_NAME,
        DB_USER: envMap.DB_USER,
        DB_PASSWORD: envMap.DB_PASSWORD,
        DB_ENCRYPT: envMap.DB_ENCRYPT ?? DEFAULT_DB_CONFIG.DB_ENCRYPT,
        DB_TRUST_CERT: envMap.DB_TRUST_CERT ?? DEFAULT_DB_CONFIG.DB_TRUST_CERT,
      };
    }
  }
  return null;
}

function toSqlConfig(config: DbConfig): SqlTypes.config {
  return {
    server: config.DB_HOST || '127.0.0.1',
    port: Number(config.DB_PORT || 1433),
    database: config.DB_NAME || 'NuskhaDB',
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    connectionTimeout: 15000,
    requestTimeout: 30000,
    options: {
      encrypt: config.DB_ENCRYPT !== 'false',
      trustServerCertificate: config.DB_TRUST_CERT === 'true',
      enableArithAbort: true,
    },
  };
}

export async function testDbConnection(
  config: DbConfig
): Promise<{ ok: true; database: string; server: string } | { ok: false; error: string }> {
  const sql = getSql();
  const pool = new sql.ConnectionPool(toSqlConfig(config));
  try {
    await pool.connect();
    const res = await pool.request().query<{ db: string; srv: string }>(
      'SELECT DB_NAME() AS db, @@SERVERNAME AS srv'
    );
    const row = res.recordset[0];
    return {
      ok: true,
      database: row?.db || config.DB_NAME,
      server: row?.srv || config.DB_HOST,
    };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  } finally {
    await pool.close().catch(() => {});
  }
}

export async function runSqlMigrations(
  config: DbConfig,
  migrationsDir: string
): Promise<{ appliedCount: number }> {
  if (!fs.existsSync(migrationsDir)) {
    throw new Error(`Migrations directory not found: ${migrationsDir}`);
  }

  const sql = getSql();
  const pool = new sql.ConnectionPool(toSqlConfig(config));
  try {
    await pool.connect();
    await pool.request().query(`
      IF OBJECT_ID(N'dbo.schema_migrations', N'U') IS NULL
      BEGIN
        CREATE TABLE dbo.schema_migrations (
          version NVARCHAR(100) NOT NULL CONSTRAINT PK_schema_migrations PRIMARY KEY,
          applied_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_schema_migrations_applied_at DEFAULT SYSDATETIMEOFFSET()
        );
      END
    `);

    const files = fs
      .readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    const appliedRes = await pool
      .request()
      .query<{ version: string }>('SELECT version FROM dbo.schema_migrations');
    const applied = new Set(appliedRes.recordset.map((r) => r.version));

    let appliedCount = 0;
    for (const file of files) {
      if (applied.has(file)) continue;
      const rawSql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      const batches = rawSql
        .split(/^\s*GO\s*$/gim)
        .map((b) => b.trim())
        .filter((b) => b.length > 0);

      const tx = new sql.Transaction(pool);
      await tx.begin();
      try {
        for (const batch of batches) {
          await new sql.Request(tx).query(batch);
        }
        await new sql.Request(tx)
          .input('version', sql.NVarChar(100), file)
          .query('INSERT INTO dbo.schema_migrations (version) VALUES (@version)');
        await tx.commit();
        appliedCount++;
      } catch (err) {
        await tx.rollback().catch(() => {});
        throw new Error(`Migration ${file} failed: ${(err as Error).message}`);
      }
    }

    return { appliedCount };
  } finally {
    await pool.close().catch(() => {});
  }
}

function getBackupStagingDir(): string {
  if (process.env.NUSKHA_BACKUP_STAGING_DIR) {
    return process.env.NUSKHA_BACKUP_STAGING_DIR;
  }
  const publicRoot =
    process.env.PUBLIC || path.join(path.parse(os.homedir()).root, 'Users', 'Public');
  return path.join(publicRoot, 'Documents', 'NuskhaBackupStaging');
}

function describeBackupError(err: unknown): string {
  const error = err as {
    message?: string;
    precedingErrors?: Array<{ message?: string }>;
    originalError?: { info?: { message?: string } };
  };
  const messages = [
    ...(error.precedingErrors || []).map((item) => item.message),
    error.originalError?.info?.message,
    error.message,
  ].filter((message): message is string => Boolean(message));
  return Array.from(new Set(messages)).join(' — ');
}

export async function createDatabaseBackup(
  config: DbConfig,
  backupDir: string
): Promise<string> {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const stagingDir = getBackupStagingDir();
  if (!fs.existsSync(stagingDir)) {
    fs.mkdirSync(stagingDir, { recursive: true });
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dbName = config.DB_NAME || 'NuskhaDB';
  const safeDbName = dbName.replace(/]/g, ']]');
  const fileName = `${dbName}-${stamp}.bak`;
  const backupFile = path.join(backupDir, fileName);
  const stagingFile = path.join(stagingDir, fileName);

  const sql = getSql();
  const pool = new sql.ConnectionPool(toSqlConfig(config));
  let staged = false;
  try {
    await pool.connect();
    await pool
      .request()
      .input('backupFile', sql.NVarChar(500), stagingFile)
      .query(`BACKUP DATABASE [${safeDbName}] TO DISK = @backupFile WITH INIT, FORMAT`);
    staged = true;
    fs.copyFileSync(stagingFile, backupFile);
    return backupFile;
  } catch (err) {
    throw new Error(describeBackupError(err));
  } finally {
    if (staged) {
      try {
        fs.unlinkSync(stagingFile);
      } catch {
        // Best-effort cleanup; the clinic-visible backup is already copied.
      }
    }
    await pool.close().catch(() => {});
  }
}
