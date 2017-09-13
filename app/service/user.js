'use strict';
module.exports = app => {
  class UserService extends app.Service {
    async find(emailId) {
      const user = await this.ctx.model.User.find({
        email: emailId,
      });
      return user;
    }

    async save(User) {
      return await User.save();
    }

  }
  return UserService;
};
