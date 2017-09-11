'use strict';

module.exports = app => {
  const error = app.middlewares.error({}, app);
  app.get('/', 'home.index');
  // 用户路由
  app.get('/user/index', app.controller.user.index);
  app.get('/user/register', app.controller.user.register);
  app.get('/user/login', app.controller.user.login);
  app.get('/user/setting', app.controller.user.setting);
  app.post('/user/registerPost', error, app.controller.user.registerPost);
};
