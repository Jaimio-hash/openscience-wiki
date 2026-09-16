import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ExampleDownload({path, children}) {
  return <a href={useBaseUrl(path)} download>{children}</a>;
}
