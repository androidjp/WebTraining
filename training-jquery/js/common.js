/// 公共工具类
var Common = {

    /**
     * 格式化时间（Date）
     * @param  {[type]} time [description]
     * @return {[type]}      [description]
     */
    formatDate: function(time) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        if (month < 10)
            month = "0" + month;
        var date = now.getDate();
        if (date < 10)
            date = "0" + date;
        var hour = now.getHours();
        var hourStr = "";
        (hour < 10) ? hourStr = "0" + hour: hourStr = "" + hour
        var minute = now.getMinutes();
        var minuteStr = "";
        (minute < 10) ? minuteStr = "0" + minute: minuteStr = "" + minute;
        var second = now.getSeconds();
        var secondStr = "";
        (second < 10) ? secondStr = "0" + second: secondStr = "" + second;
        return year + "-" + month + "-" + date + " " + hourStr + ":" + minuteStr + ":" + secondStr;
    },

    /**
     * HTML获取请求的URL中的params 参数
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
};