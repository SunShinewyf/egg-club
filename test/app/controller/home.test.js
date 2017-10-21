'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const cheerio = require('cheerio');

describe('test/app/controller/home.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  after(() => app.close());
  // afterEach(mm.restore());
  it('should GET /', async () => {
    const result = await request(app.callback()).get('/').expect(200);
    const $ = cheerio.load(result.text);
    const routeList = $('.routes li');
    assert(routeList.length === 5);
  });
});

