---
title: "委派任務與驗證結果"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 委派任務與驗證結果 {/* #委派任务与验证结果 */}

委派是把任務交給單獨的子任務，由 Main Agent 協調對話。在主會話中選擇 Specialist 發言，與真正產生子任務，是兩種不同操作。

## 準備明確的交接 {/* #准备明确的交接 */}

| 資訊 | 本例 |
| --- | --- |
| 角色 | RNA-seq QC Reviewer，儲存 ID `rna-seq-qc-reviewer` |
| 輸入 | 完整 GSE60450 樣本 QC CSV，或當前有效不可變檔案版本 |
| 任務 | 檢查 12 個完整、非空且唯一的樣本 ID，以及每個樣本的計數約束 |
| 輸出 | 檢查表及每個樣本的算式 |
| 範圍 | 只讀、不安裝新包、不做差異表達解釋 |

1. [建立並配置角色](./identity.md)，確認啟用。
2. 在當前對話 **Agent controls** 開啟 **Delegation**，核對模型和認證可用。
3. 明確要求 Main Agent 委派，說明角色和完整任務。交接檔案時由應用解析當前版本，不猜 ID，不把檔名當版本引用。
4. 檢視真實委派活動及子任務狀態；Main Agent 的進度描述不能代替子任務記錄。
5. 點選子任務入口開啟 **Subagents**，在 **Subagent Frame** 選擇任務，讀取對話、工具結果及最終狀態。
6. 子任務請求權限時，在父對話檢查請求範圍並響應；完成後逐項驗收。

## 核對交接和返回結果 {/* #核对交接和返回结果 */}

### 核對直接提供的小表格 {/* #实操十二个样本约束 */}

<p className="example-label"><strong>案例演示</strong> 委派十二個樣本的表格核對</p>

下載完整的 <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">樣本 QC CSV</ExampleDownload>，將表頭和十二行資料全部貼上到下方請求後，保留所有列與完整樣本標識。本例使用[建立角色](identity.md)中的已啟用角色，並要求 Python 可用以執行算術檢查。此項小範圍檢查不需要額外 Skill。

> Delegate to RNA-seq QC Reviewer. Use only the complete inline CSV below. Execute the arithmetic in Python, verify twelve distinct full sample identifiers, and check zero_count_genes + detected_genes_count_gt_0 = 27179 for every row. Return each result and state that this checks supplied summary data, not independent access to the original count matrix.

![完成的 Specialist 子任務及逐樣本檢查](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.webp)

本例結果：子任務實際執行 Python Notebook，得到 **12 行、12 個唯一且非空的完整 ID，12/12 個求和均為 27,179**。首個樣本為 `8,664 + 18,515 = 27,179`，數值欄位完整且非負。

這些結果只驗證彙總表內部一致性，不能獨立重算原始矩陣的總量/中位數、確認樣本條件或建立生物學質量閾值。

<span id="核对文件交接与独立模型" />

### 選擇獨立模型 {/* #选择独立模型 */}

在 **Settings → Model → Subagent** 選擇固定模型後，再啟動委派。開啟子任務記錄核對實際模型；不要用主會話的模型標籤判斷子任務。獨立模型示例中，Main 使用 `gpt-5.6-sol`，子任務記錄顯示 `gpt-5.6-luna`，兩者均透過 Codex 訂閱執行。

### 把檔案交給子任務 {/* #把文件交给子任务 */}

<p className="example-label"><strong>示例</strong> 把樣本 QC 檔案交給子任務</p>

1. 透過會話附件選單新增原始檔，等待上傳完成。
2. 要求 Main 把這個準確的上傳版本交給子任務，說明檢查項與輸出要求；不要用檔名或猜測的版本 ID 代替檔案。
3. 開啟 **Subagents** 並選擇子任務。在 **Notebook** 的 **Agent** 篩選中選擇該子任務，檢視實際檔案讀取。
4. 將子任務返回的行數、列名和校驗和與原始檔比較，再開啟儲存的輸出核對計算。

對於[公開樣本指標 CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv)，預期是 **12 行資料**，`total_counts` 總和為 **269,027,617**，輸入校驗和保持不變。這些檢查針對提供的樣本彙總表，不會重新計算原始基因計數矩陣。

| 檢查 | 應看到什麼 |
| --- | --- |
| 版本已接受 | 應用在所屬會話中解析了當前不可變上傳/產物版本 |
| 子任務能讀取 | 子任務工具返回檔案內容；僅出現檔名或暫存路徑不夠 |
| 檢查已執行 | 子任務執行了計算，儲存的結果與原始檔一致 |

出現輸入不可用錯誤時，重新附加檔案並使用當前版本重試。若子任務返回 **`PermissionError: [Errno 1] Operation not permitted`**，保留準確錯誤；重新附加後仍無法讀取時，按[故障排查](../guides/troubleshooting.md)反饋。不要把檔案移入應用內部資料夾來繞過錯誤。

### 讓子任務使用 Skill {/* #让子任务使用-skill */}

先匯入或建立 Skill。使用 Specialist 時，在角色的 [Skills 與 Connectors](capabilities.md) 中分配方法，然後啟動新的委派任務，明確指定方法名稱，並要求子任務先讀取已安裝的指令。

檢視子任務工具活動中的 Skill 標識與讀取內容。例如，`rnaseq-count-qc` 要求原始基因計數矩陣，用於描述性質控；十二行樣本彙總表不能替代該輸入。成功讀取安裝包不代表已執行分析，還需單獨檢查執行與儲存結果。

## 正確理解失敗狀態 {/* #正确理解失败状态 */}

| 狀態 | 含義和處理 |
| --- | --- |
| Delegation 關閉 | 在目標會話開啟後重試 |
| 角色禁用 / 設定未完成 | 完成本地設定並啟用準確角色 |
| Input unavailable in this Session | 獲取當前準確 artifact version 或不可變 upload-version；路徑、artifact ID、version ID 不同 |
| Waiting for permission | 檢查對應子任務的操作；父任務可能是在等待而非計算 |
| Child completed | 讀取輸出和工具證據；完成不保證科學正確性 |
| Cancelled / failed | 保留部分結果與真實錯誤，不能把 Main Agent 替代回答寫成委派成功 |

完整小表可以採用內聯交接，但必須註明證據範圍，不能把它當成通用的檔案溯源替代方案。

實現依據: [ComposerAgentControlsMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [SpecialistSubmenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx)。
