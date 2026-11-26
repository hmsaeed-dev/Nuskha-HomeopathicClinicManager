import { NextRequest } from 'next/server';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import { settlePatientDues } from '@/services/patient.service';

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(_request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const result = await settlePatientDues(id);
    return jsonNoStore(result, 200);
  } catch (error) {
    return handleApiError('POST /api/patients/[id]/settle-dues', error);
  }
}
