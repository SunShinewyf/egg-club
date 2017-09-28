'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1505028337868_2295';

  // 模板渲染配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };
  // 数据库插件配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1/egg-club',
    options: {},
  };

  // 文件上传插件
  config.multipart = {
    defaultCharset: 'utf8',
    fileSize: '100kb',
  };

  config.proxyworker = {
    port: 10086,
  };

  return config;
};
