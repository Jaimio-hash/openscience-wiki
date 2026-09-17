---
title: "最初のプロジェクトと結果"
last_update:
  date: '2026-09-10'
---

# 最初のプロジェクトと結果 {/* #your-first-project-and-result */}

<p className="example-label"><strong>実践例</strong> サンプルQCテーブルを読み、要約を保存</p>

小さなテーブルを開き、要約を保存して起動します。 このルートは、実際の一般遺伝子発現データセットから計算された12列のサンプルQCテーブルを使用します。 完全な行列解析を実行したり、パッケージのプロットをインストールする必要はありません。

<span id="prepare-the-input-and-runtime" />

## モデルとサンプルファイルを用意する {/* #prepare-a-model-and-the-example-file */}

1. [初回設定](onboarding.md) を完成させ、[モデル接続](providers.md) を確認します。
2. [データ例](../reference/example-data.md#saved-example-outputs)から**サンプルQC CSV**をダウンロードしてください。
3. ダウンロードしたファイルを変更しないでください。 これは、派生したサマリーテーブルです。 ソースの行列と計算方法は、同じ例のページで文書化されます。

このテーブルの開閉は、アクティブなエージェントとモデルが必要です。 Python または R は、メトリックを再計算するように要求する場合のみ必要です。 [完全なデータ品質ワークフロー](../workflows/data-quality.md)は、そのルートをカバーします。

<span id="create-the-research-project" />

## プロジェクトを作成する {/* #create-a-project */}

ホームから、**New project**を選択します。 エントリーフォーム `Gene-count QC review` として **Name** そして、 `Review the public sample-QC table and record its interpretation.` として **Description**. . . . **Agent Context** では、`Preserve the source file. Explain descriptive counts without inferring differential expression.` を入力し、**Create project** を選択します。

セッションリストの上のプロジェクト名を確認します。 これらは、後であなた自身の調査を見つけるのに役立つ名前を使用します。 フィールドを編集したり、ソースフォルダを設定したりするには、[プロジェクト](projects.md)を参照してください。

<span id="attach-and-submit-a-bounded-request" />

## テーブルを取り付けて検査する {/* #attach-and-inspect-the-table */}

1. 新しい会話を開始するには、**+ → Attach files** を選択し、ダウンロードした CSV を選択します。
2. アタッチメントチップを待ってから、プレビューを開きます。
3. 12 個のサンプル行を確認します。 全サンプル識別子と全数の列、ゼロカウント遺伝子、検出遺伝子、および中央正数を調べます。
4. プレビューを閉じて、コンポーザーに戻ります。 リクエストに添付ファイルを保存してください。

![適用で開くサンプルQCのテーブル](/img/open-science/guides-walkthrough/42-rnaseq-table.webp)

プレビューが空であるか、列が切り離されていない場合は、HTMLのダウンロードページではなくCSVを添付してください。 区切り文字とプレビューコントロールの[テーブル](../tools/tables.md)を参照してください。

<span id="open-and-accept-the-outputs" />

## 保存された要約を求める {/* #ask-for-a-saved-summary */}

選択したモデルをチェックし、送信してください。

```text
Read the attached sample-QC CSV. Save a short Markdown report named
sample-qc-overview.md with three sections: Table contents, Metric meanings,
and Next checks. Identify the sample-identifier column and explain each
QC metric using the attached values. Preserve the original file. Do not
recalculate the gene matrix, install packages, or infer differential
expression. State that this is a derived descriptive summary. If the file
cannot be read, report the error instead of guessing its contents.
After saving, provide the report link.
```

許可が要求される場合、添付された入力および要求された出力に気づくことを点検して下さい。 意図した操作を承認するか、または関連のない要求を否定する。 待機権限は、応答が必要な一時停止です。 失敗したツールコールはエラー処理を必要とします。 [コンポーザー](composer.md)は、これらの状態を説明します。

<span id="continue-or-recover" />

## 結果を点検し、保つ {/* #check-and-keep-the-result */}

1. **sample-qc-overview.md** の応答またはプロジェクトの **Files** パネルを選択します。
2. 3つの要求されたセクションと、列の説明がCSVに一致することを確認します。 特に、検出された遺伝子は、ゼロよりも増加することを意味します。 正反対のメディアンはゼロカウントを除外します。
3. レポートが概要表を記述し、新しい生物学的発見を主張しないことを確認します。
4. 外部のコピーが必要な場合は、レポートをダウンロードしてください。 会話の名前を変更し、戻りアクセスをピン留めします。

保存されたレポートが開き、添付されたテーブルに同意したときにタスクが完了します。 回答にテキストが含まれているが、ファイルがない場合は、エージェントに名前付きMarkdownファイルとしてそのテキストを保存し、そのファイルを開くようにしてください。 読み込みまたは保存エラーの場合、エラーメッセージを保持し、[トラブルシューティング](troubleshooting.md) に従う。

## オリジナルのデータを続行する {/* #continue-with-the-original-data */}

表を再現し、プロットを作成するには、[生データを再現可能な分析に変える](../workflows/data-quality.md)に従ってください。 そのワークフローは、元の行列、Pythonの依存関係、正確な出力スキーマ、数値チェックを追加します。 [Notebook](notebook.md) を使用して、コードとファイルの証拠を検査します。
