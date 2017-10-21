'use strict';

// const request = require('supertest');
const mm = require('egg-mock');
// const assert = require('assert');

describe('test/app/service/user.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  after(() => app.close());
  // afterEach(mm.restore());
  it('find', async () => {
  });
});

