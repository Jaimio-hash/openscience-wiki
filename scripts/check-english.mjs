import {readFile, readdir} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';

const repositoryRoot = process.cwd();
const ignoredDirectories = new Set([
  '.docusaurus',
  '.docusaurus-build',
  '.git',
  '.playwright-cli',
  'build',
  'i18n',
  'node_modules',
]);
const allowedFiles = new Set([
  // Locale names are written in their native language for the language picker.
  'i18n.config.mjs',
]);
const checkedExtensions = new Set([
  '.css',
  '.js',
  '.json',
  '.md',
  '.mdx',
  '.mjs',
  '.ts',
  '.tsx',
  '.yaml',
  '.yml',
]);
const hanCharacters = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u;
const failures = [];

async function inspectDirectory(directory) {
  // Exported colleague handoff kits are localized artifacts, not English site sources.
  if (relative(repositoryRoot, directory).replaceAll('\\', '/') === 'output/handoffs') return;
  const entries = await readdir(directory, {withFileTypes: true});

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspectDirectory(absolutePath);
      continue;
    }

    if (!checkedExtensions.has(extname(entry.name))) continue;

    const repositoryPath = relative(repositoryRoot, absolutePath);
    if (allowedFiles.has(repositoryPath)) continue;

    const lines = (await readFile(absolutePath, 'utf8')).split('\n');
    lines.forEach((line, index) => {
      if (hanCharacters.test(line)) {
        failures.push(`${relative(repositoryRoot, absolutePath)}:${index + 1}`);
      }
    });
  }
}

await inspectDirectory(repositoryRoot);

if (failures.length > 0) {
  console.error('Chinese characters remain outside translation sources:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('English-default source check passed.');
