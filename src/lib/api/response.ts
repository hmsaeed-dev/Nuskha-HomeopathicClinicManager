import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export class ApiError extends Error {
  public readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export function jsonNoStore<T>(data: T, status: number = 200): NextResponse<T> {
  return NextResponse.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export function handleApiError(context: string, error: unknown): NextResponse {
  if (error instanceof ZodError) {
    return jsonNoStore(
      {
        error: 'Validation failed',
        details: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        })),
      },
      400
    );
  }

  if (error instanceof ApiError) {
    return jsonNoStore({ error: error.message }, error.status);
  }

  const errObj = error as { code?: string; name?: string; message?: string };
  console.error(`[${context}]`, error);

  const isConnectionFailure =
    errObj?.code === 'ESOCKET' ||
    errObj?.code === 'ELOGIN' ||
    errObj?.code === 'ETIMEOUT' ||
    errObj?.code === 'ECONNREFUSED' ||
    errObj?.name === 'ConnectionError';

  if (isConnectionFailure) {
    return jsonNoStore(
      { error: 'Database connection unavailable. Ensure MS SQL Server is running.' },
      503
    );
  }

  return jsonNoStore(
    { error: 'An unexpected server error occurred.' },
    500
  );
}
