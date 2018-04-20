var Vue = require("./../vue.js");

///---------------------------------------------------
/// sampleA : created() 和 methods 都来自外部对象，Vue对象本身不有任何东西
///---------------------------------------------------
var myMixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello: function() {
      console.log("Hello from mixin!");
    }
  }
};

var Component = Vue.extend({
  mixins: [myMixin]
});

var cp = new Component();
/// -> Hello rom mixin!

///---------------------------------------------------
/// 同名钩子函数 ， 将混合为一个数组，最终都会依次被调用
/// 调用顺序： 混入对象的钩子 -> Vue组件自身函数
///---------------------------------------------------

var mixin = {
  created: function() {
    console.log("mixin 对象的钩子函数 created()");
  }
};

new Vue({
  mixins: [mixin],
  created: () => {
    console.log("组件自身 created()被调用");
  }
});

///---------------------------------------------------
/// 数据对象有同名时，优先用组件自身的
///---------------------------------------------------
var mixin = {
  data: function() {
    return {
      msg: "AAA",
      foo: "CCC"
    };
  }
};

new Vue({
  mixins: [mixin],
  data: function() {
    return {
      msg: "BBB"
    };
  },
  created: function() {
    console.log(this.msg, this.foo);
  }
});

///---------------------------------------------------
/// 注册 全局混入对象
/// 注意：这将会影响到所有之后创建的Vue 实例。
/// 使用恰当时，可为 自定义对象注入处理逻辑。
///---------------------------------------------------

Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(
        "为什么可以输出myOption? 因为全局的mixin对象已经创建了这个属性了：myOption = ",
        myOption
      );
    }
  }
});

new Vue({
  myOption: "hello"
});
