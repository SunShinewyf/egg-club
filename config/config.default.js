'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1505028337868_2295';

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/egg-club',
    options: {},
  };
  return config;
};
