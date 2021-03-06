var http = require("http");
var url = require('url');
var _ = require("lodash");

function start(route){
    function onRequest(req, res){
        var pathName = url.parse(req.url).pathname;
        console.log("Request for "+ pathName + " received.");

        route(pathName);

        res.writeHead(200, {"Content-Type":"text/plain"});
        res.write("hello world");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;