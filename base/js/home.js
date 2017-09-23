function browse(var website) {
	// document.getElementById("").innerHTML="abcde";
	alert("是否要跳转到简书？");
	document.getElementById("link_to_jianshu").innerHTML="是否要跳转到简书？";
}

///值类型变量：数值布尔值、null、undefined、字符串
  ///特点：变量的赋值（a =b）相当于创建了一个新的空间，然后copy值，所以，新空间和旧空间互补影响
///引用类型变量：对象、数组、函数
  ///特点：变量的赋值，不会创建一个新空间，而知让新变量和旧变量同时指向原有空间（同一地址）
//原始类型：string, number,boolean ,null, undefined
///包装类型：String、Number、Boolean、Null（空）、Undefined（未定义）
//对象类型：object、function（包装类型包括：Object，Array，Function等）
var len = 16;
var x  = 2;
var points = x*10;
var lastName= "ming";
var cars = ["s","a","b"];//或者 cars=new Array("a","b","c"); 或者 cars=new Array();cars[1]="a";
var person = {firstname:"john", lastname:"deo", addr:"广州市天河区"};
var address = person.addr;//对象的寻址方式：或者：address = person["addr"];
address = null;//清空变量
var y = 123e5;//12300000
y = 123e-5;///0.00123
var z = new Boolean;///声明变量类型

///关于表达式
var arr1 = [1,2];//相当于：new Array(1,2);
var arr2 = [1,,,2];//相当于：new Array(1,undefined,undefined,2)
var ob1 = new Object();
ob1.x = "A";
ob1.y = "B";
var ob2  ={x:"A",y:"B"};///此时， ob1 == ob2
//函数表达式
	//例子1
	var func = function(){};
	//例子2
	(function(){console.log('hello world!');})
///属性访问表达式
var o  = {x:1};
o['x'];///得到是x的值
//对象创建表达式
var ff = new Func(1,2);
var oobj = new Object;
///特殊的运算符
var a = (1,2,3);//最终a = 3 ，一次读取元素，最终取最后一个元素
// delete 运算符
	var val = {x:1};
	val.x;///x = 1；
	delete val.x;
	val.x;///x = undefined；
	///当然， IE9 有一个新的delete运算用法
	var obj  = {};
	Object.defineProperty(obj,'x',{
		configurable: false,
		value: 1
	});
	delete obj.x;///返回false
	obj.x;//此时，x=1 （因为只有当configurable标签被标志了true时，delete运算才生效）
/// in 运算符
window.x = 1;
'x' in window;//判断x全局变量是否在window全局对象中，返回true
// instanceof 和 typeof 运行符
///注意点！！！ instanceof 不能用于不同window 或者 iframe 之间的对象进行比较
{} instanceof Object;//true {判断对象的类型}
typeof 100 === 'number';//true (一般用于原始类型或者函数对象),注意：NaN --> 'number' ,null ---> 'object' 
//Object.prototype.toString
Object.prototype.toString.apply([]); === "object Array";
Object.prototype.toString.apply(function(){}); === "object Function";
Object.prototype.toString.apply(null); === "object Null";
Object.prototype.toString.apply(undefined); === "object Undefined";
// new 运行符的一个注意点
function Foo(){};
Foo.prototype.x = 1;
var b = new Foo();
b.x;///返回1
b.hasOwnProperty('x');//false。判断 x成员是否属于变量b
b.__proto__.hasOwnProperty('x');///true、找到变量b的原型，原来x成员是b的原型类的内部成员
// this 运算符
this;//表示window（浏览器）
var obj = {
	func:function(){return this;}///this表示obj本身
};
obj.func();///如果obj本身是一个函数，那么调用func()也就是他本身。
//void运算符（一元运算符）
void(0);//返回undefined
void 0;//返回undefined

///JS语句
var a = b = 1;///这样，a如果在func中，a为局部变量，但是b一定就是全局变量
var a=1,b=1;///这种创建局部变量的方法才可取！！
//关于with语句(用于获取某个对象的某个内部成员信息，但是严格模式下被禁用，是的饿JS引擎优化更难，可读性差、)
	with({x:1,y:2}){
		console.log(y);
	}
	//又比如
	with(document.forms[0]){
		console.log(name.value);
	}
	//但是，with语句在严格模式下已被禁用，推荐使用var变量赋值的方式进行遍历
	var form = document.forms[0];
	console.log(form.name.value);

///JS严格模式
//  1. 定义：更多的合法性检查，更加严格的格式和写法
//  2. 用法如下：
'use strict'///写法一：JS全局生效
function func(){
	‘abc’;//允许
	//var a=1,b=2;///不允许，会让严格模式失效
	'use strict';//写法二：单个JS 函数内部代码生效
};
///严格模式注意点之~~ arguments[0] 与 函数形参的关系
///注意点一：函数内部delete本函数形参或者函数名，报错
///注意点二：函数内部delete被声明configurable为false的成员，会报错
///注意点三：重复属性名，错误
///注意点四：禁止八进制字面量，如：0123 等
///注意点五： eval，arguments变成关键字，不作为变量或函数名
///注意点六：关于eval，独立作用域
  eval('var evalVal = 2';);///一般模式下，可以通过 typeof evalVal 获取到 evalVal变量，但是严格模式下，则get不到（undefined）

/// JS 对象 相关注意点
var obj = {};//表示一个空对象
obj.x = 1;///其中，像obj的属性x 都有很多标签：writable、enumerable、configurable、value、get/set
obj.prototype;///其中，obj本身就拥有一个prototype对象属性（表示obj的原型，类似java的父类）
obj.class;///另外，内置对象标签class：表示对象obj的类型
obj.extensible;//内置对象属性extensible：表示obj是否可以继续被添加属性。

//除了var obj = new XXX();方式创建对象，还有Object
var obj = Object.create({x:1});///这个{x:1}就是obj对象的原型，而{x:1}本身的原型是Object.prototype
obj.x;//1
typeof obj.toString;//"function"
obj.hasOwnProperty('x');//false
var obj = Object.create(null);
obj.toString;//undefined

//属性删除
// 可以删除一般的成员属性
// 但，如 Object.prototype,是无法删除的
var descripter = Object.getOwnPropertyDescriptor(Object/*指定对象*/,'prototype');///通过获取属性描述，可以查看某个属性的标签等
descripter.configurable;//false
///用var定义的变量 或者 function定义的函数，都不能被delete
var cat = new Object;
cat.legs = 4;
cat.name = "Kitty";
cat.propertyIsEnumable('legs');///可查看对象的某个属性是否可被枚举的
///属性检测
Object.defineProperty(cat,'price',{enumerable:false,value:1000});//设置属性和相关配置，并创建某个对象（默认标签都是false）
cat.propertyIsEnumable('price');//false
cat.hasOwnProperty('price');//true
if(cat&&cat.legs){
	cat.legs *=2;
}
if(cat.legs != undefined){
	//!== undefined , or !===null
}
if(cat.legs !== undefined){
	// only if cat.legs is not undefined
}
///属性枚举
var o = {x:1,y:2,z:3};
'toString' in o;//true
o.propertyIsEnumable('toString');//false
var key;
for(key in o){
	console.log(key);//x,y,z 
}
var sub =  Object.create(o);///对象o的子类对象
sub.a= 4;///遍历时，输入则为：a,x,y,z
for(var p in sub){
	console.log(p);
}
//关于对象属性的get和set方法
//例子
var man = {
    name:'ming',
	$age:null,
    get age(){
		if(this.$age == undefined)
	      return new Date().getFullYear() - 1995;
		else{
			return this.$age;
        }
	},
	set age(val){
      val = +val;
		if(!isNaN(val)&&val>0 && val<150){
			this.$age = +val;
        }else{
			throw new error('Incorrect val = '+ val);
        }
    }
}
var person = {};
//同时定义多个属性
Object.defineProperties(person,{
	title:{value:'aa', enumerable:true},
	salary:{value:8000,enumerable:true, writable:true}
    luck:{
        get:function(){
            return Math.random() >0.5?'good':"bad";
        }
    },
    promote:{
        set:function(level){
            this.salary*=1+level*0.1;
        }
    }
});
///遍历，除了for in，还有：
Object.keys(person);//["name"] 输出enumerable为true的属性
//注意：当对象属性标签中：configurable=false而writable=true时，可通过Object.defineProperty()来设置writable=false，其他情况都不允许
//只有configurable为true的属性，可以被delete

//对象标签、对象序列化
//对象标签包括：[[proto]],class,extensible
  // 原型链：一般对象的prototype 是 Object.prototype ，而Object.prototype.__proto__ = null;
//class标签
var toStr = Object.prototype.toString;
function getType(o){
    return toStr.call(o).slice(8,-1);///截取 call()方法返回的字符串的第8个字符开始到最后并删除最后一个字符的字符串，进行输出
};
toStr.call(null);//[object Null]
getType(null);//Null
getType(1);//Number
getType(new Number(1));//Number
getType('abc');//String
//extensible标签（对象是否可扩展：属性是否可继续添加）
Object.isExtensible(obj);//true
Object.preventExtensions(obj);///关闭对象obj的可扩展性【但此时，对象已有属性仍可删除】
Object.isExtensible(obj);//false
Object.seal(obj);///（configurable = false）让内部属性不可被删除【但可被修改值】
Object.isSealed(obj);//true
Object.freeze(obj);//（writable = false）冻结内部属性，让内部属性值不可写
Object.isFrozen(obj);//true
///序列化的实现
///法一：通过全局JSON对象相关方法进行对象的序列化
var obj = {x:1,y:true,z:[1,2,3], nullVal:null,str:"你好"};
JSON.stringify(obj);///会得到字符串："{"x":1,"y":true,"z":[1,2,3],"nullVal":null,"str":"你好"}"
obj = {val:undefined, a:NaN, b:Infinity, c:new Date()};//注意：序列化过程：undefined的属性不会被序列化，UTC时间格式
JSON.stringify(obj);//得到字符串："{"a":null,"b":null,"c":"2017-05-01T11:41:33.870Z"}"
///解析JSON字符串的方法：
obj = JSON.parse('{"x":1}');///注意：外面试单引号，内部的属性是用双引号
obj.x;//1
///自定义的序列化
var obj = {
    x:1,
    y:2,
    o:{
        o1:1,
        o2:2,
        toJSON:function(){////自定义属性o的序列化后的表示方式
            return this.o1 + this.o2;
        }
    }
};
JSON.stringify(obj);//"{"x":1,"y":2,"o":3}"
///关于对象的toString方法
var obj = {x:1,y:2};
obj.toString;//function toString() { [native code] }
obj.toString();//[object Object]
obj.toString = function(){return this.x+this.y;};
"result "+obj;//result 3
///关于valueOf方法【valueOf方法在对象需要转换为基本类型的时候，优先级高于toString()，如果valueOf返回值已经是基本类型而不是对象或空时，toString将被忽略】
obj.valueOf=  function(){return this.x + this.y + 100;};
+obj;//103, from valueOf
"Result "+obj;//still "Result  103"

///关于JS数组
////数组：元素的有序集合。每个值：元素
////数组长度：0 to (2^23 -1)[大概是：4294967296， 40亿左右]
///JS数组是弱类型的，数组中可含有欧不同类型的元素，甚至可以使对象或其他数组
var students = [{name:'Ming',age:27},{name:'sss',age:3}];
var comArr1 = [1,,2];// 1, undefined, 2
var comArr2 = [,,];///undefined*2 【不推荐】

var arr = new Array();//等价于：var arr = [];
var arr = Array();///等价于：var arr = new Array();【new 可要可不要】
var arr = new Array(100);/// undefined * 100
var arr = new Array(true, false, 1, 'a');//直接定义数组内部元素的方式
///数组的长度可以动态改变,但是delete数组元素后，虽然元素值变为undefined，但是数组长度不会减少
var arr = [1,2,3,4,5];
arr[1];//2
arr.length;//5
arr[5]=6;
arr.length;//6
delete arr[0];
arr[0];//undefined
arr.length;//6 
arr.push(7);//尾部添加一个元素，值为7
arr[arr.length]=4;///等价于：arr.push(4)
arr.unshift(0);///头部添加元素
delete arr[2];///delete掉一个元素，
2 in arr;//false ， 那么， 再次查找这个索引位置的元素，返回false，不存在了
arr.length-=1;///删除尾部元素
arr.pop();//删除尾部元素
arr.shift();//删除头部元素

//二维数组
var arrs = [[0,1],[2,3],[4,5]];
var row0 = arrs[0];

///数组的方法
// {} --> Object.prototype  ; [] --> Array.prototype
//Array.prototype的可用方法：
 	 //join()
  	var arr = [1,2,3];
	arr.join();//"1,2,3"
	arr.join("_");//"1_2_3"
	function repeatStr(str, n){
		return new Array(n+1).join(str);
	}
	repeatStr("Hi",3);//HiHiHi
  	//reverse() 颠倒元素顺序（原数组被修改）
 	arr.reverse();//[3,2,1]
 	arr;//[3,2,1]原数组被修改
 	//sort() ///字符按字典顺序排序（原数组被修改）
 	arr.sort();///默认情况
 	arr.sort(function(a,b){///自定义情况
	return a-b;
	})
 	//concat() 数组合并（原数组未修改）
 	arr.concat(4,5);//[1,2,3,4,5]
 	arr;//[1,2,3]
 	// slice(开始位置，结束位置) 左闭右开区间 ，返回部分数组（原数组未被修改）
 	arr;//[1,2,3,4,5]
 	arr.slice(1,3)//[2,3]
 	arr.slice(1);//[2,3,4,5]
 	arr.slice(1,-1);//[2,3,4]
 	arr.slice(-4,-3);//[2]
 	///splice(删除元素位置，删除元素个数，删除元素的位置需要添加的元素)  数组拼接 （原数组被修改）
 	arr = [1,2,3,4,5];
 	arr.splice(2);//returns [3,4,5]
 	arr;//[1,2]
 	arr = [1,2,3,4,5];
 	arr.splice(2,2);//returns [3,4]
 	arr;//[1,2,5]
 	arr = [1,2,3,4,5];
 	arr.splice(1,1,'a','b');//return [2]
 	arr;//[1,a,b,3,4,5]
 	/// forEach(函数); 遍历数组 (EcmaScript5以上的函数，IE9或以上适配)
 	arr.forEach(function(x,index,a){
	console.log(x+'|'+index+'|'+(a===arr));
	});
 	/// map(函数); 数组映射  (原数组未修改；EcmaScript5以上的函数，IE9或以上适配)
 	arr = [1,2,3];
 	arr.map(function(x){
	return x*10;
	});///[10,20,30]
	arr;///[1,2,3]
	// filter(函数(x,index))	 数组过滤 (原数组未修改，ES5以上)
	// some 和 every 数组元素判断（ES5 以上）
	arr.some(function(x){
	return x ==1;//true
	});
	arr.every(function(x){
	return x < 100;//true
	});
	// reduce(函数(x,y)) 和 reduceRight(函数(x,y)) 进行元素迭代相关计算逻辑操作
	arr = [1,2,3];
	var sum = arr.reduce(function(x,y){
		return x+y;
	});//sum = 6
	var max = arr.reduceRight(function(x,y){
		console.log(x+"|"+y);
		return x>y?x:y;
	});
	//3|2
	//2|1
	max;//3
	// indexOf 和 lastIndexOf (ES5以上) 数组检索
	arr.indexOf('查找元素');
	arr.indexOf('查找元素','查找起始位置');
	arr.lastIndexOf('查找元素','查找起始位置（从右到左）');
	//Array.isArray  判断是否是数组
	Array.isArray([]);//true
	[] instanceof Array;//true
	({}).toString.apply([])==='[object Array]';//true
	[].constructor === Array;//true

var str = "htto world";
str.charAt(0);//"h"
str[1];//"t"
Array.prototype.join.call(str,"_");//"h_t_t_o_ _w_o_r_l_d"

///函数声明和函数表达式
//1. 函数声明
function add(a,b){
	a = +a;b=+b;
	if (isNaN(a)||isNaN(b)) {
		return;
	}
	return a+b;
}
//2. 函数表达式
var add  = function(a,b){///方式一
	return a+b;
};
(function(){///方式二
	//do sth
})();
return function(){///方式三
	//do sth
};
var add = function foo(a,b){///方式四
	return a+b;
};

//Function构造器
///参数格式：(可选多个参数 , 最后一个是函数体内容)
var func = new Function('a','b','console.log(a+b);');
func(1,2);//3
///函数对全局变量与局部变量的访问
var globalVal = "global";
(function(){
	var localVal = 'local';
	Function('console.log(typeof localVal, typeof globalVal);')();
})();/// undefined, string
//总结1: 除了函数声明会被前置执行，函数表达式和函数构造器都不会被前置
//总结2: 函数表达式和函数构造器，都允许匿名和立即调用
//总结3: 函数构造器 没有函数名

//this
/// 全局this，在浏览器中指代：window对象
function f1(){
	//"use strict";
    return this;//一般模式：return window ，严格模式：return undefined
};
// 构造器中的this
function MyClass(){
	this.a = 37;//this指向MyClass.prototype对象
	return {a:38};
}
var o = new MyClass();
console.log(o.a);//38

// call/apply方法 与 this 【相当于Java的反射调用方法】
function add(c,d){
	return this.a + this.b+ c+d;
}
var o = {a:1,b:2};
add.call(o,3,4);///"[1+2+3+4]" .call(/*指定的this对象*/，/*add的参数列表*/)
add.apply(o,[3,4]);//等价于call
function bar(){
    console.log(Object.prototype.toString.call(this));///这里的this，本身指向这个函数的原型对象
    bar.call('abc');///"[object String]" 。现在通过call，指定this指向'abc'这个对象
}

//bind方法 和 this
function g(){
	return this.a;
}
var g = f.bind({a:"test"});///传入一个对象："{a:"test"}" ，函数f 中的所有this 都会指向到这个对象上
console.log(g());//test
var o = {a:37, f:f,g:g};
console.log(o.f(),o.g());//37,test 【说明，g()中的this指向已经被固定了，不会改变】

//关于function.arguments【函数的实参列表】
function foo(x,y,z){
	console.log(this.name+","+this.length);//,0
    console.log(arguments.length+","+arguments[0]+","+arguments[1]);//2,1,2
    arguments[0]=10;
    console.log(x);//10【严格模式下：1】
    arguments[2] = 100;
    console.log(z);//undefined【严格模式：报错】
    console.log(arguments.callee === foo);//true【严格模式下不允许执行】
}
foo(1,2);

///call/apply 方法再次说明：
function foo(x,y){
	console.log(x,y,this);
}
foo.call(100,1,2);///1,2,Number(100)
foo.apply(true,[3,4]);///3,4,Boolean(true)
foo.apply(null);//this指向全局对象。undefined,undefined,window【严格模式下为null】
foo.apply(undefined);//this指向全局对象。undefined,undefined,window【严格模式下为undefined】

//bind 与 函数颗粒化(currying)【作用：代码重用，函数的多态实现】
///bind可以让一个多参数的函数调用变成多步的单参数传递调用
function add(a,b,c){return a+b+c;};
var fun1 = add.bind(undefined,100);//默认绑定a=100
fun1(1,2);//103;
var fun2 = fun1.bind(undefined,200);///a已经被绑定为100,则接着绑定b=200
fun2();//NaN
fun2(1);//301;(100+200+1)

//bind 和 new 的特殊点注意：
function foo(){
    this.b = 100;///默认this是指window，则默认是window生成一个属性b = 100
    return this.a;///返回对象属性a（如果不存在a，则返回this）
}
var func = foo.bind({a:1});///将函数foo内部的this都指向对象{a:1}
func();//1  调用函数，return this.a相当于返回{a:1}中的a属性值，而{a:1}对象产生了属性b=100
new func();//{b:100} 此时，new相当于忽略bind这一过程，return的如果是对象则返回对象，若不是，则this会默认化为一个空对象，这个对象的原型是foo.prototype。，

//JS 闭包

// 为div1~div4 四个html标签添加点击事件：
//错误闭包写法
// for (var i=1; i<4; i++) {
// 	document.getElementById('div'+i)
// 	.addEventListener('click',function(){
// 		alert(i);
// 	});
// }
//正确闭包写法
for(var i=1;i<4;i++){
	!function(i){
		document.getElementById('div'+i).addEventListener('click',function(){
			alert(i);//1,2,3
		});
	}(i);
}

///闭包--封装[私有化变量]
(function(){
	var id = 123123;
	var typeid = "item";
	var export = {};

	function converter(userId){
		return +userId;
	}

	export.getUserId = function(){
		return converter(id);
	}

	export.getTypeId = function(){
		return typeId;
	}
	window.export = export;
})();
export.getUserId();//123123
export.getTypeId();//item
export.id;//undefined

//闭包优点：灵活方便，封装
//闭包缺点：空间浪费、内存泄漏、性能消耗

//关于作用域的剖析（ES3 执行上下文）
/// 1. 首先，JS对象的作用域分为：全局作用域，函数作用域，eval作用域
/// 2. 函数的调用，都会在一个叫做“Execution Context”的执行上下文中执行
/// 3. 对于整个全局作用域，也会有一个全局的执行上下文
/// 4. 同一个函数被多次调用，每次调用都是在不同的执行上下文中
/// 5. 关于执行上下文：
/**
* 执行上下文，类似一个栈的结构
* 一开始执行，从全局的EC0，进入函数调用的EC1，再进入函数中的函数调用的EC2，最后再一层层出栈，回到EC0
**/
///6. 变量对象
/**
* JS解析器如何找到我们定义的函数和变量？
* 变量对象（Variable Object，VO）是一个抽象概念中的“对象”，用于存储执行上下文中的：变量、函数声明、函数参数
**/
activeExecutionContext={///执行上下文
	VO:{///变量对象
		data_var,///变量
		data_func_declaration,//函数声明
		data_func_arguments ///函数参数
	}
};
GlobalContextVO//全局环境下的一个VO（VO === this === global/window）
function test(x){
	var b = 20;
}
test(30);///此时，VO(test functionContext) = {x:30 ,b:20};
//变量初始化阶段：【语句前置阶段】
//VO按照如下顺序填充：
///1. 函数参数（若未传入，初始化该参数值为undefined）
///2. 函数声明（若发生命名冲突，会覆盖，也就是说：当已经有个x变量存在，然后再来一个函数x，那么x最终会变成函数）
///3. 变量声明（初始化变量值为undefined，若发生命名冲突，会忽略）
//格式：
//AO(test)={
//	a:10,///函数参数
//	b:undefined,//对象声明
//	c:<ref to func "c">///函数声明
//};
//代码执行阶段：
///变量的赋值开始执行. VO['a']=1,VO['b']=2,VO['c']=function_c(){};

///OOP 面向对象设计
function foo(){
	this.y = 2;
}
foo.prototype.x = 1;
var obj = new foo();
obj.x = 1;
obj.y = 2;
///以上这个例子：函数foo声明,此时，函数foo的原型结构如下：
// foo.prototype{
// 	constructor:foo,
// 	__proto__:Object.prototype,
// 	x:1
// }
//使用new方法新建对象时，该对象obj的原型就指向new对象的原型

//关于JS prototype属性
Student.prototype.x = 101;
bosn.x;//101  bosn是之前已经创建的对象
///动态改变函数的prototype属性（对象来的）时，prototype属性的内部属性修改和添加是影响所有对象的
///但是，如果直接修改函数的prototype属性的指向，则不影响之前创建的对象实例，而影响后续创建的对象
Student.prototype = {y:2};
bosn.y;//undefined
bosn.x;//101
var runnly = new Student('runnly',3,'Class 3');
runnly.x;//undefined
runnly.y;//2

///重温：instanceof 
[1,2] instanceof Array;//true 。 结构："对象 instanceof 函数/构造器"，他会判断：右侧.prototype属性是否出现在左侧的原型链上

///实现继承的方式
function Person(){
}
function Student(){
}
Student.prototype = Person.prototype;//此法不可取！！
Student.prototype = new Person();//可行，但是也同时调用了Person()构造方法，传参上可能有问题
Student.prototype = Object.create(Person.prototype);//推荐。ES5以上的方法
if(!Object.create){///效果同上一句，ES5以下可用
	Object.create = function(proto){
		function F(){}
		F.prototype = proto;
		return new F;
	}
}

//JS 重载例子
function Person(){
    var args = arguments;
    ///参数是对象的情况
    if(typeof args[0] === 'object' && args[0]){
        if(args[0].name){
            this.name =  args[0].name;
        }
        if(args[0].age){
            this.age = args[0].age;
        }
    }else{///参数是原始类型的情况
        if(args[0]){
            this.name = args[0];
        }
        if(args[1]){
            this.age = args[1];
        }
    }
}

//JS 子类的继承方式
///首先，构造器方面：
function Student(name, className){
	this.className = className;
	Person.call(this,name);///反射调用（相当于super(name)）;
}
///然后，是类方法：
Person.prototype.talk = function(str){
    console.log('Person说：'+str);
}
Student.prototype.talk = function(str,place){
	Person.prototype.talk.call(this, str);///相当于super.talk(str);
    console.log('Student '+this.name+" 说："+str+", 地点在"+place);
}

///JS 链式调用
function ClassManager(){};
ClassManager.prototype.addClass = function(str){
    console.log("class:"+str+" added.");
	return this;///重点是这句！！！
}

///再看看让属性不可被删除的子类继承情况
function Person(name){
	Object.defineProperty(this,"name",{value:name,enumerable:true});
}
Object.defineProperty(Person, 'HEAD',{value:1, enumerable:true});///属性HEAD位于Person中，而不是Person.prototype
Object.seal(Person.prototype);///让prototype对象属性不可被删除
Object.seal(Person);///在让Person本身的属性不可被删除
function Student(name,className){
    this.className = className;
    Person.call(this,name);
}
///子类继承的过程
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

///JS 模块化
var moduleA;///外界只会知道这个moduleA对象
moduleA = function(){//立即执行的匿名函数
    var prop = 1;///外部不可见
    function func(){}//外部不可见
    return {
        func:func,
        prop:prop
    }
}();///这样写的好处：prop和func就不会被泄漏到全局作用域中
///类似方式
var moduleB;
moduleB = new function(){///new 函数对象会默认返回this
	var prop = 1;
	function func(){}
	this.prop = prop;
	this.func = func;
};
///注意：匿名的函数表达式，主要作用是：防止内部的对象参数的泄漏到全局作用域中

///JS 正则表达式
/\d\d\d/.test('123');///true
/\d\d\d/.test("abc");//false
new RegExp("Bosn").test("Hi,Bosn");//true
///常见表达式
/// . 任意字符（除了 \n , \r, \2028 or \2029）
/// \d 数字0-9
/// \D 非数字（非 \d）
/// \w 数字或字母（大小写），或下划线
/// \W （非\w）
/// \s 空格、TAB、换页符、换行符
/// \S (非\s)
/// \t \r \b \v \f  回车 换行 垂直制表符 换页符
///表示范围的符号:
/// [...] 字符范围
/// [^...] 字符范围以外 ，如：[^abc]
/// ^ 行首 ，如 ^Hi
/// $ 行尾 ，如 test$
/// \b 零宽单词边界，如： \bno
/// \B 非\b

///关于匿名函数
///1. 一般情况下，函数A中传入被调用函数时，此函数可以不另外声明，直接在传入参数位置定义即可
// function calculate(a,b,func){
// 	return func(a,b);
// }
// function funcAdd(a.b){
	// return a+b;
// }
// calculate(1,2,funcAdd);///3

///上述例子，相当于：
calculate(1,2,funcAdd(a,b){
	return a+b;
});///3




