'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  // 用户路由
  app.get('/user/index', app.controller.user.index);
  app.get('/user/register', app.controller.user.register);
  app.get('/user/login', app.controller.user.login);
  app.get('/user/setting', app.controller.user.setting);
  app.post('/user/registerPost', app.controller.user.registerPost);
  app.post('/user/loginPost', app.controller.user.loginPost);
  app.post('/user/settingPost', app.controller.user.settingPost);
};
