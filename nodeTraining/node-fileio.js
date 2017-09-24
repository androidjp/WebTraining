var fs = require('fs');


fs.readFile('package.json', (err, data)=>{
    if(err){
        ///有错
        console.error(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("读取文件成功");
