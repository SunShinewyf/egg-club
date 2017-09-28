'use strict';
const crypto = require('crypto');
const sendToWormhole = require('stream-wormhole');
const path = require('path');
const fs = require('fs');

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
      // if (this.ctx.session.user[0]) {
      //   await this.ctx.render('index/index.tpl', {
      //     title: 'egg社区',
      //   });
      //   return;
      // }
      await this.ctx.render('user/register.tpl', {
        title: '用户注册',
      });
    }

    // 登录模块
    async login() {
      if (this.ctx.session.user) {
        await this.ctx.render('index/index.tpl', {
          title: 'egg社区',
        });
        return;
      }
      await this.ctx.render('user/login.tpl');
    }

    // 个人设置
    async setting() {
      const ctx = this.ctx;
      if (!ctx.session.user[0]) {
        await ctx.render('user/login.tpl', {
          title: '用户登录',
          error: true,
          message: '还未登录，先登录再设置吧~',
        });
        return;
      }
      const email = ctx.session.user[0].email;
      const userObj = await ctx.service.user.find(email);
      console.log(userObj, '111');

      await ctx.render('user/setting.tpl', {
        title: '用户设置',
        user: userObj[0],
      });
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
      const user = await ctx.service.user.find(ctx.request.body.email);
      if (user.length) {
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
      const result = await ctx.service.user.save(newUser);
      // result 是一个对象类型:
      //     { __v: 0,
      // username: '111',
      // password: 'ZRK9Q9nKpuAsmQsKgmUtyg==',
      // email: '2632807692@qq.com',
      // _id: 59b92c805f6f46cc3764822c,
      // create_time: 2017-09-13T13:02:56.355Z,
      // reply: 0,
      // topic: 0,
      // signature: '这家伙很懒，什么个性签名都没有留下',
      // scroe: 0 }
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
      const user = await ctx.service.user.find(ctx.request.body.email);
      if (!user) {
        await ctx.render('/user/login.tpl', {
          title: '用户登录',
          error: true,
          message: '用户不存在,请先注册~',
        });
      } else {
        ctx.session.user = user;
        console.log(ctx.session.user);
        await ctx.render('/index/index.tpl', {
          title: '用户登录',
          success: true,
          message: '登录成功~',
        });
      }
    }

    // 设置表单的提交
    async settingPost() {
      const ctx = this.ctx;
      const userObj = await ctx.service.user.find(ctx.session.user[0].email);
      const stream = await ctx.getFileStream();

      let filepath = path.join(this.app.config.baseDir, `logs/${stream.filename}`);
      if (stream.fields.title === 'mock-error') {
        filepath = path.join(this.app.config.baseDir, `logs/not-exists/dir/${stream.filename}`);
      } else if (stream.fields.title === 'mock-read-error') {
        filepath = path.join(this.app.config.baseDir, `logs/read-error-${stream.filename}`);
      }
      this.logger.warn('Saving %s to %s', stream.filename, filepath);
      try {
        await saveStream(stream, filepath);
        // imageObj = await ctx.oss.clients.put(name, stream);
      } catch (err) {
        await sendToWormhole(stream);
        throw err;
      }

      const newUser = new ctx.model.User({
        username: stream.fields.username,
        avatar: stream.filename,
        password: userObj[0].password,
        email: userObj[0].email,
        github: stream.fields.github,
        signature: stream.fields.signature,
      });
      const result = await ctx.service.user.update(ctx.session.user[0].email, newUser);
      if (result) {
        await this.ctx.render('user/index.tpl', {
          title: '用户中心',
          user: newUser,
        });
      } else {
        await this.ctx.render('user/setting.tpl', {
          title: '用户设置',
          error: true,
          message: '个人信息设置失败',
        });
      }
    }
  }

  function saveStream(stream, filepath) {
    return new Promise((resolve, reject) => {
      if (filepath.indexOf('/read-error-') > 0) {
        stream.once('readable', () => {
          const buf = stream.read(10240);
          console.log('read %d bytes', buf.length);
          setTimeout(() => {
            reject(new Error('mock read error'));
          }, 1000);
        });
      } else {
        const ws = fs.createWriteStream(filepath);
        stream.pipe(ws);
        ws.on('error', reject);
        ws.on('finish', resolve);
      }
    });
  }

  return UserController;
};
