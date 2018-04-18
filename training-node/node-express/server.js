/**
 * 除了express ，我们可能还需要一些node.js中间件
 * 1. body-parser [处理JSON，Raw，Text 和URL编码的数据]
 * 2. cookie-parser [解析Cookie 的工具，通过req.cookie可取到传来的cookie，并将其转为Obj]
 * 3. multer [处理enctype="multipart/form-data"的表单数据]
 */
var express = require('express');
var app = express();

///解决cross origin 问题
app.all('/test', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

///可以使用express.static 中间件，来添加处理静态文件的功能
app.use(express.static('public'));

///默认访问首页
app.get('/', function (req, res) {
    //   res.send('Hello World');
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/gotoRegister', function (req, res) {
    res.sendFile(__dirname + "/" + "register.html");
});

///登录操作
app.get('/login', function (req, res) {
    var reqParams = {
        "username": req.query.username,
        "psd": req.query.psd
    };
    console.log("登录信息为： " + JSON.stringify(reqParams));
    res.end(JSON.stringify(reqParams));

});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

///注册操作
app.post('/register',urlencodedParser, function (req, res) {
    var reqBody = {
        'username':req.body.username,
        'psd':req.body.psd
    };
    res.writeHead(200, {'Content-Type':'text/plain;charset=utf8'});
    console.log('注册信息： ' + JSON.stringify(reqBody));
    res.end('注册信息： ' + JSON.stringify(reqBody));
});

app.get('/test', function(req, res) {
    var jsonRes = [
        {
            id:1,
            title:"学习",
            duringTime:'1 h',
            type:0
        },
        {
            id:2,
            title:"工作",
            duringTime:'3 h',
            type:1
        },
        {
            id:2,
            title:"运动",
            duringTime:'2 h',
            type:2
        }
    ];

    return res.json(jsonRes);
});


var server = app.listen(8781, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})