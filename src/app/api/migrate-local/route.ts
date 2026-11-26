import { NextRequest } from 'next/server';
import { migrateLocalSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import { migrateLocalData } from '@/services/migrate.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = migrateLocalSchema.parse(body);
    const result = await migrateLocalData(parsed);
    return jsonNoStore(result, 200);
  } catch (error) {
    return handleApiError('POST /api/migrate-local', error);
  }
}
