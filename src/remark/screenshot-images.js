// Run after Docusaurus resolves Markdown images. Preserve its bundled URL and
// dimensions, and retain the public source path for screenshot presentation.
export default function screenshotImages() {
  return (tree) => {
    function publicPath(value) {
      if (typeof value !== 'string') return undefined;
      const normalized = value.replaceAll('\\', '/');
      const start = normalized.indexOf('/img/open-science/');
      if (start < 0) return undefined;
      const path = normalized.slice(start).split(/[?#]/)[0];
      return /\.(png|jpe?g|webp)$/i.test(path) ? path : undefined;
    }
    function expressionPath(node) {
      if (!node || typeof node !== 'object') return undefined;
      if (node.type === 'Literal') return publicPath(node.value);
      for (const value of Object.values(node)) {
        if (value && typeof value === 'object') {
          for (const child of Array.isArray(value) ? value : [value]) {
            const path = expressionPath(child);
            if (path) return path;
          }
        }
      }
      return undefined;
    }
    function visit(node) {
      if (node.name === 'img' && Array.isArray(node.attributes)) {
        const src = node.attributes.find((attribute) => attribute.name === 'src')?.value;
        const path = typeof src === 'string' ? publicPath(src) : expressionPath(src?.data?.estree);
        if (path) {
          node.attributes.push({type: 'mdxJsxAttribute', name: 'data-screenshot-source', value: path});
        }
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
