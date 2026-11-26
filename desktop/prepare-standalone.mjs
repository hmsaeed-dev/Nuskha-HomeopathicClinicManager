import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const standaloneDir = path.join(root, '.next', 'standalone');
const serverEntry = path.join(standaloneDir, 'server.js');

if (!fs.existsSync(serverEntry)) {
  console.error(
    '[desktop:prepare] Missing .next/standalone/server.js. Run "npm run build" first.'
  );
  process.exit(1);
}

function copyFresh(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

copyFresh(
  path.join(root, '.next', 'static'),
  path.join(standaloneDir, '.next', 'static')
);
copyFresh(path.join(root, 'public'), path.join(standaloneDir, 'public'));

console.log('[desktop:prepare] Standalone assets staged into .next/standalone');
