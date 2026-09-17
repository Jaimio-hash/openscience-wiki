---
title: "Перекрестная проверка двух научных источников данных"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Перекрестная проверка двух научных источников данных {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>Практический пример</strong> NASA GISTEMP и HadCRUT опубликовали ежегодные глобальные температурные аномалии</p>

Два источника могут не соглашаться, потому что их определения различаются. Перед интерпретацией несоответствия выравнивайте единицы, временной интервал и эталонный период. В этом примере сравниваются два реальных годовых набора данных о температуре по сравнению с **1980–2024** после перебазирования каждого до **1991–2020**. Он сохраняет выровненную таблицу, двухпанельную фигуру, скрипт Python и отчет о методах.

## 1. Получить исходные файлы и проверить их определения {/* #1-obtain-the-source-files-and-check-their-definitions */}

Скачайте ежегодную наземно-океаническую серию CSV от [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) и ежегодную серию анализа от [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html). Используйте сохраненные имена файлов `NASA-GISTEMP-v4-original.csv` и `HadCRUT5-original.csv`.

| Ввод | Годовая стоимость | Оригинальная исходная аномалия |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` столбец, °C | 1951–1980 |
| HadCRUT5.1.0.0 | Среднегодовой ансамбль, °C; Сохраняйте лимиты доверия | 1961–1990 |

Файл NASA начинается с описательной строки перед заголовком и использует `***` для недоступных значений. Не интерпретируйте этот маркер как ноль. Записанные идентификаторы источников и ссылки на загрузку находятся в <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">Источник примечания</ExampleDownload>; Файлы провайдера могут быть пересмотрены после этого запуска.

Откройте проект и прикрепите оба CSV к **+ → Attach files**. В **Settings → Runtimes** убедитесь, что Python является **Ready** и включен. В этом забеге использовались Python 3.12.14, NumPy 2.5.3, панды 2.3.3, Matplotlib 3.11.1 и Pillow 12.3.0.

![Два источника CSV, прилагаемые к запросу на сравнение](/img/open-science/workflow-extensions/temperature-input.png)

## 2. Попросите выравнивание перед интерпретацией {/* #2-ask-for-alignment-before-interpretation */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

Проверить предлагаемый файл считывает и код Python перед утверждением. Откройте **Notebook**, чтобы проверить, что вычисление завершено. Если есть ошибка, устраните ее и повторите, прежде чем интерпретировать отчет или цифру.

## 3. Проверьте выровненную таблицу {/* #3-check-the-aligned-table */}

Открыть **temperature-aligned.csv**. Записанное сравнение содержит **45 поделился опытом**. Каждый источник имеет все ежегодные оценки **30**, необходимые для его эталонного среднего значения 1991-2020; Недостающее годовое значение не было заполнено нулем.

![Сохраненные годичные ценности и различия](/img/open-science/workflow-extensions/temperature-table.png)

Вычитаемые средства — **0.61266667 °C** для NASA и **0.53799554 °C** для HadCRUT. Вычтите собственное значение каждого набора данных, а не одно смещение из обоих. Проверьте единицу, год и направление вычитания, прежде чем сравнивать численные различия.

## 4. Прочитайте цифру и численное сравнение {/* #4-read-the-figure-and-numerical-comparison */}

Открыть **temperature-comparison.png**. Первая панель сохраняет различные исходные исходные линии; Второй сравнивает две серии после обычного периода восстановления.

![Первоначальные и общие базисные температурные кривые в Open-Science](/img/open-science/workflow-extensions/temperature-plot.png)

| Записанный результат NASA минус HadCRUT | Значение |
| --- | --- |
| Средняя разница | 0.00514589 °C |
| RMSE | 0.01829900 °C |
| Максимальная абсолютная разница | 0.04632368 °C, в 2024 |

Цифры являются результатами для этих загруженных снимков. Остающиеся различия могут отражать охват, заполнение, наблюдения за источниками и выбор обработки. Наборы данных разделяют наблюдения и являются **Не статистически независимые измерения**. И это не является истинной истиной.

## 5. Сохраните метод и повторите его {/* #5-save-the-method-and-rerun-it */}

Откройте **temperature-crosscheck.md** и сравните его определения источника и метрики с CSV и кодом. Таблица сохраняет первоначальные пределы достоверности HadCRUT и их механически смещенные значения, но сравнение **не** распространяет неопределенность в предполагаемом базовом уровне или зависимости между источниками.

![Сохраненный отчет документирует фактические показатели и ограничения.](/img/open-science/workflow-extensions/temperature-report.png)

Скачать <ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">Выровненный CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">фигура</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Скрипт Python</ExampleDownload> и <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">доклад</ExampleDownload>. С двумя доступными входными файлами, перезапуск в среде Python, содержащей перечисленные библиотеки:

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

Записанный сценарий также был запущен в отдельном локальном процессе Python; Выровненный CSV точно соответствовал сохраненному CSV приложения. Проверка соглашения оценивает эти вычисления, а не каждый методологический выбор в любом климатическом продукте.
