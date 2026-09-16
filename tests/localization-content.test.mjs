import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';
import {unified} from 'unified';
import parse from 'remark-parse';
import mdx from 'remark-mdx';
import gfm from 'remark-gfm';
import frontmatter from 'remark-frontmatter';
import {locales, localeConfigs} from '../i18n.config.mjs';

const parser = unified().use(parse).use(frontmatter).use(gfm).use(mdx);
const collect = (directory) => readdirSync(directory,{withFileTypes:true}).flatMap((e) => e.isDirectory()
  ? collect(join(directory,e.name)) : /\.mdx?$/.test(e.name) ? [join(directory,e.name)] : []);
const contracts = (raw) => {
  const values = {code:[], inlineCode:[], urls:[], imports:[], components:[], text:[]};
  const visit = (node) => {
    if (node.type === 'code') values.code.push([node.lang,node.value]);
    if (node.type === 'inlineCode') values.inlineCode.push(node.value);
    if (['link','image','definition'].includes(node.type)) values.urls.push(node.url);
    if (node.type === 'mdxjsEsm') values.imports.push(node.value);
    if (node.type.startsWith('mdxJsx')) values.components.push([node.name,(node.attributes ?? []).filter((a) => !['alt','title','label','linkLabel'].includes(a.name)).map((a) => [a.name, typeof a.value === 'string' ? a.value : a.value?.value])]);
    if (node.type === 'text') values.text.push(node.value);
    node.children?.forEach(visit);
  };
  visit(parser.parse(raw));
  return values;
};

test('Wiki language choices match the Open-Science v0.30.0 locale list', () => {
  assert.deepEqual(locales,['en','zh-Hans','zh-Hant','ja','ko','fr','ru','de','es']);
  for (const locale of locales) assert.equal(localeConfigs[locale].htmlLang,locale);
});

for (const locale of locales.filter((x) => !['en','zh-Hans'].includes(x))) {
  test(`${locale}: all articles preserve commands, inputs, links and component behavior`, () => {
    const base = locale === 'zh-Hant' ? 'i18n/zh-Hans/docusaurus-plugin-content-docs/current' : 'docs';
    let count = 0;
    for (const file of collect(base)) {
      const relative = file.slice(base.length+1);
      const source=contracts(readFileSync(file,'utf8'));
      const target=contracts(readFileSync(`i18n/${locale}/docusaurus-plugin-content-docs/current/${relative}`,'utf8'));
      for (const key of ['code','imports']) assert.deepEqual(target[key],source[key],`${relative}: ${key}`);
      // A translated sentence may legitimately reorder its inline references.
      for (const key of ['inlineCode','urls','components']) {
        const sorted=(list)=>list.map((v)=>JSON.stringify(v)).sort();
        assert.deepEqual(sorted(target[key]),sorted(source[key]),`${relative}: ${key}`);
      }
      assert.notEqual(target.text.join(' '),source.text.join(' '),`${relative}: untranslated body`);
      count++;
    }
    assert.ok(count > 0);
    assert.equal(collect(`i18n/${locale}/docusaurus-plugin-content-docs/current`).length,count);
  });
}
