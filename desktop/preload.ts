import { contextBridge, ipcRenderer } from 'electron';
import type { DbConfig } from './dbTools';

contextBridge.exposeInMainWorld('nuskhaDesktop', {
  getSetupState: (): Promise<{
    config: DbConfig;
    errorMessage: string | null;
    configPath: string;
    backupDir: string;
  }> => ipcRenderer.invoke('nuskha:get-setup-state'),

  testConnection: (
    config: DbConfig
  ): Promise<{ ok: true; database: string; server: string } | { ok: false; error: string }> =>
    ipcRenderer.invoke('nuskha:test-connection', config),

  runMigrations: (
    config: DbConfig
  ): Promise<{ ok: boolean; appliedCount?: number; error?: string }> =>
    ipcRenderer.invoke('nuskha:run-migrations', config),

  saveAndLaunch: (
    config: DbConfig
  ): Promise<{ ok: boolean; error?: string }> =>
    ipcRenderer.invoke('nuskha:save-and-launch', config),
});
