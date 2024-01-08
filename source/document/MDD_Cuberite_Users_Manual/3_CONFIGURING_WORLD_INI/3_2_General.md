---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 3.2 - GENERAL
comment_id: /document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/
---
## 2 - GENERAL

指定新玩家的生成点。坐标是绝对的，以块为单位，并且可以是小数。如果缺少任何值，Cuberite将提供默认值。

### 可选选项

| 变量                   | 意义                                                                                                                                           | 缺省值    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Dimension              | 这个世界的维度。可以是：</br>Overworld</br>Nether</br>End                                                                                      | Overworld |
| UnusedChunkCap         | 在服务器开始提前保存之前，</br>内存中的最大块数（请参阅下文）。                                                                                | 1000      |
| IsDaylightCycleEnabled | 启用/禁用服务器以停止世界上的时间。</br>布尔值：可以是0或1。                                                                                   | 1         |
| GameMode               | 0表示生存模式</br>1表示创造模式</br>2表示冒险模式</br>3表示旁观者模式                                                                          | 0         |
| Weather                | 世界上当前的天气。</br>这是由服务器在关闭时设置的，</br>如果在服务器运行时进行编辑，则会被替换！</br>0表示天气晴朗</br>1表示雨天</br>2表示雷暴 | 0         |
| WorldAgeMS             | 世界的年龄以毫秒为单位。仅供测试使用。                                                                                                         | None      |
| TimeInTicks            | 这是用来记录世界上以Ticks为单位的时间。在[020000]的范围内。                                                                                    | None      |
