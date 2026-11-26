import { NextRequest } from 'next/server';
import { connection } from 'next/server';
import { createMacroSchema } from '@/lib/validations/schemas';
import { handleApiError, jsonNoStore } from '@/lib/api/response';
import {
  addDosageMacro,
  listDosageMacros,
  removeDosageMacro,
} from '@/services/settings.service';

export async function GET() {
  await connection();
  try {
    const dosageMacros = await listDosageMacros();
    return jsonNoStore({ dosageMacros }, 200);
  } catch (error) {
    return handleApiError('GET /api/settings/macros', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createMacroSchema.parse(body);
    const dosageMacros = await addDosageMacro(parsed.macro);
    return jsonNoStore({ dosageMacros }, 201);
  } catch (error) {
    return handleApiError('POST /api/settings/macros', error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createMacroSchema.parse(body);
    const dosageMacros = await removeDosageMacro(parsed.macro);
    return jsonNoStore({ dosageMacros }, 200);
  } catch (error) {
    return handleApiError('DELETE /api/settings/macros', error);
  }
}
