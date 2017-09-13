'use strict';

// had enabled by egg
exports.static = true;
exports.session = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.validate = {
  package: 'egg-validate',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
