import { NextResponse } from 'next/server';
import { connection } from 'next/server';
import { getPool } from '@/db/pool';

export async function GET() {
  await connection();

  try {
    const pool = await getPool();
    const result = await pool.request().query<{
      ok: number;
      databaseName: string;
      serverName: string;
    }>('SELECT 1 AS ok, DB_NAME() AS databaseName, @@SERVERNAME AS serverName');

    const row = result.recordset[0];

    return NextResponse.json(
      {
        status: 'ok',
        database: row?.databaseName ?? null,
        server: row?.serverName ?? null,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store' },
      }
    );
  } catch (error) {
    console.error('[GET /api/health] Database health check failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Database connection unavailable.',
      },
      {
        status: 503,
        headers: { 'Cache-Control': 'no-store' },
      }
    );
  }
}
