// 发布/订阅

jQuery.subscribe("done", f2);

function f1() {
    setTimeout(function () {
        　　　　　　 // f1的任务代码  　　　　　　
        jQuery.publish("done");　
    }, 1000);
}

jQuery.unsubscribe("done", f2);