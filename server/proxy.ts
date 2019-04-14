'use strict';

const httpProxy = require('http-proxy');
const config = {
    'dev': 'http://localhost:7307',
    'product': 'http://192.168.140.155:43000'
};
const target = config['dev'];
httpProxy.createProxyServer({target}).listen(7308);
console.log(`HRONE proxy server: http://localhost:7302 => ${target}`);
