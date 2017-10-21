'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const cheerio = require('cheerio');

describe('test/app/controller/post.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  after(() => app.close());
  // afterEach(mm.restore());
  it('should GET /write', async () => {
    const result = await request(app.callback()).get('/post/write').expect(200);
    const $ = cheerio.load(result.text);
    const form = $('.write-form');
    assert(form.attr('action') === '/post/writePost');
  });

  it('should GET /detail', async () => {
    const result = await request(app.callback()).get('/user/setting').expect(200);
    const $ = cheerio.load(result.text);
    const panel = $('.detail-panel');
    assert(panel.length === 1);
  });
});

