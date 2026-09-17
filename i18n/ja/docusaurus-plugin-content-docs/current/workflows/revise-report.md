---
title: "フィードバック後のレポートを改訂"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# フィードバック後のレポートを改訂 {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>実践例</strong> 6つの編集者コメントに対する単原子触媒矯正ブリーフィングを改訂</p>

便利なリビジョンは、ソースの証拠、元の草案、および関連するコメントに対する応答を保持します。 この例では、実際の触媒紙から英語のブリーフィングを作成し、最初のドラフトを上書きせずにそれを見直します。 6つのコメントは、ジャーナルや論文の著者からの対応ではなく、このウォークスルーのために準備された教育演習です。

## 1. 紙を取り付けて最初の草案を作成します。 {/* #1-attach-the-paper-and-create-a-first-draft */}

[Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0) を開き、出版社からメイン PDF とその補足情報をダウンロードし、プロジェクト会話で **+ → Attach files** を介して両方の添付してください。 記録されたファイルはそれぞれ**9と52 PDFページ**を持っています。 以下のページ番号は、印刷されたジャーナルページではなく、PDFページを参照します。

利用可能なモデルを選択し、送信します。

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Open-Science のソースコード PDF と初期のブリーフリクエスト](/img/open-science/workflow-extensions/report-input.png)

要求されると、関連するファイルを読み込む承認します。 **Generated** または **Files** から **catalyst-brief-v1.md** を開き、保存したドラフトを読みます。 会話中の回答は、実際のファイルの検査の代替ではありません。

![エディタリビジョンの前に保存された最初のドラフト](/img/open-science/workflow-extensions/report-draft.png)

## 2. フィードバックを実用的なものにする {/* #2-make-the-feedback-actionable */}

<ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">6つの編集者のコメント</ExampleDownload>をダウンロードし、同じ会話に添付してください。 コメントは以下を要求します。

| コメント | リクエスト変更 |
| --- | --- |
| C1の特長 | 120 の単語を含まない役員の要約 |
| C2の特長 | 2つの操作ポイントを分離する2列テーブル |
| C3の特長 | 証拠が実際に検査された証拠に限られるAbsenceの要求 |
| C4の特長 | 3つの提案されたフォローアップチェック、すでに実験されていない |
| C5の特長 | Explicit Main PDF/補足PDFページおよび図のロケータ |
| C6の特長 | v2 と応答ファイルを分離し、v1 を保存します。 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

実際のリビジョンは、添付したコメントファイルを読み、要求された種類の成果物を生成します。 エージェントがサポートされていない変更を提案する場合、クレームとソースのパスを呼び、承認する前にチェックします。

## 3. 修正された証拠を読んでください。応答ステータスだけでなく、 {/* #3-read-the-revised-evidence-not-just-the-response-status */}

**catalyst-brief-v2.md** を開きます。 この実行では、2列の操作ポイントテーブルと3つのラベリングフォローアップ提案である**117 単語のまとめ**を生成しました。

![変更された要約および耐久性からの選択性を分離するテーブル](/img/open-science/workflow-extensions/report-revised.png)

鍵の区別は、**98.9% CO 偏光効率 で −1.2 V 対 RHE** と別々の **20 h 現在の保持テスト で −0.8 V と RHE** です。 20 hの98.9%にそれらを結合しません。 Main PDF p。 6、図。 6b-d、p。 7、図。 6e、関連する証拠を識別します。 ツイート 8はH細胞の測定を記述します。 補足 PDF PP。 47–48、図。 51-52は、水素選択性およびNMR製品チェックに関心を寄せています。

この実行では、Agent は全文の通路と図のキャプションを読み取りますが、リンクされた図形キャッシュは直接画像検査では利用できませんでした。 その応答レコードが制限されている。 定性的電流は、著者のテキストに従って減少します。 新規値がプロットからデジタル化されていない。 直接図鑑が必要な場合は、[PDF 証拠に対するクレームをチェックする](pdf-evidence.md)に従ってください。

## 4. 応答をチェックし、3つのバージョンをすべてオフ {/* #4-check-the-response-and-hand-off-all-three-versions */}

**catalyst-brief-v2-response.md** を開きます。 C1-C6 を探し、それぞれに名前変更されたセクションを開き、実際に約束された変更が含まれていることを確認します。 ラベルだけでは不十分です。

![保存された応答テーブルは、すべての6コメントを更新セクションにマップします](/img/open-science/workflow-extensions/report-response.png)

提案は提案としてラベル付けされ続けることを確認し、DOIは**10.1038/s41467-019-12510-0**のままであり、**catalyst-brief-v1.md**はまだ変更されていません。 応答は利用できなくなった証拠を述べるべきです。

録画した<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 ドラフト</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 説明会</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">コメントへの応答</ExampleDownload>をダウンロードしてください。 コメントファイルとパブリッシャーリンクでそれらを保存してください。 元の草案は比較のために含まれているし、最終的な見直しのブリーフィングとして使用しないでください。
