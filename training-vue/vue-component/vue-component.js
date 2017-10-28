///全局注册
Vue.component('my-global-component',{
    template:'<div>A global custom component</div>'
})


//局部注册
var Child = {
    template:'<div>A local custom component</div>'
}

new Vue({
    components:{
        'my-local-component':Child
    }
})