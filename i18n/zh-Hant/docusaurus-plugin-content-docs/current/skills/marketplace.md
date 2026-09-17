---
title: "Skill 市場"
description: "從 Skill 市場發現、安裝、更新和管理科研方法。"
last_update:
  date: '2026-09-16'
---

# Skill 市場 {/* #skill-市场 */}

透過 **Settings → Skills → Browse Marketplace** 查詢和安裝科研方法，無需先自行尋找並匯入倉庫。你可以在安裝前檢視方法說明，選擇要使用的方法，並在準備好後更新版本。

需要匯入 ZIP、本機 Skill 或指定 GitHub 倉庫時，使用[Skill 匯入與管理](manage.md)。檢視科研方法及輸入概覽，見 [Skill 目錄](directory.md)。

![Skill 市場的搜尋、分類篩選和 Install 入口](/img/open-science/feature-guides-2026-09/marketplace-browse.webp)

## 查詢適合的方法 {/* #查找适合的方法 */}

1. 開啟 **Marketplace**，搜尋或按分類篩選。
2. 開啟 Skill 詳情，閱讀用途、作者、來源、許可資訊及可用的評估詳情。
3. 對照專案檢查輸入、所需工具和執行依賴，再決定是否安裝。

目錄簽名確認的是分發身份，不代表方法一定適合本次研究，也不能證明電腦已具備所需依賴。

![Skill 詳情中的作者、版本、許可資訊和 Install 操作](/img/open-science/feature-guides-2026-09/marketplace-detail.webp)

## 安裝並使用 Skill {/* #安装并使用-skill */}

1. 在目標卡片選擇 **Install**，等待 **Installed**。
2. 開啟已安裝 Skill，確認 Main 或目標 Specialist 的可用性。
3. 準備符合方法要求的輸入，先完成一個小範圍任務。
4. 開啟生成檔案，對照請求檢查結果。安裝完成本身不能證明科研執行成功。

在對話中選擇方法，見 [Skills 的使用](overview.md)。配置專家使用的方法，見[分配 Skills 與 Connectors](../specialists/capabilities.md)。

## 批次安裝或更新 {/* #批量安装或更新 */}

1. 選擇 **Batch manage**，再選擇 **Not installed** 或 **Updates**。
2. 篩選目錄並勾選目標條目。**Select all filtered results** 會選擇當前篩選下的全部結果。
3. 經過 **Review selection** 檢查列表後，使用 **Install selected** 或 **Update selected**。
4. 等待操作結束，逐項檢視結果。安裝按順序進行，停止時會先完成當前項。
5. 檢查失敗或停止的條目，只重試需要的項。

## 更新或移除方法 {/* #更新或移除方法 */}

有更新時，先開啟 **Review Skill update**，核對新舊版本、受影響的 Specialist，以及新增、修改和刪除的檔案。差異檢視提供行號，紅色表示刪除，綠色表示新增。二進位制、過大或無法比較的檔案應以檔案變更清單為準，不能將“無法顯示差異”理解為檔案未變化。

如果提示存在本地修改，更新會替換這些修改；需要保留時先[匯出副本](manage.md)。確認後選擇 **Update existing Skill**，原 Skill 身份及其 Specialist 關聯會保留。出現 **Local conflict** 時，先開啟 **View installed Skill**，再按可用的稽核入口處理；仍被阻止時保留錯誤資訊，不要為了強行安裝而刪除本地方法。

在已安裝 Skill 的詳情中調整可用性或解除安裝。修改後，確認 Main 或目標 Specialist 能使用預期的方法；下載完成與方法可用是不同的狀態。

## 安裝或使用失敗時 {/* #安装或使用失败时 */}

目錄或軟體包校驗失敗時，保留錯誤資訊，並從正常市場入口重試，不要替換為未經校驗的下載。市場瀏覽透過官方分發服務完成，無需 GitHub 登入。

安裝完成但任務無法執行時，檢查報錯指向的依賴或工具。軟體依賴按[執行環境說明](../guides/runtimes.md)處理，所需服務按 [Connector 說明](../guides/connectors.md)配置；然後使用預期輸入重試任務，並檢查儲存結果。

## 將自己的 Skill 提交到市場 {/* #submit-a-skill */}

市場上架透過 GitHub 源倉庫提交，並由維護者稽核。**Upload skills** 是匯入到本機；個人 Skill 編輯器中的 **Publish** 是儲存本機 Skill。這兩個操作都不會直接將方法上架到公開市場。

### 準備 Skill {/* #准备-skill */}

1. [建立並測試 Skill](create.md)，包含它需要的指令碼、參考資料和其他檔案。
2. 將這些檔案上傳到自己的 GitHub 倉庫子目錄，例如 `skills/your-skill-name/`，其中包含 `SKILL.md`，並保留所需的許可證檔案。
3. 提交完整內容，複製這次提交的完整 SHA。市場提交需要固定版本，不能只填寫持續變化的分支名。

`SKILL.md` 需要 `name`、`description`，以及 `license` 或 `metadata.license` 中的許可宣告。宣告和隨包保留的許可證應對應實際提交內容。

### 準備提交檔案 {/* #准备提交文件 */}

使用官方 [release.config.json 模板](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/example/release.config.json)，將佔位內容替換為自己的 Skill 資訊：

| 欄位 | 填寫內容 |
| --- | --- |
| `id` | 與 `SKILL.md` 一致的小寫連字元名稱 |
| `version` | 軟體包版本，例如 `1.0.0` |
| `category` | 從 `Academic Writing`、`Data Analysis`、`Evidence Insight`、`Protocol Design`、`Other` 中選擇一個 |
| `source.repository`、`source.commit`、`source.path` | 自己的 GitHub HTTPS 地址、完整 40 位提交 SHA，以及 Skill 所在目錄 |
| `license_files` | 該次提交中適用許可證檔案的倉庫相對路徑 |

模板中全為零的提交號僅用於佔位，不能用於釋出。提交前核對當前[格式要求](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/release.config.schema.json)。

### 申請收錄並檢查上架結果 {/* #申请收录并检查上架结果 */}

按市場倉庫的[貢獻說明](https://github.com/aipoch/openscience-skill-marketplace/blob/main/CONTRIBUTING.md)準備 Pull Request；沒有寫入權限時，先 Fork 倉庫。提供提交檔案、來源位置、方法用途和本地測試結果，完整 Skill 內容仍保留在自己的源倉庫中。維護者可將稽核後的配置儲存在 `authoring/submissions/<id>/release.config.json`，審閱時確認具體位置。

維護者稽核並登記符合要求的提交後，再安排釋出。提交檔案或合併 PR 本身不代表已在應用中上架，稽核與釋出階段見[作者指南](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/README.md)。

釋出後回到 **Browse Marketplace → Refresh**，搜尋自己的 Skill，核對來源和版本，再安裝使用。更新已釋出方法時，應使用新的軟體包版本和源提交重新提交；修改 GitHub 倉庫內容不會自動更新別人已安裝的副本。
