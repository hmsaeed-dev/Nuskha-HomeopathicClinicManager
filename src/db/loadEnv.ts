import fs from 'node:fs';
import path from 'node:path';

/**
 * Loads key=value pairs from .env.local (then .env) into process.env
 * for standalone CLI scripts (migrate, seed, backup) outside Next.js.
 */
export function loadLocalEnv(): void {
  const cwd = process.cwd();
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.join(cwd, filename);
    if (!fs.existsSync(filePath)) continue;

    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx === -1) continue;

      const key = line.slice(0, eqIdx).trim();
      let value = line.slice(eqIdx + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}
