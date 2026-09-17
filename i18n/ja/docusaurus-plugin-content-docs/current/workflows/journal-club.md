---
title: "テーマを絞った読書会の資料を準備する"
last_update:
  date: '2026-09-16'
---

# テーマを絞った読書会の資料を準備する {/* #prepare-a-focused-journal-club-reading-pack */}

研究の質問から始めると、Open-Scienceの論文を見つけ、完全なテキストを保存し、同じ論文をディスカッションパックに変えます。 検索ステップでPDFをダウンロードする必要はありません。 PDFが保存され、開いてからテキストの読み込みが始まります。

<p className="example-label"><strong>実践例</strong> シングルアトム触媒で5枚の紙を見つけて読む</p>

**質問**: 証拠は、分離された金属サイトを有用な触媒性能に接続するのか? この例では、合成、熱安定性、メカニズム、スケールアップに関する2017-2022主的研究を検索します。 5枚の紙ライブラリーコレクション、全文読書パック、5列紙マップ、60分アジェンダを生成します。 下記の最終5枚は、保存された出力で用いられるものと同じです。

## トピックから検索 {/* #search-from-a-topic */}

1. プロジェクトで会話を開き、検索ツールで作業モデルを選択します。 添付ファイルエリアを空にします。
2. 科学的な質問、期間およびペーパー タイプを記述して下さい。 マニュアルレビューのための検索ログと候補を依頼します。
3. 検索アクティビティの送信とリクエストの拡大 ソースリンクをチェックし、各結果がメタデータ、抽象的または完全なテキストを含むかどうかを確認します。

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![候補者のアイデンティティと検索ステータスの実際の検索ログ](/img/open-science/research-workflows/literature-topic-results.webp)

<a href="/docs/examples/research-workflows/single-atom-search-log.md" download>初期検索ログ</a>は、Web検索とクロスリーフメタデータで見つかった8つの候補を記録します。 これらは、まだダウンロードされた紙ではありませんでした。 ソースが資格情報を必要とする場合は、[コネクタ](../guides/connectors.md) を構成するか、エージェントに利用可能なソースを使用し、ギャップを名前付けるように依頼してください。

## 候補を確認して保存する {/* #review-and-save-the-candidates */}

**Library → Inbox** を開きます。 DOI、作者、年、出版社のページを比較するタイトルを選択します。 関連するレコードを受け入れ、未定のものの保留を保ち、無関係なものを却下します。 **Search references**は保存されたライブラリをフィルタリングします。 会話でオンライン発見を始める。

完全なテキストが追加できない最初の選択はペーパーを含んでいました。 この会議は、読みやすいソースを全体に使用するために、例はLangを保持し、同じトピック内の4つの置換を検索しました。

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

<a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>取り替えの選択 ログ</a> を見直し、4 つの意図した Inbox 行を選択し、**Accept** を選択します。 PDFの保存と開口部によって、オープンアクセスソースリンクはテスト済みです。

![手動受入のために選ばれる4つの取り替えの候補者](/img/open-science/research-workflows/journal-open-access-inbox.webp)

**New collection**で**単原子分析 - フルテキストジャーナルクラブ**を作成します。 **All references** では、これらの 4 つの承認されたレコードと Lang を選択し、**Add to collection** を選択します。 **Add to project** を使用して、会話を含むプロジェクトにセットをリンクします。

| 論文 | フォーカス | この実行中のPDFページ |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | 熱安定性およびメタンの燃焼 | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Pt/Cuの合金およびプロパンの脱水素 | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | リバーシブル原子-クレーターの変更と反応経路 | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | 継続的な準備とスケールアップ | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | ルココーディネートと還元策 | 11 |

## 選んだ論文の全文を取得する {/* #obtain-full-text-for-the-selected-papers */}

1. 参照を開き、**Find full-text PDF**を選択します。
2. 返されたソースを確認し、**Add attachment**を選択します。 **添付ファイル** でファイルが表示されるまで待ちます。
3. 添付ファイルを開きます。 タイトルとDOIをレコードと比較し、ページ数を確認します。
4. 5つのすべての参照を繰り返し、コレクションを再オープンします。 各行は、添付アイコンが表示されます。

![Lang のペーパーのために提供される完全なテキストの源](/img/open-science/research-workflows/literature-topic-fulltext.webp)

この実行では、Lang の PDF がヨーロッパ PMC で追加されました。 ほかの4つは、Unpaywallを通じて発見された出版社のソースから保存されました。 別のソースを追加できない場合、代替ソースが成功することができます。 必要な場合は、**Open source** を使用して、**Add PDF** でアクセスし、添付する権利のコピーを入手してください。 読みやすいコピーが利用できない場合は、選択を置き換えたり、フルテキスト検索を要求する前に不足しているマークを付けてください。

![英語PDFプレビューで実際にダウンロードした紙が開きます](/img/open-science/research-workflows/journal-qi-pdf.webp)

最終コレクションには、テーブルの注文で**10、9、11、10および11**をカウントする5つの保存されたPDFが含まれています。 添付アイコンは保存されたファイルを確認します。 読みやすく、レコードにマッチすることを確認します。

![すべてのレコードに添付ファイルを備えた最終5枚の紙コレクション](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## 完全なテキストを読み、パックを生成します {/* #read-the-full-texts-and-generate-the-pack */}

リンクされたプロジェクトで会話に戻る。 完成したコレクションを明示的に名付けます。 保存したPDFから証拠を依頼し、異なる反応の条件を分離します。

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

応答中に、**文献ライブラリ**読書活動を展開して、どの紙や通路が取り出されたかを調べます。 保存したPDFを全て読み込む。 読書活動は、以前のメタデータ検索とは異なる。 読みが失敗した場合は、その論文の証拠を明示的に利用できなくなったことを解決するか、または保持してください。

完了後、**Generated**から**single-atom-fulltext-reading-pack.md**を開きます。 5枚の紙検証表、各所見およびそのロケータ、制限、質問、アジェンダを確認してください。 議題は、60分を合計する必要があります。

![保存された全文パックは、同じ5枚の紙とソースチェックで、](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## 紙の地図を元のPDFから確認 {/* #check-the-paper-map-against-the-original-pdfs */}

**single-atom-fulltext-paper-map.csv**を開き、画面全体で拡大ボタンを使用します。 この実行には**5行・12列**が含まれています。 コレクションで設定したDOIを比較します。 別のセットからのパックは、このワークフローの結果ではありません。 水平方向にスクロールするか、CSVをダウンロードして、長いセルをフルで読みます。

![実際の5列、12列の紙のマップ](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

**Library**に戻り、引用されたPDFを開き、そのページカウンターをクリックし、要求されたページを入力して、**エントリー**を押します。 図や表を、そのキャプションと周囲のテキストとともにチェックします。 たとえば、彼は al. の図 5 は **PDFページ 7** にあります。 生産ラインの説明は、3のページです。 要約の異なる部分を支えます。

![PDFページ7に5がオープンしました。](/img/open-science/research-workflows/journal-he-figure5.webp)

ロケータや条件が間違っていたら保存されたリビジョンを要求し、修正されたファイルを再び開きます。 チェックパックは、Sun et al の競合を保持します。: ページ 2 と 図 5 のキャプションは、異なるフィード構成を与えます。 どちらの記述もサイレントなものを選ぶのではなく記録します。 これは、解決された実験的な詳細ではなく、有用な会議の質問です。

チェックした<a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>読書パック</a>と<a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>論文比較表</a>をダウンロードします。 同じ5つのPDFは、両方のファイルを記述します。 [主張と図の検証](pdf-evidence.md) を続けて、より一層のウォークスルーを続けましょう。
