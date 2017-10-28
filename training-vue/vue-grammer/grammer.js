var vm = new Vue({
    el:'#app',
    data:{
        message: "Jasper",
        rawHtml:'<h3>你好，伙计，我是被替换过来的html</h3>',
        dynamicId:'dddivId',
        isButtonDisabled:true,
        seen:true,
        url_jianshu:`http://www.jianshu.com/u/34eadc1d5303`
    },
    methods:{
        clickLink : function(){
            window.alert('vm告诉我，你点击了一个链接');
        }
    },
    computed:{///计算属性:对于任何复杂逻辑,可以使用它。计算属性的 getter 函数是没有连带影响 (side effect)，这使得它易于测试和推理。
        /**
         * 计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
         */
        reversedMessage:function(){
            return this.message.split('').reverse().join('....');
        },
        ///以下这个计算属性，值已经固定了，不会再改变
        // now:function(){
        //     return Date.now();
        // }
    }
});


var vm2 = new Vue({
    el:'#fullNameTest',
    data:{
        // fullName:"Jasper Wu",
        firstName:"Jasper",
        lastName: "Wu"
    },
    // watch:{
    //     firstName:function(val){
    //         fullName = val + ' '+ lastName;
    //     },
    //     lastName:function(val){
    //         fullName = firstName + ' '+ val
    //     }
    // },
    computed:{
        // fullName:function(){
        //     return this.firstName+" "+this.lastName;
        // }
        fullName:{
            get:function(){
                return this.firstName + " "+ this.lastName;
            }
            ,set:function(newVal){
                var ss = newVal.split(' ');
                this.firstName = ss[0];
                this.lastName =  ss[ss.length-1];
            }
        }
    }
});