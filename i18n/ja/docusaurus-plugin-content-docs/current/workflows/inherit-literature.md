---
title: "研究者の文献コレクションを上回る"
last_update:
  date: '2026-09-16'
---

# 研究者の文献コレクションを上回る {/* #take-over-a-researchers-literature-collection */}

このワークフローは、既存のバイブリグラフィで始まります。 トピックから始める場合は、まず [ジャーナル・クラブのワークフローで、候補論文の検索とレビュー](journal-club.md) を使用します。

<p className="example-label"><strong>実践例</strong> Perovskiteの太陽電池の安定性のハンドオーバー</p>

同僚があなたの伝記を手渡すとき、まずその中のものと、まだ読書が必要なものを確立します。 この例では、20 がパーホフスキート太陽電池の安定性に関する参照を公開し、ライブラリにグループ化し、読書計画で手持ちの在庫を生成します。

**配達可能**: プロジェクト連動コレクション、20-row CSV、ソース識別子と次のアクション、英語読書計画。 付属のサンプルには、添付PDFなしの引用レコードが含まれています。 そのトピックラベルは暫定的です。

## コレクションの準備 {/* #prepare-the-collection */}

<a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20-reference RISファイル</a>をダウンロードします。 そのタイトル、著者、年、ジャーナル、DOIsは、クロスリーフレコードから来ています。 これは、体系的な検索ではなく、教育選択です。 自分の手持ちのために、同僚の引用エクスポートを使用して、元のPDFを一緒に保持します。

1. [プロジェクトとソースフォルダ](../guides/projects.md) を使ってプロジェクトを作成し、**Library** を開きます。
2. **Perovskiteソーラーセル安定性** という名前のコレクションを作成します。
3. **Add → Import references**を選択し、RISファイルを選択し、インポートプレビューを確認します。 確認する前に、目的地のコレクションと重複処理をチェックしてください。
4. インポート結果の特定 この例では、**0** 再使用、スキップ、または失敗したレコードで **20** レコードを作成しました。
5. コレクションを開き、レコードを選択し、**Add to project**を使用してプロジェクトにリンクします。

![完了したインポートレポート 20 が参照を作成しました](/img/open-science/research-workflows/perovskite-import-complete.png)

エクスポートが重複または不完全な識別子を持っている場合は、最終在庫を受け入れる前にレコードを解決します。 参照をインポートすると、テキストが完全に添付されません。 既に持っているPDF用の参照の**Add PDF**制御を使用して、そのレコードでPDFタイトルとDOIを比較します。 [図書館と引用](../guides/library.md) を参照してください。

コレクションを再オープンし、フッターの**20 リファレンス**カウントをチェックします。 合成を求める前に **アタッチメント** カラムを調べます。 この例では、全文から検索するのではなく、次のステップでは、バイブリンガルの在庫を要求します。

![実際の添付ファイルの状態でインポートされた20-referenceコレクション](/img/open-science/research-workflows/perovskite-collection.png)

## 使用可能なハンドオーバーを依頼 {/* #ask-for-a-usable-handover */}

プロジェクトで会話を開き、作業モデルを選択します。 コレクションを明示的に名前付けます:

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

より大きいコレクションについては、合成を要求する前に在庫を要求して下さい。 PDF、あいまいなレコード、未読の紙が手元に表示されていることを忘れないでください。

## 保存したファイルをチェックする {/* #check-the-saved-files */}

応答が完了したら、生成ファイルから **perovskite-handover.csv** を開きます。本例の保存済みテーブルは **20行と6列** です。20 件の DOI はすべて取り込んだデータと一致し、DOI と出版年の欠落はありません。全文欄には、PDF が未添付であることが正しく記録されています。

![Open-Scienceで保存された20-row perovskiteハンドオーバー在庫](/img/open-science/research-workflows/perovskite-handover-table.png)

**perovskite-handover.md** を開き、次の研究者に読み上げシーケンスが有用であることを確認してください。 それはメカニズム、材料の介入および分析的なアプローチによって最初に、続く広い安定性のペーパーを、提案します。 これらは、実験に関する結論を検証していないコレクションに基づいて提案を読んでいます。

![保存された読書プランは、ソースの可用性と次の操作が見える状態を維持します](/img/open-science/research-workflows/perovskite-reading-plan.png)

ファイルのプレビューの拡張ボタンを使用して、計画を読み込み、**Download** を CSV と一緒に保持します。 提案された次のアクションが供給された素材から実現可能であることを確認します。 論文が読み込まれている証拠ではないと示唆された読書シーケンス。

コレクションを使用して安定性の結果を比較する前に、関連する完全なテキストを入手し、老化プロトコル、温度、照明、大気およびエンドポイントを記録します。 出版社の更新もチェック:[ビッグデータ安定性紙](https://www.nature.com/articles/s41467-022-35400-4)は、全文レビューに所属するリンクされたaddendumを持っています。

保存した<a href="/docs/examples/research-workflows/perovskite-handover.csv" download>ハンドオーバー CSV</a>と<a href="/docs/examples/research-workflows/perovskite-handover.md" download>読書プラン</a>をダウンロードして、自分の出力で構造を比較します。
