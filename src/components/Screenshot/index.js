import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Screenshot({src, alt, width, height, windowBounds, href, linkLabel, className, style, ...imageProps}) {
  const imageUrl = useBaseUrl(src);
  // Some original captures include the operating system's shadow. Show only the
  // window rectangle so every screenshot receives the same frame and shadow.
  const [x, y, windowWidth, windowHeight] = windowBounds ?? [0, 0, width, height];
  const hasDimensions = Number(windowWidth) > 0 && Number(windowHeight) > 0;
  const Window = href ? 'a' : 'span';
  return (
    <span className={styles.frame} data-doc-screenshot="" style={hasDimensions ? {'--screenshot-width': `${windowWidth}px`} : undefined}>
      <Window
        className={styles.window}
        style={hasDimensions ? {aspectRatio: `${windowWidth} / ${windowHeight}`} : undefined}
        {...(href ? {href, target: '_blank', rel: 'noreferrer', 'aria-label': linkLabel} : {})}
      >
        <img
          {...imageProps}
          className={[styles.image, hasDimensions && styles.positioned, className].filter(Boolean).join(' ')}
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          style={hasDimensions ? {
            ...style,
            width: `${width / windowWidth * 100}%`,
            left: `${-x / windowWidth * 100}%`,
            top: `${-y / windowHeight * 100}%`,
          } : style}
        />
      </Window>
    </span>
  );
}
