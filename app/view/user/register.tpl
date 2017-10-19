{% extends "../layout/layout.tpl" %}
{% block content %}
<div class="left-area">
   <div class="left-header">
      <span><a href="/" class="index">首页</a>/ 注册</span>
   </div>
   <div class="register-panel">
    {% if success %}
    <p class="success-tips">{{ message }}</p>
    {% endif %}
    {% if error %}
    <p class="error-tips">{{ message }}</p>
    {% endif %}
        <form class="register-form" method="post"  action="/user/registerPost">
        <div class="control-group">
            <label class="label" for="email">邮箱</label>
            <input  class="email input" name="email" placeholder="请填写邮箱" type="email" required/>
        </div>
        <div class="control-group">
            <label class="label" for="name">用户名</label>
            <input class="name input" name="username" type="text" placeholder="请填写用户名" required/>
        </div>
        <div class="control-group">
            <label class="label" for="password">密码</label>
            <input class="password input" name="password" type="password" placeholder="请填写密码" required/>
        </div>
        <div class="control-group">
            <label class="label" for="repassword">确认</label>
            <input class="repassword input" name="repassword" type="password" placeholder="请确认密码" required/>
        </div>
        <input type="submit" value="注册" class="submit-btn"/>
        </form>
   </div>
</div>
<div class="right-area">
  <h3>简易前端社区</h3>
</div>
{% endblock %}
