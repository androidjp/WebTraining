var fs = require('fs');

function fileIO(){
    var opt = {};

    opt.readFile = function(filePath, callback){
        console.log(`-------------`);
        console.log(`准备读取文件： ${filePath}`);
        console.log(`-------------`);

        var resJson = {};
        fs.readFile(filePath, (err, data)=>{
            if(err){
                console.error(`读取文件异常，${err.stack}`);
                resJson.msg ='error';
            }else{
                console.info(`读取文件%s成功`, filePath);
                resJson.msg = 'success';
                resJson.data = data;
            }

            callback(resJson);
        });
    };

    return opt;
}

module.exports = fileIO;