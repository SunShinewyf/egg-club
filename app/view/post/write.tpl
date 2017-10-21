{% extends "../layout/layout.tpl" %}
{% block content %}
<div class="left-area">
   <div class="left-header">
      <span><a href="/" class="index">首页</a>/ 个人中心</span>
   </div>
   <div class="write-panel">
    {% if success %}
    <p class="success-tips">{{ message }}</p>
    {% endif %}
    {% if error %}
    <p class="error-tips">{{ message }}</p>
    {% endif %}
        <form class="write-form" method="post" action="/post/writePost">
        <div class="control-group">
            <label class="label" for="tag">请选择板块：</label>
            <select class="input" name="tag" id="tag-select">
                <option value="0">请选择</option>
                <option value="1">分享</option>
                <option value="2">问答</option>
                <option value="3">原创</option>
            </select>
        </div>
        <div class="control-group">
            <label class="label" for="title">标题:</label>
            <input class="password input" name="title" type="text" placeholder="标题字数10字以上" required/>
        </div>
        <div class="control-group">
            <label class="label" for="title">标题:</label>
            <textarea class="content textarea" name="content"></textarea>
        </div>
        <input type="submit" value="登录" class="submit-btn"/>
        </form>
  </div>
</div>
<div class="right-area">
  <h3>个人信息</h3>
  <div class="detail">
     <a href=""><img class="avatar" src="https://avatars3.githubusercontent.com/u/11244400?v=4&s=120"/></a>
     <span class="name">SunShine</span></br>
     <span class="count">积分:20</span></br>
     <span class="signature">这家伙很懒，什么个性签名都没有留下.</span>
  </div>
  <div class="write-btn">查看话题</div>
</div>
{% endblock %}
