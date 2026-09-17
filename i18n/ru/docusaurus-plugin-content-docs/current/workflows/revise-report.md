---
title: "Пересмотреть отчет после обратной связи"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Пересмотреть отчет после обратной связи {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>Практический пример</strong> Пересмотреть брифинг по катализу одного атома против шести редакционных комментариев</p>

Полезная правка содержит исходные данные, первоначальный проект и ответы на комментарии. Этот пример создает английский инструктаж из настоящей каталитической бумаги, а затем пересматривает его, не переписывая первый черновик. Шесть комментариев - это учебное упражнение, подготовленное для этого перехода, а не переписка из журнала или авторов статьи.

## 1. Приложите документ и создайте первый проект {/* #1-attach-the-paper-and-create-a-first-draft */}

Откройте [Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0), загрузите основной PDF и его дополнительную информацию от издателя и прикрепите оба через **+ → Attach files** в разговоре о проекте. Записанные файлы имеют **9 и 52 PDF страницы**, соответственно. Номера страниц ниже относятся к странице PDF, а не к странице печатного журнала.

Выберите доступную модель, затем отправьте:

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Источник PDF-файлов и первоначальный запрос на брифинг в Open-Science](/img/open-science/workflow-extensions/report-input.webp)

Утвердить соответствующий файл считывает при запросе. Откройте **catalyst-brief-v1.md** от **Generated** или **Files** и прочитайте сохраненный черновик. Ответ в разговоре не заменяет проверку фактического файла.

![Сохраненный первый проект перед редакционной редакцией](/img/open-science/workflow-extensions/report-draft.webp)

## 2. Сделайте обратную связь действенной {/* #2-make-the-feedback-actionable */}

Загрузите <ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">Шесть редакционных комментариев</ExampleDownload> и прикрепите его в том же разговоре. Комментарии просят:

| Комментарий | Запрошенные изменения |
| --- | --- |
| С1 | Резюме из не более чем 120 слов |
| С2 | Двухрядная таблица, разделяющая две рабочие точки |
| С3 | Отсутствие претензий, ограниченных фактически проверенными доказательствами |
| С4 | Три предложенных последующих проверки, явно не проведенные эксперименты |
| С5 | Явный Main PDF / Дополнительные страницы PDF и указатели фигур |
| С6 | Отдельные файлы v2 и ответов, сохраняющие v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

Фактический пересмотр зачитал прилагаемый файл комментариев и подготовил оба запрошенных вида результатов. Если Агент предлагает неподдерживаемые изменения, назовите претензию и исходный проход, чтобы проверить, прежде чем принимать их.

## 3. Прочитайте пересмотренные доказательства, а не только статус ответа {/* #3-read-the-revised-evidence-not-just-the-response-status */}

Открыть **catalyst-brief-v2.md**. В ходе этого запуска был подготовлен **Резюме 117-слова**, двухрядная таблица рабочих точек и три маркированных последующих предложения.

![Пересмотренное резюме и таблица, отделяющие избирательность от долговечности](/img/open-science/workflow-extensions/report-revised.webp)

Ключевое отличие **98.9% CO Фарадная эффективность при −1.2 V против RHE** от отдельного **Тест на удержание тока 20 h при −0.8 V против RHE**. Не объединяйте их в 98.9% для 20 h. Main PDF p. 6, Фиг. 6b-d и p. 7, Фиг. 6е, выявить соответствующие доказательства; П. 8 описывает измерения H-клеток. Дополнительный PDF pp. 47-48, рис. 51-52, касается селективности водорода и проверки продуктов ЯМР.

В этом прогоне Агент мог читать полнотекстовые отрывки и подписи к рисунку, но связанный кэш с элементами фигуры был недоступен для непосредственного осмотра изображения. В ответе фиксируется это ограничение. Качественное снижение тока следует за текстом авторов; Никакая новая ценность не была оцифрована с сюжета. Следуйте [Проверка доказательств PDF](pdf-evidence.md), когда требуется прямая проверка фигуры.

## 4. Проверьте ответ и отпустите все три версии. {/* #4-check-the-response-and-hand-off-all-three-versions */}

Открыть **catalyst-brief-v2-response.md**. Найдите C1-C6, откройте каждый названный пересмотренный раздел и подтвердите, что он действительно содержит обещанное изменение. Одного лишь «решенного» ярлыка недостаточно.

![Сохраненная таблица ответов отображает все шесть комментариев к пересмотренным разделам.](/img/open-science/workflow-extensions/report-response.webp)

Проверяйте, что предложения остаются маркированными как предложения, DOI остается **10.1038/s41467-019-12510-0**, а **catalyst-brief-v1.md** все еще существует без изменений. В ответе должны быть указаны любые доказательства, которые остаются недоступными.

Скачать записанные <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 проект</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 брифинг</ExampleDownload> и <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">Ответ на замечания</ExampleDownload>. Держите их с файлом комментариев и ссылками издателя. Первоначальный проект включен для сравнения и не должен использоваться в качестве заключительного обзорного брифинга.
