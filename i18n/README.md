# Maintaining translations

The locale list follows Open-Science v0.30.0: English, Simplified Chinese, Traditional Chinese, Japanese, Korean, French, Russian, German and Spanish. The app's System preference selects a language; it is not another translation. English remains the default Wiki locale.

English (`docs/`) and Simplified Chinese are the reviewed source editions. Traditional Chinese starts from the Simplified Chinese edition, with terminology corrections. The other six additions are automatic translation drafts with selected editorial corrections. Their articles link to the English original. They must not be described as fully reviewed native-language editions. Language reviewers should prioritize instructions, negation, irreversible actions and scientific conclusions before polishing wording. Existing product-verification records are not changed by translation work.

## Edit and validate

Each locale owns a complete `docusaurus-plugin-content-docs/current/` tree, `code.json`, and theme navigation/footer messages. Preserve document IDs, slugs, code blocks, inline code, download paths, component behavior and explicit heading IDs. Reuse the real English-interface screenshots; `interface-labels.json` records English labels retained to match those screenshots. Translate the surrounding instructions. `translation-overrides.json` retains reviewed terminology and critical explanations for regeneration.

Update affected translations with each source change. Run `npm run check`, `node --test tests/localization-content.test.mjs`, and the full `npm run build`. After building, run the search, editorial, SEO and navbar tests. A single-locale development server cannot preview another language; use the full built preview to test switching languages. Verify the same article opens, local-language search returns relevant results, and the narrow-screen menu works.

For a larger translation pass, `node scripts/localization-content.mjs extract <working-directory>` creates a local prose manifest and refreshes the English outline catalog. Supply a `<locale>.json` mapping its string IDs to translations, then run `node scripts/localization-content.mjs render <working-directory> [locale...]`. The renderer rejects missing translations or changed source files, preserves syntax and existing anchors, and applies reviewed overrides. Review its output; structural checks do not establish translation accuracy. Keep manifests, model files and intermediate translation output outside Git.

## Initial translation provenance

The September 2026 draft used local Argos Translate model packages from the [official package index](https://github.com/argosopentech/argospm-index), with CTranslate2 inference. The models and documents were processed locally; the Wiki does not call a translation service at runtime. English/French 1.9, English/German 1.3, English/Japanese 1.1, English/Korean 1.1, English/Russian 1.9 and English/Spanish 1.0 were used. Traditional Chinese used [OpenCC](https://github.com/BYVoid/OpenCC), followed by terminology corrections. Exact matching interface translations were drawn from the Open-Science v0.30.0 locale resources and the installed Docusaurus theme translations.

Model credits include OPUS-MT by Jörg Tiedemann and Santhosh Thottingal (EAMT 2020), the OPUS parallel corpus collection, Argos Open Tech and package contributors. See the individual packages' README and metadata for their model/data credits; the English/French package identifies its original OPUS model as CC BY 4.0. The initial machine outputs were adapted to preserve Wiki syntax, product names, input identities and reviewed critical wording.
