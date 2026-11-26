import { NextRequest } from 'next/server';
import { connection } from 'next/server';
import { updateClinicSettingsSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import {
  getSettings,
  resetSettingsToDefaults,
  updateClinicSettings,
} from '@/services/settings.service';

export async function GET() {
  await connection();
  try {
    const settings = await getSettings();
    return jsonNoStore(settings, 200);
  } catch (error) {
    return handleApiError('GET /api/settings', error);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = updateClinicSettingsSchema.parse(body);
    const clinicConfig = await updateClinicSettings(parsed);
    return jsonNoStore({ clinicConfig }, 200);
  } catch (error) {
    return handleApiError('PATCH /api/settings', error);
  }
}

export async function DELETE() {
  try {
    const settings = await resetSettingsToDefaults();
    return jsonNoStore(settings, 200);
  } catch (error) {
    return handleApiError('DELETE /api/settings', error);
  }
}
