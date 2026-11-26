import sql from 'mssql';
import { loadLocalEnv } from './loadEnv';

interface GlobalWithSqlPool {
  __nuskhaSqlPoolPromise?: Promise<sql.ConnectionPool>;
}

const globalForSql = globalThis as unknown as GlobalWithSqlPool;

function buildSqlConfig(): sql.config {
  if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
    loadLocalEnv();
  }

  const host = process.env.DB_HOST || '127.0.0.1';
  const port = Number(process.env.DB_PORT || 1433);
  const database = process.env.DB_NAME || 'NuskhaDB';
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  if (!user || !password) {
    throw new Error(
      'Missing database credentials: DB_USER and DB_PASSWORD must be configured.'
    );
  }

  return {
    server: host,
    port,
    database,
    user,
    password,
    connectionTimeout: 20000,
    requestTimeout: 30000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: process.env.DB_ENCRYPT !== 'false',
      trustServerCertificate: process.env.DB_TRUST_CERT === 'true',
      enableArithAbort: true,
    },
  };
}

/**
 * Returns a shared MS SQL Server ConnectionPool singleton.
 * Cached on globalThis to prevent connection leaks across Next.js HMR reloads,
 * and cleared on failure so transient database outages can recover cleanly.
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!globalForSql.__nuskhaSqlPoolPromise) {
    const config = buildSqlConfig();
    const pool = new sql.ConnectionPool(config);

    globalForSql.__nuskhaSqlPoolPromise = pool.connect().catch((err) => {
      globalForSql.__nuskhaSqlPoolPromise = undefined;
      throw err;
    });
  }

  const pool = await globalForSql.__nuskhaSqlPoolPromise;
  if (!pool.connected) {
    globalForSql.__nuskhaSqlPoolPromise = undefined;
    return getPool();
  }

  return pool;
}

export { sql };
