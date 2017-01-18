$(document).ready(function(){
	var num=0;
	$(".sign span").click(function(){
		num++;
		document.cookie="n="+num;
		console.log(num);
	})
})
