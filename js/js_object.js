//对象创建
////方式一
var obj =  new Object();
obj.name = "ming";
user.getName= function(){
	return this.name;
}
////方式二
var obj = {
	name:'ming',
	age:18,
	getName:function(){
		return this.name +" , "+this.age;
	}
}
///方式三：适用于可重用对象的创建， 将对象实际封装在其自身函数块内部。（对象内部keep住对象信息）
function User(name, age){
	this.name= name;
	this.age = age;
	this.getName  = function(){return this.name;};
}
var user = new User("ming",18);


////方法四：原型对象模式
//////优势：对象的原型内部创建的属性和函数，只会在JS加载时被创建一次，而不会每次创建一个新对象实例都被创建。
function User(name, age){
	this.name = name;
	this.age = age;
}
User.prototype = {
	getName:function(){
		return this.name;
	}
};


