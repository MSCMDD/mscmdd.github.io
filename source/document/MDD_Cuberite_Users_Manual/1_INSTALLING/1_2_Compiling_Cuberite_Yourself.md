---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 1.2 - 自行编译 CUBERITE
comment_id: /document/MDD_Cuberite_Users_Manual/1_INSTALLING/
---
## 2 - 自行编译 CUBERITE

自行编译需要更长的时间和更多的操作，但在现代处理器上可以提高1.5到3倍的速度。如果您的操作系统或硬件不受官方支持，编译可能是运行Cuberite的唯一方法。

自动编译脚本适用于*nix用户。自动编译脚本会为您处理编译过程。您只需将以下命令复制到终端中即可：

``` bash
sh -c "$(wget -O - https://compile.cuberite.org)"
```

如果您更喜欢手动编译，或者想要为Windows编译，请参阅主存储库中的[COMPILING.md](https://github.com/cuberite/cuberite/blob/master/COMPILING.md)文件。

{% note color:warning 这个过程需要使用命令行。如果您对命令行不熟悉，建议您使用[预编译的构建版本](/document/MDD_Cuberite_Users_Manual/1_INSTALLING/1_2_Compiling_Cuberite_Yourself)。 %}
