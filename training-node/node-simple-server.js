const http = require('http');
const _ = require('lodash');

const [host,port] = ['localhost',8001];

http.createServer((req, res )=>{
    res.setHeader('Content-Type','text/plain');
    res.end("hello , I am your first node server");
}).listen(port);

url = _.isEmpty(port) ? `http://${host}:${port}/` : '';
console.log(`Our awesome web server is running at ${url}`);