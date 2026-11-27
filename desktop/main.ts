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

function getDevServerUrl(): string | null {
  const raw = process.env.NUSKHA_DEV_URL?.trim();
  // Never allow a packaged app to load a development server.
  if (!raw || app.isPackaged) return null;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
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

let splashLogoDataUri: string | null | undefined;

function getSplashLogoDataUri(): string | null {
  if (splashLogoDataUri !== undefined) return splashLogoDataUri;
  try {
    const iconPath = getIconPath();
    const ext = path.extname(iconPath).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : null;
    if (!mime || !fs.existsSync(iconPath)) {
      splashLogoDataUri = null;
    } else {
      splashLogoDataUri = `data:${mime};base64,${fs.readFileSync(iconPath).toString('base64')}`;
    }
  } catch {
    splashLogoDataUri = null;
  }
  return splashLogoDataUri;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (ch) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[
        ch
      ] ?? ch)
  );
}

function loadSplashHtml(message?: string): string {
  const subtitle = message ?? 'Starting Nuskha clinic workspace...';
  const logo = getSplashLogoDataUri();
  const logoMarkup = logo ? `<img class="logo" src="${logo}" alt="Nuskha" />` : '';

  return `data:text/html;charset=utf-8,${encodeURIComponent(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Nuskha</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0; height: 100vh; display: flex; flex-direction: column;
            align-items: center; justify-content: center; overflow: hidden;
            background: radial-gradient(circle at 50% 35%, #0d3c34 0%, #052620 55%, #041a16 100%);
            color: #eef3f1;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .halo {
            position: absolute; width: 420px; height: 420px; border-radius: 50%;
            background: radial-gradient(circle, rgba(143, 224, 209, 0.16), transparent 65%);
          }
          .content { position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px; }
          .logo {
            width: 104px; height: 104px; object-fit: contain;
            filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));
            animation: reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          h1 {
            margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.02em;
            color: #ffffff; animation: rise 500ms 120ms both;
          }
          .brandline {
            margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
            color: #8fe0d1; animation: rise 500ms 200ms both;
          }
          .track {
            width: 240px; height: 4px; border-radius: 9999px; overflow: hidden;
            background: rgba(210, 235, 228, 0.18); animation: rise 500ms 320ms both;
          }
          .track::after {
            content: ''; display: block; width: 40%; height: 100%; border-radius: 9999px;
            background: #8fe0d1; animation: sweep 1.4s ease-in-out infinite;
          }
          .message {
            margin: 10px 0 0; font-size: 12px; color: #d2ebe4;
            animation: rise 500ms 260ms both;
          }
          @keyframes reveal {
            from { opacity: 0; transform: scale(0.86); }
            60% { opacity: 1; transform: scale(1.03); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes rise {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes sweep {
            from { transform: translateX(-110%); }
            to { transform: translateX(260%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .logo, h1, .brandline, .track, .track::after, .message { animation: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="halo"></div>
        <div class="content">
          ${logoMarkup}
          <h1>Nuskha</h1>
          <p class="brandline">Dr. Aslam Homoeopathic Clinic</p>
          <div class="track"></div>
          <p class="message">${escapeHtml(subtitle)}</p>
        </div>
      </body>
    </html>
  `)}`;
}

async function openDatabaseSetup(errorMessage: string | null = null): Promise<void> {
  lastSetupError = errorMessage;
  if (!mainWindow) return;
  await mainWindow.loadFile(getSetupHtmlPath());
}

async function openDevWorkspace(url: string): Promise<void> {
  const win = mainWindow;
  if (!win) return;

  let retriesLeft = 3;
  win.webContents.on(
    'did-fail-load',
    (_event, errorCode, errorDescription, validatedURL, isMainFrame) => {
      // -3 means ERR_ABORTED, which can happen during normal dev-server reloads.
      if (isQuitting || !isMainFrame || errorCode === -3) return;
      if (!validatedURL.startsWith(url)) return;

      if (retriesLeft > 0) {
        retriesLeft -= 1;
        const remaining = retriesLeft;
        setTimeout(() => {
          if (isQuitting) return;
          void win.loadURL(
            loadSplashHtml(`Dev server unavailable (${errorDescription}). Retrying (${remaining} left)...`)
          );
          setTimeout(() => {
            if (!isQuitting) void win.loadURL(url);
          }, 1200);
        }, 300);
        return;
      }

      void win.loadURL(
        loadSplashHtml(`Cannot reach the Next.js dev server at ${url}. Start it with "npm run dev:desktop".`)
      );
    }
  );

  // did-fail-load shows the retry/failure splash; swallow the rejected promise
  // so startup does not surface an unhandled rejection.
  await win.loadURL(url).catch(() => undefined);
}

async function launchAppWithConfig(config: DbConfig): Promise<void> {
  const devUrl = getDevServerUrl();
  if (devUrl) {
    await openDevWorkspace(devUrl);
    return;
  }

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
            const target =
              getDevServerUrl() ??
              (activePort ? `http://127.0.0.1:${activePort}` : null);
            if (mainWindow && target) {
              void mainWindow.loadURL(target);
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

  const devUrl = getDevServerUrl();
  if (devUrl) {
    await openDevWorkspace(devUrl);
    return;
  }

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
  }).catch((error) => {
    console.error('Failed to start Nuskha:', error);
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
