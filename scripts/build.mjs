import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {locales} from '../i18n.config.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const cli = fileURLToPath(new URL('../node_modules/@docusaurus/core/bin/docusaurus.mjs', import.meta.url));

// Production and development use different route chunk names. A build must not
// overwrite the registry being watched by an already-open development preview.
const args = process.argv.slice(2);
const hasLocale = args.some((arg) => arg === '--locale' || arg.startsWith('--locale='));
// Search-local caches its first language pipeline at module scope. Separate
// processes prevent one edition's tokenizer leaking into the next build.
// Explicit locale base URLs preserve subdirectories for single-locale builds.
for (const locale of hasLocale ? [null] : locales) {
  const result = spawnSync(process.execPath, [cli, 'build', ...args, ...(locale ? ['--locale',locale] : [])], {
    cwd: root,
    stdio: 'inherit',
    env: {...process.env, DOCUSAURUS_GENERATED_FILES_DIR_NAME: '.docusaurus-build'},
  });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}
