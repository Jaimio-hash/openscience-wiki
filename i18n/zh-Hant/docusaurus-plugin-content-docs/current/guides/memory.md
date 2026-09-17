---
title: "記憶與對話上下文"
last_update:
  date: '2026-09-10'
---

# 記憶與對話上下文 {/* #记忆与对话上下文 */}

Memory 儲存可複用筆記；上下文視窗是單次模型請求可用的材料。儲存筆記不等於模型已召回，能看到舊訊息也不等於下一次請求包含全部原始歷史。

用分類儲存長期適用的約定，例如保留原始計數、區分基因長度與樣本計數。希望新請求自動獲得這些約定時，開啟 Memory 和該分類的 Auto-recall。

## 建立分類和筆記 {/* #创建分类和笔记 */}

<p className="example-label"><strong>案例演示</strong> 儲存並召回 RNA-seq 報告約定</p>

1. 開啟 Settings → Memory → New category。
2. Name 填 RNA-seq methods，在 When should the agent save a note here? 描述收錄條件。
3. 明確選擇 Auto-recall，本例關閉，作為人工維護的方法筆記。
4. Create 後選 Add，輸入筆記並 Save。
5. 返回分類，檢查內容與數量。

![分類欄位和 Auto-recall](/img/open-science/guides-walkthrough/17-memory-category.webp)

本例筆記要求保留 GEO 原始矩陣、把 Entrez Gene ID 作為文字、區分基因長度和樣本計數，並記錄 SHA-256。這是工作約定，不是分析結果。

![Memory 關閉時手動儲存的筆記](/img/open-science/guides-walkthrough/18-memory-note.webp)

| 控制元件 | 影響與邊界 |
| --- | --- |
| Memory 開關 | 控制 Agent 儲存/召回；關閉仍保留筆記並允許人工編輯 |
| 分類行 | 檢視分類筆記及數量，分類可跨專案組織 |
| Project 檢視 | 檢視專案範圍筆記，與全域分類區分 |
| New category | 名稱最多 64 字元、說明 1,000 字元，最多 10 個自定義分類 |
| Add / Memory note | 筆記最多 4,000 字元，空白時不能儲存 |
| Copy note | 複製筆記文字 |
| Edit note → Save / Cancel | 儲存修改或放棄當前編輯 |
| Category actions → Edit | 編輯自定義名稱、說明和 Auto-recall |
| Auto-recall | 控制該分類自動納入上下文，但仍受總開關控制 |

**About you** 是內建分類，不能像自定義分類一樣修改或刪除其身份。

## 從對話儲存約定 {/* #从对话保存约定 */}

1. 開啟 **Settings → Memory**，開啟 **Memory**。在 **RNA-seq methods → Category actions** 中開啟 **Auto-recall**。
2. 在專案對話中要求 Agent 記住已確認的約定，並指定分類。例如：“請在 RNA-seq methods 中記住：GSE60450 描述性質控應分別報告零計數基因數和檢出基因數，每個樣本的兩項之和應為 27,179。”
3. 若出現授權請求，檢查 **Save memory** 中擬儲存的內容、分類和專案範圍，再選擇 **Allow once**。內容不符合已確認約定時選擇 **Deny**。
4. 重新開啟分類，檢查筆記實際存在、文字正確，並歸屬預期專案。**auto** 表示由 Agent 建立，不代表應用已透過計算驗證這條約定。

![Agent 儲存的報告約定與手動維護的來源管理筆記](/img/open-science/non-workflow-completion/05-memory-note-category.webp)

## 在新會話檢查召回 {/* #在新会话检查召回 */}

在**同一專案中新建會話**，詢問已儲存的報告約定，不在問題中給出答案，再與筆記比較。在原會話提問時，模型可能直接引用已有歷史。

關閉 **Memory** 總開關，再新建一個會話詢問相同問題。檢查 Agent 是否不再透過應用記憶收到該筆記。Settings 中儲存的筆記仍然保留。關閉 Memory 不會刪除筆記，也不會清除已有會話裡已經出現的文字。

以上儲存由明確的“請記住”請求觸發，不代表 Agent 會主動識別所有值得儲存的約定。上下文壓縮與儲存記憶筆記是兩項獨立機制。

## 檢查會話上下文 {/* #检查会话上下文 */}

在會話中點選 Context used 百分比，或在可用時開啟新增選單的 Context window。檢視 Current composition、History、Session call summary。組成包括系統提示、工具與代理、訊息、聯結器、Skills 和框架開銷。

選擇歷史點可檢視對應輪次、模型、佔用和結束狀態。本地估算與 Provider 報告可能不同；無分類明細不等於零用量。壓縮標記記錄上下文事件，不等於新增產物或刪除所有可見訊息，手動壓縮入口取決於當前框架。

使用 OpenCode 時，如果上下文彈層提供 **Compact**，點選後等待 **Context compacted**。原訊息可能仍然可見，但後端會從摘要繼續。繼續執行前，要求 Agent 列出保留的約束，並與原要求逐項核對。如有遺漏或錯誤，先重新說明，再開始下一步操作。壓縮不保證資訊無損；Provider 統計也可能與本地估算不同。

![壓縮完成及 Provider 報告的上下文佔用](/img/open-science/non-workflow-completion/11-context-compacted.webp)

繼續任務時寫清目標、已接受決策、輸入/輸出檔案、已驗證結果和未解決問題，並連結儲存的證據。分支與匯出見[會話](./sessions.md)，累計用量見[Usage](./usage.md)。

## 刪除範圍 {/* #删除范围 */}

**Delete note** 確認後刪除單條筆記；**Delete category** 刪除分類及所含筆記，請檢查受影響數量。**Clear all** 清除自定義分類和筆記，保留 About you。範圍大於預期時選擇取消。舊備份仍可能保留已刪除內容。

原始碼：[Memory 定義](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts)、[頁面](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx)、[上下文檢視器](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx)。
