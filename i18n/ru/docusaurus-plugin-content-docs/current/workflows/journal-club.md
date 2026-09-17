---
title: "Подготовьте ориентированный журнал-клуб для чтения"
last_update:
  date: '2026-09-16'
---

# Подготовьте ориентированный журнал-клуб для чтения {/* #prepare-a-focused-journal-club-reading-pack */}

Начните с исследовательского вопроса, найдите статьи в Open-Science, сохраните их полные тексты и превратите те же статьи в дискуссионный пакет. Загруженный PDF не требуется для поискового шага. Полнотекстовое чтение начинается только после сохранения и открытия PDF-файлов.

<p className="example-label"><strong>Практический пример</strong> Найти и прочитать пять статей по одноатомному катализу</p>

**Вопрос:**: Какие данные связывают изолированные металлические участки с полезными каталитическими показателями? В этом примере рассматриваются первичные исследования 2017-2022, охватывающие синтез, термическую стабильность, механизм и масштабирование. Он выпускает коллекцию из пяти бумажных библиотек, полнотекстовый набор для чтения, пятирядную бумажную карту и программу 60-минут. Заключительные пять документов ниже - те же самые, которые используются в сохраненных выводах.

## Поиск по теме {/* #search-from-a-topic */}

1. Откройте разговор в своем проекте и выберите рабочую модель с помощью инструментов поиска. Оставьте область прикрепления пустой.
2. Опишите научный вопрос, период и тип бумаги. Запросите журнал поиска и кандидатов для ручного обзора.
3. Отправьте запрос и расширьте поисковую активность. Проверьте исходные ссылки и то, содержит ли каждый результат метаданные, реферат или полный текст.

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![Реальный журнал поиска с идентификаторами кандидатов и статусом поиска](/img/open-science/research-workflows/literature-topic-results.webp)

<a href="/docs/examples/research-workflows/single-atom-search-log.md" download>Начальный поисковый журнал</a> записывает восемь кандидатов, найденных с помощью веб-поиска и метаданных Crossref. Это были еще не скачанные бумаги. Если источник требует учетных данных, настройте [Коннекторы](../guides/connectors.md) или попросите агента использовать доступный источник и назовите пробел.

## Отзывы и спасение кандидатов {/* #review-and-save-the-candidates */}

Открыть **Library → Inbox**. Выберите заголовок, чтобы сравнить его DOI, авторов, год и страницу издателя. Принимайте соответствующие записи, оставляйте неопределившиеся в ожидании и отклоняйте нерелевантные. **Search references** фильтрует сохраненную библиотеку. Начните онлайн-обнаружение в разговоре.

Первый отбор включал документы, полные тексты которых не могли быть добавлены. Для того, чтобы эта встреча использовала читаемые источники по всему миру, пример сохранил Lang и искал четыре замены в одной и той же теме:

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

Просмотрите <a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>Заменить журнал выбора</a>, затем выберите четыре предполагаемых ряда Inbox и выберите **Accept**. Исходная ссылка с открытым доступом все еще должна быть протестирована путем сохранения и открытия PDF.

![Четыре кандидата на замену, отобранные для ручного приема](/img/open-science/research-workflows/journal-open-access-inbox.webp)

Создайте **Single-Atom Catalysis - Full-Text Journal Club** с помощью **New collection**. В **All references** выберите эти четыре принятые записи плюс Lang, затем выберите **Add to collection**. Используйте **Add to project**, чтобы связать набор с проектом, содержащим ваш разговор.

| бумага | Фокус | Страницы PDF в этом забеге |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | Термическая стабильность и сжигание метана | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Сплавы Pt/Cu и дегидрирование пропана | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | Обратимые изменения атом-кластера и пути реакции | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | Непрерывная подготовка и расширение масштабов | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | Координация ру и редуктивное аминирование | 11 |

## Получить полный текст для выбранных документов {/* #obtain-full-text-for-the-selected-papers */}

1. Откройте ссылку, затем выберите **Find full-text PDF**.
2. Проверьте источник и выберите **Add attachment**. Подождите, пока файл не появится под **Вложения**.
3. Открой эту привязанность. Сравните его заголовок и DOI с записью и проверьте количество страниц.
4. Повторите для всех пяти ссылок, а затем снова откройте коллекцию. Каждый ряд теперь должен показывать иконку вложения.

![Полнотекстовые источники, предлагаемые для газеты Lang](/img/open-science/research-workflows/literature-topic-fulltext.webp)

В этом выпуске PDF от Lang был добавлен через Europe PMC. Остальные четыре были спасены из источников, обнаруженных через Unpaywall. Альтернативный источник может быть успешным, когда другой источник не может быть добавлен. При необходимости используйте **Open source** для получения копии, к которой вы имеете право получить доступ, и прикрепите ее к **Add PDF**. Если нет доступной для чтения копии, замените выбор или пометьте его отсутствие, прежде чем запрашивать полнотекстовые результаты.

![Загруженная бумага открывается в английском предварительном просмотре PDF](/img/open-science/research-workflows/journal-qi-pdf.webp)

Финальная коллекция содержит пять сохраненных PDF-файлов, а в порядке таблицы подсчитывает количество страниц **10, 9, 11, 10 и 11**. Иконка вложения подтверждает сохраненный файл; Открытие его подтверждает, что он читаемый и соответствует рекорду.

![Финальная коллекция из пяти бумаг с приложением на каждой записи](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## Прочитайте полный текст и сгенерируйте пакет {/* #read-the-full-texts-and-generate-the-pack */}

Вернитесь к обсуждению в связанном проекте. Назовите заполненную коллекцию в явном виде. Попросите доказательства из сохраненных PDF-файлов и разделите условия различных реакций:

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

Во время ответа расширьте активность чтения **Библиотека источников**, чтобы проверить, какая бумага и проход были извлечены. В этом забеге прочитаны все пять сохраненных PDF-файлов. Активность чтения отличается от более раннего поиска метаданных. Если чтение не удается, устраните его или держите доказательства этой статьи явно недоступными.

После завершения работы откройте **single-atom-fulltext-reading-pack.md** от **Generated**. Проверяйте таблицу проверки из пяти бумаг, каждый вывод и его локатор, ограничения, вопросы и повестку дня. Повестка дня должна составлять 60 минут.

![Сохраненный полнотекстовый пакет с теми же пятью документами и проверками источников.](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## Проверьте карту бумаги по сравнению с оригинальными PDF-файлами {/* #check-the-paper-map-against-the-original-pdfs */}

Откройте **single-atom-fulltext-paper-map.csv** и используйте его кнопку расширения для полноэкранного просмотра. Данная версия содержит **5 строки · 12 столбцы**. Сравните набор DOI с коллекцией. Пакет из другого набора не является результатом этого рабочего процесса. Прокрутите горизонтально или загрузите CSV, чтобы прочитать длинные ячейки в полном объеме.

![Настоящая пятирядная, двенадцатиколонная бумажная карта](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

Вернитесь в **Library**, откройте цитируемый PDF, нажмите на его счетчик страниц, введите запрашиваемую страницу и нажмите **Входить**. Проверьте фигуру или таблицу вместе с подписью и окружающим текстом. Например, He et al.'s Figure 5 находится на **Страница PDF 7**; Описание производственной линии находится на странице 3. Они поддерживают различные части резюме.

![Рисунок 5, опубликованный на странице PDF 7 для сравнения](/img/open-science/research-workflows/journal-he-figure5.webp)

Запросите сохраненную версию, когда локатор или условие неверны, а затем снова откройте пересмотренный файл. Проверенная упаковка также сохраняет конфликт в Sun et al.: страница 2 и надпись на рисунке 5 дают различные композиции корма. Он записывает оба описания вместо того, чтобы выбирать одно безмолвно. Это полезный вопрос встречи, а не решенная экспериментальная деталь.

Скачать проверенные <a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>Читальный пакет</a> и <a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>бумажная карта</a>. Эти же пять файлов PDF лежат в основе обоих файлов. Для более близкого однократного прохождения, продолжайте с [проверка претензий и фигур](pdf-evidence.md).
