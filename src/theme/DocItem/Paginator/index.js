import React from 'react';
import {useDoc, useDocsSidebar, isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import OriginalDocItemPaginator from '@theme-original/DocItem/Paginator';
import DocPaginator from '@theme/DocPaginator';
import {outlines, docLinks, outlineCopy} from '../../../components/DocumentationNavigation/model';

export default function DocItemPaginator() {
  const {metadata} = useDoc();
  const sidebar = useDocsSidebar();
  const section = sidebar?.items.find((item) => item.customProps?.section && isActiveSidebarItem(item, metadata.permalink));
  if (!section) return <OriginalDocItemPaginator/>;
  const id = section.customProps.section;
  const links = docLinks(sidebar.items);
  const chapters = outlines[id].groups.flatMap((group) => group.chapters)
    .filter((chapter) => (chapter.contentStatus === 'written' || chapter.kind === 'existing') && links[chapter.currentDoc]);
  const index = chapters.findIndex((chapter) => chapter.currentDoc === metadata.id);
  const isOverview = metadata.id === outlines[id].overviewDoc || metadata.id === `${outlines[id].overviewDoc}/index`;
  if (index < 0 && !isOverview) return <OriginalDocItemPaginator/>;
  const entry = (chapter) => chapter ? {title: outlineCopy(id, `${chapter.id}.title`, chapter.title), permalink: links[chapter.currentDoc]} : undefined;
  return <DocPaginator className="docusaurus-mt-lg" previous={entry(chapters[index - 1])} next={entry(chapters[index + 1])}/>;
}
