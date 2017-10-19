{% extends "../layout/layout.tpl" %}
{% block content %}
<div class="left-area">
   <div class="left-header">
      <span><a href="/" class="index">首页</a>/ 登录</span>
   </div>
   <div class="login-panel">
    {% if success %}
    <p class="success-tips">{{ message }}</p>
    {% endif %}
    {% if error %}
    <p class="error-tips">{{ message }}</p>
    {% endif %}
        <form class="login-form" method="post" action="/user/loginPost">
        <div class="control-group">
            <label class="label" for="email">邮箱：</label>
            <input class="name input" name="email" type="email" placeholder="请填写登录邮箱" required/>
        </div>
        <div class="control-group">
            <label class="label" for="password">密码</label>
            <input class="password input" name="psw" type="password" placeholder="请填写密码" required/>
        </div>
        <input type="submit" value="登录" class="submit-btn"/>
        </form>
   </div>
</div>
<div class="right-area">
  <h3>简易前端社区</h3>
</div>
{% endblock %}
