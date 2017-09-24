var buf = new Buffer([10,20]);
buf  = new Buffer("Hello world", 'utf-8');//utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"

buf = new Buffer(256);
var len = buf.write('aaaaaaaaaaa');
console.log(`长度为：${len}`);

console.log('==toString()=============================');

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
console.log(buf.toString());
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

console.log( buf.toJSON());  ///转json对象

console.log('==toJSON()=============================');

var buf2 = new Buffer("hello world!");
var json = buf2.toJSON(buf2);
console.log(json);

console.log('==concat()=============================');

var b1 = new Buffer("Hello");
var b2 = new Buffer("Jasper");
var b3 = Buffer.concat([b1,new Buffer(" "),b2]);
console.log(`b3 = ${b3}, 长度 = ${b3.length}`);
b3 = Buffer.concat([b1,new Buffer(" "),b2],20);
b3.fill("G",12);///填充G，从第12位开始
console.log(`b3 = ${b3}, 长度 = ${b3.length}`);

console.log('==compare()=============================');

var a = new Buffer("Hello");
var b = new Buffer("HelloA");

var res = a.compare(b);
console.log("比较结果： "+ res);/// -1 表示小于


console.log('==copy()=============================');

var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

var buffer3 = new Buffer(5);
buffer1.copy(buffer3);
buffer1.copy(buffer3,3,1,3);/// ABC + BC ()
console.log("buffer3 content: "+ buffer3.toString());

console.log('==slice()=============================');
var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
var buffer3 = buffer1.slice(1,-2);///前面减去1个，后面减去2个
console.log("buffer2 content: " + buffer3.toString());


