'use strict';

module.exports = {
  validateError(rules, data) {
    data = data || this.request.body;
    const errors = this.app.validator.validate(rules, data);
    if (errors) {
      this.locals.errors = errors;
    }
    return errors;
  },

  getCurrentTime() {
    const date = new Date();
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()+1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds();
    const str = Y + M + D + h + m + s;
    console.log(str, 'oooo');
    return str;
  },
};
