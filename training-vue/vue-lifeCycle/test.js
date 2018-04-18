var data = {
    name: 'Jasper',
    psd: null,
    message: null
}
var vm = new Vue({
    el: '#app',
    data: data,
    created: function () { //创建此实例后
        console.log('created , name is: ' + this.name);
    },
    mounted: function () {///没有绑定el的话，不会调用
        console.log('mounted.');
    },
    updated: function () {
        console.log('updated.');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});

vm.$watch('name', function (newValue, oldValue) {
    ///监听name字段的改变
    console.log(`name 从${oldValue}变成${newValue}`);
    this.message = `name 从${oldValue}变成${newValue}`;
});