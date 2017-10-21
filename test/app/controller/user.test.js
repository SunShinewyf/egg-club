'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const cheerio = require('cheerio');

describe('test/app/controller/user.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  after(() => app.close());

  // afterEach(mm.restore());
  it('should GET /register', async () => {
    const result = await request(app.callback()).get('/user/register').expect(200);
    const $ = cheerio.load(result.text);
    const form = $('.register-form');
    assert(form.attr('action') === '/user/registerPost');
  });

  it('should GET /login', async () => {
    const result = await request(app.callback()).get('/user/login').expect(200);
    const $ = cheerio.load(result.text);
    const form = $('.login-form');
    assert(form.attr('action') === '/user/loginPost');
  });

  it('should GET /setting', async () => {
    const result = await request(app.callback()).get('/user/setting').expect(200);
    const $ = cheerio.load(result.text);
    const form = $('.setting-form');
    assert(form.attr('action') === '/user/indexPost');
  });
});
