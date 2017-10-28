
/**
 * Stream是一个抽象接口，很多
 * 
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
    data - 当有数据可读时触发。
    end - 没有更多的数据可读时触发。
    error - 在接收和写入过程中发生错误时触发。
    finish - 所有数据已被写入到底层系统时触发
 * 
 * Stream 对象都是 eventEmitter 的实例
 */
var fs = require('fs');

var data = '';

console.log("readable stream------------------------");
/// readable stream
var  readerStream  =fs.createReadStream('abc.txt');
/// encode set UTF-8
readerStream.setEncoding('UTF8');
/// begin deal
readerStream.on('data', function(chunk){
    data += chunk;
});
readerStream.on('end' , function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(err.stack);
});
// readerStream.close();

console.log("writable stream------------------------");
//// writable stream
var writerStream  = fs.createWriteStream('abc.txt');
/// encode utf-8
// writerStream.write('你好，孩子');
writerStream.write('abcacb', 'UTF8');
///标志文件写的结尾
writerStream.end();
writerStream.on('finish', function(){
    console.log("成功写入数据");
});
writerStream.on('error', function(err){
    console.error(err.stack);
});

// writerStream.close();


console.log("pipe stream【文件数据移动和复制等】------------------------");
readerStream = fs.createReadStream('abc.txt');
writerStream = fs.createWriteStream('abc2.txt');
readerStream.pipe(writerStream);
console.log("数据copy成功");

console.log("链式流 一般用于管道操作------------------------");
console.log("使用链式流来压缩和解压文件")
var zlib = require('zlib');
fs.createReadStream('abc.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('abc.txt.gz'));

console.log("文件压缩成功");