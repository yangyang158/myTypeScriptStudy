'use strict';

const httpProxy = require('http-proxy');
const config = {
    'dev': 'http://localhost:7308',
    'product': 'http://192.168.140.155:43000'
};
const target = config['product'];
httpProxy.createProxyServer({target}).listen(7309);