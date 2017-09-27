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

    // 查找某条post
    async findOne(id) {
      const result = await this.ctx.model.Post.find({
        _id: id,
      });
      return result;
    }
  }
  return PostService;
};
