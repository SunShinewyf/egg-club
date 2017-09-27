'use strict';


module.exports = app => {
  class PostService extends app.Service {
    // 新添post
    async save(Post) {
      return await Post.save();
    }

    // 查找所有post
    async find(emailId) {
      const result = await this.ctx.model.Post.find({
        author_email: emailId,
      });
      return result;
    }
  }
  return PostService;
};
