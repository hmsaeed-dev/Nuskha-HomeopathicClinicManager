import { NextRequest } from 'next/server';
import { createVisitSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import { saveConsultation } from '@/services/patient.service';

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = createVisitSchema.parse(body);
    const headerIdemKey = request.headers.get('idempotency-key') ?? undefined;

    const result = await saveConsultation(id, {
      reaction: parsed.reaction,
      symptoms: parsed.symptoms,
      prescriptions: parsed.prescriptions,
      doctorNotes: parsed.doctorNotes,
      durationDays: parsed.durationDays,
      fee: parsed.fee,
      feeStatus: parsed.feeStatus,
      idempotencyKey: parsed.idempotencyKey ?? headerIdemKey,
    });

    return jsonNoStore(result, 201);
  } catch (error) {
    return handleApiError('POST /api/patients/[id]/visits', error);
  }
}
