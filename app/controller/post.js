'use strict';

module.exports = app => {
  class PostController extends app.Controller {
    // 发表帖子
    async write() {
      if (!this.ctx.session.user.length) {
        await this.ctx.render('user/login.tpl', {
          title: '用户登录',
          error: true,
          message: '你还没登录呢，先登录吧~',
        });
        return;
      }
      await this.ctx.render('post/write.tpl', {
        title: '发表话题',
      });
    }

    // 帖子提交逻辑
    async writePost() {
      const ctx = this.ctx;
      const post = new ctx.model.Post({
        title: ctx.request.body.title,
        content: ctx.request.body.content,
        tag: ctx.request.body.tag,
        author_email: ctx.session.user[0].email,
      });
      const result = await ctx.service.post.save(post);
      console.log(result, '9999');
      if (result) {
        await ctx.render('index/index.tpl', {
          title: 'egg社区',
          success: true,
          message: '发表成功',
        });
      } else {
        await ctx.render('post/write.tpl', {
          title: '发表话题',
          error: true,
          message: '发表失败',
        });
      }
    }
  }
  return PostController;
};
