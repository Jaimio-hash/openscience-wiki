---
title: Skill 市场
description: 从 Skill 市场发现、安装、更新和管理科研方法。
last_update:
  date: '2026-09-16'
---

# Skill 市场

通过 **Settings → Skills → Browse Marketplace** 查找和安装科研方法，无需先自行寻找并导入仓库。你可以在安装前查看方法说明，选择要使用的方法，并在准备好后更新版本。

需要导入 ZIP、本机 Skill 或指定 GitHub 仓库时，使用[Skill 导入与管理](manage.md)。查看科研方法及输入概览，见 [Skill 目录](directory.md)。

![Skill 市场的搜索、分类筛选和 Install 入口](/img/open-science/feature-guides-2026-09/marketplace-browse.webp)

## 查找适合的方法

1. 打开 **Marketplace**，搜索或按分类筛选。
2. 打开 Skill 详情，阅读用途、作者、来源、许可信息及可用的评估详情。
3. 对照项目检查输入、所需工具和运行依赖，再决定是否安装。

目录签名确认的是分发身份，不代表方法一定适合本次研究，也不能证明电脑已具备所需依赖。

![Skill 详情中的作者、版本、许可信息和 Install 操作](/img/open-science/feature-guides-2026-09/marketplace-detail.webp)

## 安装并使用 Skill

1. 在目标卡片选择 **Install**，等待 **Installed**。
2. 打开已安装 Skill，确认 Main 或目标 Specialist 的可用性。
3. 准备符合方法要求的输入，先完成一个小范围任务。
4. 打开生成文件，对照请求检查结果。安装完成本身不能证明科研运行成功。

在对话中选择方法，见 [Skills 的使用](overview.md)。配置专家使用的方法，见[分配 Skills 与 Connectors](../specialists/capabilities.md)。

## 批量安装或更新

1. 选择 **Batch manage**，再选择 **Not installed** 或 **Updates**。
2. 筛选目录并勾选目标条目。**Select all filtered results** 会选择当前筛选下的全部结果。
3. 经过 **Review selection** 检查列表后，使用 **Install selected** 或 **Update selected**。
4. 等待操作结束，逐项查看结果。安装按顺序进行，停止时会先完成当前项。
5. 检查失败或停止的条目，只重试需要的项。

## 更新或移除方法

有更新时，先打开 **Review Skill update**，核对新旧版本、受影响的 Specialist，以及新增、修改和删除的文件。差异视图提供行号，红色表示删除，绿色表示新增。二进制、过大或无法比较的文件应以文件变更清单为准，不能将“无法显示差异”理解为文件未变化。

如果提示存在本地修改，更新会替换这些修改；需要保留时先[导出副本](manage.md)。确认后选择 **Update existing Skill**，原 Skill 身份及其 Specialist 关联会保留。出现 **Local conflict** 时，先打开 **View installed Skill**，再按可用的审核入口处理；仍被阻止时保留错误信息，不要为了强行安装而删除本地方法。

在已安装 Skill 的详情中调整可用性或卸载。修改后，确认 Main 或目标 Specialist 能使用预期的方法；下载完成与方法可用是不同的状态。

## 安装或使用失败时

目录或软件包校验失败时，保留错误信息，并从正常市场入口重试，不要替换为未经校验的下载。市场浏览通过官方分发服务完成，无需 GitHub 登录。

安装完成但任务无法运行时，检查报错指向的依赖或工具。软件依赖按[运行环境说明](../guides/runtimes.md)处理，所需服务按 [Connector 说明](../guides/connectors.md)配置；然后使用预期输入重试任务，并检查保存结果。

## 将自己的 Skill 提交到市场 {/* #submit-a-skill */}

市场上架通过 GitHub 源仓库提交，并由维护者审核。**Upload skills** 是导入到本机；个人 Skill 编辑器中的 **Publish** 是保存本机 Skill。这两个操作都不会直接将方法上架到公开市场。

### 准备 Skill

1. [创建并测试 Skill](create.md)，包含它需要的脚本、参考资料和其他文件。
2. 将这些文件上传到自己的 GitHub 仓库子目录，例如 `skills/your-skill-name/`，其中包含 `SKILL.md`，并保留所需的许可证文件。
3. 提交完整内容，复制这次提交的完整 SHA。市场提交需要固定版本，不能只填写持续变化的分支名。

`SKILL.md` 需要 `name`、`description`，以及 `license` 或 `metadata.license` 中的许可声明。声明和随包保留的许可证应对应实际提交内容。

### 准备提交文件

使用官方 [release.config.json 模板](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/example/release.config.json)，将占位内容替换为自己的 Skill 信息：

| 字段 | 填写内容 |
| --- | --- |
| `id` | 与 `SKILL.md` 一致的小写连字符名称 |
| `version` | 软件包版本，例如 `1.0.0` |
| `category` | 从 `Academic Writing`、`Data Analysis`、`Evidence Insight`、`Protocol Design`、`Other` 中选择一个 |
| `source.repository`、`source.commit`、`source.path` | 自己的 GitHub HTTPS 地址、完整 40 位提交 SHA，以及 Skill 所在目录 |
| `license_files` | 该次提交中适用许可证文件的仓库相对路径 |

模板中全为零的提交号仅用于占位，不能用于发布。提交前核对当前[格式要求](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/release.config.schema.json)。

### 申请收录并检查上架结果

按市场仓库的[贡献说明](https://github.com/aipoch/openscience-skill-marketplace/blob/main/CONTRIBUTING.md)准备 Pull Request；没有写入权限时，先 Fork 仓库。提供提交文件、来源位置、方法用途和本地测试结果，完整 Skill 内容仍保留在自己的源仓库中。维护者可将审核后的配置保存在 `authoring/submissions/<id>/release.config.json`，审阅时确认具体位置。

维护者审核并登记符合要求的提交后，再安排发布。提交文件或合并 PR 本身不代表已在应用中上架，审核与发布阶段见[作者指南](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/README.md)。

发布后回到 **Browse Marketplace → Refresh**，搜索自己的 Skill，核对来源和版本，再安装使用。更新已发布方法时，应使用新的软件包版本和源提交重新提交；修改 GitHub 仓库内容不会自动更新别人已安装的副本。
