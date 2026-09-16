---
title: "科學資料庫"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# 科學資料庫 {/* #科学数据库 */}

應用內建 **23 個資料來源 Connector**，另有離線 Molecule Connector。完整登錄檔包含 **239 個工具操作**，其中 Molecule 有 2 個，本頁資料來源覆蓋其餘 237 個。先啟用相關 Connector，再使用正確編號型別進行小範圍查詢。

<span id="本地实际查询" />

## 資料來源目錄 {/* #数据源目录 */}

根據標識型別與研究問題選擇資料來源。各來源覆蓋範圍不同，具體欄位見操作引數參考。

| Connector | 來源 | 運算元 | 用途  |
| --- | --- | --- | ---  |
| Chemistry · `chemistry` | PubChem, ChEBI, Rhea, BindingDB | 12 | 小分子、化學識別符號、反應及結合資料  |
| Literature Graph · `literature` | OpenAlex, arXiv, Crossref, DataCite | 13 | 文獻、作者、引用、DOI 更新及資料集/軟體記錄 |
| PubMed · `pubmed` | PubMed, PMC, Europe PMC | 7 | PubMed 文獻檢索與記錄  |
| Genes & Ontologies · `genes` | MyGene, UniProt, OLS, QuickGO, Reactome | 7 | 基因符號與識別符號對映  |
| Genomes · `genomes` | Ensembl, UCSC | 11 | 基因組註釋與序列  |
| Variants · `variants` | gnomAD, ClinVar, dbSNP | 15 | 變異頻率與變異記錄  |
| Clinical Trials · `clinical-trials` | ClinicalTrials.gov | 6 | 臨床試驗登記記錄  |
| Clinical Genomics · `clinical-genomics` | ClinGen, CIViC, Open Targets | 20 | 臨床基因組證據資源  |
| Structures & Interactions · `structures` | PDB, AlphaFold, EMDB, Complex Portal, IntAct | 16 | 結構檔案與相關記錄  |
| ChEMBL · `chembl` | ChEMBL | 6 | 化合物、靶標和活性記錄  |
| bioRxiv · `biorxiv` | bioRxiv, medRxiv, ROR | 7 | 預印本後設資料  |
| Drug Regulatory · `drug-regulatory` | openFDA | 7 | 藥品監管及藥品記錄  |
| Human Genetics · `human-genetics` | GWAS Catalog, eQTL Catalogue, PheWeb | 14 | 人類遺傳關聯資源  |
| Expression · `expression` | GTEx | 12 | 組織和基因表達資源  |
| Protein Annotation · `protein-annotation` | InterPro, Pfam, Human Protein Atlas, STRING | 13 | 蛋白結構域與功能註釋  |
| Cancer Models · `cancer-models` | cBioPortal | 6 | 癌症研究模型和佇列資源  |
| RNA · `rna` | Rfam | 9 | RNA 家族與相關資源  |
| Omics Archives · `omics-archives` | ArrayExpress, GEO, MetaboLights, MGnify, PRIDE | 17 | GEO 等組學歸檔和研究記錄  |
| CellGuide · `cellguide` | CELLxGENE | 5 | 細胞型別參考資訊  |
| Regulation · `regulation` | ENCODE, JASPAR, UniBind | 16 | 調控與功能組學記錄  |
| Research Resources · `research-resources` | Grants.gov, Antibody Registry | 5 | 研究專案、資助等資源  |
| BioMart · `biomart` | Ensembl BioMart | 8 | BioMart 資料集與欄位查詢  |
| ZINC · `zinc` | ZINC | 5 | ZINC 化合物記錄  |

## 獲取記錄並核對身份 {/* #获取记录并核对身份 */}

1. 開啟 **Settings → Connectors**，搜尋來源並確認目標 Agent 可使用。
2. 開啟詳情，閱讀 **Tools**、輸入、示例與第三方要求。
3. 明確查詢詞/編號和條數上限，整理文獻或證據時保留準確查詢。
4. 核對返回 ID 和來源欄位。空結果、截斷結果和錯誤不是同一種狀態。
5. 按需要明確儲存到專案/文獻庫。查詢返回不表示所有論文已入庫或全文已下載。

### 從一個已知標識開始 {/* #从一个已知标识开始 */}

<p className="example-label"><strong>案例演示</strong> 解析人 TP53 基因標識</p>

啟用 **Genes & Ontologies**，請求：**使用 query_genes 解析 TP53，scopes="symbol"、species="human"、fields="symbol,name,entrezgene"。返回輸入 query 及未匹配記錄。** 本例返回的人 TP53 記錄對應 Entrez Gene **7157**，名稱為 **tumor protein p53**。使用對映 ID 前，核對返回記錄的 `query` 與 `symbol`。符號可能多重匹配，應保留全部結果，直到確認物種與目標記錄。[準確欄位](../reference/connector-operations.md#query_genes)。

## 選擇查詢並檢查結果 {/* #选择查询并检查结果 */}

<p className="example-label"><strong>示例</strong> 小範圍資料庫查詢與返回值</p>

下表記錄這些示例查詢的返回，實時檢索結果可能不同。

| Connector / 工具 | 輸入 | 實際結果 |
| --- | --- | --- |
| Omics Archives / geo_get_series | `accessions: ["GSE60450"]` | 返回系列及 12 個樣本後設資料，不代表重算上傳矩陣 |
| Genes / query_genes | TP53、symbol、human | Entrez Gene ID 7157，TP53，tumor protein p53 |
| PubMed / search_articles | GSE60450，上限 2 | PMID 38059347、37306301；是查詢匹配，不自動等於資料集原始論文 |
| Chemistry / pubchem_search_compounds | aspirin，上限 1 CID | CID 2244、C9H8O4、分子量 180.16 |
| Literature / openalex_search_works | `CRISPR base editing`；2020 年起；開放獲取；上限 2 | 兩條成果記錄，包含 OpenAlex ID、來源欄位及完整性標記 |

### 連線 OpenAlex 並追蹤引用關係 {/* #连接-openalex-并追踪引用关系 */}

1. 開啟 **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**。
2. 輸入自己的 API key，點選 **Validate**，驗證成功後點選 **Save**。
3. 按主題檢索，並設定較小的 `max_records`。檢查 `n_records_returned` 和 `records_truncated`，再判斷結果是否完整。
4. 將返回的成果 ID 交給 `openalex_get_work` 獲取詳情。`openalex_citations` 查詢引用該成果的文獻；`openalex_references` 查詢該成果引用的文獻，兩者方向不同。
5. 按作者檢索時，先核對機構和 ORCID，再獲取作者檔案。查詢期刊時可用來源 ID 或 ISSN 區分同名結果。

篩選條件和返回欄位見 [OpenAlex 操作引數](../reference/connector-operations.md#openalex_search_works)。
<span id="空结果部分结果与错误" />

### 查詢 DOI 及關聯研究記錄 {/* #查询-doi-及关联研究记录 */}

啟用 **Literature Graph**。出版方後設資料使用 `crossref_get_work`，登記的更正/撤稿關係使用 `crossref_get_updates`。透過 `datacite_search_records` 查詢資料集或軟體 DOI，再用 `datacite_get_record` 檢查選定條目。這四個公開方法不需要 OpenAlex key。下載或引用前核對 DOI 身份、關係方向和複用條件，準確欄位見[操作引數參考](../reference/connector-operations.md#family-2)。

Rfam 序列搜尋現在使用官方批次端點。舊安裝返回已停用端點錯誤時，先更新應用，再重試目標操作。尚在等待的作業不等於搜尋完成且無命中。

## 查詢結果與報錯怎麼處理 {/* #查询结果与报错怎么处理 */}

檢查數量、分頁遊標、`truncated`/`may_be_truncated`、未找到的 ID 和逐項錯誤。返回條數上限不能證明沒有更多記錄。按資源保留基因組版本、物種、組織、單位及編號版本。

400/422 檢查欄位、型別和編號體系；401/403 檢查服務憑據與範圍；429 按服務響應等待並縮小批次。

使用結果前檢查返回狀態。示例及其有限範圍的響應記錄保留在[操作引數參考](../reference/connector-operations.md)。

| 實際遇到的結果 | 下一步 |
| --- | --- |
| `found: false`、零條記錄、研究者或供應商匹配為空 | 檢查識別符號、物種、範圍和篩選條件，保留空結果，不能寫成已取得記錄 |
| OpenAlex 的 `credential_required` | 開啟請求的憑據表單，繫結自己的金鑰後重試 |
| 直接訪問 NCBI 的變異查詢返回 `contact_email_required` | 前往 **Settings → Connectors → Manage credentials → Literature access**，填寫 **Contact email** 並點選 **Save**，再重試失敗的查詢。NCBI API key 為可選項。核對返回的識別符號、匹配數量和截斷標記；空結果與連線錯誤不同 |
| eQTL 返回 HTTP `410` | 保留來源 URL、操作和響應，先檢查服務狀態，不要為了消除報錯修改科學輸入 |
| Connector request timed out after `30000ms` | 縮小請求後重試。僅提高外層 Notebook 超時不會改變 Connector 自身的截止時間 |
| Notebook execution timed out after `60000ms` | 本次執行未取得結果。逐項重試，不能據此認定批次內所有上游服務均失效 |
| BioMart 返回 HTML 維護頁面；PRIDE 返回 `Unexpected end of JSON input` | 未獲得預期結構化響應。稍後重試，並保留響應型別或錯誤以便反饋 |
| ZINC task did not complete in time | 保留返回的任務與結果 URL，檢查原任務；反覆新建任務不能恢復它的結果 |

透過[故障排查](../guides/troubleshooting.md)反饋時，提供操作名、限定輸入、錯誤原文和時間；分享前移除憑據與私有資料。


## 查詢操作引數 {/* #查找操作参数 */}

需要必填欄位、可接受的值與呼叫示例時，查閱 [Connector 操作引數參考](../reference/connector-operations.md)。先在本頁選擇來源，再按具體操作查引數。

實現依據: [ConnectorsPanel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx)。

目錄來源: [catalog.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [registry.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
