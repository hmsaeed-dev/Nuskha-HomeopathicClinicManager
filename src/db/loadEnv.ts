import fs from 'node:fs';
import path from 'node:path';

function applyEnvEntry(key: string, value: string): void {
  if (!key) return;
  if (process.env[key] === undefined) {
    process.env[key] = value;
  }
}

function loadJsonConfigIfExists(filePath: string): void {
  if (!fs.existsSync(filePath)) return;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    if (!parsed || typeof parsed !== 'object') return;
    for (const [key, val] of Object.entries(parsed)) {
      if (val !== undefined && val !== null) {
        applyEnvEntry(key, String(val));
      }
    }
  } catch {
    // Ignore malformed config.json here; buildSqlConfig will surface missing credentials
  }
}

/**
 * Loads DB/runtime environment variables from:
 * 1) Explicit NUSKHA_CONFIG_PATH or %NUSKHA_DATA_DIR%/config.json (packaged desktop mode)
 * 2) .env.local then .env in process.cwd() (local dev / CLI scripts)
 */
export function loadLocalEnv(): void {
  const explicitConfigPath = process.env.NUSKHA_CONFIG_PATH;
  if (explicitConfigPath) {
    loadJsonConfigIfExists(explicitConfigPath);
  }

  const dataDir = process.env.NUSKHA_DATA_DIR;
  if (dataDir) {
    loadJsonConfigIfExists(path.join(/*turbopackIgnore: true*/ dataDir, 'config.json'));
  }

  const cwd = process.cwd();
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.join(/*turbopackIgnore: true*/ cwd, filename);
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

      applyEnvEntry(key, value);
    }
  }
}
