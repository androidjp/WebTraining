var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', function(){
    console.log("connection 触发事件");
});

var connectionHandler = function connected(){
    console.log('成功连接上啦');
}

eventEmitter.on('connection', connectionHandler);

eventEmitter.emit('connection');

