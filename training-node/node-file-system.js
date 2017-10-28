var fs = require('fs');
// console.time("同步读取文件完毕");
// fs.readFileSync('abc.txt');
// console.timeEnd("同步读取文件完毕");


//异步打开文件
// fs.open(path, flags[, mode], callback);

fs.open('abc.txt', 'r+', (err, data) => {
    if (err) {
        return console.error(err.stack);
    }
    console.info("成功打开文件abc.txt");
});

///获取文件信息（异步）
fs.stat('abc.txt', (err, stats) => {
    // console.log(stats.isFile());//true
    // stats.isDirectory();
    // stats.isBlockDevice();///块设备
    // stats.isCharacterDevice();///字符设备
    // stats.isSymbolicLink();//软链接
    // stats.isFIFO();//FIFO是UNIX中一种特殊类型的命令管道
    // stats.isSocket();//是否是SOcket

    if (err) {
        return console.error(err);
    }

    console.log(stats);
    console.log('读取文件信息成功');
    console.log(stats.isFile()); //true
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice()); ///块设备
    console.log(stats.isCharacterDevice()); ///字符设备
    console.log(stats.isSymbolicLink()); //软链接
    console.log(stats.isFIFO()); //FIFO是UNIX中一种特殊类型的命令管道
    console.log(stats.isSocket()); //是否是SOcket

});


////异步写入文件
fs.writeFile('abc.txt', '我要加这一行', {
    flag: 'a+'
}, err => {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('abc.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});

///------------------------------------------------------------------
///read()读取文件
var buf = new Buffer(1024);
console.log('ready to open the existed file');
fs.open('abc.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    fs.read(fd, buf, 0 /*offset*/ , buf.length /*要读取的字节数*/ , 0 /*读取的文件数据起始位置*/ , (err, bytes) => {
        if (err) {
            console.log(err);
        }
        console.log(bytes + " 字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        /// 关闭文件 (close())
        fs.close(fd, (err) => {
            console.log('成功关闭文件');
        });
    });

});

///------------------------------------------------------------------
///截取文件
fs.open('abc2.txt','r+', (err, fd)=>{
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功！');
    console.log("截取掉 5byte后的文件内容");

    fs.ftruncate(fd, 5 ,function (err){
        if(err){
            return console.error(err);
        }
        console.log("截取文件成功");
        console.log("开始读取文件内容");
        buf = new Buffer(20);
        fs.read(fd, buf , 0 , buf.length , 0, function(err,bytes){
            if (err){
                console.log(err);
             }
    
             // 仅输出读取的字节
             if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
             }
    
             // 关闭文件
             fs.close(fd, function(err){
                if (err){
                   console.log(err);
                } 
                console.log("文件关闭成功！");
             });
        })
    });
});

///------------------------------------------------------------------
///删除文件
console.log("ready to delete file");
fs.unlink('abc2.txt', (err)=>{
    if(err){
        return console.error(err);
    }
    console.log('文件成功删除！');
});

///------------------------------------------------------------------
///目录操作
// fs.mkdir();
// fs.readdir();
// fs.rmdir();
