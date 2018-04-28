
console.log('---------------------------')
console.log('例子一')
console.log('---------------------------')
setTimeout(() => console.log(1));
setImmediate(()=> console.log(2));
process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));
(()=>console.log(5))();

// 执行顺序： 同步方法 -> process.nextTick() -> Promise.then() -> setTimeout() -> setImmediate()



