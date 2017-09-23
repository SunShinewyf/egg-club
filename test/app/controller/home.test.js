// 'use strict';

// const { app, assert } = require('egg-mock/bootstrap');

// describe('test/app/controller/home.test.js', () => {

//   it('should assert', function* () {
//     const pkg = require('../../../package.json');
//     assert(app.config.keys.startsWith(pkg.name));

//     // const ctx = app.mockContext({});
//     // yield ctx.service.xx();
//   });

//   it('should GET /', () => {
//     return app.httpRequest()
//       .get('/')
//       .expect('hi, egg')
//       .expect(200);
//   });
// });


'use strict';

const { app, assert } = require('egg-mock/bootstrap');
// const assert = require('power-assert');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });
  // const arr = [ 1, 2, 3 ];
  it('power-assert', async function() {
    const ctx = app.mockContext({});
    const users = await ctx.service.user.find('2632807692@qq.com');
    assert.equal(users.length, 2);
  });
});
