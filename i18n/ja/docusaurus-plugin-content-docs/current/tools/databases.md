---
title: "科学データベース"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# 科学データベース {/* #scientific-databases */}

アプリは、**23データソースコネクタ** をバンドルし、別々のオフライン Molecule Connector. フルレジストリは、Moleculeの2つの操作を含む**239 ツール操作**を持っています。 237をカバーする下にあるデータソースカタログ。 設定で関連するConnectorを有効にし、正しい識別子タイプでバインドされた質問を尋ねます。

<span id="actual-local-queries" />

## データソースカタログ {/* #data-source-catalog */}

識別子および研究の質問によって選ぶ。 ソースカバレッジは異なります。 正確なフィールドの動作参照を参照してください。

| コネクタ | 出典 | 操作 | 利用する  |
| --- | --- | --- | ---  |
| 化学・化学 `chemistry` | PubChem, ChEBI, レア, ビンディングDB | 12 | PubChem、ChEBI、Rhea、BindingDBによる小分子化学。  |
| 文献グラフ・ `literature` | OpenAlex、arXiv、Crossref、DataCite | 13 | 論文、著者、引用、DOIの更新とデータセット/ソフトウェアレコード。 |
| パブメッド・ `pubmed` | パブメッド、PMC、欧州PMC | 7 | NCBI Eユーティリティ、PMC IDコンバーター、ヨーロッパPMCによる生物医学文献 — 検索、メタデータ、関連記事、引用ルックアップ、ID変換、完全なテキストと著作権。  |
| 遺伝子・オントロジー・ `genes` | MyGene、UniProt、OLS、QuickGO、Reactome | 7 | 遺伝子/タンパク質のアイデンティティと腫瘍学の用語 — mygene.info, UniProt, OLS4のオントロジー, GOのアノテーション, Reactomeの経路.  |
| ゲノム・ `genomes` | 組み立て、UCSC | 11 | ゲノムアノテーション、バリアント、均衡、シーケンス、ブラウザのトラック — REST と UCSC Genome ブラウザーを組み立てます。  |
| バリアント・ `variants` | gnomAD、ClinVar、dbSNP | 15 | 人間の遺伝的変形 — gnomAD の人口の頻度/対照的、ClinVar の記録/調査(直接 NCBI)、dbSNP、構造的および mitochondrial の変形。  |
| 治験・臨床試験 `clinical-trials` | 臨床トライアル.gov | 6 | ClinicalTrials.govの臨床試験 — 検索、詳細、スポンサー、投資家、エンドポイント、および適格性。  |
| 臨床ゲノム・ `clinical-genomics` | ClinGen、CIViC、オープンターゲット | 20 | 臨床ゲノムの知識ベース:ClinGenの治癒、CIViC臨床証拠、およびオープンターゲットプラットフォーム。  |
| 構造・インタラクション・ `structures` | PDB、AlphaFold、EMDB、複雑なポータル、IntAct | 16 | 構造と分子相互作用 — PDB 構造, アルファフォールド予測, EMDB クリオ-EM エントリ, 複雑なポータルの複合体, IntAct 相互作用ネットワーク.  |
| ChEMBL・ `chembl` | チャムBL | 6 | CEMBL REST API による生物活性化合物、薬物、標的、生物活動およびメカニズム。  |
| バイオRxiv · `biorxiv` | バイオRxiv、medRxiv、ROR | 7 | BioRxiv/medRxiv のプリプリント — 日付/カテゴリ、DOI によるメタデータ、ジャーナル公開リンク、ファンダリスト、およびプラットフォームの統計による検索。  |
| 薬物規制・ `drug-regulatory` | オープンFDA | 7 | openFDA による FDA アプリケーション、ラベル、およびコルパスの統計。  |
| ヒト遺伝学・ `human-genetics` | GWASカタログ、eQTLカタログ、PheWeb | 14 | GWASカタログ、eQTLカタログ、PheWeb PheWASポータル(FinnGen、BioBank Japan)  |
| エクスプレス・ `expression` | GTExの特長 | 12 | GTExポータル経由でのヒト組織表現とeQTL。  |
| 蛋白質のアノテーション · `protein-annotation` | InterPro、Pfam、ヒトプロテインアトラス、ストリング | 13 | タンパク質ドメインアーキテクチャ、家族/クランメンバーシップ、InterPro/Pfam、ヒトプロテインアトラスおよびストリングによる表現アトラスおよび相互作用ネットワーク。  |
| がんモデル・ `cancer-models` | cBioPortal(バイオポータル) | 6 | cBioPortal REST API によるがんゲノミクス研究記録。  |
| RNA・RNA `rna` | ラファム | 9 | Rfamを介したRNAファミリーデータ(メタデータ、アライメント、モデル、構造)をノンコーディング。  |
| Omics アーカイブズ・ `omics-archives` | ArrayExpress、GEO、MetaboLights、MGnify、PRIDE | 17 | Omicsのデータアーカイブ — 式(ArrayExpress、GEO)、メタボロミクス(MetaboLights)、metagenomics(MGnify)、proteomics(PRIDE)。  |
| セルガイド・ `cellguide` | セルックスジーン | 5 | セルックスジーン・セルガイドによる細胞型アイデンティティ、マーカー遺伝子、ソースデータセット、組織。  |
| 規制・規制 `regulation` | エンコード、JASPAR、UniBind | 16 | 遺伝子調整機能ゲノム — ENCODE実験/biosamples/files、JASPAR TF結合プロファイル、UniBind ChIP-seq TFBS。  |
| リサーチ・リソース・ `research-resources` | Grants.gov, 抗体レジストリ | 5 | 資金調達機会検索(Grants.gov)と抗体カタログ検索(抗体レジストリ)。  |
| バイオマート・ `biomart` | バイオマートを組み立てる | 8 | BioMart属性のクエリと識別子の翻訳を統合します。  |
| ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZIN・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZIN・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZIN・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZIN・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC・ZINC `zinc` | トピックス | 5 | ZINC22 浄化可能な化学空間(CartBlanche22) — ZINC id、SMILES の正確/類似性検索、サプライヤーコードの解像度、ランダムサンプリング、ドックのための 3D 構造の場所による化合物のルックアップ。  |

## レコードの取得と本人確認 {/* #retrieve-a-record-and-verify-its-identity */}

1. **Settings → Connectors** を開き、必要なソースを検索し、意図したエージェントの可用性を確認します。
2. 詳細はこちらをご覧ください。 **Tools**、入力、例、およびサードパーティの要件をお読みください。
3. 明示的な照会/アクセスおよび結果の限界を供給して下さい。 文献収集または証拠表を作成するときに正確なクエリを保持します。
4. 返されたIDとソースフィールドを調べます。 空の結果、truncatedのバッチとエラーは異なる結果です。
5. 必要なレコードをプロジェクト/ライブラリに意図的に保存します。 検索応答は、すべての論文がダウンロードされた文献ライブラリまたはフルテキストに追加されたことを自動的に意味しません。

### 1つの既知の識別子で始まります {/* #start-with-one-known-identifier */}

<p className="example-label"><strong>実践例</strong> ヒトTP53遺伝子識別子を解決する</p>

**ジャンルとオノトロジー** を有効にして、以下の例で **query_genes を使用して、スコープ="symbol"、種="human"、およびフィールド="symbol、名前、entrezgene" で TP53 を解決します。 入力クエリと一致しないレコードを返します。** を尋ねます。 ヒト TP53 レコードは Entrez Gene **7157** と **腫瘍タンパク質p53** の名前を識別します。 地図付きIDを使用する前に、レコードの`query`と`symbol`を確認してください。 シンボルはいくつかのマッチを返す可能性があるため、意図した生物と記録を確認するまで、すべての結果を保持します。 [正確なフィールド](../reference/connector-operations.md#query_genes).

## クエリを選択し、結果を調べる {/* #choose-a-query-and-inspect-the-result */}

<p className="example-label"><strong>例</strong> 境界データベースのクエリと応答</p>

表はこれらの例の応答を記録します。 ライブクエリ結果は異なる可能性があります。

| Connector / ツール | 入力 | 観察結果 |
| --- | --- | --- |
| Omics アーカイブ/geo_get_series | `accessions: ["GSE60450"]` | 12サンプルを使用したシリーズ/サンプルメタデータ。 メタデータの検索はアップロードされたカウントを返さない。 |
| ジャンル / query_genes | TP53; シンボルスコープ; 人 人 人 | Entrez Gene ID 7157, シンボル TP53, 名前 腫瘍タンパク質 p53. |
| パブリッシング/search_articles | GSE60450, 最大 2 | PMIDs 38059347および37306301。 これらは、データセットの元の出版物を自動的にではなく、クエリマッチです。 |
| 化学 / pubchem_search_compounds | アスピリン、最高 1 CID | CID 2244の方式C9H8O4および分子量180.16。 |
| 文学 / openalex_search_works | `CRISPR base editing`; 2020から; アクセスを開く。 最高 2 | OpenAlex ID、ソースフィールド、完全性フラグの2つの作業記録。 |

### OpenAlex を接続し、引用リンクに従う {/* #connect-openalex-and-follow-citation-links */}

1. **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex** を開きます。
2. APIキーを入力し、**Validate**を選択し、検証が成功した後に**Save**を選択します。
3. 小さな`max_records`制限でトピックを検索します。 結果を記述する前に、`n_records_returned`と`records_truncated`をチェックしてください。
4. `openalex_get_work` で返された作業 ID を使用します。 `openalex_citations`は、その作品と`openalex_references`を引用する紙に使用します。 反対方向です。
5. 著者の検索については、著者のプロファイルを取得する前に、機関とORCIDを確認してください。 ソース ID または ISSN を使用して、ジャーナル名を解読します。

フィルタとフィールドを返すための[OpenAlex 操作パラメータ](../reference/connector-operations.md#openalex_search_works)を参照してください。

### DOIと関連する研究記録を調べる {/* #look-up-a-doi-and-its-related-research-records */}

**文献グラフ**を有効にします。 `crossref_get_work` は、発行元メタデータと `crossref_get_updates` で、預金された補正/引き込み関係に使用します。 `datacite_search_records` を使用して、データセット/ソフトウェアの DOIs を検索し、`datacite_get_record` を選択して選択したレコードを検査します。 これらの4つのパブリックメソッドは、OpenAlexキーを必要としません。 DOI のアイデンティティ、関係の方向および資源をダウンロードするか、または引用する前に条件を再使用して下さい。 [操作の参照](../reference/connector-operations.md#family-2) では、正確なフィールドが使われています。

Rfamシーケンス検索では、公式のバッチエンドポイントを使用します。 古いインストールが退職エンドポイントエラーを返す場合、アプリを更新し、意図した操作を再試行します。 保留中のジョブは、ヒットなしの完全検索ではありません。

## 返されたレコード、空のマッチまたはエラーを処理する {/* #handle-a-returned-record-empty-match-or-error */}

結果を使用する前に、返されたステータスを調べます。 [操作の参照](../reference/connector-operations.md) を使用してフィールドと完全性フラグを解釈します。

| 観察された結果 | 次回の予定 |
| --- | --- |
| `found: false`、ゼロ レコード、空の調査者か製造者は一致します | 識別子、生物、クエリスコープ、フィルタをチェックします。 空の結果を保存します。 取得したレコードとして提示しないでください。 |
| `credential_required` OpenAlex について | 要求されたクレデンシャルフォームを開き、再試行する前にキーをバインドします。 |
| `contact_email_required` 直接NCBIの変形の照会のため | 開く **Settings → Connectors → Manage credentials → Literature access**, 入力 **Contact email** 選択する **Save**. 失敗したクエリを再試行します。 NCBI API キーは任意です。 返された識別子、マッチカウント、およびトランジションフラグをチェックします。 空の結果は接続エラーとは異なる。 |
| HTTP `410` eQTLから | ソースのURL、操作、応答を保持し、科学的な入力を変更する前にサービス可用性をチェックします。 |
| Connector要求はの後で時間を計りました `30000ms` | 小さいリクエストを繰り返します。 外部Notebookのタイムアウトだけの増加は、Connectorの独自の期限を変更しません。 |
| Notebookの実行は、後にタイムアウトしました `60000ms` | 実行は結果なしで終了しました。 個別にリトリート操作。 すべての上流サービスが失敗したことに気付くことはありません。 |
| BioMart HTMLの維持のページ; プライド `Unexpected end of JSON input` | 想定した構造応答は利用できませんでした。 後で再試行し、応答タイプ/エラーを問題に保ちます。 |
| ZINCのタスクは時間内に完了しなかった | 返されたタスク/結果の URL を保存し、そのジョブを確認します。 新しいジョブを繰り返し起動すると、その結果が回復しません。 |

レポートでは、操作を添付し、入力、エラーテキストとタイムスタンプを[トラブルシューティング](../guides/troubleshooting.md)でバインドします。 共有する前に、認証情報とプライベートデータを削除します。

<span id="empty-partial-and-failed-responses" />

## 操作パラメータの検索 {/* #find-operation-parameters */}

[Connectorの操作の参照](../reference/connector-operations.md)は、必要なフィールド、受け入れ値、および正確な呼び出しに使用します。 最初にソースを選択します。 特定の操作を準備するとき参照を使用して下さい。

ゲノムビルド、生物、組織、ユニット、アクセスバージョンを返したデータを保存します。 一般的なHTTPの意味と回復のために、[トラブルシューティング](../guides/troubleshooting.md)を使用します。 データベースのレコード、予測、および生成された要約は異なる証拠タイプです。 研究クレームを使用する前に引用されたソースを確認してください。


実装参照: [コネクタパネル.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

カタログソース: [カタログ.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts)、[レジストリ.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts)。
