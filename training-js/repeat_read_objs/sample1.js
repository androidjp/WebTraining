//以下的例子，是想 用“遍历”手段，就达到异步任务生成与执行的效果

// ------------------------------
// map
// ------------------------------
var res = [1, 2, 3].map(async item => item ** 2);
console.log(res);
//[ Promise { 1 }, Promise { 4 }, Promise { 9 } ]

// 先用 Promise.all()进行包装，然后用await获取结果
await Promise.all([1, 2, 3].map(async item => item ** 2));

// ------------------------------
// reduce
// ------------------------------
var res = [1, 2, 3].reduce(async (accumulator, item) => accumulator + item, 0);
console.log(res);
// Promise { '[object Promise]3' }
// 相当于：
// (accumulator, item) => new Promise(resolve =>
//     resolve(accumulator += item)
//   )

await [1, 2, 3].reduce(async (accumulator, item) => await accumulator + item, 0)

// ------------------------------
/// forEach
// ------------------------------

// step1: 创建一个新函数
Array.prototype.forEachSync = async function (callback, thisArg) {
    for (let [index, item] of Object.entries(this)) {
        await callback(item, index, this)
    }
}
// step2: await
await [1, 2, 3].forEachSync(async item => {
    console.log(item ** 2)
});

// ------------------------------
/// filter
// ------------------------------

// step1: 创建一个支持异步Promise的返回值filter函数
Array.prototype.filterSync = async function (callback, thisArg) {
    let filterResult = await Promise.all(this.map(callback))
    // > [true, false, true]  
    return this.filter((_, index) => filterResult[index])
}
// step2: await调用
await [1, 2, 3].forEachSync(async item => {
    console.log(item ** 2)
});

// ------------------------------
// some
// ------------------------------
Array.prototype.someSync = async function (callback, thisArg) {
    for (let [index, item] of Object.entries(this)) {
        if (await callback(item, index, this)) return true
    }
    return false
}

await [1, 2, 3].someSync(async item => item === 2); //> true


// ------------------------------
// every
// ------------------------------
Array.prototype.someSync = async function (callback, thisArg) {
    for (let [index, item] of Object.entries(this)) {
        if (await callback(item, index, this)) return true
    }
    return false
}
await [1, 2, 3].someSync(async item => item === 2)