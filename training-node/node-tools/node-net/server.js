var net = require('net');

var server = net.createServer((connection) => {
    console.log('client connected.');
    connection.on('end', () => {
        console.log('client disconnected');
    });
    connection.write('hello!!\r\n');
    connection.pipe(connection);
});

server.listen(8080, () => {
    console.log('server is listening~!');
});