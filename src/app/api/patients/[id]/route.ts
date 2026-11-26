import { NextRequest } from 'next/server';
import { connection } from 'next/server';
import { updatePatientSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import {
  archivePatient,
  getPatientByPublicId,
  updatePatient,
} from '@/services/patient.service';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext) {
  await connection();
  try {
    const { id } = await context.params;
    const patient = await getPatientByPublicId(id);
    return jsonNoStore({ patient }, 200);
  } catch (error) {
    return handleApiError('GET /api/patients/[id]', error);
  }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = updatePatientSchema.parse(body);
    const patient = await updatePatient(id, parsed);
    return jsonNoStore({ patient }, 200);
  } catch (error) {
    return handleApiError('PATCH /api/patients/[id]', error);
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    await archivePatient(id);
    return jsonNoStore({ archived: true }, 200);
  } catch (error) {
    return handleApiError('DELETE /api/patients/[id]', error);
  }
}
