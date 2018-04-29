/// 方式二：事件监听
// 解析：任务执行 不依赖于 代码的顺序，而取决于某个事件是否发生

function f1() {
    setTimeout(function () {

        　　　　　　// f1的任务代码
        
        　　　　　　f1.trigger('done');
        
        　　　　}, 1000);
}

function f2() {
    console.log('callback');
}

/// jQuery/Vue.js 的写法
f1.on('done', f2);

f1();