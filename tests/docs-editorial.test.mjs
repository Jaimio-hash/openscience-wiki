import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {locales} from '../i18n.config.mjs';

const buildDir = process.env.DOCS_BUILD_DIR || 'build';
const availableWorkflows = [
  'core-reading-list', 'inherit-literature', 'journal-club', 'literature-review',
  'pdf-evidence', 'data-quality', 'statistics', 'extend-analysis', 'figures',
];

const en = readFileSync('docs/reference/connector-operations.md', 'utf8');
const zh = readFileSync('i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/connector-operations.md', 'utf8');
const operations = (text) => [...text.matchAll(/^### `([^`]+)`\n\n([^\n]+)/gm)].map((m) => ({name:m[1], description:m[2]}));

test('translated operation explanations preserve all callable names and example arguments', () => {
  const original = operations(en), translated = operations(zh);
  const registry = JSON.parse(readFileSync('static/examples/capabilities/connector-catalog-v0.29.0.json', 'utf8'));
  const dataTools = registry.filter((c) => c.id !== 'molecule').flatMap((c) => c.tools);
  assert.equal(original.length, 237);
  assert.deepEqual(original.map((t) => t.name).sort(), dataTools.map((t) => t.id).sort());
  assert.deepEqual(translated.map((x) => x.name), original.map((x) => x.name));
  for (let i = 0; i < original.length; i++) {
    assert.notEqual(translated[i].description, original[i].description, original[i].name);
    assert.match(translated[i].description, /[\u3400-\u9fff]/, original[i].name);
  }
  const examples = (text) => [...text.matchAll(/```javascript\n([\s\S]*?)```/g)].map((m) => m[1]);
  assert.deepEqual(examples(zh), examples(en));
  const fields = (text) => [...text.matchAll(/^\| `([^`]+)` \|/gm)].map((m) => m[1]);
  assert.deepEqual(fields(zh), fields(en));
});

for (const prefix of locales.map((locale) => locale === 'en' ? '' : `${locale}/`)) {
  test(`${prefix || 'en/'} public workflow navigation exposes only available articles`, () => {
    const html = readFileSync(`${buildDir}/${prefix}workflows/core-reading-list/index.html`, 'utf8');
    const aside = html.match(/<aside\b[\s\S]*?<\/aside>/)?.[0];
    assert.ok(aside);
    // Attribute order is not a navigation contract; also handle href before class.
    const links = [...aside.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]).filter((s) => /class="menu__link/.test(s)).map((s) => s.match(/href="([^"]+)"/)[1]);
    assert.deepEqual(links.sort(), availableWorkflows.map((slug) => `/docs/${prefix}workflows/${slug}/`).sort());
    assert.ok(!aside.includes('guides-outline-chapter'));
    assert.ok(!/Chapter production in progress|upcoming coverage|Awaiting approval/i.test(aside));
  });
}
