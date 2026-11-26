import fs from 'node:fs';
import path from 'node:path';
import { loadLocalEnv } from './loadEnv';
import { getPool, sql } from './pool';

loadLocalEnv();

async function ensureMigrationsTable(pool: sql.ConnectionPool): Promise<void> {
  await pool.request().query(`
    IF OBJECT_ID(N'dbo.schema_migrations', N'U') IS NULL
    BEGIN
      CREATE TABLE dbo.schema_migrations (
        version NVARCHAR(100) NOT NULL CONSTRAINT PK_schema_migrations PRIMARY KEY,
        applied_at DATETIMEOFFSET(0) NOT NULL CONSTRAINT DF_schema_migrations_applied_at DEFAULT SYSDATETIMEOFFSET()
      );
    END
  `);
}

function splitSqlBatches(content: string): string[] {
  return content
    .split(/^\s*GO\s*$/gim)
    .map((batch) => batch.trim())
    .filter((batch) => batch.length > 0);
}

async function runMigrations(): Promise<void> {
  const pool = await getPool();
  await ensureMigrationsTable(pool);

  const migrationsDir =
    process.env.NUSKHA_MIGRATIONS_DIR ||
    path.join(process.cwd(), 'src', 'db', 'migrations');
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  const appliedResult = await pool
    .request()
    .query<{ version: string }>('SELECT version FROM dbo.schema_migrations');
  const applied = new Set(appliedResult.recordset.map((r) => r.version));

  let appliedCount = 0;

  for (const file of files) {
    if (applied.has(file)) {
      console.log(`[db:migrate] Skipping already applied: ${file}`);
      continue;
    }

    const fullPath = path.join(migrationsDir, file);
    const rawSql = fs.readFileSync(fullPath, 'utf8');
    const batches = splitSqlBatches(rawSql);

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
      console.log(`[db:migrate] Applied: ${file}`);
    } catch (err) {
      await tx.rollback();
      throw new Error(`Migration failed on ${file}: ${(err as Error).message}`);
    }
  }

  console.log(
    appliedCount === 0
      ? '[db:migrate] Database schema is up to date.'
      : `[db:migrate] Completed (${appliedCount} migration(s) applied).`
  );

  await pool.close();
}

runMigrations().catch((err) => {
  console.error('[db:migrate] Error:', err);
  process.exit(1);
});
