module.exports.partitionArrTo2Arrs = (arr, isValid) =>
    arr.reduce(([pass, fail], elem) => isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);

module.exports.filterForNotEmpty = (arr) => arr.filter(Boolean);

module.exports.filterForUnique = arr => [...new Set(arr)];

module.exports.generateRandomIntArr = (length, limit) => Array.from({length}, () => Math.floor(Math.random() * limit));

module.exports.reduce = (f, acc, arr) => {
    if (arr.length === 0) return acc;
    const [head, ...tail] = arr;
    return this.reduce(f, f(head, acc), tail);
};

// let arr = [1,2,3,5];
// console.log(this.reduce((x,y)=> x+y, null, arr));

// 平铺 嵌套性数组
module.exports.flattenNestedArr = arr =>
    arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? this.flattenNestedArr(next) : next), []);

console.log(this.flattenNestedArr([123, [3434, 656, [1, 5, 6, 8], 123]]));


const objLikeArr = [["name", "Jim"], ["age", 18], ["single", true]];

const fromPairs = pairs => pairs.reduce((res, pair) => ((res[pair[0]] = pair[1]), res), {});

console.log(fromPairs(objLikeArr));

///以下 666 ，但是实际项目中不能用，因为 V8 引擎 有一个原型链 速推测机制，修改 原型链会破坏这个机制，造成性能问题。
Number.prototype[Symbol.iterator] = function*() {
    for (let i = 0; i <= this; i++) {
        yield i;
    }
};

console.log([...6]); // [0, 1, 2, 3, 4, 5, 6]
