'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
       yield this.ctx.render('index/index.tpl');
    }
  }
  return HomeController;
};
