---
title: "使用標籤組織內容"
last_update:
  date: '2026-09-16'
---

# 使用標籤組織內容 {/* #使用标签组织内容 */}

Tags 用於 Skills、Connectors、Specialists 和 References，不是所有會話或磁碟檔案的通用標籤。在 Settings → Tags 建立標籤並瀏覽已分配資源。

分配標籤後，開啟其詳情並選擇列出的資源，可返回該資源。移除標籤關聯會保留資源本身。

## 建立和修改 {/* #创建和修改 */}

1. New Tag 中填寫名稱、圖示和顏色。
2. Create 後檢查新增行及零資源狀態。
3. Edit Tag 重新開啟已有欄位，Save 儲存，Cancel 放棄草稿。

![Transcriptomics 表單](/img/open-science/guides-walkthrough/30-tag-create.png)

| 欄位 | 選項與行為 |
| --- | --- |
| Name | 必填，名稱不區分大小寫且必須唯一 |
| Icon | Tag、Star、Bookmark、Flask、Book、Database、Code、Bot |
| Color | Gray、Red、Orange、Amber、Green、Blue、Purple、Pink |
| Create / Save | 新建或儲存編輯；名稱為空時不能提交 |
| Cancel / Back to tags | 離開表單，不儲存當前草稿 |

遇到 Could not save Tag 時先比較已有名稱，排除僅大小寫不同的重複。該提示是通用錯誤，不能把每次儲存失敗都歸因為重名。

## 分配和查詢 {/* #分配和查找 */}

開啟對應 Skill、Connector、Specialist 或 Reference 的標籤控制元件並選擇標籤。返回 Tags 選中標籤行，檢查數量，配合 Filter resources by type 與 Search tagged resources 篩選。型別可選 All resources、Skills、Connectors、Specialists、References。找不到預期資源時先清空搜尋和型別篩選。

在資源的標籤選擇器中，透過 **Search Tags** 輸入名稱，用 **↑ / ↓** 移動候選項，按 **Enter** 選擇。沒有同名標籤時，可以選擇 **Create “name”** 建立並分配；儲存後檢查選中狀態。

新增標籤不會連線服務、授予權限，也不會自動把 Skill 分配給 Agent，這些仍由資源能力設定負責。

<p className="example-label"><strong>案例演示</strong> 透過 Transcriptomics 標籤找到 Omics Archives</p>

將 **Transcriptomics** 分配給 **Omics Archives** 後，開啟標籤詳情。本例顯示 **1 resource**；搜尋 `Omics` 保留該 Connector，點選後進入詳情。實際使用時替換為自己的標籤和資源名，移除關聯會保留資源本身。

![透過標籤找到 Omics Archives](/img/open-science/guides-walkthrough/35-tagged-connector.png)

## 排序 {/* #排序 */}

**Favorites** 始終位於最前。拖動 **Reorder &#91;name&#93;**，或聚焦手柄後使用方向鍵移動自定義標籤，再檢查列表中的位置。

![排序後標籤與資源檢視](/img/open-science/guides-walkthrough/31-tag-reorder.png)

## 刪除 {/* #删除 */}

選擇 **Delete Tag**，檢查 **Assignments to remove**。刪除標籤會移除這些關聯，資源仍保留；**Cancel** 同時保留標籤與關聯。

![刪除範圍確認](/img/open-science/guides-walkthrough/32-tag-delete-boundary.png)

只想移除某個資源的標籤時，在該資源上取消分配，不要刪除全域標籤。文獻集合的操作見[文獻庫](./library.md)，集合與標籤用途不同。

原始碼：[Tags 頁面](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx)、[資源標籤控制元件](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx)。
