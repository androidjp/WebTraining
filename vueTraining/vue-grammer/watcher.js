///需要用到两个库
/**
 * <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
 * <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
 */

var watcher = new Vue({
    el:'#watch-example',
    data:{
        question:'',
        answer:''
    },
    watch:{
        question:function(){
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods:{
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // ajax 请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle)，参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为用户停止输入等待的毫秒数
        500
      )
    }
});