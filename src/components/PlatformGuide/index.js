import React, {useId, useSyncExternalStore} from 'react';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const storageKey = 'aipoch-docs-platform';
const platforms = ['macos', 'windows', 'linux'];
let selected;
function snapshot() {
  if (selected) return selected;
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (platforms.includes(saved)) return saved;
  } catch { /* Reading preferences is optional. */ }
  return 'macos';
}
function subscribe(listener) {
  const onStorage = (event) => {
    if (event.key === storageKey || event.key === null) {
      selected = undefined;
      listener();
    }
  };
  window.addEventListener(storageKey, listener);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(storageKey, listener);
    window.removeEventListener('storage', onStorage);
  };
}
function usePlatform() {
  return useSyncExternalStore(subscribe, snapshot, () => 'macos');
}
function select(platform) {
  selected = platform;
  try { window.localStorage.setItem(storageKey, platform); } catch { /* Keep the in-memory selection. */ }
  window.dispatchEvent(new Event(storageKey));
}
export default function PlatformGuide() {
  const value = usePlatform();
  const id = useId();
  return <div className={styles.selector}>
    <span id={id} className={styles.label}>{translate({id: 'docs.platform.label', message: 'Platform'})}</span>
    <div className={styles.options} role="radiogroup" aria-labelledby={id}>
      {platforms.map((platform, index) => <label key={platform} className={value === platform ? styles.active : styles.option}>
        <input type="radio" name={id} value={platform} checked={value === platform} onChange={() => select(platform)} />
        <span>{['macOS', 'Windows', 'Linux'][index]}</span>
      </label>)}
    </div>
    <span className={styles.hint}>{translate({id: 'docs.platform.hint', message: 'Your choice is kept across chapters.'})}</span>
  </div>;
}
export function PlatformContent({platform, children}) {
  const selectedPlatform = usePlatform();
  // Keep every platform in the built HTML for search; hidden content is not read aloud.
  return <div hidden={selectedPlatform !== platform} data-doc-platform={platform}>{children}</div>;
}
