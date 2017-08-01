///test.js
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