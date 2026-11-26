import fs from 'node:fs';
import path from 'node:path';
import { loadLocalEnv } from './loadEnv';
import { getPool, sql } from './pool';

loadLocalEnv();

async function backupDatabase(): Promise<void> {
  const backupDir = path.join(process.cwd(), 'backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFile = path.join(backupDir, `NuskhaDB-${stamp}.bak`);
  const dbName = process.env.DB_NAME || 'NuskhaDB';

  const pool = await getPool();
  try {
    await pool
      .request()
      .input('backupFile', sql.NVarChar(500), backupFile)
      .query(`BACKUP DATABASE [${dbName}] TO DISK = @backupFile WITH INIT, FORMAT`);
    console.log(`[db:backup] Backup created: ${backupFile}`);
  } finally {
    await pool.close();
  }
}

backupDatabase().catch((err) => {
  console.error('[db:backup] Error:', err);
  process.exit(1);
});
