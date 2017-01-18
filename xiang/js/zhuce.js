/***********************切换注册方式***********************/
$(document).ready(function(){
	$(".container .top span").click(function(){
		$(this).addClass("three");
		$(this).siblings().removeClass("three");
		$(this).css({"cursor":"pointer"});
		console.log($(this).index());
		if($(this).index()==0){
			$(".container .reg-ph").addClass("visib");
			$(".container .reg-ph").siblings().removeClass("visib");
		}else{
			$(".container .reg-mail").addClass("visib");
			$(".container .reg-mail").siblings().removeClass("visib");
		}
		
		
	})
})
/***********************用户信息验证*************************/
$(document).ready(function(){
	/***************************用手机号码注册**********************************/
	function main(){
		var _reg={
			"account":/^\w{6,12}$/g,//验证用户账号的长度够不够，并且限制只能字母数字下横线
			"mobile":/^1[345678]\d{9}$/g,//验证手机号
			"mail":/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi,//验证邮箱
			"secret":/^.{6,20}$/g//验证密码
		}
		
		document.getElementById("user").onblur=function(){
			if(_reg.mobile.test(this.value)) {
				var _self=this;
				ajaxRequest("post", "api/checkUser.php", true, {"condition": "mobile='" + this.value + "'"}, function (data) {
					if (parseInt(data) > 0) {
						_self.parentNode.children[1].innerHTML = "**手机号已占用";
					} else {
						_self.parentNode.children[1].innerHTML = "";
					}
				});
			}else{
				this.parentNode.children[1].innerHTML = "*手机格式不正确";
			}
			_reg.mobile.lastIndex=0;
		}
		document.getElementById("password").onblur=function(){
			if(_reg.secret.test(this.value)) {
				this.parentNode.children[1].innerHTML = "";
			}else{
				this.parentNode.children[1].innerHTML = "密码格式不正确";
			}
			_reg.secret.lastIndex=0;
		}
		
		document.getElementById("sub").onclick=function(){
			var aa=document.getElementById("check").value;
			var bb=document.getElementById("yanma").innerHTML;
			var _params={
				"user":document.getElementById("user").value,
                "mobile":document.getElementById("user").value,
                "secret":document.getElementById("password").value
			}
			if(aa==bb){
				if(_reg.account.test(_params.user) && _reg.mobile.test(_params.mobile) && _reg.secret.test(_params.secret)){
					ajaxRequest("post","api/registerUser.php",true,_params,function(data){
						if(parseInt(data)>0){
							console.log(data);
							alert("您已顺利成为会员！！！");
							window.location.href="denglu.html";
						}else{
							console.log(data);
							alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
						}
					})
				}else{
					_reg.account.lastIndex=0;
					_reg.mobile.lastIndex=0;
					_reg.mail.lastIndex=0;
					_reg.secret.lastIndex=0;
					alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
				}
			}else{
				alert("验证码输入错误");
			}
		}
	}
	main();
/***************************用邮箱注册**********************************/
	function main2(){
		var _reg={
			"account":/^\w{6,12}$/g,//验证用户账号的长度够不够，并且限制只能字母数字下横线
			"mobile":/^1[345678]\d{9}$/g,//验证手机号
			"mail":/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi,//验证邮箱
			"secret":/^.{6,20}$/g//验证密码
		}
		
		document.getElementById("user2").onblur=function(){
			if(_reg.mail.test(this.value)) {
				var _self=this;
				ajaxRequest("post", "api/checkUser.php", true, {"condition": "mail='" + this.value + "'"}, function (data) {
					if (parseInt(data) > 0) {
						_self.parentNode.children[1].innerHTML = "**邮箱已占用";
					} else {
						_self.parentNode.children[1].innerHTML = "";
					}
				});
			}else{
				this.parentNode.children[1].innerHTML = "*邮箱格式不正确";
			}
			_reg.mail.lastIndex=0;
		}
		document.getElementById("password2").onblur=function(){
			var _self=this;
			if(_reg.secret.test(this.value)) {
				_self.parentNode.children[1].innerHTML = "";
			}else{
				_self.parentNode.children[1].innerHTML = "密码格式不正确";
			}
			_reg.secret.lastIndex=0;
		}
		
		document.getElementById("sub2").onclick=function(){
			var aa=document.getElementById("check2").value;
			var bb=document.getElementById("yanma2").innerHTML;
			var _params={
				"user":document.getElementById("user2").value,
                "mail":document.getElementById("user2").value,
                "secret":document.getElementById("password2").value
			}
			if(aa==bb){
				if(_reg.mail.test(_params.mail) && _reg.secret.test(_params.secret)){
					ajaxRequest("post","api/registerUser2.php",true,_params,function(data){
						if(parseInt(data)>0){
							console.log(data);
							alert("您已顺利成为会员！！！");
							window.location.href="denglu.html";
						}else{
							console.log(data);
							alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
						}
					})
				}else{
					_reg.account.lastIndex=0;
					_reg.mobile.lastIndex=0;
					_reg.mail.lastIndex=0;
					_reg.secret.lastIndex=0;
					alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
				}
			}else{
				alert("验证码输入错误");
			}
		}
	}
	main2();
})
/***********************随机验证码**************************/
$(document).ready(function(){
	var m=0;
	function fn01(){
		var str = "";
		m++;
		for(var i=0; i<4; i++){
			var nRandom01 = Math.floor(Math.random()*10)+48;
			var nRandom02 = Math.floor(Math.random()*26)+97;
			var nRandom03 = Math.floor(Math.random()*26)+65;
			var aRandom = [nRandom01,nRandom02,nRandom03];
			var nRandom04 = Math.floor(Math.random()*3);
			
			str += String.fromCharCode(aRandom[nRandom04]);
		}
		$("#yanma").get(0).innerHTML=str;
		$("#yanma2").get(0).innerHTML=str;
	}
	fn01();
})









