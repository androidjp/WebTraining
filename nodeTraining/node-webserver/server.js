var http = require('http');
var fs = require('fs');
var url = require('url');
var util = require('util');
var fileIO = require('./fileIO.js');



var myServer = http.createServer((req, res) => {

    //解析请求
    var pathName = url.parse(req.url).pathname;
    pathName = pathName.slice(1);

    console.log(`Request for ${pathName} received`);

    ///读取请求的文件内容

    switch (pathName) {
        case 'readFile':
            var params = url.parse(req.url, true).query;
            console.log(util.inspect(params, true));
            new fileIO().readFile(params.filePath , (resJson)=>{
                if (resJson.msg == 'error') {
                    res.writeHead(400, {
                        'Content-Type': 'text/plain;charset=utf8'
                    });
                    res.end('请求有错');
                } else if (resJson.msg == 'success') {
                    res.writeHead(200, {
                        'Content-Type': 'text/plain;charset=utf8'
                    });
                    res.write(resJson.data.toString());
                    res.end();
                }
            });
            
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end();
            break;

    }


});

myServer.listen(8002);

console.log('Server running at http://127.0.0.1:8002/');