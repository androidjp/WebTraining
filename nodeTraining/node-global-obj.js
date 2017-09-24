/**
 * global 作为全局变量的宿主。
 * node中的全局变量的三种条件：
 *  1. 在最外层定义的变量
 *  2. 全局变量的属性
 *  3. 隐式定义的变量（未定义直接赋值的变量）
 * 
 * 注意：永远使用var 定义变量，避免引入全局变量，因为global obj会污染命名空间
 */

 console.log(__filename);
 console.log(__dirname);

console.log('setTimeout===============================');

var t =  setTimeout(function(){///单次定时调用
    console.log("3s 过了");
 },3000);
 clearTimeout(t);

console.log('setInterval===============================');


 console.time("interval用时");///输出时间，表示“计时开始”
var iv =  setInterval(function(){////循环调用
     console.timeEnd("interval用时");///“计时结束”
 },2000);

 setTimeout(function(){
    clearInterval(iv);
 },4001);

 console.log('console===============================');
 

console.info('info %d', 177);
console.error('error');
console.warn('warn');
console.dir(iv);///对一个对象进行检查（inspect），并以易于阅读和打印的格式显示
console.trace();///打印当前执行的代码在堆栈中的调用路径
// console.assert(1+2==2,'计算错误');///判断某个表达式或变量是否为真,当1+2==2为false时，后面的信息才会执行



console.log('process[global对象的属性]===============================');

process.on('exit', function(code){
    // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});

console.log('程序执行结束');