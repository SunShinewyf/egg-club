'use strict';


module.exports = app => {
  class PostService extends app.Service {
    async save(Post) {
      return await Post.save();
    }
  }
  return PostService;
};
