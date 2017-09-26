var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', (req, res)=>{
    console.log("Cookies: "+ JSON.stringify(req.cookies));

    res.end(JSON.stringify(req.cookies));

});

app.listen(8081);