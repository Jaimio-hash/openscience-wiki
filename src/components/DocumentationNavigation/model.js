import guides from '../../data/guides-outline.json';
import sections from '../../data/section-outlines.json';
import {translate} from '@docusaurus/Translate';

export const outlines = {guides, ...sections};
export const outlineCopy = (section, id, message) => translate({
  id: `${section === 'guides' ? 'docs.guides.outline' : `docs.outline.${section}`}.${id}`, message,
});
// Use Docusaurus-resolved URLs, including locale prefixes and explicit document slugs.
export function docLinks(items) {
  const result = {};
  function visit(item) {
    if (item.docId && item.href) result[item.docId] = item.href;
    item.items?.forEach(visit);
  }
  items.forEach(visit);
  return result;
}
export function chapterLocation(section, docId) {
  for (const group of outlines[section]?.groups ?? []) {
    const chapter = group.chapters.find((entry) => entry.currentDoc === docId);
    if (chapter) return {group, chapter};
  }
  return null;
}

export const samePath = (left, right) => typeof left === 'string' && typeof right === 'string' &&
  left.split(/[?#]/)[0].replace(/\/+$/, '') === right.split(/[?#]/)[0].replace(/\/+$/, '');
