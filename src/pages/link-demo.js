import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './link-demo.module.css';
const t=(id,message)=>translate({id:`docs.textLinkDemo.${id}`,message});

export default function LinkDemo(){
  const {siteConfig:{baseUrl}}=useDocusaurusContext();
  const link=(path,label)=><Link to={`${baseUrl}${path}`} target="_blank" rel="noopener noreferrer">{label}</Link>;
  return <Layout title={t('title','Three text-link styles')} noFooter>
    <Head><meta name="robots" content="noindex, nofollow"/></Head>
    <main className={styles.page}>
      <header className={styles.header}><h1>{t('title','Three text-link styles')}</h1><p>{t('intro','The same paragraph and list. Only the text-link styling changes.')}</p></header>
      {[
        ['a','A',t('a','Ink underline'),t('aNote','Dark text with a clear underline; a deeper underline on hover.')],
        ['b','B',t('b','Muted gold underline'),t('bNote','Gold-toned text and underline; a soft yellow highlight on hover.')],
        ['c','C',t('c','Soft highlight'),t('cNote','Dark text on a pale yellow highlight; an underline appears on hover.')],
      ].map(([id,letter,title,note])=><section key={id} className={`${styles.example} ${styles[id]}`} aria-labelledby={`example-${id}`}>
        <h2 id={`example-${id}`}><span>{letter}</span>{title}</h2><p className={styles.note}>{note}</p>
        <div className={styles.sample}>
          <p>{t('see','See')} {link('guides/providers/',t('models','Model connections'))}{t('separator', ', ')}{link('guides/runtimes/',t('runtimes','Python and R runtimes'))}{t('separator', ', ')}{link('guides/network/',t('network','Network settings'))}{t('period', '.')}</p>
          <ul><li>{link('workflows/core-reading-list/',t('prisma','PRISMA reading collection'))}{t('prismaText',': Three real papers, checked reference records and publisher PDFs.')}</li>
          <li>{link('workflows/data-quality/',t('rna','GSE60450 RNA-seq analysis'))}{t('rnaText',': A gene-count matrix, sample-QC metrics and figures.')}</li></ul>
        </div>
      </section>)}
      <footer className={styles.footer}>{t('hint','Hover or press Tab to compare. Links open the actual tutorials in a new tab.')}
      <Link to={`${baseUrl}guides/capabilities/`}>{t('back','Return to the current article')}</Link></footer>
    </main>
  </Layout>;
}
