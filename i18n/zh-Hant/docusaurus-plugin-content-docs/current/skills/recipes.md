---
title: "Skill 場景配方"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Skill 場景配方 {/* #skill-场景配方 */}

從已有材料和需要做出的判斷選擇配方。方法儲存在 Skill，真實檔案儲存在專案，驗收要求放在對話中。

| 研究場景 | 起點 | Skill 與工具 | 交付物及驗收 | 路線與前置條件 |
| --- | --- | --- | --- | --- |
| 判斷下載的 RNA-seq 計數表是否可進入分析 | 原始計數與來源編號 | rnaseq-count-qc、Python/R Notebook | 結構報告、樣本指標、完整 ID 與未變輸入雜湊 | 本地 Notebook 示例；需啟用 Python/R |
| 核對兩種語言實現的 QC 是否一致 | Python 與 R 的 CSV | Notebook 與 QC 規則 | 按完整 ID 比較；GSE60450 已核對 48 個指標值 | 本地 Notebook 示例；需啟用 Python/R |
| 分享前請另一個角色檢查結果 | 完整 QC 表與明確約束 | RNA-seq QC Reviewer | 獨立子任務記錄與 12 個樣本求和；註明內聯輸入或原檔案訪問 | 內聯表格示例；需啟用 Specialist 和 Python |
| 為新課題準備閱讀清單 | 具體問題和種子 DOI/PMID | Literature Review 與資料庫工具 | 真實檢索 ID、納入理由與全文缺口 | PRISMA 集合示例；需可用文獻 Connector |
| 為定義明確的患者群體整理研究報告 | 群體、適應證、範圍 | Indication Dossier 與研究來源 | 帶日期的證據、階段檔案與未支援的主張 | 可選方法；需準備列出的輸入及該方法依賴 |
| 將探索圖整理為報告用圖 | 已驗證資料與具體主張 | Figure Style | 重開檢查單位、標籤、圖注和資料來源 | 可選方法；需準備列出的輸入及該方法依賴 |
| 組織一張多面板結果圖 | 主張及不可變資料版本 | Figure Composer + Figure Style | 面板規劃、合成圖與複核；從 Main Agent 執行 | 可選方法；需準備列出的輸入及該方法依賴 |
| 檢查整套圖能否支撐論文 | 稿件、圖注與完整圖組 | Paper Narrative | 圖組論證順序與證據缺口，不虛構實驗 | 可選方法；需準備列出的輸入及該方法依賴 |
| 解決 Notebook 缺包 | 準確錯誤與所選環境 | Environment & Packages | 版本檢查、可行時託管安裝及重啟匯入驗證 | 可選方法；需準備列出的輸入及該方法依賴 |
| 為重複遠端任務準備環境 | 現有 SSH/Slurm 主機與包需求 | Compute Environment Setup + Remote Compute | 命名環境與驗證記錄，主機環境由使用者/管理員維護 | Direct SSH 見遠端計算；Slurm 需記賬能力 |
| 比較蛋白結構預測 | 合法序列或複合物定義 | AlphaFold2、Boltz、Chai-1、ESMFold2、OpenFold3 | 結構、置信度、輸入對應；需準備權重和 GPU | 可選方法；需準備列出的輸入及該方法依賴 |
| 保留固定殘基重設計骨架 | PDB、鏈對映與約束 | ProteinMPNN / LigandMPNN / SolubleMPNN | 序列與鏈對應、約束檢查；按方法支援 CPU | 小型 ProteinMPNN CLI 示例；其他方法需單獨準備 |
| 整合單細胞批次 | AnnData、批次標籤和原始計數 | scvi-tools 或 scGPT | 核對細胞/基因 ID 與模型結果；不直接用於 bulk 計數 | 可選方法；需準備列出的輸入及該方法依賴 |

## 復現本地 RNA-seq 配方 {/* #复现本地-rna-seq-配方 */}

<p className="example-label"><strong>案例演示</strong> 執行並檢查 RNA-seq 原始計數 QC</p>

1. 使用真實 [GSE60450 輸入及 QC 表](../reference/example-data.md)。
2. 建立或匯入 [rnaseq-count-qc](./create.md)。
3. 使用[呼叫示例](./overview.md)發出範圍明確的請求。
4. 開啟實際<ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">校驗報告</ExampleDownload>，核對 27,179 個基因與 12 個樣本；不要把預覽行上限當成完整維度。
5. 需要另一角色檢查時，按[委派與驗證](../specialists/delegate.md)操作並閱讀真實子任務記錄。

## 明確完成條件 {/* #明确完成条件 */}

請求應包含來源、方法、輸出檔案和檢查方式，例如：

> Use the existing GSE60450 sample-QC CSV to make a report figure with Figure Style. Keep full sample IDs in the companion table, label raw count units, preserve the source, save a new figure, and reopen it to inspect all labels. Report any unavailable dependency before changing the method.

按表中的前置條件選擇配方，並在儲存後檢查交付物。方法指引本身不會安裝外部軟體、取得服務憑據或完成科學驗證。

實現依據: [manifest.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md)。

適用的長時間執行操作見[後臺任務與結果送達](../guides/notebook.md)。結果送達後檢查實際執行和儲存輸出。Environment & Packages、Compute Environment Setup、Remote Compute (SSH) 保持啟用，但執行時、網路和主機要求仍然有效。
