/// await 和 async 是 Promise 的语法糖，node版本8.11.1可以直接用。
// 这个语法，ES7提出，是Generator的语法糖，在Node v7.8+ 就支持了

// 如何在项目中使用
// 依然是通过 babel 来使用。
// 只需要设置 presets 为 stage-3 即可。

// 安装依赖:
// npm install babel-preset-es2015 babel-preset-stage-3 babel-runtime babel-plugin-transform-runtime

// 修改.babelrc:
// "presets": ["es2015", "stage-3"],
// "plugins": ["transform-runtime"]

// 这样就可以在项目中使用 async 函数了。

async function f1(){
    console.log('func() 调用')
    setTimeout(()=>{
        return 1;
    })
}

async function delay2sMethod() {
    const startCallback = Date.now();
    while (Date.now() - startCallback < 2000) {
    // 什么也不做
    }
    return 1;
}

// async 返回一个Promise 对象


var res = delay2sMethod().then((result) => {
   console.log('result = ', result); 
}).catch((err) => {
    
});


// async 的错误处理 很重要
/// async 内部抛异常，那么返回的不是resolve() ，也是调用reject(error),抛出的error 从 catch()中出来

/// await 则 后面接着 Promise对象，只有上一个 await的promise对象回调完了，并且处于resolve()状态，才会执行下一个await的 promise对象。

///例子二：
const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    await delay(2000);
    await delay(3000);
    return 'done';
}
/// 等6s 才done
f().then(v => console.log(v));


/// 例子三：避免前一个await的Promise reject 导致后面的事件无法执行
/// 解决方法：try-catch
let a;
async function correct() {
    try{
        await Promise.reject('来自A的error')
    }catch(error) {
        console.log('A有error出现：', error)
    }
    a = await 1;/// 自动封装成一个resolve的 Promise，最终resolve()返回值是1
    return a;/// 这里的a就是一个Promise对象
}

correct().then(v => console.log('最终，',v));