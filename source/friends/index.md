---
date: '2023-04-21T12:15:54+08:00'
menu_id: friends
title: 友情链接
updated: 2023-11-11T22:28:24.371+8:0
---
<div id="friend-content" class="friend-content"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/Stellar/friends.js"></script>
<script>loadQexoFriends("friend-content", "https://qexo.giize.com")</script>

### 申请友链

<div id="friends-api"></div>
<script src="https://unpkg.com/qexo-friends/friends-api.js"></script>
<script>qexo_friend_api("friends-api","https://qexo.giize.com","");</script>

### 朋友的文章

{% timeline type:fcircle api:https://api.vlts.cc/output_data/v1/xaoxuu/friends-rss-generator %}
{% endtimeline %}

