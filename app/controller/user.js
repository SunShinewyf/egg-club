'use strict';
const crypto = require('crypto');

module.exports = app => {
  class UserController extends app.Controller {
    // 个人主页模块
    async index() {
      await this.ctx.render('user/index.tpl', {
        title: '用户登录',
      });
    }
    // 注册模块
    async register() {
      await this.ctx.render('user/register.tpl', {
        title: '用户注册',
      });
    }

    // 登录模块
    * login() {
      yield this.ctx.render('user/login.tpl');
    }

    // 个人设置
    * setting() {
      yield this.ctx.render('user/setting.tpl');
    }

    // 注册表单的提交
    async registerPost() {
      const ctx = this.ctx;
      // const createRule = {
      //   email: { type: 'email', require: true },
      //   username: { type: 'string', require: true },
      //   password: { type: 'string', require: true },
      //   repassword: { type: 'string', require: true, compare: ctx.request.body.password },
      // };
      const md5Obj = crypto.createHash('md5');
      const psw = md5Obj.update(ctx.request.body.password).digest('base64');
      if (ctx.request.body.password !== ctx.request.body.repassword) {
        await ctx.render('/user/register.tpl', {
          title: '用户注册',
          error: true,
          message: '两次密码输入不一致',
        });
        return;
      }
      // ctx.validateError(createRule, ctx.request.body);
      const user = ctx.service.user.find(ctx.request.body.email);
      if (user) {
        await ctx.render('/user/register.tpl', {
          title: '用户注册',
          error: true,
          message: '用户已经存在',
        });
        return;
      }
      const newUser = new ctx.model.User({
        username: ctx.request.body.username,
        password: psw,
        email: ctx.request.body.email,
      });
      const result = ctx.service.user.save(newUser);
      if (result) {
        await ctx.render('/user/login.tpl', {
          title: '用户登录',
          success: true,
          message: '注册成功，可以登录~',
        });
      } else {
        await ctx.render('/user/register.tpl', {
          title: '用户注册',
          error: true,
          message: '注册失败',
        });
      }
    }

    // 登录表单的提交
    async loginPost() {
      const ctx = this.ctx;
      const user = ctx.service.user.find(ctx.request.body.email);
      if (!user) {
        await ctx.render('/user/login.tpl', {
          title: '用户登录',
          error: true,
          message: '用户不存在,请先注册~',
        });
      } else {
        await ctx.render('/index/index.tpl', {
          title: '用户登录',
          success: true,
          message: '登录成功~',
        });
      }
    }
  }
  return UserController;
};
