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
		$("#yanma2").get(0).innerHTML=str;
	}
	fn01();
})

/**********************登录方式切换(微信、新浪、QQ、支付宝)***************************/
$(document).ready(function(){
	$(".qiehuan img").eq(0).hover(function(){
		$(".qiehuan img").get(0).src="images/wei.png";
	},function(){
		$(".qiehuan img").get(0).src="images/wei1.png";
	})
	$(".qiehuan img").eq(1).hover(function(){
		$(".qiehuan img").get(1).src="images/zhi.png";
	},function(){
		$(".qiehuan img").get(1).src="images/zhi2.png";
	})
	$(".qiehuan img").eq(2).hover(function(){
		$(".qiehuan img").get(2).src="images/xinlang2.png";
	},function(){
		$(".qiehuan img").get(2).src="images/xinlang.png";
	})
	$(".qiehuan img").eq(3).hover(function(){
		$(".qiehuan img").get(3).src="images/qq2.png";
	},function(){
		$(".qiehuan img").get(3).src="images/qq.png";
	})
	$(".qiehuan img").eq(0).click(function(){
		window.location.href="https://open.weixin.qq.com/connect/qrconnect?appid=wx00d81dfd7ff09eae&redirect_uri=https%3A%2F%2Faccount.nubia.com%2Flogin%2Fwxshow.action%3Fback_url%3Dhttps%253A%252F%252Faccount.nubia.com%252Flogin%252Findex.action&response_type=code&state=dab35f426e3a7fbd6fd9bb68a1992331&scope=snsapi_login";
	})
	$(".qiehuan img").eq(1).click(function(){
		window.location.href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dce466969732dfaae13d1fe69f782fda7";
	})
	$(".qiehuan img").eq(2).click(function(){
		window.location.href="https://api.weibo.com/oauth2/authorize?client_id=3141810897&redirect_uri=https%3A%2F%2Faccount.nubia.com%2Flogin%2Fsinashow.action%3Fback_url%3Dhttps%253A%252F%252Faccount.nubia.com%252Flogin%252Findex.action&response_type=code&state=c1255212179fba3e5df78aad1ef5a884";
	})
	$(".qiehuan img").eq(3).click(function(){
		window.location.href="https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=101130740&redirect_uri=https%3A%2F%2Faccount.nubia.com%2Fprofile_qq%2Fshow%3Fback_url%3Dhttps%253A%252F%252Faccount.nubia.com%252Flogin%252Findex.action&state=4401a5a99bbff0eb5eb397406fe2ed64";
	})
})






