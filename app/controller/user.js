'use strict';
const crypto = require('crypto');

module.exports = app => {
  class UserController extends app.Controller {
    // 个人主页模块
    * index() {
      yield this.ctx.render('user/index.tpl', {
        title: '用户登录',
      });
    }
    // 注册模块
    * register() {
      yield this.ctx.render('user/register.tpl', {
        title: '用户注册',
      });
    }

    // 注册表单的提交
    * registerPost() {
      const ctx = this.ctx;
      const createRule = {
        email: { type: 'email', require: true },
        username: { type: 'string', require: true },
        password: { type: 'password', require: true },
        repassword: { type: 'password', require: true, compare: ctx.request.body.password },
      };
      const md5Obj = crypto.createHash('md5');
      const psw = md5Obj.update(ctx.request.body.password).digest('base64');
    //   if (ctx.request.body.password !== ctx.request.body.repassword) {
    //     yield ctx.render('/user/register.tpl', {
    //       title: '用户注册',
    //       error: true,
    //       message: '两次密码输入不一致',
    //     });
    //     return;
    //   }
      ctx.validate(createRule);
      const newUser = new ctx.model.User({
        username: ctx.request.body.username,
        password: psw,
        email: ctx.request.body.email,
      });
      const result = yield newUser.save();
      if (result) {
        yield ctx.render('/user/login.tpl', {
          title: '用户登录',
          success: true,
          message: '注册成功，可以登录~',
        });
      } else {
        yield ctx.render('/user/register.tpl', {
          title: '用户注册',
          error: true,
          message: '注册失败',
        });
      }
    }
    // 登录模块
    * login() {
      yield this.ctx.render('user/login.tpl');
    }

    // 个人设置
    * setting() {
      yield this.ctx.render('user/setting.tpl');
    }
  }
  return UserController;
};
