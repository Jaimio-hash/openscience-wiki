import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function DocItemContent(props) {
  const {i18n} = useDocusaurusContext();
  const alternate = useAlternatePageUtils();
  const translationDraft = ['ja', 'ko', 'fr', 'ru', 'de', 'es'].includes(i18n.currentLocale);
  return <>
    {translationDraft && <aside className={styles.translationNote}>
      {translate({id: 'docs.translation.note', message: 'Automatic translation. Consult the English original if a step is unclear.'})}{' '}
      <a href={alternate.createUrl({locale: 'en', fullyQualified: false})} lang="en">English</a>
    </aside>}
    <OriginalContent {...props}/>
  </>;
}
