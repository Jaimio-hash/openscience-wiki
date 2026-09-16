import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import guides from '../../data/guides-outline.json';
import sections from '../../data/section-outlines.json';
import {samePath} from '../DocumentationNavigation/model';

// Public navigation only includes available articles. Plans live in navigation-demo.
export default function SectionOutline({section, onItemClick, activePath, docLinks = {}}) {
  const sourceOutline = section === 'guides' ? guides : sections[section];
  const outline = {...sourceOutline, groups: sourceOutline.groups.map((group) => ({...group,
    chapters: group.chapters.filter((chapter) => chapter.kind === 'existing' || chapter.contentStatus === 'written'),
  })).filter((group) => group.chapters.length > 0)};
  const namespace = section === 'guides' ? 'docs.guides.outline' : `docs.outline.${section}`;
  const copy = (id, message) => translate({id: `${namespace}.${id}`, message});
  const common = (id, message, values) => translate({id: `docs.outline.${id}`, message}, values);
  const {siteConfig} = useDocusaurusContext();
  // Docusaurus resolves baseUrl for the current locale during each build.
  const base = siteConfig.baseUrl;
  const hrefFor = (doc) => docLinks[doc] ?? `${base}${doc}/`;
  const overview = hrefFor(outline.overviewDoc);
  const activeGroup = outline.groups.find((group) => group.chapters.some((chapter) =>
    [chapter.currentDoc, ...(chapter.relatedDocs ?? [])].some((doc) => samePath(hrefFor(doc), activePath))));
  const storageKey = `aipoch.docs.d.groups.${base}.${section}`;
  const [expanded, setExpanded] = useState([activeGroup?.id ?? outline.groups[0]?.id]);
  useEffect(() => {
    let saved;
    try { saved = JSON.parse(sessionStorage.getItem(storageKey) || 'null'); } catch {}
    setExpanded((previous) => [...new Set([
      ...(Array.isArray(saved) ? saved.filter((id) => outline.groups.some((group) => group.id === id)) : previous),
      ...(activeGroup ? [activeGroup.id] : []),
    ])]);
  }, [storageKey, activeGroup?.id, activePath]);
  const toggleGroup = (event, id) => {
    event.preventDefault();
    setExpanded((previous) => {
      const next = previous.includes(id) ? previous.filter((entry) => entry !== id) : [...previous, id];
      try { sessionStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  const chapterCount = outline.groups.reduce((total, group) => total + group.chapters.length, outline.overviewDoc ? 1 : 0);
  const follow = (label, href) => onItemClick?.({type: 'link', label, href});
  return (
    <>
      <li className="guides-outline-notice">
        <details>
        <summary>{common('availableNotice', 'Chapter index')}</summary>
        <span>{common('count', '{groups} groups · {chapters} chapters', {groups: outline.groups.length, chapters: chapterCount})}</span>
        {outline.scope && <p>{copy('scope', outline.scope)}</p>}
        </details>
      </li>
      {outline.overviewDoc && <li className="menu__list-item">
        <Link to={overview}
          className={`menu__link${samePath(activePath, overview) ? ' menu__link--active' : ''}`}
          aria-current={samePath(activePath, overview) ? 'page' : undefined}
          onClick={() => follow(outline.overviewTitle ?? 'Open-Science overview', overview)}>
          {copy('overview', outline.overviewTitle ?? 'Open-Science overview')}
        </Link>
      </li>}
      {outline.groups.map((group, groupIndex) => (
        <li key={group.id} id={`docs-group-${section}-${group.id}`} className="guides-outline-group">
          <details open={expanded.includes(group.id)}>
            <summary className="guides-outline-group-title" onClick={(event) => toggleGroup(event, group.id)}>
              {copy(`group.${group.id}`, group.title)}
              <span className="guides-outline-count" aria-hidden="true">{group.chapters.length}</span>
            </summary>
            <ul className="menu__list">
              {group.chapters.map((chapter) => {
                const title = copy(`${chapter.id}.title`, chapter.title);
                const href = hrefFor(chapter.currentDoc);
                if (chapter.kind === 'existing' || chapter.contentStatus === 'written') {
                  return (
                    <li key={chapter.id} className="menu__list-item">
                      <Link to={href} className={`menu__link${samePath(activePath, href) ? ' menu__link--active' : ''}`}
                        aria-current={samePath(activePath, href) ? 'page' : undefined}
                        onClick={() => follow(title, href)}>{title}</Link>
                    </li>
                  );
                }
                return (
                  <li key={chapter.id} className="menu__list-item guides-outline-chapter">
                    <details>
                      <summary>{title}</summary>
                      <div className="guides-outline-scope">
                        <p>{copy(`${chapter.id}.scope`, chapter.scope)}</p>
                        {chapter.topics && <ul className="guides-outline-topics">
                          {chapter.topics.map((topic) => <li key={topic.id}>
                            <strong>{copy(`${chapter.id}.topic.${topic.id}.title`, topic.title)}</strong>
                            <p>{copy(`${chapter.id}.topic.${topic.id}.scope`, topic.scope)}</p>
                          </li>)}
                        </ul>}
                        {(chapter.relatedDocs ?? [chapter.currentDoc]).map((doc, index) => {
                          const target = hrefFor(doc);
                          return <Link key={doc} className="guides-outline-related" to={target} onClick={() => follow(title, target)}>
                            {common('current', 'View related existing document')}{chapter.relatedDocs?.length > 1 ? ` ${index + 1}` : ''}
                          </Link>;
                        })}
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      ))}
    </>
  );
}
