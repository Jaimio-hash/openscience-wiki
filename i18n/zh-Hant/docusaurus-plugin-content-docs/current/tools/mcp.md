---
title: "Connectors 與 MCP"
last_update:
  date: '2026-09-10'
---

# Connectors 與 MCP {/* #connectors-与-mcp */}

Connector 向代理提供可呼叫的工具。本頁幫助選擇接入型別、判斷就緒狀態。表單欄位、配置匯入匯出與連線管理統一見[配置 Connectors](../guides/connectors.md)。

<span id="检查已有-connector" />

<span id="连接与调用错误" />

## 選擇接入型別 {/* #选择接入类型 */}

| 型別 | 適用情況 | 所需條件 |
| --- | --- | --- |
| 內建 Connector | 應用已經提供所需的資料來源或操作 | 為目標代理啟用；部分服務還需要憑據 |
| 本地 MCP 服務 | 工具需要在本機執行或讀取本地科研資料 | 已安裝的啟動器、服務程式與允許訪問的輸入路徑 |
| 遠端 MCP 服務 | 服務透過託管 MCP 端點提供工具 | 正確的 MCP 端點、受支援的 HTTP/SSE 傳輸及必要認證 |

**Molecule** 提供本地結構渲染，不屬於遠端資料庫。選擇資料來源見[科學資料庫](databases.md)，檢視分子與序列檔案見[科學檢視器](viewers.md)。選擇 Docker 啟動器不會自動安裝容器引擎或服務映象。

## 區分連線狀態與使用條件 {/* #区分连接状态与使用条件 */}

按下列順序檢查。前一項成功，不代表後一項已經完成。

| 階段 | 檢查內容 | 下一步 |
| --- | --- | --- |
| 配置 | 啟動器或端點正確，所需認證齊全 | 完成 [Connector 表單](../guides/connectors.md) |
| 連線 | 服務響應且工具發現成功 | 檢視連線結果與實際報錯 |
| 代理訪問 | 資源已對 Main 啟用，或已分配給目標 Specialist | 檢查該代理的能力繫結 |
| 操作呼叫 | 工具接受請求並返回所需資料 | 內建工具輸入見[操作引數參考](../reference/connector-operations.md) |
| 研究結果 | 返回標識、來源與範圍符合任務 | 將響應作為證據前核對實際內容 |

啟用開關不代表服務呼叫成功。後設資料響應不等於全文或計數矩陣已經下載。自定義條目可能開啟配置編輯器；內建條目詳情提供工具規範。

## 找到對應操作說明 {/* #找到对应操作说明 */}

| 任務 | 主要說明頁面 |
| --- | --- |
| 新增或編輯服務、匯入多個服務、遷移配置 | [配置 Connectors](../guides/connectors.md) |
| 繫結 API 金鑰或 OAuth 憑據 | [服務憑據](credentials.md) |
| 實現小型服務並呼叫其工具 | [建立自定義工具](custom.md) |
| 查詢資料庫操作欄位 | [Connector 操作引數參考](../reference/connector-operations.md) |
| 使用指令碼管理連線 | [CLI](../reference/cli.md#管理-connector-与凭据) 或 [SDK](../reference/api.md#connector-管理方法) |

## 定位失敗階段 {/* #定位失败阶段 */}

連線失敗時，先判斷啟動器、傳輸或認證中的哪一項出錯。連線成功但呼叫失敗時，先核對代理可用性和該工具的引數，再考慮修改服務配置。按[故障排查](../guides/troubleshooting.md)保留並反饋實際錯誤。

應用在連線時完成 MCP 工具發現。`host.mcp("server", "tools/list", {})` 不是應用工具呼叫，可能返回 **unknown tool**。自定義示例中的未知樣本錯誤也曾被封裝為 `connector_unavailable`；僅憑這個響應無法區分樣本無效與傳輸故障。
