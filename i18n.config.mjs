export const defaultLocale = 'en';
export const docsBaseUrl = '/docs/';

export const localeConfigs = {
  en: {
    label: 'English',
    htmlLang: 'en',
    direction: 'ltr',
  },
  'zh-Hans': {
    label: '简体中文',
    htmlLang: 'zh-Hans',
    direction: 'ltr',
  },
  'zh-Hant': {label: '繁體中文', htmlLang: 'zh-Hant', direction: 'ltr'},
  ja: {label: '日本語', htmlLang: 'ja', direction: 'ltr'},
  ko: {label: '한국어', htmlLang: 'ko', direction: 'ltr'},
  fr: {label: 'Français', htmlLang: 'fr', direction: 'ltr'},
  ru: {label: 'Русский', htmlLang: 'ru', direction: 'ltr'},
  de: {label: 'Deutsch', htmlLang: 'de', direction: 'ltr'},
  es: {label: 'Español', htmlLang: 'es', direction: 'ltr'},
};

export const locales = Object.keys(localeConfigs);
for (const locale of locales) {
  localeConfigs[locale].baseUrl = `${docsBaseUrl}${locale === defaultLocale ? '' : `${locale}/`}`;
}

// Both Chinese scripts share the search tokenizer. English identifiers remain searchable.
export const searchLanguages = ['en', 'zh', 'ja', 'ko', 'fr', 'ru', 'de', 'es'];
