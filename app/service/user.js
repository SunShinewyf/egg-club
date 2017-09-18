'use strict';
module.exports = app => {
  class UserService extends app.Service {
    // 查找
    async find(emailId) {
      const user = await this.ctx.model.User.find({
        email: emailId,
      });
      return user;
    }
    // 新增用户
    async save(User) {
      return await User.save();
    }

    // 更新用户信息
    async update(emailId, userObj) {
      const user = await this.ctx.model.User.update({ email: emailId }, {
        $set: {
          username: userObj.username,
          github: userObj.github,
          signature: userObj.signature,
        },
      });
      return user;
    }

  }
  return UserService;
};
