$(document).ready(function(){
	$(".nb-che").mouseover(function(){
		$(".nb-che").get(0).src="images/two1.jpg";
		$(".nb-che").css({"margin-top":5,"width":42});
	});
	$(".nb-che").mouseleave(function(){
		$(".nb-che").get(0).src="images/two.jpg";
	});
	$(".nb-che").click(function(){
		window.location.href="gouwuche.html";
	})
	$(".lianjie").mouseover(function(){
		$(this).animate({opacity:"1"},500);
		$(".lianjie").not(this).css({"opacity":0.5});
	})
	$(".lianjie").mouseleave(function(){
		$(".lianjie").animate({"opacity":0.5},500);
	});
	$(".lianjie1").mouseover(function(){
		$(this).animate({"opacity":1},500);
	})
	$(".lianjie1").mouseleave(function(){
		$(".lianjie1").animate({"opacity":0.3},500);
	});
	
	$(".shangcheng").mouseover(function(){
		$(".shangcheng").get(0).src="images/bb.jpg";
		$(".shangcheng").css({"width":32});
	})
	$(".shangcheng").mouseleave(function(){
		$(".shangcheng").get(0).src="images/aa_03.jpg";
	});
	$(".yunfuwu").mouseover(function(){
		$(".yunfuwu").get(0).src="images/dd.jpg";
		$(".yunfuwu").css({"width":34});
	})
	$(".yunfuwu").mouseleave(function(){
		$(".yunfuwu").get(0).src="images/aa_05.jpg";
	});
	$(".fuwu").mouseover(function(){
		$(".fuwu").get(0).src="images/aa.jpg";
		$(".fuwu").css({"margin-top":-1,"width":36});
	})
	$(".fuwu").mouseleave(function(){
		$(".fuwu").get(0).src="images/aa_09.jpg";
		$(".xinlang").css({"margin-top":0});
	});
	$(".xinlang").mouseover(function(){
		$(".xinlang").get(0).src="images/cc.jpg";
		$(".xinlang").css({"margin-top":-1,"width":31});
	});
	$(".xinlang").mouseleave(function(){
		$(".xinlang").get(0).src="images/aa_07.jpg";
		$(".xinlang").css({"margin-top":0});
	});
})
/*****************轮播********************/
$(document).ready(function(){
	var num=0;
	$('.lunbo ul li').eq(num).addClass('active');
	$('.lunbo .dot span').eq(num).addClass('active');
	$('.lunbo ul li').eq(num).css({'opacity':1,'filter':'alpha(opacity:100)'});
	var obj=new Object;
	obj.timer=setInterval(function(){
		num++;
		if(num==3){
			num=0;
		}
		lunbo();
	},3000);
	$('.lunbo ul li,.lunbo .dot span').hover(function(){
		clearInterval(obj.timer);
	},function(){
		obj.timer=setInterval(function(){
			num++;
			if(num==3){
				num=0;
			}
			lunbo();
		},3000);
	});
	$('.lunbo .dot span').click(function(){
		num=$(this).index();
		lunbo();
	})
	function lunbo(){
		$('.lunbo .dot span').eq(num).addClass('active').siblings().removeClass('active');
		$('.lunbo ul li').eq(num).addClass('active').siblings().removeClass('active');
		$('.lunbo ul li').eq(num).stop().animate({'opacity':1,'filter':'alpha(opacity:100)'},500).siblings().animate({'opacity':0,'filter':'alpha(opacity:0)'},500)
	}
})
/*****************主体**************************/
$(document).ready(function(){
	var a=$("nb-body div").width()/2+477/2;
	console.log(a);
	for(var i=0;i<4;i++){
		document.getElementsByClassName("tu")[i].style.left=-a+"px";
	}
	$(".nb-body div .tu").hover(function(){
		$(this).find("img").stop().animate({width:"480",height:"210"},1000);
		$(this).stop().animate({left:"-240"},1000);
	},function(){
		$(this).find("img").stop().animate({width:"447",height:"200"},1000);
		$(this).stop().animate({left:"-230"},1000);
	});
})


















































