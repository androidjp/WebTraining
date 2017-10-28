var AjaxOpt = function() {

    var opt = {};
    //get请求

    opt.doGet = function(url, data, callback) {
        $.ajax({
        	type:"GET",
        	url:url,
        	data:data,
        	contentType: "application/json",
        	dataType:"json"
        }).then(
            function(jsonResult) { callback(jsonResult); },
            function(jsonResult) { alert("请重试");}
        );
    }


    ///post 

    opt.doPost = function(url ,data, callback){
    	$.ajax({
    		type:"POST",
    		url:url,
    		data:JSON.stringify(data),
    		contentType: "application/json",
    		dataType:"json"
    	}).then(
    		function(jsonResult){ callback(jsonResult);},
    		function(jsonResult){ alert("请重试");}
    	)
    }

    ///put 

    opt.doPut = function(url ,data, callback){
        $.ajax({
            type:"PUT",
            url:url,
            data:JSON.stringify(data),
            contentType: "application/json",
            dataType:"json"
        }).then(
            function(jsonResult){ callback(jsonResult);},
            function(jsonResult){ alert("请重试");}
        )
    }

     ///patch

    opt.doPatch = function(url ,data, callback){
        $.ajax({
            type:"PATCH",
            url:url,
            data:JSON.stringify(data),
            contentType: "application/json",
            dataType:"json"
        }).then(
            function(jsonResult){ callback(jsonResult);},
            function(jsonResult){ alert("请重试");}
        )
    }


    return opt;
}();