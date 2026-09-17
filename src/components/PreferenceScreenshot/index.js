import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import Screenshot from '../Screenshot';
import styles from './styles.module.css';

export default function PreferenceScreenshot({notifications = false}) {
  const [dark, setDark] = useState(false);
  const copy = (id, message, values) => translate({id: `docs.preferenceScreenshot.${id}`, message}, values);
  const filename = notifications ? '16-notification-test.webp' : dark ? '15-general-dark.webp' : '14-general-light.webp';
  const src = useBaseUrl(`/img/open-science/guides-walkthrough/${filename}`);
  const label = notifications
    ? copy('notifications', 'Task notification controls and the reported test status')
    : copy('theme', 'Theme and Language controls in {theme} mode', {theme: dark ? 'Dark' : 'Light'});
  // Display the relevant region of the original screenshot; the full image remains accessible.
  const crop = notifications ? {x: 230, y: 501, width: 710, height: 242} : {x: 230, y: 295, width: 710, height: 191};
  return (
    <figure className={styles.figure}>
      {!notifications && <div className={styles.toolbar}>
        <span>{copy('preview', 'Screenshot preview')}</span>
        <div role="group" aria-label={copy('choose', 'Choose a theme screenshot')}>
          <button type="button" aria-pressed={!dark} onClick={() => setDark(false)}>Light</button>
          <button type="button" aria-pressed={dark} onClick={() => setDark(true)}>Dark</button>
        </div>
      </div>}
      <Screenshot src={src} alt={label} width={1024} height={768}
        windowBounds={[crop.x, crop.y, crop.width, crop.height]}
        href={src} linkLabel={copy('open', '{label}; open full screenshot', {label})} />
      <figcaption>{copy('caption', 'English app screenshot · Select the image to view it in full')}</figcaption>
    </figure>
  );
}
