import { NextRequest } from 'next/server';
import { connection } from 'next/server';
import { createPatientSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import { createPatient, listPatientsWithMeta } from '@/services/patient.service';

export async function GET(request: NextRequest) {
  await connection();
  try {
    const search = request.nextUrl.searchParams.get('q') ?? undefined;
    const data = await listPatientsWithMeta(search);
    return jsonNoStore(data, 200);
  } catch (error) {
    return handleApiError('GET /api/patients', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createPatientSchema.parse(body);
    const result = await createPatient({
      fullName: parsed.fullName,
      relationType: parsed.relationType,
      relativeName: parsed.relativeName,
      age: parsed.age,
      gender: parsed.gender,
      phone: parsed.phone,
      locality: parsed.locality,
      initialFee: parsed.initialFee,
    });

    return jsonNoStore(result, 201);
  } catch (error) {
    return handleApiError('POST /api/patients', error);
  }
}
