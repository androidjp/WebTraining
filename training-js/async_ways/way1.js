///方式一：回调函数
function f1(callback) {
    setTimeout(function() {
        /// async task logic
        callback();
    }, 1000);
}

f1(()=>{
    console.log('This is callback');
})