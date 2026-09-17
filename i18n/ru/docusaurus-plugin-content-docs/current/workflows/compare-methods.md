---
title: "Сравните два метода анализа на одних и тех же данных"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Сравните два метода анализа на одних и тех же данных {/* #compare-two-analysis-methods-on-the-same-data */}

<p className="example-label"><strong>Практический пример</strong> PCA и исследовательский факторный анализ психики::bfi элементы</p>

Изменение методов является информативным только тогда, когда входы и предварительная обработка сопоставимы. В этом примере применяется стандартизированный анализ основных компонентов (PCA) и пятифакторный анализ фактора максимальной вероятности (FA) к **2,436 Полный ответ**. Он сравнивает то, что оценивают методы, а не рассматривает наибольшее число как метод выигрыша.

## 1. Подготовьте общедоступный вход и время выполнения R {/* #1-prepare-the-public-input-and-r-runtime */}

Загрузите общедоступный [Оригинальное название: Bfi CSV](https://vincentarelbundock.github.io/Rdatasets/csv/psych/bfi.csv), сохраните его как **bfi-original.csv** и прочитайте [документация набора данных](https://personality-project.org/r/psych/help/bfi.html). В нем представлены респонденты 2,800, элементы личности 25 и демографические колонки. В анализе используются только A1-A5, C1-C5, E1-E5, N1-N5 и O1-O5; Это не индивидуальная психологическая оценка.

В **Settings → Runtimes** подтвердите, что R является **Ready** и включен. Записанный запуск использовал **R 4.4.3**, с базовыми/рекомендованными функциями R и без дополнительной установки пакета. Прикрепите CSV к разговору о проекте через **+ → Attach files**.

![Публичный набор данных bfi, прикрепленный к методу сравнения одних и тех же данных](/img/open-science/workflow-extensions/bfi-input.png)

## 2. Исправьте предварительную обработку перед установкой любого способа {/* #2-fix-the-preprocessing-before-fitting-either-method */}

```text
Use the attached psych::bfi CSV in the enabled R Notebook.
Analyze only its 25 A/C/E/N/O items, scored 1–6. Validate the range.
Reverse A1, C4, C5, E1, E2, O2 and O5 as 7-x. Use the same complete
cases across all 25 items for both methods; report exclusions.
Run prcomp with centering/scaling and retain five components.
Varimax-rotate eigenvector times sqrt(eigenvalue) loading columns;
label them RotPC1–RotPC5. Report variance from unrotated PC1–PC5.
Run factanal with five factors, varimax and nstart=10; set seed 20260916.
Save bfi-method-comparison.R, bfi-preprocessing.csv, bfi-loadings.csv,
bfi-method-metrics.csv, bfi-method-comparison.png and bfi-method-report.md.
Make the script accept the input CSV as its first argument, record
runtime input identity and R version, execute it and reopen all outputs.
Explain fit, convergence, arbitrary signs/order, ordinal responses
and complete-case limitations. Do not claim that convergence is good fit.
Use English and do not install packages or delegate.
```

Просмотрите расчет R перед его утверждением. Откройте **Notebook** и подтвердите завершение выполнения. Сохраненная матрица предварительной обработки имеет **2,436 строки × 25 элементы**, за исключением **364 неполные респонденты**. Эта же матрица питает оба метода; Демографические данные и идентификаторы строк исключены.

Если один метод использует другой набор респондентов, остановитесь и согласуйте входные данные, прежде чем сравнивать их результат.

## 3. Проверить числовые результаты {/* #3-inspect-the-numerical-results */}

Откройте **bfi-method-metrics.csv** от **Generated** или **Files**. Записанный файл содержит **Метрические строки 77**, включая количество выборок, пропущенность, дисперсию PCA, уникальность FA, соответствие, конвергенцию, семенную и входную идентичность.

![Сохранение числовых метрик из общей предварительной обработки и обоих установленных методов](/img/open-science/workflow-extensions/bfi-metrics.png)

| Неповторяющийся компонент PCA | Общая стандартизированная дисперсия объясняется |
| --- | --- |
| PC1 | 20.54% |
| PC2 | 11.01% |
| PC3 | 8.57% |
| PC4 | 7.41% |
| PC5 | 6.19% |
| Первая пятерка объединенных | 53.72% |

Оптимизатор FA сходился, но статистика вероятностей была **1490.587 на 185 степени свободы**, с **p ≈ 1.218 × 10⁻²⁰²**. В соответствии с модельными предположениями, это отклоняет точную пятифакторную подгонку. Успешное численное исполнение не устанавливает адекватной пригодности.

## 4. Сравните паттерны нагрузки на фигуре {/* #4-compare-the-loading-patterns-in-the-figure */}

Открыть **bfi-method-comparison.png**. Его три панели показывают невращенную дисперсию PCA, варимакс-вращенные нагрузки PCA и варимакс FA. Точные значения загрузки находятся в **bfi-loadings.csv**, с **250 строки**: 25 элементы × 5 размеры × 2 методы.

![Невращенная дисперсия PCA и две вращающиеся матрицы загрузки](/img/open-science/workflow-extensions/bfi-comparison-plot.png)

Не сопоставляйте «колонну 1» механически по всем методам. Фактор/компонентный порядок и знаки могут изменяться без изменения решения. тепловые карты используют синий для отрицательных и красный для положительных нагрузок; Сравните паттерны элементов и числовые значения.

Полная наблюдаемая дисперсия разделов PCA; Модели FA разделяют ковариантность с отдельными уникальностями. Суммы квадратной нагрузки FA не взаимозаменяемы с объясненной дисперсией PCA. Повернутые метки **RotPC1-RotPC5** намеренно отличаются от неповоротных процентных значений дисперсии **PC1-PC5**.

## 5. Прочитайте ограничения и повторите сохраненный сценарий {/* #5-read-the-limitations-and-rerun-the-saved-script */}

Открыть **bfi-method-report.md**. Убедитесь, что он сообщает об одном и том же образце и предварительной обработке, фиксированном семени и разнице между конвергенцией и подгонкой. Эти порядковые ответы 1-6 рассматриваются как приблизительно непрерывные. Удаление полного дела может привести к искажению результатов, когда пропущенность связана с ответами или характеристиками участника.

![В окончательном докладе приводятся данные о предварительной обработке, семенах, дисперсии и ограничениях по пригодности.](/img/open-science/workflow-extensions/bfi-report.png)

Скачать <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.R">Скрипт R</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-loadings.csv">погрузка</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-metrics.csv">метрики</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.png">фигура</ExampleDownload> и <ExampleDownload path="/examples/workflow-extensions/bfi-method-report.md">доклад</ExampleDownload>. Поместите сценарий и загруженный вход в свежую папку, откройте там терминал и запустите:

```bash
Rscript bfi-method-comparison.R bfi-original.csv
```

Сценарий записывает свои выходы в текущую папку. Записанный сценарий был независимо перезапущен с R 4.4.3: предварительная обработка, загрузка и метрические CSV точно соответствовали сохраненным файлам приложения. Все клетки предварительной обработки и собственные значения PCA также проверялись отдельно. Эти проверки устанавливают воспроизводимость этого расчета; Они не выбирают универсально превосходный метод или не проверяют диагностический тест.
