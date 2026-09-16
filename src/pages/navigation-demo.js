import React, {useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import guides from '../data/guides-outline.json';
import outlines from '../data/section-outlines.json';
import styles from './navigation-demo.module.css';
import SectionIcon from '../components/DocumentationNavigation/SectionIcon';

const sections = [
  ['guides', 'Guides'], ['workflows', 'Workflows'], ['tools', 'Explore tools'],
  ['skills', 'Skills'], ['specialists', 'Specialists'], ['reference', 'Reference'],
];
const data = {guides, ...outlines};
const ui = (id, message) => translate({id: `docs.demo.${id}`, message});
const sectionLabel = (id, title) => translate({id:`docs.ui.section.${id}`, message:title});
const copy = (section, id, message) => translate({id: `${section === 'guides' ? 'docs.guides.outline' : `docs.outline.${section}`}.${id}`, message});


export default function NavigationDemo() {
  const {siteConfig: {baseUrl}} = useDocusaurusContext();
  const [section, setSection] = useState('guides');
  const [selected, setSelected] = useState({guides:'capabilities'});
  const [expanded, setExpanded] = useState({guides:['start']});
  const [mobileIndex, setMobileIndex] = useState(true);
  const contentRef = useRef(null);
  const outline = data[section];
  const group = outline.groups.find((item) => item.chapters.some((chapter) => chapter.id === selected[section]));
  const chapter = group?.chapters.find((item) => item.id === selected[section]);
  const title = chapter ? copy(section, `${chapter.id}.title`, chapter.title) : sectionLabel(section, sections.find(([id]) => id === section)[1]);
  const activeGroups = expanded[section] ?? [outline.groups[0].id];
  const flattened = outline.groups.flatMap((item) => item.chapters.map((entry) => ({group:item, chapter:entry})));
  const chapterIndex = flattened.findIndex((item) => item.chapter.id === chapter?.id);

  const chooseChapter = (targetGroup, targetChapter) => {
    setSelected((value) => ({...value, [section]:targetChapter.id}));
    setExpanded((value) => ({...value, [section]:[...new Set([...activeGroups, targetGroup.id])]}));
    setMobileIndex(false);
    contentRef.current?.scrollIntoView({block:'start'});
  };
  const chooseSection = (id) => { setSection(id); setMobileIndex(true); };
  const railKeys = (event, index) => {
    const next = event.key === 'ArrowDown' ? (index + 1) % sections.length : event.key === 'ArrowUp' ? (index + sections.length - 1) % sections.length : event.key === 'Home' ? 0 : event.key === 'End' ? sections.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    chooseSection(sections[next][0]);
    event.currentTarget.parentElement.children[next].focus();
  };

  return <Layout title={ui('title','Navigation demo')} noFooter>
    <Head><meta name="robots" content="noindex, nofollow"/></Head>
    <div className={styles.demo}>
      <div className={styles.banner}>
        <span>{ui('title','Navigation demo')} · D</span>
        <span>{ui('levels','Sections → Groups → Chapters → Topics')}</span>
        <Link to={`${baseUrl}intro/`}>{ui('back','Back to current docs')} ↗</Link>
      </div>
      <div className={styles.workspace}>
        <aside className={styles.rail} aria-label={ui('sections','Sections')}>
          <div className={styles.railTitle}>DOCS</div>
          <div role="tablist" aria-orientation="vertical" aria-label={ui('sections','Sections')}>
            {sections.map(([id, label], index) => <button type="button" role="tab" id={`demo-tab-${id}`} key={id}
              aria-selected={section === id} aria-controls="demo-section-panel" tabIndex={section === id ? 0 : -1}
              onKeyDown={(event) => railKeys(event,index)} onClick={() => chooseSection(id)}>
              <SectionIcon section={id}/><span>{sectionLabel(id,label)}</span>
            </button>)}
          </div>
        </aside>
        <div className={styles.sectionPanel} id="demo-section-panel" role="tabpanel" aria-labelledby={`demo-tab-${section}`}>
          <aside className={`${styles.catalog} ${mobileIndex ? styles.mobileOpen : ''}`} aria-label={ui('index','Chapter index')}>
            <div className={styles.catalogHeading}>
              <div className={styles.eyebrow}>Open-Science</div>
              <h2>{sectionLabel(section,sections.find(([id]) => id === section)[1])}</h2>
              <button className={styles.mobileClose} onClick={() => setMobileIndex(false)}>{ui('close','Close index')} ×</button>
            </div>
            <button className={styles.overview} aria-current={!chapter ? 'page' : undefined}
              onClick={() => {setSelected((value) => ({...value,[section]:null}));setMobileIndex(false);}}>
              {ui('overview','Section overview')}
            </button>
            <div className={styles.status}>{ui('planning','Chapter production in progress')}</div>
            <nav aria-label={ui('groups','Groups and chapters')}>
              {outline.groups.map((item) => <div className={styles.group} key={item.id}>
                <button className={styles.groupToggle} aria-expanded={activeGroups.includes(item.id)} aria-controls={`demo-group-${section}-${item.id}`}
                  onClick={() => setExpanded((value) => ({...value,[section]:activeGroups.includes(item.id) ? activeGroups.filter((id) => id !== item.id) : [...activeGroups,item.id]}))}>
                  <span>{copy(section,`group.${item.id}`,item.title)}</span>
                  <small aria-hidden="true">{item.chapters.length}</small><span aria-hidden="true">{activeGroups.includes(item.id) ? '−' : '+'}</span>
                </button>
                <ul hidden={!activeGroups.includes(item.id)} id={`demo-group-${section}-${item.id}`}>
                  {item.chapters.map((entry) => <li key={entry.id}><button className={styles.chapterLink}
                    aria-current={entry.id === chapter?.id ? 'page' : undefined} onClick={() => chooseChapter(item,entry)}>
                    {copy(section,`${entry.id}.title`,entry.title)}
                  </button></li>)}
                </ul>
              </div>)}
            </nav>
          </aside>
          <main className={styles.reader} ref={contentRef}>
            <button className={styles.mobileToggle} onClick={() => setMobileIndex(!mobileIndex)} aria-expanded={mobileIndex}>{ui('index','Chapter index')} ☰</button>
            <nav className={styles.breadcrumbs} aria-label={ui('location','Current location')}>
              <span>{sectionLabel(section,sections.find(([id]) => id === section)[1])}</span>
              {group && <><span aria-hidden="true">/</span><span>{copy(section,`group.${group.id}`,group.title)}</span><span aria-hidden="true">/</span><span aria-current="page">{title}</span></>}
            </nav>
            <article key={`${section}-${chapter?.id ?? 'overview'}`}>
              <div className={styles.eyebrow}>{chapter ? ui('chapter','Chapter') : ui('overview','Section overview')}</div>
              <h1>{title}</h1>
              {chapter ? <>
                {chapter.scope && <p className={styles.scope}>{copy(section,`${chapter.id}.scope`,chapter.scope)}</p>}
                <div className={styles.readingNote}>{chapter.contentStatus === 'written' ? ui('readyNote','This chapter now has a detailed article. Open it below to read the walkthrough and evidence.') : ui('previewNote','This demo shows the approved navigation direction using the current content outline. Chapter text is still planned; the links below open existing documentation.')}</div>
                {chapter.topics?.length > 0 && <section className={styles.topics}>
                  <h2>{ui('topics','Included topics')}</h2>
                  {chapter.topics.map((topic,index) => <div className={styles.topic} key={topic.id}>
                    <span className={styles.topicNumber}>{String(index+1).padStart(2,'0')}</span><div>
                      <h3>{copy(section,`${chapter.id}.topic.${topic.id}.title`,topic.title)}</h3>
                      <p>{copy(section,`${chapter.id}.topic.${topic.id}.scope`,topic.scope)}</p>
                    </div>
                  </div>)}
                </section>}
                <section className={styles.existing}>
                  <h2>{ui('existing','Existing documentation')}</h2>
                  {(chapter.contentStatus === 'written' ? [chapter.currentDoc] : chapter.relatedDocs ?? [chapter.currentDoc]).map((doc) => <Link key={doc} to={`${baseUrl}${doc}/`}>
                    {chapter.contentStatus === 'written' ? ui('readChapter','Read chapter') : ui('read','Read existing document')} <span>{doc.split('/').at(-1).replaceAll('-',' ')}</span> ↗
                  </Link>)}
                </section>
                <nav className={styles.pagination} aria-label={ui('chapterNavigation','Chapter navigation')}>
                  {chapterIndex > 0 ? <button onClick={() => chooseChapter(flattened[chapterIndex-1].group,flattened[chapterIndex-1].chapter)}>← {ui('previous','Previous chapter')}</button> : <span/>}
                  {chapterIndex < flattened.length-1 && <button onClick={() => chooseChapter(flattened[chapterIndex+1].group,flattened[chapterIndex+1].chapter)}>{ui('next','Next chapter')} →</button>}
                </nav>
              </> : <div className={styles.overviewGroups}>{outline.groups.map((item) => <button key={item.id} onClick={() => chooseChapter(item,item.chapters[0])}>
                <span>{copy(section,`group.${item.id}`,item.title)}</span><small>{item.chapters.length} {ui('chapters','chapters')} →</small>
              </button>)}</div>}
            </article>
          </main>
        </div>
      </div>
    </div>
  </Layout>;
}
