import React from 'react';
import OriginalImg from '@theme-original/MDXComponents/Img';
import Screenshot from '@site/src/components/Screenshot';
import windowCrops from '@site/src/components/Screenshot/window-crops.json';

export default function MDXImg({'data-screenshot-source': source, ...props}) {
  if (!source) return <OriginalImg {...props} />;
  const crop = windowCrops[source];
  const matchingSize = crop && Number(props.width) === crop.originalWidth && Number(props.height) === crop.originalHeight;
  return <Screenshot
    {...props}
    windowBounds={matchingSize ? [crop.x, crop.y, crop.width, crop.height] : undefined}
  />;
}
