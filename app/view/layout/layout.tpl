<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="/public/main.css" rel="stylesheet">
    <link href="/public/post.css" rel="stylesheet">
    <link href="/public/user.css" rel="stylesheet">
</head>
<body>
<header>
   <span class="logo">前端论坛</span>
   <input type="text" class="search" name="search" placeholder="搜索"/>
   <ul class="routes">
        <li class="route"><a href="/">首页</a></li>
        <li class="route"><a href="/posts/write">发表帖子</a></li>
        <li class="route"><a href="/user/setting">设置</a></li>
        <li class="route"><a href="/user/register">注册</a></li>
        <li class="route"><a href="/user/login">登录</a></li>
   </ul>
</header>
<div class="container">
{% block content %}
{% endblock %}
</div>
<footer>
   <p>authored by <a href="https://github.com/SunShinewyf">SunShine</a></p>
</footer>
</body>
</html>