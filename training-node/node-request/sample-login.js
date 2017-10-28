var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>Jasper  Node.js Training 表单提交 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '用户名： <input name="name"><br>' +
  '密码： <input name="psd"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

function onLoginRequest(req, res){
    var body = "";
    req.on('data', (chunk)=>{
        body += chunk;
    });
    req.on('end', ()=>{
        ///解析 请求参数
        body = querystring.parse(body);
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        if(body.name && body.psd){
            res.write(`username:${body.name}`);
            res.write('<br>');
            res.write(`password:${body.psd}`);
        }else{
            res.write(postHTML);
        }
    
        res.end();
    });
}
var loginServer = http.createServer(onLoginRequest);
loginServer.listen(8001);






