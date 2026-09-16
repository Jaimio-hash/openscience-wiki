import {existsSync, readdirSync, statSync, readFileSync} from 'node:fs';
import {dirname, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {defaultLocale, locales} from '../i18n.config.mjs';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDocsRoot = resolve(repositoryRoot, 'docs');
const translatedDocsFolder = 'docusaurus-plugin-content-docs/current';

const collectContentFiles = (root) => {
  if (!existsSync(root)) return [];

  const files = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory)) {
      const absolutePath = resolve(directory, entry);
      if (statSync(absolutePath).isDirectory()) {
        visit(absolutePath);
      } else if (/\.(md|mdx)$/.test(entry) || entry === '_category_.json') {
        files.push(relative(root, absolutePath));
      }
    }
  };

  visit(root);
  return files.sort();
};

const sourceFiles = collectContentFiles(sourceDocsRoot);
const failures = [];

for (const locale of locales.filter((candidate) => candidate !== defaultLocale)) {
  const localeRoot = resolve(repositoryRoot, 'i18n', locale);
  const translatedDocsRoot = resolve(localeRoot, translatedDocsFolder);
  const translatedFiles = collectContentFiles(translatedDocsRoot);
  const translatedSet = new Set(translatedFiles);
  const sourceSet = new Set(sourceFiles);

  for (const file of sourceFiles) {
    if (!translatedSet.has(file)) failures.push(`[${locale}] missing document: ${file}`);
  }
  for (const file of translatedFiles) {
    if (!sourceSet.has(file)) failures.push(`[${locale}] orphaned document: ${file}`);
  }

  for (const requiredFile of [
    'code.json',
    'docusaurus-theme-classic/navbar.json',
    'docusaurus-theme-classic/footer.json',
  ]) {
    if (!existsSync(resolve(localeRoot, requiredFile))) {
      failures.push(`[${locale}] missing interface translation: ${requiredFile}`);
    }
  }

  // Substitution fields are code contracts, even when the surrounding copy changes.
  for (const file of ['code.json', 'docusaurus-theme-classic/navbar.json', 'docusaurus-theme-classic/footer.json']) {
    const sourcePath = resolve(repositoryRoot, 'i18n', defaultLocale, file);
    const targetPath = resolve(localeRoot, file);
    if (!existsSync(sourcePath) || !existsSync(targetPath)) continue;
    const source = JSON.parse(readFileSync(sourcePath, 'utf8'));
    const target = JSON.parse(readFileSync(targetPath, 'utf8'));
    for (const [key, entry] of Object.entries(target)) {
      if (!source[key] || key.endsWith('.plurals')) continue;
      const fields = (text) => [...new Set(text.match(/\{\w+\}/g) ?? [])].sort().join(',');
      if (fields(source[key].message) !== fields(entry.message)) failures.push(`[${locale}] changed substitution fields: ${file}:${key}`);
    }
  }
}

if (failures.length > 0) {
  console.error('i18n content check failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `i18n content check passed: ${sourceFiles.length} source files across ${locales.length} locales.`,
  );
}
