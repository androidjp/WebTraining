// instanceof
console.log({} instanceof Object);//true {判断对象的类型}

// typeof
console.log(typeof 100 === 'number');//true (一般用于原始类型或者函数对象),注意：NaN --> 'number' ,null ---> 'object' 

//Object.prototype.toString
console.log(Object.prototype.toString.apply([]) === "[object Array]");
console.log(Object.prototype.toString.apply(function(){}) === "[object Function]");
console.log(Object.prototype.toString.apply(null) === '[object Null]');
console.log(Object.prototype.toString.apply(undefined) === '[object Undefined]');
console.log(Object.prototype.toString.apply(NaN) === '[object Number]');
console.log(Object.prototype.toString.apply(0) === '[object Number]');
console.log(Object.prototype.toString.apply(-2.5) === '[object Number]');
console.log(Object.prototype.toString.apply('-2.5') === '[object String]');
console.log(Object.prototype.toString.apply('') === '[object String]');
console.log(Object.prototype.toString.apply({}) === '[object Object]');
console.log(Object.prototype.toString.apply(new Number(10)) === '[object Number]');
