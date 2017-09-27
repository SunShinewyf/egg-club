{% extends "../layout/layout.tpl" %}
{% block content %}
<div class="left-area">
   <div class="detail-panel">
       <div class="header">
          <div class="title">{{result.title}}</div>
          <div class="detail">
            <span class="name">作者：{{user.username}}</span>
            <span class="time">时间：{{result.update_time}}</span>
            <span class="tag">来自：{{tag}}</span>
          </div>
       </div>
       <div class="content">{{result.content}}</div>
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
