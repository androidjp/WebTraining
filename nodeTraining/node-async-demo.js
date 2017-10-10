var async = require("async");

async.waterfall([
    (cb)=>{
        setTimeout(function(){
            console.log('A');
            cb(null);
        },2000);
    },(cb)=>{
        try{

        setTimeout(function(){
            console.log('B');
            cb(null);
        },2000);

        // throw new Error("fuck");
        }catch(err){
            cb(err);
        }
    },(cb)=>{
        setTimeout(function(){
            console.log('C');
            cb(null);
        },2000);
    }
], (err)=>{
    if(err){
    console.error(err);
    }
});