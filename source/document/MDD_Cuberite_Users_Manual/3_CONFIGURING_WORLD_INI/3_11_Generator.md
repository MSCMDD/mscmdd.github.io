---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 3.11 - GENERATOR
comment_id: /document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/
---
## 11 - GENERATOR

指定此世界的生成器设置。这是自定义世界时最强大的工具。

{% note 在修改此设置时，请注意已生成的世界与新生成的地形不会无缝连接。此外，请记住，使用其他生成器（例如Notchian生成器）创建的世界也无法无缝连接！
生成器的选择将极大地影响您之后的选择。 color:warning %}

{% note 这一部分还没有完全完成，因为其中有一些古老的生成代码。这需要进行更多的研究 - 12xx12 color:cyan %}

| 变量 | 描述 | 缺省值 |
| --- | --- | --- |
| Generator | 生成器：</br>- [Composable](https://book.cuberite.org/#Generator_Composable)</br>- Noise3D | Composable |

{% quot COMPOSABLE GENERATOR %}

COMPOSABLE GENERATOR是一个非常强大的工具。您可以混合和匹配不同的生成方法并对其进行自定义。
它提供了许多不同的选项供您选择：

| 变量 | 描述 | 缺省值 |
| --- | --- | --- |
| BiomeGen | 这个值将决定服务器选择生物群落的方式。 | Grown |
| ShapeGen | 这个值决定了世界的生成方式。 | BiomalNoise3D |
| CompositionGen | 这决定了生成器填充实体方块的方式。 | Biomal |
| CompositionGenCacheSize |  | 64 |
| Finishers |  | [Default Finishers](none) |
|  |  |  |

{% quot BIOMEGEN %}

您可以在[此处](http://cuberite.xoft.cz/docs/Generator.html#biomegen)更深入地阅读有关不同方法的信息
