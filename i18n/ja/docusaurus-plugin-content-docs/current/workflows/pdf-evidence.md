---
title: "紙の主張をその数字とサプリメントにチェック"
last_update:
  date: '2026-09-16'
---

# 紙の主張をその数字とサプリメントにチェック {/* #check-a-papers-claim-against-its-figures-and-supplement */}

<p className="example-label"><strong>実践例</strong> 98.9%触媒効率はどういう意味ですか?</p>

メトリックや実験条件がクリアな場合にのみ、ヘッドライン番号が便利です。 このワークフローは、触媒紙とその補足をとり、一つの主張の証拠を見つけ、報告された結果を広範な解釈から分離する短いレポートを保存します。

**配達可能**:は、英語のクレーム/証拠/条件/limitsテーブルとPDFページと図の参照です。 これは、独立した実験的レプリケーションではなく、ソースチェックです。

## オリジナル素材を準備する {/* #prepare-the-original-materials */}

ヤン ら.'s [*トランジションメタル単原子触媒の大規模合成のための普遍的なリガンドの仲介方法*](https://www.nature.com/articles/s41467-019-12510-0)、DOI `10.1038/s41467-019-12510-0` を使用して下さい。

1. **補足情報**の発行者ページと**補足情報** PDFからPDFをダウンロードしてください。 別のファイルとして保存してください。
2. Open-Scienceプロジェクトでは、会話を開き、作業モデルを選択します。
3.  **+ → Attach files**  を選択し、PDF の両方を添付します。 タイトルとDOIのタイトルをチェックするには、メインのPDFを開きます。 たとえば、9 のメイン粒子ページと 52 サプリメントページが含まれています。

**両方のファイル名**が送信されたリクエストの上に表示されることを確認します。 ファイル名をクリックすると、プレビューが開きます。 2 の間で切り替えると、引用されたページがどのドキュメントに所属しているかを検証できます。

![記事とサプリメントの両方が実際の証拠チェック要求に添付されています](/img/open-science/research-workflows/catalyst-two-inputs.png)

## 特定の証拠の質問に答える {/* #ask-a-specific-evidence-question */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

プロンプトが表示されたときに意図した読み取りリクエストを承認します。 読者が無効なページや未読の資料を報告する場合、要求を絞り込み、または関連するPDFページを自分で開く。 数字が存在しない証拠として、不成功な反復を扱いません。

## 引用された証拠を開く {/* #open-the-cited-evidence */}

PDFプレビューでは、ページコントロールを使用して、**図6**と関連する結果を含む**6 のページ**を開きます。 テキストで図のキャプションを比較します。 図**51–53**用のサプリメントページ**47–49**を開きます。

![Open-Scienceの元の記事の図6と実験条件](/img/open-science/research-workflows/catalyst-figure6-source.png)

Ni-SAC-2.5 のソースコードは **98.9% 偏光効率をCOに-1.2 V対RHE** です。 耐久性実験では**20時間用0.8 V**を使用しています。 これらの条件は別々でなければなりません。後者は、ピーク選択可能で20時間の耐久性を確立しません。 ファラダックの効率性は、製品に割り当てられた充電を記述します。 エネルギー効率やCO2変換の接近の分数と同じではありません。

サプリメントは、水素製品、NMRおよびスケールアップ図を供給します。 読みやすいキャプションは、必ずしもプロットされたトレースですべての数値点を提供していません。 報告書の区別を保ちましょう。

ページに移動するには、PDF プレビューを展開し、ページカウンターをクリックし、完全な番号を入力して **エントリー** を押します。 読み込む前に結果のカウンターを確認します。 補足のページ 47 は **補足図 51** を含んでいます、軸線は **H2 ファラダック効率** です; 結果の誤りはしないでください。

![52の実際のPDFページ47の補足図51](/img/open-science/research-workflows/catalyst-supplement-47.png)

## レポートの確認と保存 {/* #check-and-save-the-report */}

回答完了後、**catalyst-claim-check.md** を開きます。 ソースのアイデンティティ、ページ番号、図ラベル、および結論の文言をチェックしてください。 特に、報告書は**報告結果**を保持し、実験的な再生の要求に文献チェックを回すことを避けるべきです。

![保存されたクレーム、証拠、条件、および制限レポート](/img/open-science/research-workflows/catalyst-claim-report.png)

<a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>事例紹介</a> をダウンロードします。 あなた自身の仕事で科学的な結論を使用する前に、引用された元の証拠および出版者の訂正を点検して下さい。 図やテーブルの証拠を別のファイルに抽出するには、[PDF抽出物](../guides/previews.md#pdf-extraction)を参照してください。
