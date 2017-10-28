var net = require('net');
var client = net.connect({port:8080}, ()=>{
    console.log('连接到server');
});

client.on('data', (data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end', ()=>{
    console.log('断开连接');
});