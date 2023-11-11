---
date: '2023-11-11T22:03:46.604326+08:00'
title: 申请友链
updated: 2023-11-11T22:7:41.85+8:0
---
申请友链

<div id="friends-api"></div>
<script src="https://unpkg.com/qexo-friends/friends-api.js"></script>
<script>qexo_friend_api("friends-api","https://qexo.giize.com","");</script>

# 友情链接

<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>

<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>

<script>loadQexoFriends("qexo-friends", "https://qexo.apursuer.com")</script>

# 申请M&A互助联盟的友情链接

<link rel="stylesheet" href="https://unpkg.com/apursuer-qexo-friend-links@1.0.2/apursuer-hexo-friend-links.css"/>

<article class="message is-info">
    <div class="message-header">
        申请友链
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">名称</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="您的网站名称" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">链接</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="您的网站链接" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">请确保网站可访问！</p>
            </div>
            <div class="field">
                <label class="label">网站图标</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="您的网站图标" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">简介</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="请用一句话描述你的网站。" id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> 我不是在提交毫无意义的信息并且已经添加该网站为友链
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">申请</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://recaptcha.net/recaptcha/api.js?render=你的recaptcha网页秘钥"></script>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
function TestUrl(url) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        return false;
    }
    return true;
}
function askFriend (event) {
    let check = $("#friend-check").is(":checked");
    let name = $("#friend-name").val();
    let url = $("#friend-link").val();
    let image = $("#friend-icon").val();
    let des = $("#friend-des").val();
    if(!check){
        alert("请检查 是否已经勾选\"我不是在提交毫无意义的信息并且已经添加该网站为友链\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("The information is incomplete! ");
        return;
    }
    if (!(TestUrl(url))){
        alert("链接URL格式错误！需要包含HTTP（S）协议头！ ");
        return;
    }
    if (!(TestUrl(image))){
        alert("图标URL的格式错误！它需要包含HTTP协议头！ ");
        return;
    }
    event.target.classList.add('is-loading');
    grecaptcha.ready(function() {
          grecaptcha.execute('你的recaptcha网页秘钥', {action: 'submit'}).then(function(token) {
              $.ajax({
                type: 'get',
                cache: false,
                url: url,
                dataType: "jsonp",
                async: false,
                processData: false,
                //timeout:10000, 
                complete: function (data) {
                    if(data.status==200){
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        data: {
                            "name": name,
                            "url": url,
                            "image": image,
                            "description": des,
                            "verify": token,
                        },
                        url: 'https://qexo.giize.com/pub/ask_friend/',
                        success: function (data) {
                            alert(data.msg);
                        }
                    });}
                    else{
                        alert("无法访问URL！友链API错误");
                    }
                    event.target.classList.remove('is-loading');
                }
          });
        });
    });
}
</script>



