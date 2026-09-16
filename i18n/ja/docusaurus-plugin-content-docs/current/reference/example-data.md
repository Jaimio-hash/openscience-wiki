---
title: "データと期待される結果の例"
last_update:
  date: '2026-09-10'
---

# データと期待される結果の例 {/* #example-data-and-expected-results */}

これらのパブリックファイルを使用して、ドキュメントの例を再現します。 ソースの説明、元のファイルチェックサムとサンプルQCベースラインがここに住んでいます。 データセット履歴を繰り返す代わりに、個々の機能がリンクを誘導します。

## ソースと入力契約 {/* #source-and-input-contract */}

[GEOシリーズレコード](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450)は、元の`GSE60450_Lactation-GenewiseCounts.txt.gz`を供給します。 [RNA-seq分析ワークフローを公開](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/)は、このデータセットのメソッド論的コンテキストを提供します。 私達の例は記述的な事前分析QCで止めます; 紙の完全な解析を再現しない。

| プロパティ | 検証された値 |
| --- | --- |
| 解凍したファイル | GSE60450_Lactation-GenewiseCounts.txt の使い方 |
| サイズ | 1,340,161バイト |
| Gene 行 | 27,179 |
| コラム | EntrezGeneID、長さ、12サンプルカウントカラム |
| SHA-256の特長 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| 遺伝子IDの重複/欠落した数エントリ/無効数 | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>変更されていない非圧縮入力をダウンロード</a>または<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>元の圧縮されたファイル</a>。 アプリの Omics アーカイブメタデータ ツールは、補足 URL を返すことができます。 カウントテーブルを自動的にダウンロードしません。 このソースは別々にダウンロードされ、添付ファイルを介してアップロードされました。



## サンプルQCのベースライン {/* #sample-qc-baseline */}

| サンプル | 総生計数 | ゼロカウント遺伝子 | 検出された遺伝子 | 検出された間媒体 |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DGの特長 | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DHの特長 | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DIの特長 | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJの特長 | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DKの特長 | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DLの特長 | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LAの特長 | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LBの特長 | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LCの特長 | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LDの特長 | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LEの特長 | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LFの特長 | 24,657,293 | 10434 | 16745 | 135 |

コンパクトなラベルは、CSV で完全なサンプル識別子にマップします。 この入力では、4つの数値メトリックが独立してチェックされていました。 これらは記述的な未加工計算の点検です; ダウンストリーム統計設計を検証しません。

## 保存された例出力 {/* #saved-example-outputs */}

| ダウンロード | コンテンツ |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>QC CSVの特長</a> | 十行列、正確な列マッピングと4つのメトリック |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>図</a> | 未加工サンプル計算の合計 |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>方法報告</a> | 方法、ソースの整合性および独立したメトリックチェック |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIPの特長</a> | 未変更のネイティブ `.ipynb` 輸出入 |
## 別の例を選択 {/* #choose-another-example */}

| タスク | 入力または参照 | 指示 |
| --- | --- | --- |
| 最初の保存結果 | 上記12列QC CSV | [ファーストプロジェクト](../guides/first-project.md) |
| フルマトリクスを再計算する | 上記の元の遺伝子計算行列 | [データ品質ワークフロー](../workflows/data-quality.md) |
| 文献コレクションを整理する | <a href="/docs/examples/prisma/core-reading-list.md" download>チェックされたPRISMA読書リスト</a> 出版社のリンク | [コア読書リスト](../workflows/core-reading-list.md) |
| 小さな逆折計算を試す | <a href="/docs/examples/capabilities/1UBQ.pdb" download>ヒトウビキチン 1UBQ</a> | [科学ツール](../tools/scientific.md) |

メソッドレポートとNotebookは、記録された計算のパスと証拠のスコープを保持します。 外部の実行前に、独自の入力場所と依存関係を用意します。
