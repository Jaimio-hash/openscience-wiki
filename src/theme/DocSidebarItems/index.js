import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {findFirstSidebarItemLink, isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import OriginalDocSidebarItems from '@theme-original/DocSidebarItems';
import SectionOutline from '../../components/SectionOutline';
import SectionIcon from '../../components/DocumentationNavigation/SectionIcon';
import {docLinks, samePath} from '../../components/DocumentationNavigation/model';

function SplitNavigation({sections, ...props}) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const current = sections.find((item) => isActiveSidebarItem(item, props.activePath)) ?? sections[0];
  const [browsedSection, setBrowsedSection] = useState(null);
  const [visited, setVisited] = useState({});
  const storageKey = `aipoch.docs.d.visited.${currentLocale}`;
  const active = sections.find((item) => item.customProps.section === browsedSection) ?? current;
  const links = docLinks(sections);

  useEffect(() => {
    setBrowsedSection(null);
    let saved = {};
    try { saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch {}
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
    saved = {...saved, [current.customProps.section]: props.activePath};
    setVisited(saved);
    try { sessionStorage.setItem(storageKey, JSON.stringify(saved)); } catch {}
  }, [props.activePath, current.customProps.section, storageKey]);

  const sectionHref = (item) => {
    const remembered = visited[item.customProps.section];
    return Object.values(docLinks([item])).some((href) => samePath(href, remembered)) ? remembered : findFirstSidebarItemLink(item);
  };
  const railKeys = (event, index) => {
    const next = event.key === 'ArrowDown' ? (index + 1) % sections.length
      : event.key === 'ArrowUp' ? (index + sections.length - 1) % sections.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? sections.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    const target = event.currentTarget.parentElement.querySelectorAll('a')[next];
    target.focus();
    target.click();
  };
  return <>
    <li className="docs-d-rail">
      <div className="docs-d-rail-title">DOCS</div>
      <nav aria-label={translate({id: 'docs.sections.label', message: 'Documentation sections'})}>
        {sections.map((item, index) => <Link key={item.customProps.section} to={sectionHref(item)}
          className="docs-d-section" aria-current={item === active ? 'true' : undefined}
          onKeyDown={(event) => railKeys(event, index)}
          onClick={(event) => {
            // In the mobile drawer, choose a section first, then a chapter to close it.
            if (props.onItemClick && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              event.preventDefault();
              setBrowsedSection(item.customProps.section);
            }
          }}>
          <SectionIcon section={item.customProps.section}/><span>{item.label}</span>
        </Link>)}
      </nav>
    </li>
    <li className="docs-d-catalog" key={active.customProps.section}>
      <div className="docs-d-catalog-heading">
        <span>Open-Science</span><h2>{active.label}</h2>
      </div>
      <ul className="menu__list">
        {active.customProps.outlineReview ? <SectionOutline section={active.customProps.section}
          docLinks={links} onItemClick={props.onItemClick} activePath={props.activePath}/>
          : <OriginalDocSidebarItems items={active.items} {...props}/>}
      </ul>
    </li>
  </>;
}

export default function DocSidebarItems({items, ...props}) {
  const sections = items.filter((item) => item.customProps?.section);
  if (props.level !== 1 || sections.length === 0) return <OriginalDocSidebarItems items={items} {...props}/>;
  return <SplitNavigation sections={sections} {...props}/>;
}
