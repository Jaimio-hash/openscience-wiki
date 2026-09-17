---
title: "Перезапуск анализа с обновленными данными"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Перезапуск анализа с обновленными данными {/* #rerun-an-analysis-with-updated-data */}

<p className="example-label"><strong>Практический пример</strong> Добавить вторую неделю наблюдений за качеством воздуха в Пекине</p>

При появлении новых наблюдений сохраняйте исходный уровень и повторите тот же метод, прежде чем сравнивать результаты. В этом примере используются фактические данные **Аотижунсин** PM2.5: сначала **Январь 1-7, 2016**, затем **Январь 8-14**. Постановочное прибытие - это исторический повтор учения, а не живой мониторинг.

## 1. Прикрепить первую неделю и определить расчет {/* #1-attach-the-first-week-and-define-the-calculation */}

Входные данные представляют собой хронологические подмножества [UCI Beijing Multi-Site Air Quality Dataset (недоступная ссылка)](https://doi.org/10.24432/C5RK5G), распределенные под **CC BY 4.0**. Скачать <ExampleDownload path="/examples/workflow-extensions/air-week1.csv">Неделя 1</ExampleDownload> и <ExampleDownload path="/examples/workflow-extensions/air-week2.csv">Неделя 2</ExampleDownload>; Идентификаторы исходного кода и файлов находятся в <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">Источник отмечает</ExampleDownload>.

Откройте разговор о проекте и прикрепите **air-week1.csv** через **+ → Attach files**. Выберите доступную модель и подтвердите, что Python является **Ready** и включен в **Settings → Runtimes**. Отправить:

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![Запрос на вложение в течение первой недели и базовый расчет](/img/open-science/workflow-extensions/air-input-v1.webp)

Просмотрите чтение файла и вычисление перед утверждением. В **Notebook** проверьте завершение выполнения, а затем откройте **air-daily-v1.csv**. Базовый уровень содержит **Почасовые строки 168 и ежедневные строки 7**, без отсутствующих значений PM2.5.

![Сэкономленные семидневные исходные и валидные часы](/img/open-science/workflow-extensions/air-baseline-table.webp)

## 2. Добавить новые наблюдения без изменения метода {/* #2-add-new-observations-without-changing-the-method */}

Продолжайте тот же разговор. Прикрепите **air-week2.csv**, оставьте первое вложение доступным и запросите:

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![Файл второй недели добавлен в существующий аналитический разговор.](/img/open-science/workflow-extensions/air-update-input.webp)

Убедитесь, что Агент запускает существующий сценарий и сохраняет те же правила недостающей ценности и полноты. Изменение данных и методов затрудняет объяснение того, почему результат изменился.

## 3. Проверить расширенные результаты {/* #3-inspect-the-expanded-results */}

Открыть **air-daily-v2.png** и **air-daily-v2.csv**. Комбинированный вход содержит **336 Почасовые ряды**, с **Нет дубликатов или отсутствующих меток времени**. **Недостающее наблюдение PM2.5** выйдет в январе, 11. В таблице есть **14 дней**, и все они соответствуют правилу 18-valid-hour.

![Расширенный четырнадцатидневный результат отображается в Open-Science](/img/open-science/workflow-extensions/air-update-plot.webp)

Среднее значение января 11 - **11.652 мкг/м3**, вычисленное из **23 действительные часы**. Не делите недостающее наблюдение на нулевое. Полная последовательность меток времени не гарантирует, что все значения измерений присутствуют.

## 4. Сравнение с базовым уровнем {/* #4-compare-against-the-baseline */}

Открыть **air-update-check.csv**. Все **Семь общих ежедневных строк** одинаковы для всех выходных полей. Единственными новыми датами являются январь 8-14. SHA-256 оригинального сценария остается неизменным до и после обновления.

![Сохраненное порядковое сравнение с неизмененными исходными датами](/img/open-science/workflow-extensions/air-update-check.webp)

Откройте **air-update-notes.md** для проверки входных идентификаторов, отсутствующих наблюдений и сохраненных файлов v1. Независимый расчет всех ежедневных средств 14 и подсчета валидных часов соответствовал сохраненному выходу с его отображаемой точностью.

![В примечаниях к обновлению записывается неизмененный код, сохраняются исходные файлы и проверки данных](/img/open-science/workflow-extensions/air-update-notes.webp)

## 5. Проверьте даты отчета, прежде чем сдавать его {/* #5-check-the-report-dates-before-handing-it-off */}

Убедитесь, что заголовок отчета соответствует фактическому входному интервалу. Первоначальный сценарий сохранил название первой недели в своем двухнедельном отчете. В **air-analysis-reviewed.py** была исправлена ошибка представления. Изменился только шаблон заголовка. Сценарий был запущен без изменений на неделе 1 и в обе недели, сохраняя все предыдущие файлы.

![Исправленный отчет теперь называет полный двухнедельный интервал.](/img/open-science/workflow-extensions/air-reviewed-report.webp)

Сохраненные **air-daily-baseline.csv** и **air-daily-updated.csv** соответствуют оригинальным v1/v2 CSV в каждой области. **air-update-verification.md** записывает один и тот же хэш-сценарий до и после обоих запусков и проверяет два заголовка отчета. Это отделяет исправленную метку от изменения в численном методе.

Скачайте <ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">Сценарий Python</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">Базовый CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">Обновленный CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">Сравнение строк</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">Обновленный доклад</ExampleDownload> и <ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">контрольное письмо</ExampleDownload>. Используйте Python с пандами, NumPy и Matplotlib, сохраните оба входа и напишите свежий префикс:

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

Сравнение описывает одну станцию и две исторические недели. Это не классификация AQI, оценка воздействия или доказательство причинно-следственного вмешательства. Для изменения метода анализа при сохранении одних и тех же данных см. [Сравнение методов](compare-methods.md).
