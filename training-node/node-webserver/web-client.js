var http = require('http');
var [host ,port, path] = ['localhost', '8002', '/readFile?filePath=abc.txt'];

var options ={
    host : host,
    port : port,
    path : path
};

var callback = function(resp){
    var body = "";
    resp.on('data', function(data){
        body += data;
    });

    resp.on('end', ()=>{
        console.log("body 内容： "+ body);
    });
}

//发送请求给服务端
var req = http.request(options, callback);
req.end();
