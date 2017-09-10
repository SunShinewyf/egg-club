'use strict'

module.exports = app => {
    class UserController extends app.Controller {
        
       //个人主页模块
       * index() {
          yield this.ctx.render('user/index.tpl');
       }
       //注册模块
       * register() {
          yield this.ctx.render('user/register.tpl')
       } 
       //登录模块
       * login() {
          yield this.ctx.render('user/login.tpl');
       }

       //个人设置
       * setting() {
          yield this.ctx.render('user/setting.tpl');
       }
    }

   

    
    return UserController;
}