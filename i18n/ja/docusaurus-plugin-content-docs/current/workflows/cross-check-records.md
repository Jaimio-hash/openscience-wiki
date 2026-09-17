---
title: "2つの科学的データソースをクロスチェック"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 2つの科学的データソースをクロスチェック {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>実践例</strong> NASA GISTEMP および HadCRUT の年次全体的な温度の異常</p>

定義が異なるため、2つのソースは不一致できます。 矛盾を解釈する前に、単位、時間間隔および参照期間を整列します。 この例では、**1980–2024** の 2 つの実質の年次温度データセットを比較し、それぞれを **1991–2020** にリバッスした後。 整列したテーブル、2枚のパネル図、Pythonスクリプト、メソッドレポートを保存します。

## 1. ソースファイルを取得し、その定義を確認してください {/* #1-obtain-the-source-files-and-check-their-definitions */}

[NASA GISTEMP v4の特長](https://data.giss.nasa.gov/gistemp/)と[ハドカット5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html)の年間分析アンサンブル・メアンシリーズから毎年恒例の土地-オクアンCSVをダウンロードしてください。 `NASA-GISTEMP-v4-original.csv` と `HadCRUT5-original.csv` に保存されたファイル名を使用します。

| 入力 | 年間値 | 原始的な異常ベースライン |
| --- | --- | --- |
| NASA GISTEMP v4の特長 | `J-D` コラム、°C | 1951–1980 |
| ハドカット5.1.0.0 | 年間アンサンブル平均、°C; 自信の限界を保持する | 1961–1990 |

NASA ファイルは、ヘッダの前に記述された行で始まり、利用できなくなった値に `***` を使用します。 マーカーをゼロに解釈しないでください。 記録されたソースのアイデンティティとダウンロードリンクは<ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">ソースノートの例</ExampleDownload>にあります。 実行後、提供元ファイルが変更できます。

プロジェクトを開き、CSVを**+ → Attach files**で添付します。 **Settings → Runtimes**では、Pythonが**Ready**で有効になっていることを保証します。 この実行は、Python 3.12.14、NumPy 2.5.3、パンダ2.3.3、Matplotlib 3.11.1、ピロー12.3.0を使用しました。

![比較リクエストに付随する2つのソースCSV](/img/open-science/workflow-extensions/temperature-input.png)

## 2. 通訳の前にアライメントを依頼 {/* #2-ask-for-alignment-before-interpretation */}

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

提案したファイル読み込みと承認前に Python コードを調べます。 **Notebook** を開き、計算が完了したことを確認します。 エラーがある場合、レポートや図を解釈する前に、それを解決して再実行します。

## 3. 整列テーブルをチェックする {/* #3-check-the-aligned-table */}

**temperature-aligned.csv** を開きます。 録画比較には**45共有年**が含まれています。 各ソースには、1991-2020 参照手段に必要なすべての **30** 年間ポイントの推定値があります。 年間値がゼロに満たさなかった。

![保存された年揃えの値と違い](/img/open-science/workflow-extensions/temperature-table.png)

サブトラクトされた手段は、NASA と HadCRUT の **0.53799554 °Cの** の **0.61266667 °Cの** です。 各データセットの独自の意味を割くと、両方から単一のオフセットではありません。 数値差を比較する前に単位、年および減算方向を確認してください。

## 4. 数値と数値の比較を読む {/* #4-read-the-figure-and-numerical-comparison */}

**temperature-comparison.png** を開きます。 最初のパネルは、異なる元のベースラインを保持します。 2 番目は、一般的な期間の残留後 2 つのシリーズを比較します。

![Open-Scienceの元のベースラインそして共通ベースライン温度のカーブ](/img/open-science/workflow-extensions/temperature-plot.png)

| 記録された結果、NASAのマイナスHadCRUT | 値 |
| --- | --- |
| 意味の違い | 0.00514589 °Cの |
| RMSEの特長 | 0.01829900 °Cの |
| 最高の絶対的な相違 | 0.04632368 °C、2024の |

この数字は、これらのダウンロードしたスナップショットの結果です。 相違の残りは適用範囲、infilling、源の観察および処理の選択を反映しることができます。 データセットは、観察値を共有し、**統計的に独立した測定ではなく**です。 ネイザーは地上の真理を規定しています。

## 5. メソッドを保存して再実行する {/* #5-save-the-method-and-rerun-it */}

**temperature-crosscheck.md** を開き、ソースコードと CSV のソース定義とメトリックを比較します。 表は、元の HadCRUT の自信の限界と機械的にシフトされた値を保持しますが、比較は、推定ベースラインまたは間接的な依存の **コメントはありません。** の支柱の不確実性です。

![保存されたレポートは、実際のメトリックと制限を文書化します](/img/open-science/workflow-extensions/temperature-report.png)

<ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">CSV の整列</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">プロフィール</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Pythonスクリプト</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">レポート</ExampleDownload>をダウンロードしてください。 利用可能な2つの入力ファイルで、リストされたライブラリを含むPython環境で再実行します。

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

記録されたスクリプトは、別のローカルPythonプロセスでも実行されました。 CSV は、アプリの保存した CSV を正確に一致させました。 合意は、気候製品におけるすべての方法論的選択ではなく、この計算を評価します。
