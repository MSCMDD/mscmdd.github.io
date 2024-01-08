---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 4 - MULTIWORLDS (多世界)
comment_id: /document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/
---
## 1 - 多世界概述

Cuberite支持多个世界。每个世界都有自己的文件。可以通过编辑`world.ini` `settings.ini`文件来添加额外的世界。下面的示例中对此进行了解释。

### 添加世界

``` ini
[Worlds]
DefaultWorld=world
World=world_nether
World=world_the_end
World=myNewWorld
World=HappyLand
```

在上面的示例中，向服务器添加了2个额外的世界。请注意，这将自动创建2个额外的配置文件，即`myNewWorld/world.ini`和`HappyLand/world.ini`。

### 维度（世界类型）

要创建一个下界类型的世界，你应该在世界名称后添加后缀，例如"`_nether`"。这将创建一个预配置的下界世界。对于末地世界，同样的规则适用，将后缀添加到世界名称中。一旦创建了默认世界，你可以根据自己的喜好进行调整。

``` ini
_netherWorld=myHellishWorld_netherworld.ini
_the_endworld.ini
```

当不存在world.ini时，"_nether"和"_the_end"后缀才会被使用，并指导服务器选择要创建的默认world.ini的内容。当存在world.ini时，后缀就不再重要了，维度由每个world.ini中的选项来确定。后缀的处理方式是为了与之前的Cuberite版本兼容。

剩下的部分将涉及连接世界和在它们之间旅行的内容。

## 2 - 使用命令进行旅行

如果你有权限，可以使用以下命令在世界之间进行旅行：`core.portal/portal Worldname`。要列出所有可用的世界，使用命令`core.portal/portal Worldname/worlds`。(待更正)

## 3 - 在没有插件的情况下连接世界

你可以通过修改文件`world.ini`来轻松地连接世界，而不需要使用插件。但是，这种方法有一定的限制：每个世界只能与两个不同的世界进行连接。

默认情况下，主世界与两个世界进行了连接：下界和末地。通过任何一个下界传送门进入下界，通过任何一个末地传送门进入末地。你可以调整下界和末地传送门的行为，并使每种传送门类型传送到你选择的世界。这可以通过编辑每个世界的world.ini文件中[LinkedWorlds]部分来实现。需要注意的是，使用这种方法，你无法让同一类型的两个不同传送门将你传送到两个不同的世界。如果你想要这样的行为，你应该使用一个插件。请参阅下一小节。

## 4 - 使用插件连接世界

将世界连接在一起的最可配置的方法是使用专用插件，比如[Portal V2](https://forum.cuberite.org/thread-2157.html)。你可以在[插件库](https://forum.cuberite.org/forum-2.html)中找到更多的插件。

## 5 - BungeeCord

Cuberite具有实验性的BungeeCord支持。
