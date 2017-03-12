$(function(){
	//头部导航
	$('.head-nav li').each(function(i,ele){
		$(ele).mouseenter(function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$($('.nav-list-w')[$(this).index()]).css({'width':$(this).width()+50,'height':120,'opacity':.5});
			$($('.nav-list')[$(this).index()]).css({'width':$(this).width()+50,'height':120,'opacity':1});
		})
		$(ele).mouseleave(function(){
			$('.nav-list-w').css({'width':0,'height':0,'opacity':0});
			$('.nav-list').css({'width':0,'height':0,'opacity':0});
		})
	})
	$('.head-nav p').each(function(i,ele){
		$(ele).mouseenter(function(){	
			$(this).addClass('active').siblings('p').removeClass('active');
			$($('.head-nav a')[i]).css('right',20);
			$($('.head-nav i')[i]).css('left',$($('.head-nav a')[i]).position().left-20);
		})
		$(ele).mouseleave(function(){
			$($('.head-nav a')[i]).css('right',11);
			$($('.head-nav i')[i]).css('left',-16);
		})
	})
	$('.head-search input').focus(function(){
		$(this).val("");
		$(this).css('opacity',1);
	})
	$('.head-search input').blur(function(){
		$(this).css('opacity',.5);
	})
	//轮播图
	var num = 0;
	var timer = null;
	var arr = ['img/bg_member.jpg','img/bg_shoulei.jpg','img/bg_xnet.jpg'];
	timer = setInterval(function(){
		var num1=0;
		lunbo();
		banner();
		$('.banner-fot img').attr('src',arr[num]);
	},3000)
	setTimeout(function(){
		$('.banner-gg h1').eq(0).css({'opacity':1,'top':0});
		setTimeout(function(){
			$('.banner-gg a').eq(0).css({'opacity':1,'top':0});
			$('.banner-gg span').eq(0).css({'transform':'none','opacity':1});
		},600)
	},600)
	$('#banner-w').mouseenter(function(){
		clearInterval(timer);
		$('.banner-list span').eq(0).css({'left':0,'opacity':.4});
		$('.banner-list span').eq(1).css({'right':0,'opacity':.4});
	})
	$('#banner-w').mouseleave(function(){
		timer = setInterval(function(){
			lunbo();
			banner();
			$('.banner-fot img').attr('src',arr[num]);
		},3000)
		$('.banner-list span').eq(0).css({'left':-76,'opacity':0});
		$('.banner-list span').eq(1).css({'right':-76,'opacity':0});
	})
	$('.banner-list span').eq(1).click(function(){
		lunbo();
		banner();
		$('.banner-fot img').attr('src',arr[num])
	})
	$('.banner-list span').eq(0).click(function(){
		num--;
		if(num<0){num=2;}
		banner();
		$('.banner-fot img').attr('src',arr[num]);
	})
	$('.ban-lis-fot li').each(function(i,ele){
		$(ele).mouseover(function(){
			if($(this).index()==num){
				return;
			}
			var that = $(this);
			$(this).css('background-position-y',-114).siblings('li').css('background-position-y',0);
			$('.ban-lis-fot a').css('left',$(this).index()*75);
			$('.banner').css('opacity',0);
			$($('.banner')[$(this).index()]).css('opacity',1);
			$('.banner-fot img').attr('src',arr[$(this).index()]);
			slide();
			num=that.index();
		})
	})
	$('.banner-gg span').each(function(i,ele){
		$(ele).mouseover(function(){
			$(this).css('transform','scale(1.2)');
		})
		$(ele).mouseout(function(){
			$(ele).css('transform','none');
		})
	})
	$('.banner-list').on('mousewheel',function(){
		num1=num;
		console.log(num1)
		$('.banner-fot img').attr('src',arr[num1]);
		var ev = ev||window.event;
		var onoff=true;
		if(ev.wheelDelta){
			onoff=ev.wheelDelta>0?true:false;
		}else{
			onoff = ev.detail<0?true:false;
		}
		if(onoff){
			$('.ban-lis-fot').css('bottom',100);
			$('.banner-fot').css({'bottom':0,'opacity':1});
			$(".mouse-hover").fadeOut();
		}else{
			$('.ban-lis-fot').css('bottom',28);
			$('.banner-fot').css({'bottom':-425,'opacity':0});
			$(".mouse-hover").fadeIn();
		}
	})
	$('.w-nav-tit').mouseenter(function(){
		$(this).children().css('transform','rotate(90deg)');
		$(this).prev().css({'opacity':.3,'left':0});
		$(this).next().css({'opacity':1,'left':0});
	})
	$('.wrap-nav').mouseleave(function(){
		$('.w-nav-tit i').css('transform','none');
		$('.wrap-nav-w').css({'opacity':0,'left':-195});
		$(this).css({'opacity':0,'left':-190});
	})
	$(window).scroll(function(){
		var height = $(window).scrollTop();
		if(height>400){
			setTimeout(function(){
				$('.pic-nav').css('display','block');
				setTimeout(function(){
					$('.pic-bg1').css('z-index',20);
					setTimeout(function(){
						$('.pic').css('z-index',30)
					},400)
				},400)
			},1000)	
		}
	})
	function lunbo(){
		num++;
		if(num>2){num=0;}
	}
	function slide(){
		$('.banner-gg h1').css({'opacity':0,'top':-20});
		$('.banner-gg a').css({'opacity':0,'top':20});
		$('.banner-gg span').css({'transform':'scale(5)','opacity':0});
		setTimeout(function(){
			$($('.banner-gg h1')[num]).css({'opacity':1,'top':0});
			setTimeout(function(){
				$($('.banner-gg a')[num]).css({'opacity':1,'top':0});
				$($('.banner-gg span')[num]).css({'transform':'none','opacity':1});
			},600)
		},600)	
	}
	function banner(){
		$('.banner').each(function(i,ele){
			$(ele).css('opacity',0);
			$($('.banner')[num]).css('opacity',1);
			$($('.ban-lis-fot li')[num]).css('background-position-y',-114).siblings('li').css('background-position-y',0);
			$('.ban-lis-fot a').css('left',num*75);
			slide();
		})
	}
})