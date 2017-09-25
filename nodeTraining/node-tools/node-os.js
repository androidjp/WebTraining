var os = require('os');
var util = require('util');
// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

///OS 默认临时文件夹
console.log('default temp folder : ' + os.tmpdir());


console.log('CPU 字节序，BE 或 LE : ' + os.endianness());

console.log('OS主机名 : ' + os.hostname());

console.log('OS 架构 : ' + os.arch());

console.log('OS 发行版本 : ' + os.release());

console.log('OS 网络接口列表 : ' + util.inspect( os.networkInterfaces(),true));


