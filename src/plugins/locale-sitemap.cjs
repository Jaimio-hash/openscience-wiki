const {writeFile} = require('node:fs/promises');
const {join} = require('node:path');

module.exports = function localeSitemap(context) {
  return {
    name: 'wiki-locale-sitemap',
    async postBuild({outDir}) {
      if (context.i18n.currentLocale !== context.i18n.defaultLocale) return;
      const entries = context.i18n.locales.map((locale) => {
        const config = context.i18n.localeConfigs[locale];
        const location = new URL(`${config.baseUrl}sitemap.xml`, config.url || context.siteConfig.url).href;
        return `  <sitemap><loc>${location}</loc></sitemap>`;
      });
      await writeFile(join(outDir, 'sitemap-index.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>\n`);
    },
  };
};
