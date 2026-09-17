---
title: "Продлить анализ с помощью установленного Specialist"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Продлить анализ с помощью установленного Specialist {/* #extend-an-analysis-with-an-installed-specialist */}

<p className="example-label"><strong>Практический пример</strong> Расширение участка концентрации теофиллина с наблюдаемыми показателями воздействия</p>

Используйте **Фармакометрика PK/PD Design Specialist** для проверки данных о времени концентрации, рисования профилей, а затем вычисления показателей воздействия. Результатами являются двенадцатисубъектная таблица, график концентрации, исполняемый сценарий R и отчет о методах. Этот пример описывает данные общественных исследований; Он не рекомендует лечение или дозирование.

Вводимые данные являются публичными наблюдениями R [Набор данных Theoph](https://www.stat.ethz.ch/R-manual/R-devel/library/datasets/html/Theoph.html): 132 от двенадцати субъектов. Время в часах, концентрация в мг/л, вес в кг и доза в мг/кг. В расчетах используется база R, без дополнительных пакетов или учетных данных базы данных.

## 1. Установить и выбрать Specialist {/* #1-install-and-select-the-specialist */}

1. Открыть **Settings → Specialists → Browse Marketplace**. Найдите **Фармакометрика PK/PD Design Specialist**, проверьте его возможности и установите его. В этом примере используется пакет **1.0.0** в Open-Science **0.30.1**.
2. В **Settings → Runtimes** подтвердите, что R является **Ready** и включен. Записанный забег использовал R **4.4.3**.
3. Откройте новый разговор в своем исследовательском проекте. Выберите доступную модель, затем **Agent controls → Specialist → pharmacometrics-pkpd-designer**. Записанный забег использовал **Подписка Codex / gpt-5.6-sol**.
4. В начале **Каждое аналитическое сообщение**, введите `/pkpd`, затем выберите **pkpd-моделирование** из предложенных вариантов. Подтвердите, что он становится чипом Skill, прежде чем вставлять подсказку.

Выбрав роль самостоятельно, вернулся `Unknown skill` в этой версии. Явно выбрав Skill, включили подлинный погрузчик. Этот шаг необходим для записанной конфигурации; Этот пример не устанавливает автоматическую загрузку всех Specialist-связанных Skills.

![Установка фармакометрии Specialist и ее возможности](/img/open-science/theoph-specialist/installed.jpg)

![Выбор подлинного pkpd-моделирования Skill для текущего сообщения](/img/open-science/theoph-specialist/skill-selection.jpg)

## 2. Проверьте данные и нарисуйте кривые концентрации {/* #2-check-the-data-and-draw-the-concentration-curves */}

Выбрав Skill, отправьте:

```text
Use the public R dataset datasets::Theoph in the enabled R Notebook.
Use base R only. Check rows, subjects, observations per subject,
missing values, duplicate subject-time records and the documented units.
Keep all observed time-zero concentrations unchanged.
Save theoph-input.csv, theoph-concentration-time.png and theoph-data-check.md.
Plot all 12 subjects with labelled axes and a legend.
Execute the code, reopen the saved files and report the actual checks.
Stop after this descriptive baseline. Do not calculate NCA metrics yet.
Do not install packages or delegate. Keep everything in English.
```

Проверяйте код при появлении **Run R code?**, затем одобрите вычисление. Откройте **Notebook**, чтобы увидеть результат выполнения. Записанный ввод имеет **132 строки, 12 объекты и 11 наблюдения по объекту**, без отсутствующих значений или дублирующих записей в тематическом времени.

Откройте сгенерированный CSV и сюжет. Субъекты 1, 7 и 10 имеют ненулевую концентрацию в момент времени ноль; Они сохраняются. Предметный фактор набора данных упорядочен максимальной концентрацией, поэтому его отображаемый порядок не обязательно должен быть числовым.

Предпросмотр CSV показывает первые 100 строк; сохранённый входной файл содержит все 132 наблюдения.

![Сохраненная таблица ввода в Open-Science](/img/open-science/theoph-specialist/input.jpg)

![Выполненная базовая линия и двенадцать кривых концентрационного времени](/img/open-science/theoph-specialist/baseline.jpg)

Справочные файлы: <ExampleDownload path="/examples/theoph/theoph-input.csv">Входной вход CSV</ExampleDownload>, <ExampleDownload path="/examples/theoph/theoph-concentration-time.png">концентрационный участок</ExampleDownload>, <ExampleDownload path="/examples/theoph/theoph-data-check.md">проверка данных</ExampleDownload>.

## 3. Добавить метрики экспозиции {/* #3-add-the-exposure-metrics */}

Скачайте <ExampleDownload path="/examples/theoph/nca-conventions.md">исправленную методическую справку по NCA</ExampleDownload> и прикрепите её через **+ → Attach files**. В версии Wiki исправлены пояснения об интегрировании и выборе интервала терминальной фазы в документе из пакета. В примере вычисляются наблюдаемые Cmax/Tmax и AUC линейным методом трапеций на всех интервалах; наклон терминальной фазы не оценивается. Прикрепите файл к разговору: в использованной конфигурации Notebook не мог прочитать справку из каталога установки Skill.

Выберите `/pkpd-modeling` снова в том же разговоре, а затем отправьте:

```text
Read the attached reviewed nca-conventions.md methods reference.
Extend the baseline using the same theoph-input.csv and base R Notebook.
For each subject calculate observed Cmax (mg/L), earliest observed Tmax (h),
linear-trapezoidal AUC from time zero to the last observation (mg*h/L),
and the actual last-observation time (h).
Retain all observed time-zero values. Preserve the input hash.
Save theoph-nca-summary.csv, theoph-nca.R and theoph-nca-report.md.
The standalone script must read the CSV. Execute it, reread all 12 rows,
and compare its results with a separate Notebook calculation.
Explain the method, units, differing observation windows and limitations.
Register the three saved outputs as project files.
Do not estimate AUC to infinity, half-life, clearance or dosing advice.
Do not install packages, change permissions or delegate. Use English.
```

Утвердить считывание файла и вычисление R после их проверки. Если файл поддержки отсутствует, прикрепите фактический файл перед продолжением. Неудачная нагрузка Skill или ошибка в Notebook не является завершенным анализом.

## 4. Откройте и проверьте результаты {/* #4-open-and-check-the-results */}

Откройте **theoph-nca-summary.csv** из сгенерированных файлов Для каждого из двенадцати предметов должна быть одна строка. Проверьте единицы и время последнего наблюдения, а также метрические значения.

![Сохраненные метрики экспозиции на уровне субъекта](/img/open-science/theoph-specialist/results.jpg)

| Тема | Cmax (мг/л) | Tmax (h) | AUC0-last (мг·ч/л) | Последнее наблюдение (h) |
| --- | --- | --- | --- | --- |
| 1 | 10.5 | 1.12 | 148.92305 | 24.37 |
| 2 | 8.33 | 1.92 | 91.52680 | 24.30 |

Открыть **theoph-nca-report.md** и **theoph-nca.R** вместе. Отчет должен соответствовать исполненному сценарию: сортировать наблюдения каждого субъекта по времени, брать наблюдаемый максимум и самое раннее время, затем суммировать `(C1 + C2) × (t2 - t1) / 2` по соседним наблюдениям. Первые два ряда выше обеспечивают быстрое сравнение; Проверьте все двенадцать строк, прежде чем принять повтор.

Это наблюдаемые метрики. Последнее время выборки различаются между субъектами, и линейное трапециевидное правило является явным приближением. Результаты не устанавливают воздействие бесконечности, установленной фармакокинетической модели или неопределенности измерения.

Скачать записанные <ExampleDownload path="/examples/theoph/theoph-nca-summary.csv">Резюме CSV</ExampleDownload>, <ExampleDownload path="/examples/theoph/theoph-nca.R">Скрипт R</ExampleDownload> и <ExampleDownload path="/examples/theoph/theoph-nca-report.md">Методы докладов</ExampleDownload>. Держите ввод и сценарий вместе при повторном запуске за пределами приложения.

<span id="choose-a-finish-you-can-inspect" />
<span id="choose-inputs-for-an-installed-role" />
<span id="turn-an-existing-result-into-a-checked-methods-draft" />
<span id="inspect-qc-variation-with-the-packaged-pca-skill" />
<span id="transform-a-count-matrix-for-exploratory-plots" />
<span id="build-a-bounded-evidence-table-and-reanalysis-plan" />
<span id="handle-a-partially-completed-analysis" />
<span id="metadata-retrieval-blocked-by-the-local-network" />
<span id="keep-metadata-retrieval-separate-from-completed-analysis" />
