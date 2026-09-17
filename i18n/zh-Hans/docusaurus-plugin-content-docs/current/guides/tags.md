---
title: "使用标签组织内容"
last_update:
  date: '2026-09-16'
---

# 使用标签组织内容

Tags 用于 Skills、Connectors、Specialists 和 References，不是所有会话或磁盘文件的通用标签。在 Settings → Tags 创建标签并浏览已分配资源。

分配标签后，打开其详情并选择列出的资源，可返回该资源。移除标签关联会保留资源本身。

## 创建和修改

1. New Tag 中填写名称、图标和颜色。
2. Create 后检查新增行及零资源状态。
3. Edit Tag 重新打开已有字段，Save 保存，Cancel 放弃草稿。

![Transcriptomics 表单](/img/open-science/guides-walkthrough/30-tag-create.webp)

| 字段 | 选项与行为 |
| --- | --- |
| Name | 必填，名称不区分大小写且必须唯一 |
| Icon | Tag、Star、Bookmark、Flask、Book、Database、Code、Bot |
| Color | Gray、Red、Orange、Amber、Green、Blue、Purple、Pink |
| Create / Save | 新建或保存编辑；名称为空时不能提交 |
| Cancel / Back to tags | 离开表单，不保存当前草稿 |

遇到 Could not save Tag 时先比较已有名称，排除仅大小写不同的重复。该提示是通用错误，不能把每次保存失败都归因为重名。

## 分配和查找

打开对应 Skill、Connector、Specialist 或 Reference 的标签控件并选择标签。返回 Tags 选中标签行，检查数量，配合 Filter resources by type 与 Search tagged resources 筛选。类型可选 All resources、Skills、Connectors、Specialists、References。找不到预期资源时先清空搜索和类型筛选。

在资源的标签选择器中，通过 **Search Tags** 输入名称，用 **↑ / ↓** 移动候选项，按 **Enter** 选择。没有同名标签时，可以选择 **Create “name”** 创建并分配；保存后检查选中状态。

添加标签不会连接服务、授予权限，也不会自动把 Skill 分配给 Agent，这些仍由资源能力设置负责。

<p className="example-label"><strong>案例演示</strong> 通过 Transcriptomics 标签找到 Omics Archives</p>

将 **Transcriptomics** 分配给 **Omics Archives** 后，打开标签详情。本例显示 **1 resource**；搜索 `Omics` 保留该 Connector，点击后进入详情。实际使用时替换为自己的标签和资源名，移除关联会保留资源本身。

![通过标签找到 Omics Archives](/img/open-science/guides-walkthrough/35-tagged-connector.webp)

## 排序

**Favorites** 始终位于最前。拖动 **Reorder [name]**，或聚焦手柄后使用方向键移动自定义标签，再检查列表中的位置。

![排序后标签与资源视图](/img/open-science/guides-walkthrough/31-tag-reorder.webp)

## 删除

选择 **Delete Tag**，检查 **Assignments to remove**。删除标签会移除这些关联，资源仍保留；**Cancel** 同时保留标签与关联。

![删除范围确认](/img/open-science/guides-walkthrough/32-tag-delete-boundary.webp)

只想移除某个资源的标签时，在该资源上取消分配，不要删除全局标签。文献集合的操作见[文献库](./library.md)，集合与标签用途不同。

源码：[Tags 页面](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx)、[资源标签控件](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx)。
