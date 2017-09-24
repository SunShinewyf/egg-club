'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const ctx = this.ctx;
      if (!ctx.session.user.length) {
        await ctx.render('user/login.tpl', {
          title: '用户登录',
          error: true,
          message: '你还没登录呢，先登录吧~',
        });
        return;
      }
      const result = await ctx.service.post.find(ctx.session.user.email);
      await ctx.render('index/index.tpl', {
        title: 'egg社区',
        posts: result,
      });
    }
  }
  return HomeController;
};
