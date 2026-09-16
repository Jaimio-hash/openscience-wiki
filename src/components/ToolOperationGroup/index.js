import React, {useEffect, useRef} from 'react';
import {useLocation} from '@docusaurus/router';

// Keep parameter tables collapsed until a reader opens them or follows a search result.
export default function ToolOperationGroup({children}) {
  const ref = useRef(null);
  const {hash, pathname} = useLocation();
  useEffect(() => {
    if (!hash) return undefined;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return undefined; }
    const target = document.getElementById(id);
    if (!target || !ref.current?.contains(target)) return undefined;
    ref.current.open = true;
    const frame = requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);
  return <details ref={ref} className="tool-operation-group">{children}</details>;
}
