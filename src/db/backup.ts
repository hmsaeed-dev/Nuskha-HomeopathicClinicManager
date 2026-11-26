import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { loadLocalEnv } from './loadEnv';
import { getPool, sql } from './pool';

loadLocalEnv();

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

async function backupDatabase(): Promise<void> {
  const backupDir =
    process.env.NUSKHA_BACKUP_DIR ||
    (process.env.NUSKHA_DATA_DIR
      ? path.join(process.env.NUSKHA_DATA_DIR, 'backups')
      : path.join(process.cwd(), 'backups'));

  for (const dir of [backupDir, getBackupStagingDir()]) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dbName = process.env.DB_NAME || 'NuskhaDB';
  const safeDbName = dbName.replace(/]/g, ']]');
  const fileName = `${dbName}-${stamp}.bak`;
  const backupFile = path.join(backupDir, fileName);
  const stagingFile = path.join(getBackupStagingDir(), fileName);

  const pool = await getPool();
  let staged = false;
  try {
    await pool
      .request()
      .input('backupFile', sql.NVarChar(500), stagingFile)
      .query(`BACKUP DATABASE [${safeDbName}] TO DISK = @backupFile WITH INIT, FORMAT`);
    staged = true;
    fs.copyFileSync(stagingFile, backupFile);
    console.log(`[db:backup] Backup created: ${backupFile}`);
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
    await pool.close();
  }
}

backupDatabase().catch((err) => {
  console.error('[db:backup] Error:', err.message || err);
  process.exit(1);
});
