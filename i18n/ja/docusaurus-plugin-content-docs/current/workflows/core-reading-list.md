---
title: "新しい研究トピックのためのコア読書リストを作成する"
last_update:
  date: '2026-09-16'
---

# 新しい研究トピックのためのコア読書リストを作成する {/* #build-a-core-reading-list-for-a-new-research-topic */}

研究テーマから論文を探す場合は、[ジャーナルクラブのテーマ検索ワークフロー](journal-club.md)を参照してください。以下の PRISMA の例は既知の三つの DOI から始め、書誌情報の確認、保存、閲覧を説明します。

<p className="example-label"><strong>実践例</strong> PRISMA読書コレクションを作成する</p>

体系的なレビューを準備し、広く読む前に小さく、防御可能な開始コレクションが必要です。 このウォークスルーは、3つの公開論文からPRISMAレポーティングガイダンスパックを構築し、エージェントの発見をレビューし、承認されたレコードをプロジェクトにリンクし、オープンに利用可能なPDFを添付します。

**配達可能:**は、研究プロジェクトに関連する3レコードライブラリコレクション、チェックされたフルテキスト添付ファイル、および再利用前にメタデータを検証する読書リストアーティファクトです。 これは、排気検索やエビデンス合成ではなくシードコレクションです。

あなた自身のトピックのために、シード紙とコレクション/プロジェクト名を置き換えてください。 各論文の実体メタデータと利用可能な全文をチェックします。

## ソースと準備 {/* #sources-and-preparation */}

ワーキングモデルの接続と英語アプリケーションインターフェイスを使用します。 この例では、Codex サブスクリプションを使用しました。 [プロジェクトとソースフォルダ](../guides/projects.md)で**PRISMA - Systematic review reading pack**を作成します。

| ペーパー | DOI | パック内のロール |
| --- | --- | --- |
| ページの et al., 2021, *PRISMA 2020 ステートメント: 系統的なレビューを報告するための更新されたガイドライン* | `10.1371/journal.pmed.1003583` | 報告の指導を更新して下さい; タイトルの2020は出版年ではありません。 |
| Moher ら。、2009、 *系統的レビューとメタ分析のための優先レポーティング項目:PRISMAステートメント* | `10.1371/journal.pmed.1000097` | 歴史記述。 |
| リバティ ら., 2009, *PRISMA ステートメント ... 説明と評価* | `10.1371/journal.pmed.1000100` | 歴史的説明; 別の作者リストが付いている別のペーパー。 |

出版社のページは、書誌のアイデンティティを確立します。: [2021 ステートメント](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)、[2009 ステートメント](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097)、[2009 説明](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100)。

## 1. 境界候補リストを依頼する {/* #1-ask-for-a-bounded-candidate-list */}

**Ask anything**では、識別子、宛先、停止条件でリクエストを入力します。

```text
Build a core reading list for our systematic-review reporting project.
Look up only these DOIs:
10.1371/journal.pmed.1000097
10.1371/journal.pmed.1000100
10.1371/journal.pmed.1003583
Use the literature library tools to retrieve bibliographic metadata and
stage the records for my Inbox review. Do not accept candidates for me.
Save reading-list.md with each title, authors, year, DOI, source URL and
suggested reading order. Label the 2009 papers as historical. Do not
claim to have read full text unless you actually retrieved it.
```

目的のモデルを選択し、**Ask for approval**を有効にして、**Send message**を選択します。 要求されたものを点検する必要があるとき用具の活動を拡大して下さい。 実行は、紙を調べる前に、関連するSkillを読む必要があるかもしれません。 エージェントのプロースの Skill 名は、その指示が読み込まれていないことを証明しません。

**Save to Literature Inbox?**が現れた場合、動作を確認し、意図した保存を承認します。 候補者の保存は、それらをライブラリに受け入れることとは異なる。

![舞台文献候補への許可](/img/open-science/prisma-walkthrough/03-inbox-save-approval.png)

## 2. 受諾前に各候補を審査する {/* #2-review-each-candidate-before-accepting */}

**Library → Inbox** を開きます。 これにより、バッジが**3**を示し、各行はタイトル、最初の著者、出版年、**クロスリーフで発見**を表示します。

![3つの実質PRISMAはレビューを待っています](/img/open-science/prisma-walkthrough/04-inbox-three-papers.png)

1. 候補者のタイトルを選択し、詳細を開きます。
2. **Provider**、そのソースリンク、および**Identifiers → DOI**を意図した紙にチェックします。
3. 著者の注文、年、出版社の記録と出版物を比較して下さい。 同様のタイトルは、2つのレコードが同じ紙であることを確立しません。
4. アイデンティティが一致したときに**Accept**を選択します。 候補者は、受信トレイから消え、ライブラリレコードになります。
5. 他の2つを繰り返します。 バッジは3から2から1に変更しました。 最後の状態は **Inbox is clear** でした。

![候補者のクロスリーフソースと正確なDOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.png)

| 受信トレイ制御 | アウトカム | 利用場面 |
| --- | --- | --- |
| 候補者のタイトル/ **View details** | プロバイダと識別子の証拠を開きます。 | 不慣れなか、曖昧なペーパーを受け入れる前に。 |
| **Accept** | 候補者をライブラリにプロモートします。 | 身元確認と関連性を確認しました。 |
| **Dismiss** | 保留中のレビューキューから候補者を削除します。 | それは、関連するか、コレクションを入力するべきではありません。 メタデータを修復しません。 |
| **Search references** | 現在のビューを絞り込みます。 | より大きなバッチで識別子やタイトルを検索します。 |
| 列のチェックボックス/ **Select all** | 利用可能なバッチアクションの候補を選択します。 | 意図した選択を点検した後だけ; ウォークスルーは、個別に受け入れられます。 |

## 3. プロジェクトに便利なコレクションを作る {/* #3-make-the-collection-useful-to-a-project */}

サイドバー**New collection**コントロールでコレクションを作成します。

- **名前:** `PRISMA reporting - Core reading`.
- **説明:** は、更新された履歴レポートガイダンスを含む状態です。 説明は、エージェントの指示ではなく、組織的なテキストです。
- **Create collection** を選択します。 記述は任意です間、名前は要求されます。 **Cancel**と**Close**はドラフトを破棄します。

![目的別読書コレクション](/img/open-science/prisma-walkthrough/06-create-collection.png)

**All references**では、`PRISMA`を検索します。 意図したレコードを正確に確認し、チェックボックスを選択し、**Add to collection → PRISMA reporting - Core reading**を使用します。 操作は選択をクリアします。 3つのレコードをもう一度選択し、**Add to project → PRISMA - Systematic review reading pack**を使用します。

コレクションを開き、その3つのレコードを確認します。 プロジェクトとコレクションのチェックボックスの両方が選択されていることを確認するために参照の詳細を開きます。 これらは、共有レコードへのリンクです, ない 3 バイブリソグラフィの追加のコピー.

![完成した3枚の紙コレクション](/img/open-science/prisma-walkthrough/07-core-reading-collection.png)

## 4. 十分なテキストを添付 {/* #4-attach-usable-full-text */}

2021 用紙を開き、**Find full-text PDF** を選択します。 この実行でヨーロッパPMCを返したルックアップ。 **Add attachment** を選択する前に **Open source** を調べます。

![発見された全文ソース](/img/open-science/prisma-walkthrough/08-full-text-source.png)

**Add attachment** が **PDF could not be added** を返しました。 メッセージは、サインインの要件、期限切れのリンク、50 MBの制限を含む可能性のある原因をリストします。 ここで発生した原因は特定しません。

回復するには、[出版社の記事ページ](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)からオープンに利用可能なPDFをダウンロードしてください。 同じ参照に戻り、**Add PDF**を使用します。 ダウンロードしたファイルを選択し、添付ファイルの下に**プレビューprisma-2020-statement.pdf**を開きます。 **806.1のKB** と **15ページ** のプレビューが正常に添付されたファイルです。 タイトルとDOIを1ページ目で確認します。

![出版者 PDF は首尾よく付く、開きました](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.png)

PDF は、可視のソース結果が付属していません。 付属のPDFは、エージェントがそれを読むことを証明していません。 **Read with agent**は、その後の要求に対して、読み文を供給する別のアクションです。

<span id="5-audit-the-generated-reading-list" />

## 5. 読書リストの確認と保存 {/* #5-check-and-save-the-reading-list */}

**reading-list.md** を開き、各タイトル、著者リスト、出版日、DOI を上記パブリッシャーページと比較します。 <a href="/docs/examples/prisma/core-reading-list.md" download>チェック読書リストの例</a> を参考にしてください。 このダウンロードは、キュレーションされた伝記です。 アプリケーションが以前の保存したバージョンとは別々です。

1. 更新されたステートメントについては、タイトルがPRISMA 2020と書かれているにもかかわらず、出版物年**2021**を保持します。
2. 2009 ステートメントでは、4 つの個々の作者 **PRISMAグループ** を保持します。 ライブラリメタデータ内のグループでは、**Name type → Organization** を使用します。
3. 2009 の説明については、独自の 10 人の著者リストを保持します。 文の作者をコピーしません。
4. 生成されたレポートが異なる場合は、ライブラリレコードを修正し、修正されたレコードを使用して、**reading-list.md**の新しい管理バージョンを明示的に要求します。
5. 新規ファイルを開き、3つのエントリと DOI のリンクをすべてダウンロードする前に確認します。 メタデータを単独で更新しても、保存されたレポートは書き換えられません。

次のような修正を要求します。

```text
Regenerate reading-list.md from the three accepted records. Preserve their
separate complete author lists, including the organization author The PRISMA
Group for DOI 10.1371/journal.pmed.1000097. Use 2021 as the publication year of
the PRISMA 2020 statement. Keep all DOI and publisher links. Save a new managed
version and reopen it. Describe metadata lookup and available attachments
accurately; do not claim full-text analysis.
```

## アクセシビリティチェックリストとスコープ {/* #acceptance-checklist-and-scope */}

- それぞれのコレクションとプロジェクトは、それぞれ3つの意図したレコードを公開します。
- 各DOIは一致のペーパーを開けます; 2つの2009用紙は異なる作者を保持します。
- 更新されたステートメントの出版物年は2021です。
- PDF プレビューが 2021 レコードを開いたりマッチします。 添付ファイルとしてダウンロードがカウントされていない。
- 読書リストのテキストは、メタデータの検索、マニュアルの受け入れ、実際のフルテキストの読み込みを区別します。

このコレクションは、境界線の読み取りタスクをサポートしています。 徹底的なデータベース検索、全文合成および完全な系統的レビューには、追加の方法と証拠が必要です。

新規の読み込みセットでは、[名 名 名 名 名 名 名 名 名](../guides/library.md#inspect-and-correct-metadata) を使用して、企業の作者に対して、再生して、ビブリソグラフィを確認してください。 継承されたPDFフォルダについては、セットを見直して[バッチ輸入](../guides/library.md#add-or-import-a-record)に従ってください。 ライブラリレコードの更新は、保存された読書リストアーティファクトを自動的に書き直しません。
