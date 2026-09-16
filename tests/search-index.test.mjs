import assert from 'node:assert/strict';
import {readFileSync, readdirSync, existsSync} from 'node:fs';
import {join} from 'node:path';
import {createRequire} from 'node:module';
import test from 'node:test';
import {locales, searchLanguages} from '../i18n.config.mjs';

const require = createRequire(import.meta.url);
const build = process.env.DOCS_BUILD_DIR || 'build';
const legacyRedirects = JSON.parse(readFileSync('src/data/legacy-doc-redirects.json', 'utf8'));
const movedFragments = JSON.parse(readFileSync('src/data/moved-doc-fragments.json', 'utf8'));

test('moved section bookmarks resolve to an existing article and heading', () => {
  for (const [source, entries] of Object.entries(movedFragments)) {
    const prefix = source.startsWith('zh-Hans/') ? 'zh-Hans/' : '';
    for (const [oldAnchor, destination] of Object.entries(entries)) {
      const [target, anchor] = destination.split('#');
      const html = readFileSync(join(build, prefix, target, 'index.html'), 'utf8');
      if (anchor) assert.ok(html.includes(`id="${anchor}"`), `${source}#${oldAnchor} -> ${destination}`);
    }
  }
});
const lunr = require('lunr');
const {buildIndex} = require('@easyops-cn/docusaurus-search-local/dist/server/server/utils/buildIndex.js');
buildIndex([], {language: searchLanguages, zhUserDict: [], removeDefaultStopWordFilter: false, removeDefaultStemmer: false});
const nativeQueries = {
  en: 'Reproducibility', 'zh-Hans': '\u53ef\u590d\u73b0\u6027', 'zh-Hant': '\u53ef\u5fa9\u73fe\u6027',
  ja: '\u518d\u73fe\u6027', ko: '\uc7ac\ud604\uc131', fr: 'Reproductibilité',
  de: 'Reproduzierbarkeit', es: 'Reproducibilidad', ru: 'Воспроизводимость',
};

for (const [locale, prefix, query, expected] of [
  ['en', '', 'purple', '/specialists/identity/'],
  ['zh-Hans', 'zh-Hans/', '\u51ed\u636e', '/tools/credentials/'],
  ...locales.filter((locale) => !['en','zh-Hans'].includes(locale)).map((locale) => [locale, `${locale}/`, 'Python', '/guides/runtimes/']),
]) {
  const dir = join(build, prefix);
  const indexFile = readdirSync(dir).find((name) => /^search-index-[\w-]+\.json$/.test(name));
  const groups = JSON.parse(readFileSync(join(dir, indexFile), 'utf8'));
  test(`${locale}: native-language titles are searchable`, () => {
    const titleIndex=groups[0];
    const documents=new Map(titleIndex.documents.map((doc)=>[String(doc.i),doc]));
    const query=nativeQueries[locale];
    const tokenizer=locale.startsWith('zh-') ? lunr.zh.tokenizer : locale==='ja' ? lunr.ja.tokenizer : null;
    const searchText=tokenizer ? tokenizer(query).map((token)=>token.toString()).join(' ') : query;
    const hits=lunr.Index.load(titleIndex.index).search(searchText);
    assert.ok(hits.some((hit)=>documents.get(hit.ref).u.endsWith('/guides/reproducibility/')));
  });
  test(`${locale}: legacy entries redirect to canonical articles and stay out of search`, () => {
    const indexed = new Set(groups.flatMap((group) => group.documents.map((doc) => doc.u)));
    for (const [oldPath, canonical] of Object.entries(legacyRedirects)) {
      const target = `/docs/${prefix}${canonical}/`;
      const html = readFileSync(join(dir, oldPath, 'index.html'), 'utf8');
      assert.ok(html.includes(target), `Wrong redirect target for ${prefix}${oldPath}`);
      assert.ok(html.includes('window.location.search') && html.includes('window.location.hash'));
      assert.ok(indexed.has(target), `Canonical target missing from search: ${target}`);
      assert.ok(!indexed.has(`/docs/${prefix}${oldPath}/`));
    }
  });
  test(`${locale}: full-text body index returns article passages`, () => {
    const body = groups[4];
    assert.ok(body.documents.length > groups[0].documents.length);
    const hits = lunr.Index.load(body.index).search(query);
    const documents = new Map(body.documents.map((doc) => [String(doc.i), doc]));
    assert.ok(hits.some((hit) => documents.get(hit.ref).u.includes(expected)));
  });
  test(`${locale}: search targets resolve within the current locale and exclude draft sidebar scopes`, () => {
    for (const group of groups) for (const doc of group.documents) {
      assert.ok(doc.u.startsWith(`/docs/${prefix}`));
      if (!prefix) for (const locale of locales.filter((x) => x !== 'en')) assert.ok(!doc.u.startsWith(`/docs/${locale}/`));
      assert.ok(existsSync(join(build, doc.u.slice('/docs/'.length), 'index.html')));
      assert.ok(!doc.t.includes('Review the included topics and their planned scope below.'));
    }
    assert.ok(groups[0].documents.some((doc) => doc.u === `/docs/${prefix}reference/`));
    assert.ok(!groups[0].documents.some((doc) => doc.u.includes('/releases/')));
  });
  test(`${locale}: product release narration is confined to Changelog search entries`, () => {
    const productVersions = /\bv?0\.(?:27\.0|26\.0|25\.1|14\.0)\b/i;
    for (const group of groups) for (const doc of group.documents) {
      if (!doc.u.includes('/changelog/')) {
        assert.ok(!productVersions.test(doc.t), `Release narration in ${doc.u}: ${doc.t}`);
      }
    }
    for (const version of ['29', '28', '27']) {
      assert.ok(groups[0].documents.some((doc) =>
        doc.u === `/docs/${prefix}changelog/v0-${version}-0/` && doc.t.includes(`v0.${version}.0`)));
    }
  });
}
