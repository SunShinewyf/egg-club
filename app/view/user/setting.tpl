{% extends "../layout/layout.tpl" %}
{% block content %}
<div class="left-area">
   <div class="left-header">
      <span><a href="/" class="index">首页</a>/ 个人设置</span>
   </div>
   <div class="info-panel">
        <form class="setting-form" method="post" action="/user/settingPost?_csrf={{ctx.csrf | safe}}" enctype="multipart/form-data">
        <div class="control-group">
            <label class="label" for="name">用户名</label>
            <input class="name input" name="username" type="text" value={{user.username}}>
        </div>
        <div class="control-group">
            <label class="label" for="github">Github</label>
            <input class="github input" name="github" type="text" value ={{user.github}}>
        </div>
        <div class="control-group">
            <label class="label" for="avatar">头像上传</label>
            <input class="avatar input" name="avatar" type="file">
        </div>
        <div class="control-group">
            <label class="label" for="signature">个性签名</label>
            <textarea class="signature textarea" name="signature" type="text">{{user.signature}}</textarea>
        </div>
        <input type="submit" value="发表" class="submit-btn"/>
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
  <div class="write-btn">发表话题</div>
</div>
{% endblock %}
