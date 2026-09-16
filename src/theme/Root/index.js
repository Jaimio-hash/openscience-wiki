import React, {useEffect} from 'react';
import {useLocation, useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import movedFragments from '../../data/moved-doc-fragments.json';

export default function Root({children}) {
  const {pathname, hash, search} = useLocation();
  const history = useHistory();
  const {siteConfig, i18n} = useDocusaurusContext();
  useEffect(() => {
    if (!hash) return;
    let fragment;
    try { fragment = decodeURIComponent(hash.slice(1)); } catch { return; }
    const base = siteConfig.baseUrl;
    const doc = pathname.slice(base.length).replace(/\/$/, '');
    // New translations retain the heading IDs of their source edition.
    const sourceLocale = i18n.currentLocale === 'zh-Hant' ? 'zh-Hans' : i18n.currentLocale;
    const locale = sourceLocale === i18n.defaultLocale ? '' : `${sourceLocale}/`;
    const destination = (movedFragments[`${locale}${doc}`] ?? movedFragments[doc])?.[fragment];
    if (!destination) return;
    const [target, anchor] = destination.split('#');
    history.replace(`${base}${target}${search}${anchor ? `#${encodeURIComponent(anchor)}` : ''}`);
  }, [pathname, hash, search, history, siteConfig.baseUrl, i18n.currentLocale, i18n.defaultLocale]);
  return <>{children}</>;
}
