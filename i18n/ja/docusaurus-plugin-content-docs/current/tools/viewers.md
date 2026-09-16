---
title: "科学ビューア"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 科学ビューア {/* #scientific-viewers */}

添付ファイル、保存結果、ファイルからファイルを開きます。 エクステンションはレンダラーを決定します。 プレビューは、提供されたコンテンツを表示します。 科学的予測を実行したり、結果が正しいことを確立したりしません。

## 実際の PDB 構造を調べる {/* #inspect-a-real-pdb-structure */}

<p className="example-label"><strong>実践例</strong> 1UBQの構造を点検して下さい</p>

デモは、<ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdbの特長</ExampleDownload>としてダウンロードした元の[RCSB 1UBQウビキチン構造](https://www.rcsb.org/structure/1UBQ)を使用します。 この例では、そのネイティブプレビューは**660原子**を表示します。

1. アップロードした PDB を開き、**Open full screen preview** を選択します。
2. **Cartoon**、**Stick**、**Sphere**、**Surface**、**Line**を切り替えて、異なる表現を検査します。
3. キャンバスの下に示すように、回転、ズーム、または**シフト + ドラッグ**をパンにスクロールするドラッグします。
4. 必要なときに元のファイルをダウンロードします。 画面を閉じて会話に戻ります。

![実際の1UBQ漫画ビュー](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.jpg)

| スタイル | それが強調するもの |
| --- | --- |
| カートゥーン | ポリマーバックボーン/二次構造表現。 ポリマー原子が適さない構造では利用できません。 |
| スティック | ボンドとローカルジオメトリ。 |
| 球体 | 原子中心の球。 |
| 画面 | 分子表面表現。 |
| ライン | より軽いボンド表現。 |

演算制御は、座標を保存しながらレンダリングを変更します。 不足している残留物または予測の自信をチェックするときに、供給された構造とメタデータを比較します。

## FASTAシーケンスを読む {/* #read-a-fasta-sequence */}

<p className="example-label"><strong>実践例</strong> P04637タンパク質シーケンスを読む</p>

[UniProtのFASTAエンドポイント](https://rest.uniprot.org/uniprotkb/P04637.fasta)からダウンロードした<ExampleDownload path="/examples/capabilities/P04637.fa">P04637 ファスタ</ExampleDownload>を開きます。 `>` ヘッダーのアクセシオン/オーナリズム/遺伝子と下にあるシーケンスを調べます。 ネイティブレンダラーは、ソーステキストを保存します。 シーケンスアライメントや編集アプリケーションではありません。

![ソースプレビューの実際のUniProt FASTA](/img/open-science/capabilities-walkthrough/31-fasta-preview.jpg)

会話でシーケンスを使用するには、現在のファイルを**+ → Attach files**に添付し、エージェントに名前を反するのではなく、ファイルを読み込むように依頼してください。 このP04637入力については、`P53_HUMAN`ヘッダー、**393アミノ酸**、初期シーケンス**MEEPQSDPSVの特長**を確認してください。 報告したチェックサムを、本人が確認したファイルと比較します。

モデルリクエストが **管理されたファイルまたはセッションが削除される** を返す場合、通常のメッセージと再試行で現在のファイルを再添付します。 攻撃者の場合、[トラブルシューティング](../guides/troubleshooting.md) のエラーを保持します。 作業プレビューは、モデル入力参照がまだ有効であることを保証しません。

## 分子をプレビューする {/* #preview-a-molecule */}

<p className="example-label"><strong>実践例</strong> SMILESのレンダーアスピリン</p>

`smiles: "CC(=O)Oc1ccccc1C(=O)O"`と`filename: "aspirin"`で`preview_molecule`を実行するためにMolecule Connectorを要求します。 生成された**アスピリン.mol**カードとフルスクリーンプレビューを開きます。

![内蔵のOpenChemLibビューアでレンダリングされたアスピリン](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.jpg)

この例では、コールは有効な構造、式**C9H8O4の特長**、分子量**180.15852**、および**13重原子**を返し、<ExampleDownload path="/examples/capabilities/aspirin.mol">アスピリン.mol</ExampleDownload>を保存しました。 ビューアーは手動で開き、点検されました。 これはオフライン構造レンダリングです。 結合の類縁、ドッキングのポーズか治療上の活動は予測しません。

## 科学的なレンダーを選ぶ {/* #choose-a-scientific-renderer */}

| 入力 | 検査について |
| --- | --- |
| PDBの特長 | 原子をパースし、可用性と元の座標を表現 |
| MOL/SDF/スミレス/RXN | 構造か反作用のレンダリング; 無効なコンテンツやコンテンツの中断が失敗する可能性があります |
| FASTAおよび関連するシーケンスファイル | 元のヘッダー、順序の同一性および程度 |
| H5AD/H5などの分析バイナリコンテナ | 互換性のある分析ライブラリを使用する。 通常のテキストプレビューはコンテナをデコードしません |

共有ツールバーの制御とPDF、オフィス、画像、およびソーステキストの読み込みは、[プレビュー](../guides/previews.md)で文書化されます。 [テーブル](tables.md) にデータ解釈が属します。 正確な拡張子とバインドは、 [ファイルフォーマット](../reference/formats.md). . . .

## プレビュー失敗 {/* #preview-failures */}

元のファイルとレンダラーの正確なエラーを確認してください。 適したポリマー原子のない構造は漫画の眺めを提供しないかもしれません; 変化する表現は、不足している座標を復元できません。 外部ビューアしようとすると、元のバイトを保持します。 成功したプレビューは、モデルが添付ファイルを摂取できるか、予測プログラムがインストールされているかを確立しません。
