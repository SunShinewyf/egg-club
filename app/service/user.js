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
      const user = await this.ctx.service.user.find(emailId);
      console.log(user, '8888');
      user.update({ email: emailId }, {
        github: userObj.github,
        signature: userObj.signature,
      });
      // user.github = userObj.github;
      // user.signature = userObj.signature;
      // this.ctx.service.user.save(user);
      // console.log(user);
      return user;
    }

  }
  return UserService;
};
