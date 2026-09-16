---
title: "エラーバーでトレース可能な数字を作る"
last_update:
  date: '2026-09-16'
---

# エラーバーでトレース可能な数字を作る {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>実践例</strong> 温度および電気伝導性</p>

点と不確実性をプロットした科学的な数値は、データテーブルに戻すことができます。 この例では、アルミニウム製の酸化亜鉛(AZO)と銅酸化物(CuI)の導電性をプロットし、出版社の報告された標準偏差を保ちます。

**配達可能**:は英語のPNGとSVG、プロットされたCSV、および短い方法ファイルです。 公開されたデータを、新しく実施した実験ではなく利用します。

## データとその意味の準備 {/* #prepare-the-data-and-its-meaning */}

[ソース ペーパー](https://www.nature.com/articles/s44172-024-00291-4)は、ソースデータワークブックを提供します。 CSV は、**補足 Fig.6a** と **補足 Fig.6b** から A、D、E の列を記述し、**3–15**: 温度、電気伝導性、および SD を報告します。 含まれている **材料ごとの13温度**, カバー **275-390 K**. . . .

<a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>CSVの準備</a>と<a href="/docs/examples/research-workflows/conductivity-source.md" download>ソースノート</a>をダウンロードします。 CSVは、すべての点で元のシートと行を保持します。 ペーパーは温度ごとの5つの測定からのSDを記述します; これらの列では個々の再現測定が供給されていないため、このワークフローはSDを再計算しません。

1. ワーキングモデルと[Pythonランタイム](../guides/runtimes.md)を有効にしたプロジェクトを作成します。
2.  **+ → Attach files**  を使って会話を開き、両方のファイルを添付します。
3. 数値列と単位をプロットする前に確認します。温度と**Sm−1**の**フリガナ**は導電性とそのSDです。

添付したCSVをクリックしてプレビューを開きます。 材料、温度、伝導性、SDおよび源シート/列を含む**26行・6列**を、示します。 ソースノートも開きます。 キャプチャされた実行は、`conductivity-source.md` としてここに供給されたノートの filename `README.md` を使用しました。

![値、単位、およびソース行の結合された伝導性テーブル](/img/open-science/research-workflows/conductivity-input.png)

## 背後にある図とデータを求める {/* #ask-for-the-figure-and-the-data-behind-it */}

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

任意のコードやパッケージのリクエストを見直し、実際のNotebook結果を確認してください。 回答に記載されているチャートは、まだ保存された数字ではありません。

会話で**Notebook**を選択します。 完成したPythonセルを開き、その出力を検査します。 26の合計行、13行の各素材、275-390 Kの範囲とプロットされた図。 入力解像度が失敗した場合は、エージェントがこの会話にCSVを添付して使用し、継続する前に成功した実行を検証します。

![実際の Notebook 実行は、入力チェックを報告し、プロットをレンダリングします。](/img/open-science/research-workflows/conductivity-notebook.png)

## 数字とエクスポートをチェックする {/* #check-the-figure-and-export */}

生成された PNG を開きます。 両材料が区別できることを確認してください。エンドポイントは表示され、軸の状態ユニットと不確実性ノートは**報告されたSD**と言います。 線は測定だけを接続します; 300 Kの後のAZOの伝導性のすくいは目に見える残ります。

![導電性プロットの実際のOpen-ScienceプレビューとSDエラーバーを報告](/img/open-science/research-workflows/conductivity-figure.png)

**plotted-conductivity.csv** を開き、入力と比較します。 この実行では、温度、導電性値、SD、およびソースシート/ルーの識別を保存したすべての**26行**が保持されます。 **conductivity-methods.md** を開き、ソース DOI と不確実性の定義を確認します。

**Generated**エリアには4つのファイルが含まれています。 メソッドファイルを開き、各プレビューでダウンロードアイコンを使用して、チェックしたバージョンを保存します。 出力がない場合、特定のファイルとその再オープン要求。 SVG やデータテーブルが保存されていない、成功した PNG は証明しません。

![4つの保存された出力と再オープンされたメソッドノート](/img/open-science/research-workflows/conductivity-methods.png)

PNG を使用して、ベクトルアートワークが便利です。 <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>ツイート</a>、<a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVGの特長</a>、<a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>データのプロット</a>、<a href="/docs/examples/research-workflows/conductivity-methods.md" download>メソッド</a>の動作は比較可能です。

自分の測定値を描画する場合は、エラーバーを SD、標準誤差、信頼区間のどれにするか先に決めます。必要な生の測定値、または計算済みの不確実性とその定義をエージェントに渡してください。不確実性が欠けている場合は明示します。
