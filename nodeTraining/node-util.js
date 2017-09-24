var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('hello, I am ' + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
}
//--------------------------继承-----------------------
console.log('--util.inherits()-----------------------');

//Sub 仅仅继承了Base 在原型中定义的函数，
//而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
util.inherits(Sub, Base); ///瞬间完成继承


var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);


console.log('--util.inspect()【通常用于调试和错误输出，将对象转字符串】-----------------------');

function Person() {
    this.name = 'jasper';
    this.toString = function () {
        return 'i am(我是) ：' + this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log('--util.isArray()-----------------------');
util.isArray([]); //true
util.isArray(new Array()); //true
util.isArray({}); //false

console.log('--util.isRegExp(object)【是否是正则表达式】-----------------------');

util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})
// false
console.log('--util.isDate(object)【是否是日期类型】-----------------------');
util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})
// false

console.log('--util.isDate(object)【是否是日期类型】-----------------------');
util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({
    name: 'Error',
    message: 'an error occurred'
})
// false