const search = require('@easyops-cn/docusaurus-search-local');

module.exports = function localizedSearch(context, options) {
  const locale = context.i18n.currentLocale;
  // The Chinese tokenizer discards Hangul and Cyrillic. Each edition needs its
  // own tokenizer; Japanese also needs its single-language TinySegmenter path.
  const language = locale.startsWith('zh-') ? ['en', 'zh'] : locale === 'ru' ? ['en', 'ru'] : [locale];
  return search.default(context, {...options, language});
};
module.exports.validateOptions = search.validateOptions;
