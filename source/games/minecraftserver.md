---
author: AoMe奥美互助公社
date: ''
indent: true
layout: wiki
order: 100
title: Minecraft我的世界及服务器
updated: 2023-11-11T18:38:22.552+8:0
wiki: Games
---
## 联机伺服器

[![服务器](https://www.fansmc.com/banner/1942/村庄/FFFFFF/FF1414/medium "服务器状态")](https://www.fansmc.com/xuanchuan/1942/12553)

本页面已经迁移到[M&A互助公社 服务器官方网站 (mc.mscaome.top)](	https://mc.mscaome.top/)
**简介**：M&A互助联盟的第一台Minecraft服务器，将长期运行[点击加入](https://www.mczfw.cn/server/1942.html)
**类别**：纯净生存
**版本**：

* Minecraft JAVA1.20.2
* Minecraft BE 1.20.2

服务器名称：{% copy M&A互助公社联盟 %}
服务器地址：{% copy aomemsc.giize.com %}
服务器API接口：{% copy https://www.fansmc.com/serverapi/1942 %}
服务器版本：<span data-mscpo-mcapi="version"></span>
服务器描述：<span data-mscpo-mcapi="motd"></span>

<script src="https://cdn.jsdelivr.net/npm/server_ping_static@0.0.1/src/server_ping.js"></script>

<script>
// 参数化URL
const apiUrl = 'https://mcser.mscaome.top/'; // 替换为节点域名
const retries = 3; // 重试次数
const queryParams = new URLSearchParams({
    ip: 'aomemsc.giize.com', // 替换为服务器地址
    port: '25565', // 替换为服务器地址
    // 请求参数（详见https://github.com/MSCPO/Server_Ping/wiki）
});

withRetry(() => fetchApiData([
  // 返回参数注册，之后可以使用<span data-mscpo-mcapi=参数></span>来获取信息
  'motd',
  'api_version',
  'version',
  'favicon'
]), retries, 1000)();
</script>
