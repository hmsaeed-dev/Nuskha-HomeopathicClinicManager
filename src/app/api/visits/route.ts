import { NextRequest } from 'next/server';
import { connection } from 'next/server';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import { listVisitsByDateRange } from '@/services/patient.service';

export async function GET(request: NextRequest) {
  await connection();
  try {
    const from = request.nextUrl.searchParams.get('from') ?? undefined;
    const to = request.nextUrl.searchParams.get('to') ?? undefined;
    const visits = await listVisitsByDateRange(from, to);
    return jsonNoStore({ visits }, 200);
  } catch (error) {
    return handleApiError('GET /api/visits', error);
  }
}
