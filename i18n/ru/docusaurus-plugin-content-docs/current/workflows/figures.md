---
title: "Сделайте отслеживаемую фигуру с полосами ошибок"
last_update:
  date: '2026-09-16'
---

# Сделайте отслеживаемую фигуру с полосами ошибок {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>Практический пример</strong> Температура и электропроводность</p>

Вам нужна научная фигура, чьи точки и неопределенность можно проследить до таблицы данных. В этом примере показана электропроводность для легированного алюминием оксида цинка (AZO) и йодида меди (CuI), сохраняя стандартные отклонения издателя.

**Доставка:** - английский PNG и SVG, нарисованный CSV и файл с короткими методами. В примере используются опубликованные данные, а не недавно проведенный эксперимент.

## Подготовьте данные и их значение {/* #prepare-the-data-and-its-meaning */}

[Источник бумаги](https://www.nature.com/articles/s44172-024-00291-4) предоставляет рабочую книгу по исходным данным. Пример CSV транскрибирует столбцы A, D и E из **Дополнительный фиг.6a** и **Дополнительный фиг.6b**, строки **3–15**: температура, электропроводность и SD. Он содержит **Температура 13 для материала**, охватывающий **275-390 K**.

Скачать <a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>Готовый CSV</a> и <a href="/docs/examples/research-workflows/conductivity-source.md" download>источник отмечает</a>. CSV сохраняет исходный лист и строку для каждой точки. В статье описывается SD из пяти измерений на температуру. Индивидуальные измерения репликации не поставляются в этих столбцах, поэтому этот рабочий процесс не пересчитывает SD.

1. Создайте проект с рабочей моделью и включенным [Python Runtime](../guides/runtimes.md).
2. Откройте разговор и прикрепите оба файла с помощью **+ → Attach files**.
3. Подтвердите числовые столбцы и единицы перед нанесением: **К.** для температуры и **S m-1** для проводимости и его SD.

Нажмите на прилагаемый CSV, чтобы открыть предварительный просмотр. Он должен показывать **26 строки · 6 столбцы**, включая материал, температуру, проводимость, SD и исходный лист / строку. Откройте исходную записку; Захваченный прогон использовал имя файла `README.md` для заметки, поставляемой здесь как `conductivity-source.md`.

![Прикрепленная таблица проводимости со значениями, блоками и строками источников](/img/open-science/research-workflows/conductivity-input.webp)

## Попросите цифру и данные, стоящие за ней. {/* #ask-for-the-figure-and-the-data-behind-it */}

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

Просмотрите любой запрос кода или пакета, а затем проверьте фактический результат Notebook. Диаграмма, описанная в ответе, еще не является сохраненной цифрой.

Выберите **Notebook** в разговоре. Откройте завершенную ячейку Python и проверьте ее выход: полные строки 26, строки 13 для каждого материала, диапазон 275-390 K и график. Если разрешение ввода не удается, попросите Агента использовать CSV, прикрепленный к этому разговору, затем проверьте успешное выполнение, прежде чем продолжить.

![Фактическое исполнение Notebook сообщает о проверках ввода и отображает сюжет](/img/open-science/research-workflows/conductivity-notebook.webp)

## Проверьте цифры и экспорт {/* #check-the-figure-and-export */}

Откройте сгенерированный PNG. Подтвердить, что оба материала различимы, конечные точки видны, оси состояния единиц и примечание о неопределенности говорит **Об этом сообщает SD**. Линии соединяют только измерения; Падение проводимости AZO после 300 K остается видимым.

![Фактический предварительный просмотр Open-Science на графике проводимости и сообщенные полосы ошибок SD](/img/open-science/research-workflows/conductivity-figure.webp)

Откройте **plotted-conductivity.csv** и сравните его с входом. В этом прогоне все **26 строки** сохранили температуры, значения проводимости, SD и идентификаторы исходного листа / строки. Откройте **conductivity-methods.md**, чтобы проверить источник DOI и определение неопределенности.

Область **Generated** должна содержать четыре файла. Откройте файл методов и используйте значок загрузки в каждом предварительном просмотре, чтобы сохранить проверенную версию. Если один вывод отсутствует, запросите этот конкретный файл и повторно откройте его. Успешный PNG не доказывает, что SVG или таблица данных была сохранена.

![Четыре сохраненных выхода и вновь открытые методы](/img/open-science/research-workflows/conductivity-methods.webp)

Используйте PNG для быстрого обмена и SVG, где векторное искусство полезно. Для сравнения доступны <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>ПНГ</a>, <a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>СВГ</a>, <a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>составленные данные</a> и <a href="/docs/examples/research-workflows/conductivity-methods.md" download>методы</a>.

Для ваших собственных измерений решите, должны ли полосы ошибок отображать SD, стандартную ошибку или доверительный интервал, прежде чем запрашивать график. Дайте агенту необходимые необработанные измерения или уже рассчитанную неопределенность вместе с его определением. Продолжайте упускать неопределённость.
