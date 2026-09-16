---
title: "配置與上下文"
last_update:
  date: '2026-09-10'
---

# 配置與上下文 {/* #配置与上下文 */}

本參考區分專案上下文、新會話預設值和已有會話配置。對應介面步驟見[專案](../guides/projects.md)或[模型接入](../guides/providers.md)。

## 上下文和配置歸屬 {/* #上下文和配置归属 */}

| 值 | 歸屬與作用 | 不能替代 |
| --- | --- | --- |
| 專案 **Name** | 必填顯示名，最多 200 字元 | 唯一專案 ID |
| 專案 **Description** | 專案列表說明，最多 1,000 字元，不進入代理提示詞 | 代理指令 |
| 專案 **Agent Context** | 最多 16,000 字元，進入新建和恢復的專案會話，傳送給模型提供方 | 憑據或實際任務請求 |
| 會話 **Title** | 顯示標題，最多 80 字元 | 專案上下文或分支標識 |
| 會話 **Description** | 用於整理的說明，最多 1,000 字元 | 新使用者訊息 |
| 模型提供方 | 連線、賬號和已配置模型目錄 | 代理框架安裝 |
| 代理框架 | 負責推進任務的執行時 | Notebook 直譯器 |
| Python/R 執行時 | Notebook 執行所用直譯器 | 模型或推理強度 |
| Memory | 按範圍和召回設定儲存的筆記 | 完整對話歷史 |
| Skill | 可複用方法指令和檔案 | 已安裝依賴或已授權服務憑據 |

## 高階：Task API 配置 {/* #高级task-api-配置 */}

### 透過 Task API 建立新會話 {/* #通过-task-api-创建新会话 */}

任務執行器逐欄位解析配置。下列優先順序適用於 **Task API 新會話**，不會追溯應用到所有已有桌面對話。

| 欄位 | 從高到低的取值順序 |
| --- | --- |
| 權限模式 | 請求顯式值 → 專案會話預設值 → 應用預設值 → `ask` |
| Auto-review | 請求顯式值 → 專案預設值 → `false` |
| 啟用 Memory | 請求顯式值 → 專案預設值 → `true` |
| 委派策略 | 請求顯式值 → 專案預設值 → `allow` |
| Specialist | 請求顯式值 → 已設定的專案預設值 |
| 提供方／模型／推理強度 | 將顯式配置補丁應用到專案配置，或有效的應用／提供方配置 |
| 選中的 Compute Hosts | 請求顯式 ID → 專案選中 ID |

新會話準備階段會把選中 ID 加入已啟用主機集合。顯式空的 enabled 列表先清除繼承的啟用列表，再納入選中主機。更新已有會話配置時，每個選中 ID 必須包含在已啟用集合中。

實際讀取和更新命令見 [CLI](cli.md) 或 [Task SDK/API](api.md)。專案會話預設值屬於配置介面約定，不代表專案 Name/Description 對話方塊提供全部這些欄位。

### 可接受的配置值 {/* #可接受的配置值 */}

| 欄位 | 接受的值 |
| --- | --- |
| `agentConfiguration.providerId` | 非空、已配置的提供方 ID |
| `agentConfiguration.model` | 可選模型 ID；更新補丁可用 `null` 恢復提供方預設 |
| `agentConfiguration.reasoningEffort` | `default`、`low`、`medium`、`high`、`xhigh`、`max`；實際可選值取決於提供方／模型 |
| `permissionProfile` | `ask`、`auto`、`full` |
| `autoReviewEnabled` | 布林值 |
| `memoryEnabled` | 布林值 |
| `delegationPolicy` | `allow`、`deny` |
| 專案預設值的 `specialistId` | 非空 ID；普通會話配置補丁沒有此欄位 |
| `computeHosts.enabled`、`.selected` | 非空主機 ID 陣列；selected 必須是 enabled 的子集 |

Schema 會拒絕未知欄位。模型出現在列表中，不代表當前框架或憑據可以使用它，應檢視已配置目錄和可用狀態。

### 提供方預設和不可用配置 {/* #提供方默认和不可用配置 */}

訂閱提供方未指定模型時，保留賬號／CLI 管理的預設模型，不會固定為目錄中的第一項。如果已儲存會話配置不可選，介面解析器可以回退到應用當前可選配置；兩者都不可用時報告 unavailable。更換提供方後重新開啟舊任務，應檢查實際選擇的模型。

### 更新和恢復規則 {/* #更新和恢复规则 */}

修改已有會話前先讀取當前配置。更新時攜帶 **`expectedRevision`**，它是非負整數。版本過期會得到 `session_revision_conflict`。存在活動任務，或會話不處於 idle/error 狀態時，服務也會拒絕配置更新。

切換提供方時必須明確指定模型，或用 `model: null` 選擇新提供方預設。只改提供方而省略模型，不會默默繼承舊提供方的模型。恢復預設與填寫空字串不同。

恢復已有 Task API 會話前，如果要修改提供方、模型、推理強度、Memory 或啟用主機，應先呼叫會話配置更新。在 resume 請求直接提供這些建立時欄位會返回 `invalid_request`。工作目錄仍必須與該會話的規範化目錄一致。

更新專案預設值使用從當前專案讀取的正整數時間戳 **`expectedUpdatedAt`**，並提供 patch。專案預設欄位為 `null` 時移除覆蓋，省略欄位則保留。修改預設值影響後續新會話，不會改寫已有產物的證據。

## 主機說明與秘密儲存選項 {/* #主机说明与秘密存储选项 */}

已儲存 Compute 主機說明與探測資源分別管理。已儲存說明為空與資源探測成功是不同狀態。Agent 協助替換說明時，以當前儲存文字作為校驗條件。見[主機詳情](../guides/remote-compute.md)，該內部約定不同於公共 Task API。

憑據儲存是啟動選項，不是專案/會話偏好。適用範圍、預設 OS 儲存與遷移限制見 [Linux 檔案模式](server.md)，不要把 credential-store 引數寫入會話配置 JSON。

## 相關邊界 {/* #相关边界 */}

授權範圍和策略順序見[權限](permissions.md)。可移植 Skill、Specialist、Connector 文件見[包格式](packages.md)。包匯出不等於會話配置或賬號憑據的完整匯出。桌面會話與本地 Web 服務的區別見[無介面服務](server.md)。

原始碼：[主機約定](https://github.com/aipoch/open-science/commit/04adfd61)、[啟動憑據模式](https://github.com/aipoch/open-science/commit/3411d23c)。

技術參考：[專案約定](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [配置 Schema](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [任務配置解析](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [提供方回退](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
