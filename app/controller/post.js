'use strict';

module.exports = app => {
  class PostController extends app.Controller {
    // 发表帖子
    async write() {
      await this.ctx.render('post/write.tpl', {
        title: '发表话题',
      });
    }
  }
  return PostController;
};
