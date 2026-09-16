// Extract editable prose without sending code, URLs or JSX through translation.
// The manifest is a local working file, not a public site asset.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {unified} from 'unified';
import parse from 'remark-parse';
import mdx from 'remark-mdx';
import gfm from 'remark-gfm';
import frontmatter from 'remark-frontmatter';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const headings = require('@docusaurus/mdx-loader/lib/remark/headings/index.js').default;
const processor = unified().use(parse).use(frontmatter).use(gfm).use(mdx);
const [mode, directory] = process.argv.slice(2);
if (!['extract', 'render'].includes(mode) || !directory) throw new Error('Usage: node scripts/localization-content.mjs extract|render <working-directory>');
const root = process.cwd();
const work = path.resolve(directory);
fs.mkdirSync(work, {recursive: true});
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const save = (p, value) => {fs.mkdirSync(path.dirname(p), {recursive: true}); fs.writeFileSync(p, JSON.stringify(value, null, 2) + '\n');};
const hash = (s) => createHash('sha256').update(s).digest('hex');
const files = (p) => fs.readdirSync(p, {withFileTypes: true}).flatMap((e) => e.isDirectory() ? files(path.join(p, e.name)) : [path.join(p, e.name)]);
const contentPath = 'docusaurus-plugin-content-docs/current';
const interfaceLabels = new Set(json('i18n/interface-labels.json'));

if (mode === 'extract') {
  // Docusaurus cannot discover computed translation IDs in our chapter outline.
  const codePath = path.join(root, 'i18n/en/code.json');
  const code = json(codePath);
  const add = (id, message) => {if (message) code[id] = {message};};
  const outlines = {guides: json('src/data/guides-outline.json'), ...json('src/data/section-outlines.json')};
  for (const [section, outline] of Object.entries(outlines)) {
    const ns = section === 'guides' ? 'docs.guides.outline' : `docs.outline.${section}`;
    add(`${ns}.overview`, outline.overviewTitle ?? 'Open-Science overview');
    add(`${ns}.scope`, outline.scope);
    for (const group of outline.groups) {
      add(`${ns}.group.${group.id}`, group.title);
      for (const chapter of group.chapters) {
        for (const key of ['title', 'scope']) add(`${ns}.${chapter.id}.${key}`, chapter[key]);
        for (const topic of chapter.topics ?? []) for (const key of ['title', 'scope']) add(`${ns}.${chapter.id}.topic.${topic.id}.${key}`, topic[key]);
      }
    }
  }
  for (const [file, ns, fn] of [
    ['src/components/SectionOutline/index.js', 'docs.outline', 'common'],
    ['src/components/PreferenceScreenshot/index.js', 'docs.preferenceScreenshot', 'copy'],
  ]) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(new RegExp(`${fn}\\('([^']+)', '([^']+)'`, 'g'))) add(`${ns}.${match[1]}`, match[2]);
  }
  save(codePath, code);
  const manifest = {files: [], strings: {}};
  for (const sourceLocale of ['en', 'zh-Hans']) {
    const sourceRoot = sourceLocale === 'en' ? 'docs' : `i18n/${sourceLocale}/${contentPath}`;
    const sources = [...files(sourceRoot), ...files(`i18n/${sourceLocale}`).filter((p) => !p.includes(`/${contentPath}/`) && /(?:code|current|navbar|footer)\.json$/.test(p))];
    for (const filename of sources) {
      const raw = fs.readFileSync(filename, 'utf8');
      const relative = filename.startsWith(sourceRoot + '/') ? `${contentPath}/${path.relative(sourceRoot, filename)}` : path.relative(`i18n/${sourceLocale}`, filename);
      const record = {sourceLocale, filename, relative, hash: hash(raw), slots: [], anchors: [], paragraphs: []};
      const slot = (start, end, text, format = 'text') => {
        if (!text.trim() || !/[\p{L}]/u.test(text)) return;
        const trimmed = text.trim();
        const id = hash(sourceLocale + '\0' + trimmed).slice(0, 20);
        manifest.strings[id] = {sourceLocale, text: trimmed};
        record.slots.push({start, end, id, format, before: text.match(/^\s*/)[0], after: text.match(/\s*$/)[0]});
      };
      if (/\.json$/.test(filename)) {
        const data = json(filename);
        const walkJSON = (obj, keys = []) => {for (const [k,v] of Object.entries(obj)) {
          if (v && typeof v === 'object') walkJSON(v, [...keys,k]);
          else if (typeof v === 'string' && ['message','label','description'].includes(k) && (k !== 'description' || filename.endsWith('_category_.json'))) {
            const id = hash(sourceLocale + '\0' + v).slice(0,20);
            manifest.strings[id] = {sourceLocale, text:v};
            record.slots.push({keys:[...keys,k],id});
          }
        }};
        walkJSON(data);
      } else if (/\.(md|mdx)$/.test(filename)) {
        const tree = processor.parse(raw);
        const walk = (node, ancestors = []) => {
          const start = node.position?.start.offset, end = node.position?.end.offset;
          if (node.type === 'text' && !ancestors.some((p) => ['code','inlineCode','mdxjsEsm'].includes(p.type))) {
            // Preserve short English button names next to the real English screenshots.
            const literalLabel = interfaceLabels.has(node.value) || /→/.test(node.value) || /^[\w.-]+\.(?:md|csv|json|png|pdf|zip|r|py|science)$/i.test(node.value) || /^(?:PRISMA -|GSE\d+ |Gene-count QC)/.test(node.value);
            if (ancestors.at(-1)?.type === 'strong' && !ancestors.some((p) => p.type === 'heading') && literalLabel) return;
            slot(start, end, raw.slice(start, end));
          }
          if (node.type === 'image' && node.alt) {
            const match = /^!\[([^\]]*)\]/.exec(raw.slice(start,end));
            if (match) slot(start+2, start+2+match[1].length, match[1], 'alt');
          }
          if (node.type === 'yaml') {
            const yaml = raw.slice(start,end);
            for (const m of yaml.matchAll(/^(title|description|sidebar_label):\s*(.+)$/gm)) {
              const value = m[2].replace(/^(["'])(.*)\1$/, '$2');
              const offset = start + m.index + m[0].indexOf(m[2]);
              slot(offset,offset+m[2].length,value,'yaml');
            }
          }
          for (const attr of node.attributes ?? []) {
            if (['alt','title','label','linkLabel'].includes(attr.name) && typeof attr.value === 'string' && attr.position) {
              const a = attr.position.start.offset, b = attr.position.end.offset;
              const m = /^\w+=(['"])([\s\S]*)\1$/.exec(raw.slice(a,b));
              if (m) slot(a+raw.slice(a,b).indexOf(m[1])+1,b-1,m[2],'attribute');
            }
          }
          node.children?.forEach((child) => walk(child, [...ancestors,node]));
        };
        walk(tree);
        // Translate a formatted paragraph as a sentence, not isolated fragments.
        // Inline links, code and button labels are restored from protected parts.
        const paragraphs = (node) => {
          if (node.type === 'paragraph' && node.children.some((c) => ['link','strong','emphasis','inlineCode','mdxJsxTextElement'].includes(c.type))) {
            const parts=[];
            const text=node.children.map((child) => {
              if (child.type === 'text') return raw.slice(child.position.start.offset,child.position.end.offset);
              const token=`KEEP${String.fromCharCode(65+Math.floor(parts.length/26))}${String.fromCharCode(65+parts.length%26)}`;
              parts.push({token,start:child.position.start.offset,end:child.position.end.offset});
              return token;
            }).join('');
            const id=hash(sourceLocale+'\0'+text).slice(0,20);
            manifest.strings[id]={sourceLocale,text};
            record.paragraphs.push({start:node.position.start.offset,end:node.position.end.offset,id,parts});
          }
          node.children?.forEach(paragraphs);
        };
        paragraphs(tree);
        // Reuse Docusaurus' own slugger; existing cross-links keep working after translation.
        await headings({anchorsMaintainCase:false})(tree);
        const anchors = (node) => {
          if (node.type === 'heading' && !/\{\s*\/\*|\{#|<!--/.test(raw.slice(node.position.start.offset,node.position.end.offset))) record.anchors.push({at:node.position.end.offset,id:node.data.id});
          node.children?.forEach(anchors);
        };
        anchors(tree);
      } else continue;
      manifest.files.push(record);
    }
  }
  save(path.join(work,'manifest.json'),manifest);
  console.log(`${manifest.files.length} source files, ${Object.keys(manifest.strings).length} unique prose strings`);
} else {
  const manifest = json(path.join(work,'manifest.json'));
  const overrides = json('i18n/translation-overrides.json');
  const targets = process.argv.length > 4 ? process.argv.slice(4) : ['zh-Hant','ja','ko','fr','ru','de','es'];
  for (const locale of targets) {
    const translations = json(path.join(work,`${locale}.json`));
    let count = 0;
    for (const record of manifest.files.filter((f) => f.sourceLocale === (locale === 'zh-Hant' ? 'zh-Hans' : 'en'))) {
      const raw = fs.readFileSync(record.filename,'utf8');
      if (hash(raw) !== record.hash) throw new Error(`Source changed: ${record.filename}`);
      const get = (id) => {
        const value = overrides[locale]?.[manifest.strings[id].text] ?? translations[id];
        if (typeof value !== 'string' || !value.trim()) throw new Error(`Missing ${locale}: ${id}`);
        return locale === 'zh-Hant' ? value.replaceAll('\u5168\u57df\u6027','\u5168\u57df').replaceAll('\u8a31\u53ef\u6b0a','\u6b0a\u9650') : value;
      };
      let output;
      if (record.filename.endsWith('.json')) {
        const data = JSON.parse(raw);
        for (const s of record.slots) {let obj=data; for (const k of s.keys.slice(0,-1)) obj=obj[k]; obj[s.keys.at(-1)]=get(s.id);}
        if (record.relative === 'code.json') {
          const defaults=json('i18n/en/code.json');
          for (const nativeFile of [
            `node_modules/@docusaurus/theme-translations/locales/${locale}/theme-common.json`,
            `node_modules/@easyops-cn/docusaurus-search-local/dist/locales/${locale}.json`,
          ]) if (fs.existsSync(nativeFile)) {
            for (const [key,value] of Object.entries(json(nativeFile))) {
              const message=typeof value === 'string' ? value : value.message;
              if (key in data && typeof message === 'string' && message !== defaults[key]?.message) data[key]={message};
            }
          }
          for (const [key,message] of Object.entries(json('i18n/ui-overrides.json')[locale] ?? {})) data[key]={message};
        }
        output=JSON.stringify(data,null,2)+'\n';
      } else {
        let edits=record.slots.map((s) => {
          let value=get(s.id);
          if (s.format === 'yaml') value=JSON.stringify(value);
          else if (s.format === 'attribute') value=value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#39;').replaceAll('<','&lt;');
          else value=value.replaceAll('<','&lt;').replaceAll('{','&#123;').replaceAll('}','&#125;').replaceAll('|','&#124;').replaceAll('*','&#42;').replaceAll('[','&#91;').replaceAll(']','&#93;').replaceAll('`','&#96;');
          return {start:s.start,end:s.end,text:s.before+value+s.after};
        });
        for (const p of record.paragraphs ?? []) {
          let translated=get(p.id);
          const wanted=p.parts.map((part)=>part.token).sort();
          const actual=(translated.match(/KEEP[A-Z]{2}/g) ?? []).sort();
          if (JSON.stringify(wanted)!==JSON.stringify(actual)) throw new Error(`Changed paragraph placeholders: ${locale}:${record.filename}:${p.id}`);
          translated=translated.replaceAll('<','&lt;').replaceAll('{','&#123;').replaceAll('}','&#125;').replaceAll('|','&#124;').replaceAll('*','&#42;').replaceAll('[','&#91;').replaceAll(']','&#93;').replaceAll('`','&#96;');
          for (const part of p.parts) {
            let content=raw.slice(part.start,part.end);
            for (const e of edits.filter((e)=>e.start>=part.start && e.end<=part.end).sort((a,b)=>b.start-a.start)) content=content.slice(0,e.start-part.start)+e.text+content.slice(e.end-part.start);
            // CJK text can touch a URL without a space. Give bare autolinks an
            // explicit boundary so adjacent translated words cannot enter the href.
            if (/^https?:\/\/\S+$/.test(content)) content=`[${content}](${content})`;
            translated=translated.replace(part.token,content);
          }
          edits=edits.filter((e)=>e.start<p.start || e.end>p.end);
          edits.push({start:p.start,end:p.end,text:translated});
        }
        edits.push(...record.anchors.map((a)=>({start:a.at,end:a.at,text:` {/* #${a.id} */}`})));
        output=raw;
        for (const e of edits.sort((a,b)=>b.start-a.start || b.end-a.end)) output=output.slice(0,e.start)+e.text+output.slice(e.end);
        // Remove accidental prose whitespace without touching fenced code or
        // Markdown's intentional two-space line breaks.
        const codeRanges=[];
        const findCode=(node)=>{if(node.type==='code') codeRanges.push([node.position.start.offset,node.position.end.offset]);node.children?.forEach(findCode);};
        findCode(processor.parse(output));
        output=output.replace(/(?<![ \t])[ \t](?=\n)/g,(space,offset)=>codeRanges.some(([start,end])=>offset>=start&&offset<end)?space:'');
        output=output.trimEnd()+'\n';
      }
      const destination=path.join('i18n',locale,record.relative);
      fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,output);count++;
    }
    console.log(`${locale}: ${count} localized files`);
  }
}
