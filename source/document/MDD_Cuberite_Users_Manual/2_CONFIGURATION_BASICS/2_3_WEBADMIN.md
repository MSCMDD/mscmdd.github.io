---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 2.3 - WEBADMIN 网页管理界面
comment_id: /document/MDD_Cuberite_Users_Manual/2_CONFIGURATION_BASICS/
---
## 3 - WEBADMIN

WebAdmin允许您控制Cuberite的各个方面，包括玩家权限。默认情况下，WebAdmin已启用，但没有用户。要使用WebAdmin，需要正确配置它。典型的配置如下：`webadmin.ini`

``` webadmin.ini
[User:john]
Password=cuberiteRocks

[WebAdmin]
Ports=8080
Enabled=1
```

在上面的示例中，您可以使用用户名`john`和密码`cuberiteRocks`登录WebAdmin，请用浏览器打开<服务器IP地址>:8080。如果您在本地运行服务器，通常只需要打开`http://localhost:8080`。
