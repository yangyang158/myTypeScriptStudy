'use strict';

import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as bodify from 'koa-body';
import * as timing from 'koa-xtime';
import * as logger from 'koa-logger';
import chalk from 'chalk';
import * as router from 'koa-router-decors';
import config from './config';
import './proxy';

const port = 7307; 
const app = new Koa();
app.use(logger());
app.use(timing());
// 使用非严格模式，解析HTTP DELETE请求的请求体Body
app.use(bodify({
    multipart: true,
    // 使用非严格模式，解析HTTP DELETE请求的请求体Body
    strict: false,
}));

app.use(router.load('/api', `${__dirname}/router`, {extname: '.{ts,js}'}).routes());

app.listen(port);
console.warn(`Server started: http://localhost:${chalk.red('' + config.server.port)}`);
