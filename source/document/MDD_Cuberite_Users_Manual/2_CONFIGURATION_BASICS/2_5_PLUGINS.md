---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 2.5 - 插件
comment_id: /document/MDD_Cuberite_Users_Manual/2_CONFIGURATION_BASICS/
---
## 5 - 插件

插件是Cuberite的重要定制方法。有许多不同的官方和第三方插件可用。

Cuberite插件是用Lua编写的，并通过一个广泛的API与服务器进行交互。它们被设计为易于编写，适合具备基本编程经验的任何人，因此如果现有的插件不能满足您的需求，您可以轻松地编写自己的插件。如果您想学习如何编写自己的插件，请查阅指南。

Cuberite有一个插件存储库，您可以在其中公开上传您的插件，并下载其他人发布的插件。

### 激活插件

在下载插件后，您需要将其放置在插件目录中。然后，您应该编辑文件的各个部分并在其中添加一个插件条目。以下是添加名为MyNewPlugin的插件的示例。`Plugins/[Plugins]settings.ini`

```
[Plugins]
Core=1
ChatLog=1
MyNewPlugin=1
MyDisabledPlugin=0
```

### 编写插件

要开始编写 Cuberite 插件，请阅读[Writing a Cuberite plugin](https://api.cuberite.org/Writing-a-Cuberite-plugin.html)。Cuberite 插件是用 Lua 编程语言编写的。Cuberite 有一个便于查阅的 [API文档](https://api.cuberite.org/)。

### 你已经准备好了！

如果您已经读到这里，您现在应该有足够的知识来操作 Cuberite 服务器。本书的其余部分将更深入地介绍更多功能和进一步的配置选项。