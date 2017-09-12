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
};
