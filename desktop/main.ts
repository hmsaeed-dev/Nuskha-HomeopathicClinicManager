import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { ChildProcess, spawn, execFile } from 'node:child_process';
import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  dialog,
  ipcMain,
  shell,
  nativeImage,
} from 'electron';
import {
  DbConfig,
  DEFAULT_DB_CONFIG,
  createDatabaseBackup,
  loadConfigFromJson,
  loadDevEnvFile,
  runSqlMigrations,
  saveConfigToJson,
  testDbConnection,
} from './dbTools';

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
let serverProcess: ChildProcess | null = null;
let activePort: number | null = null;
let activeConfig: DbConfig | null = null;
let isQuitting = false;
let lastSetupError: string | null = null;

function getRepoRoot(): string {
  // desktop/dist/main.js -> repo root is two levels up
  return path.resolve(__dirname, '..', '..');
}

function getAppDataPaths() {
  const dataDir = app.getPath('userData');
  return {
    dataDir,
    configPath: path.join(dataDir, 'config.json'),
    backupDir: path.join(dataDir, 'backups'),
    logPath: path.join(dataDir, 'server.log'),
  };
}

function getMigrationsDir(): string {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'migrations');
  }
  return path.join(getRepoRoot(), 'src', 'db', 'migrations');
}

function getStandaloneServerPath(): string {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'standalone', 'server.js');
  }
  return path.join(getRepoRoot(), '.next', 'standalone', 'server.js');
}

function getIconPath(): string {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'icon.png');
  }
  return path.join(getRepoRoot(), 'public', 'logos', 'nuskha-logomark-full-color-2048px.png');
}

function getSetupHtmlPath(): string {
  return path.join(__dirname, '..', 'setup.html');
}

function checkPortFree(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const srv = net.createServer();
    srv.once('error', () => resolve(false));
    srv.once('listening', () => {
      srv.close(() => resolve(true));
    });
    srv.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(preferred = 3456): Promise<number> {
  if (await checkPortFree(preferred)) return preferred;
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.once('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : preferred;
      srv.close(() => resolve(port));
    });
  });
}

async function stopNextServer(): Promise<void> {
  const child = serverProcess;
  serverProcess = null;
  activePort = null;
  if (!child || child.killed || child.pid === undefined) return;

  const pid = child.pid;
  await new Promise<void>((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    child.once('exit', done);
    try {
      child.kill('SIGTERM');
    } catch {
      done();
      return;
    }

    setTimeout(() => {
      if (settled) return;
      if (process.platform === 'win32') {
        execFile('taskkill', ['/PID', String(pid), '/T', '/F'], () => done());
      } else {
        try {
          child.kill('SIGKILL');
        } catch {
          // ignore
        }
        done();
      }
    }, 1500);
  });
}

async function waitForServerHealth(
  port: number,
  timeoutMs = 30000
): Promise<{ ok: boolean; status: number; message?: string }> {
  const deadline = Date.now() + timeoutMs;
  let lastStatus = 0;
  let lastMessage = 'Next.js server did not respond in time.';

  while (Date.now() < deadline) {
    if (!serverProcess || serverProcess.exitCode !== null) {
      return { ok: false, status: 0, message: 'Next.js server exited unexpectedly.' };
    }
    try {
      const res = await fetch(`http://127.0.0.1:${port}/api/health`, {
        cache: 'no-store',
      });
      lastStatus = res.status;
      if (res.status === 200) {
        return { ok: true, status: 200 };
      }
      const body = (await res.json().catch(() => ({}))) as { message?: string };
      lastMessage = body.message || `Health check returned status ${res.status}.`;
      if (res.status === 503) {
        // Retry briefly in case SQL Server is still warming up, otherwise surface 503
        await new Promise((r) => setTimeout(r, 1000));
        const retry = await fetch(`http://127.0.0.1:${port}/api/health`, {
          cache: 'no-store',
        });
        if (retry.status === 200) return { ok: true, status: 200 };
        return { ok: false, status: 503, message: lastMessage };
      }
    } catch {
      // Server still booting
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  return { ok: false, status: lastStatus, message: lastMessage };
}

async function startNextServer(config: DbConfig): Promise<number> {
  await stopNextServer();

  const serverScript = getStandaloneServerPath();
  if (!fs.existsSync(serverScript)) {
    throw new Error(
      `Standalone server not found at ${serverScript}. Run "npm run desktop:prepare" first.`
    );
  }

  const { dataDir, configPath, backupDir, logPath } = getAppDataPaths();
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const port = await findAvailablePort(3456);
  const logStream = fs.createWriteStream(logPath, { flags: 'a' });
  logStream.write(`\n--- Nuskha server starting at ${new Date().toISOString()} on 127.0.0.1:${port} ---\n`);

  const child = spawn(process.execPath, [serverScript], {
    cwd: path.dirname(serverScript),
    env: {
      ...process.env,
      ELECTRON_RUN_AS_NODE: '1',
      NODE_ENV: 'production',
      PORT: String(port),
      HOSTNAME: '127.0.0.1',
      NUSKHA_DATA_DIR: dataDir,
      NUSKHA_CONFIG_PATH: configPath,
      NUSKHA_BACKUP_DIR: backupDir,
      NUSKHA_MIGRATIONS_DIR: getMigrationsDir(),
      DB_HOST: config.DB_HOST,
      DB_PORT: config.DB_PORT,
      DB_NAME: config.DB_NAME,
      DB_USER: config.DB_USER,
      DB_PASSWORD: config.DB_PASSWORD,
      DB_ENCRYPT: config.DB_ENCRYPT,
      DB_TRUST_CERT: config.DB_TRUST_CERT,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });

  child.stdout?.pipe(logStream);
  child.stderr?.pipe(logStream);
  child.once('exit', () => {
    logStream.end();
  });

  serverProcess = child;
  activePort = port;
  activeConfig = config;
  return port;
}

function loadSplashHtml(port?: number): string {
  const subtitle = port
    ? `Connecting to NuskhaDB on 127.0.0.1:${port}...`
    : 'Starting Nuskha clinic workspace...';
  return `data:text/html;charset=utf-8,${encodeURIComponent(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Nuskha</title>
        <style>
          body {
            margin: 0; height: 100vh; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 10px;
            background: #f6f8f5; color: #1c241b;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          h1 { margin: 0; font-size: 22px; color: #2b5e43; }
          p { margin: 0; font-size: 13px; color: #5c685a; }
        </style>
      </head>
      <body>
        <h1>Nuskha</h1>
        <p>${subtitle}</p>
      </body>
    </html>
  `)}`;
}

async function openDatabaseSetup(errorMessage: string | null = null): Promise<void> {
  lastSetupError = errorMessage;
  if (!mainWindow) return;
  await mainWindow.loadFile(getSetupHtmlPath());
}

async function launchAppWithConfig(config: DbConfig): Promise<void> {
  if (!mainWindow) return;
  await mainWindow.loadURL(loadSplashHtml());

  const port = await startNextServer(config);
  const health = await waitForServerHealth(port);
  if (!health.ok) {
    await stopNextServer();
    await openDatabaseSetup(
      health.message || 'Unable to connect to local SQL Server (NuskhaDB).'
    );
    return;
  }

  lastSetupError = null;
  await mainWindow.loadURL(`http://127.0.0.1:${port}`);
}

async function handleBackupAction(): Promise<void> {
  const { configPath, backupDir } = getAppDataPaths();
  const cfg =
    activeConfig ||
    loadConfigFromJson(configPath) ||
    (!app.isPackaged ? loadDevEnvFile(getRepoRoot()) : null);

  if (!cfg) {
    await dialog.showMessageBox({
      type: 'warning',
      title: 'Nuskha Backup',
      message: 'Configure your local database connection before running a backup.',
    });
    return;
  }

  try {
    const file = await createDatabaseBackup(cfg, backupDir);
    const result = await dialog.showMessageBox({
      type: 'info',
      title: 'Database Backup Created',
      message: 'Backup completed successfully.',
      detail: file,
      buttons: ['OK', 'Open Backups Folder'],
    });
    if (result.response === 1) {
      await shell.openPath(backupDir);
    }
  } catch (err) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Database Backup Failed',
      message: err instanceof Error ? err.message : String(err),
    });
  }
}

function buildAppMenu(): void {
  const { backupDir } = getAppDataPaths();
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: '&Clinic',
      submenu: [
        {
          label: '&Backup Database Now',
          accelerator: 'Ctrl+Shift+B',
          click: () => {
            void handleBackupAction();
          },
        },
        {
          label: '&Open Backups Folder',
          click: () => {
            if (!fs.existsSync(backupDir)) {
              fs.mkdirSync(backupDir, { recursive: true });
            }
            void shell.openPath(backupDir);
          },
        },
        {
          label: '&Database Connection Settings...',
          click: () => {
            void openDatabaseSetup(null);
          },
        },
        { type: 'separator' },
        {
          label: 'Exit Nuskha',
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload Clinic Workspace',
          click: () => {
            if (mainWindow && activePort) {
              void mainWindow.loadURL(`http://127.0.0.1:${activePort}`);
            }
          },
        },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function createTray(): void {
  const iconPath = getIconPath();
  const { backupDir } = getAppDataPaths();
  if (!fs.existsSync(iconPath)) return;
  const img = nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 });
  tray = new Tray(img);
  tray.setToolTip('Nuskha Clinic');
  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: 'Show Nuskha',
        click: () => {
          mainWindow?.show();
          mainWindow?.focus();
        },
      },
      {
        label: 'Backup Database Now',
        click: () => {
          void handleBackupAction();
        },
      },
      {
        label: 'Open Backups Folder',
        click: () => {
          if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
          }
          void shell.openPath(backupDir);
        },
      },
      {
        label: 'Database Connection Settings...',
        click: () => {
          void openDatabaseSetup(null);
        },
      },
      { type: 'separator' },
      {
        label: 'Quit',
        click: () => {
          app.quit();
        },
      },
    ])
  );
  tray.on('double-click', () => {
    mainWindow?.show();
    mainWindow?.focus();
  });
}

function registerIpcHandlers(): void {
  ipcMain.handle('nuskha:get-setup-state', () => {
    const { configPath, backupDir } = getAppDataPaths();
    const saved =
      loadConfigFromJson(configPath) ||
      (!app.isPackaged ? loadDevEnvFile(getRepoRoot()) : null) ||
      DEFAULT_DB_CONFIG;

    return {
      config: saved,
      errorMessage: lastSetupError,
      configPath,
      backupDir,
    };
  });

  ipcMain.handle('nuskha:test-connection', async (_event, config: DbConfig) => {
    return testDbConnection(config);
  });

  ipcMain.handle('nuskha:run-migrations', async (_event, config: DbConfig) => {
    try {
      const res = await runSqlMigrations(config, getMigrationsDir());
      return { ok: true, appliedCount: res.appliedCount };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  });

  ipcMain.handle('nuskha:save-and-launch', async (_event, config: DbConfig) => {
    const check = await testDbConnection(config);
    if (!check.ok) {
      return { ok: false, error: check.error };
    }

    const { configPath } = getAppDataPaths();
    saveConfigToJson(configPath, config);
    try {
      await launchAppWithConfig(config);
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  });
}

async function createMainWindow(): Promise<void> {
  const iconPath = getIconPath();
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 1024,
    minHeight: 700,
    title: 'Nuskha — Homoeopathic Clinic',
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const { configPath } = getAppDataPaths();
  const initialConfig =
    loadConfigFromJson(configPath) ||
    (!app.isPackaged ? loadDevEnvFile(getRepoRoot()) : null);

  if (!initialConfig) {
    await openDatabaseSetup(null);
    return;
  }

  try {
    await launchAppWithConfig(initialConfig);
  } catch (err) {
    await openDatabaseSetup(
      err instanceof Error ? err.message : 'Failed to start Nuskha server.'
    );
  }
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(async () => {
    registerIpcHandlers();
    buildAppMenu();
    createTray();
    await createMainWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('before-quit', (event) => {
    if (isQuitting) return;
    isQuitting = true;
    event.preventDefault();
    void stopNextServer().finally(() => {
      tray?.destroy();
      tray = null;
      app.exit(0);
    });
  });
}
