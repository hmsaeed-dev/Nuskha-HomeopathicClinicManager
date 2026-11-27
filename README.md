# Nuskha — Homoeopathic Clinic Workspace

Nuskha is a local-first Next.js clinic workspace backed by MS SQL Server (`NuskhaDB`). It can be
run in a browser during development or packaged as a self-contained Windows Electron desktop app.

## Local development

1. Copy `.env.example` to `.env.local` and set the SQL Server credentials.
2. Install dependencies: `npm install`
3. Apply the schema: `npm run db:migrate`
4. Start the app: `npm run dev`

Open `http://localhost:3000`.

Useful database scripts:

- `npm run db:migrate` — apply `src/db/migrations/*.sql`
- `npm run db:seed` — seed local reference data
- `npm run db:backup` — create a `.bak` file in the configured backup directory

## Windows desktop app

The desktop wrapper runs the Next.js standalone server inside Electron on `127.0.0.1` and talks
directly to the local SQL Server — no cloud service is required.

```bash
npm run dev:desktop    # live development: Next.js dev server + Electron, no production build
npm run desktop:dev    # build, then launch Electron in local mode
npm run desktop:build  # build Next.js standalone + Electron main process
npm run desktop:dist   # build and produce Windows installer + portable exe
```

### Live desktop development

`npm run dev:desktop` compiles the Electron main process once, starts `next dev` on port 3000,
waits for it to respond, then opens Electron against `http://localhost:3000`. Closing the Electron
window also stops the dev server. No `next build`, standalone staging, or packaging is involved.

Database settings in this mode come from `.env.local` (the same as `npm run dev`), not the first-run
Electron setup screen. Changes under `src/` — components, Tailwind/CSS, API routes — appear
immediately via Fast Refresh. Changes to `desktop/*.ts` or `.env.local` require stopping and
restarting `npm run dev:desktop`.

Production packaging is unaffected: packaged builds always use the standalone server and never
load a development URL.

Installers are written to `dist-desktop/`:

- `Nuskha-Setup-<version>.exe` — NSIS installer (Desktop and Start Menu shortcuts)
- `Nuskha-Portable-<version>.exe` — portable executable

### Runtime data

The installed app stores writable state under `%APPDATA%\nuskha`:

- `config.json` — SQL Server connection settings entered in the first-run setup screen
- `backups/` — clinic-visible `.bak` files
- `server.log` — standalone Next.js server output

Because the SQL Server service cannot write into a user profile, backups are first written to
`%PUBLIC%\Documents\NuskhaBackupStaging`, then copied into `backups/` by the desktop app.

### Clinic shortcuts and menu

- `Ctrl+Enter` — save consultation and refocus patient search
- `Alt+R` — repeat previous prescription
- `Alt+A` — add medicine row
- `?` — shortcut sheet / settings
- `Esc` — dismiss drawers and modals
- `Ctrl+Shift+B` — back up the database from anywhere in the app

The **Clinic** menu and system tray also provide *Backup Database Now*, *Open Backups Folder*,
and *Database Connection Settings*.
