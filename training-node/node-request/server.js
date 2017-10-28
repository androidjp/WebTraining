var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');


/**
 * GET请求相关
 */
http.createServer((req, res) => {
    ///获取get 请求信息
    // res.writeHead(200 , {"Content-Type":'application/json; charset=utf-8'})
    // res.end(util.inspect(url.parse(req.url)));

    // 解析URL的参数(利用url.parse())
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF8'
    });
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站URL：" + params.url);
    res.end();
}).listen(7999);


/**
 * POST请求相关
 */
http.createServer((req, res) => {
    var post = '';///暂存请求体信息

    req.on('data', (chunk)=>{
        post += chunk;
    })
    req.on('end',()=>{
        post  = querystring.parse(post);///格式转换一： 将post解析为真正的post请求格式
        res.end(util.inspect(post));
    });
}).listen(8000);
