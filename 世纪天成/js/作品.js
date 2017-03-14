window.onload=function(){
	var pic = $('.pic');
	var num=0;
	var time=0;
	var picSpans =$('span',$('#pic-con')); 
	var picList = $('li',$('.pic-list')[0]);
	
	piclist();
	
	$('#pic-con').onmouseover=function(){
		clearInterval(time);
		picSpans[0].style.opacity=1;
		picSpans[1].style.opacity=1;
	}
	$('#pic-con').onmouseout=function(){
		picSpans[0].style.opacity=0;
		picSpans[1].style.opacity=0;
		piclist();
	}
	
	for(var i=0;i<picList.length;i++){
		picList[i].index=i
		picList[i].onmousemove=function(){
			for(var i=0;i<picList.length;i++){
				picList[i].className='';
				pic[i].style.opacity=0;
			}
			this.className="pic-listCss";
			pic[this.index].style.opacity=1;
			num=this.index;
		}
	}
	
	picSpans[0].onclick=function(){
		for(var i=0;i<pic.length;i++){
			pic[i].style.opacity=0;
			picList[i].className="";
		}
		num++;
		pic[num%pic.length].style.opacity=1;
		picList[num%pic.length].className="pic-listCss";
	}
	picSpans[1].onclick=function(){
		for(var i=0;i<pic.length;i++){
			pic[i].style.opacity=0;
			picList[i].className="";
		}
		num--;
		if(num<0){
			num=5;
		}
		pic[num%pic.length].style.opacity=1;
		picList[num%pic.length].className="pic-listCss";
	}
	function piclist(){
		time = setInterval(function(){
		for(var i=0;i<pic.length;i++){
			pic[i].style.opacity=0;
			picList[i].className="";
		}
		num++;
		pic[num%pic.length].style.opacity=1;
		picList[num%pic.length].className="pic-listCss";
		},2000)
	}
	
	var navPic = $('i',$('.pic-footer-nav')[0]);
	var navList = $('li',$('.pic-footer-nav')[0]);
	var sjGame = $('a',$('.sj-game-list')[0]);
	var sjSpans = $('span',$('.sj-game')[0]);
	var sjList = $('li',$('.sj-game-list')[0]);	
	
	for(var i=0;i<navPic.length;i++){
		var arr=["img/111.jpg","img/222.jpg","img/333.jpg","img/444.jpg","img/555.jpg","img/666.jpg"];
		var arr1=["img/m1.jpg","img/m2.jpg","img/m3.jpg","img/m4.jpg","img/m5.jpg","img/m6.jpg"];
		navList[i].index=i;
		navPic[i].style.background='url('+arr[i]+')';
		sjGame[i].style.background='url('+arr1[i]+') 0 -194px';
		sjList[i].lastElementChild.style.background='url('+arr1[i]+') 0 0';
		
		navList[i].onmousemove=function(){
			this.className="on";
			navPic[this.index].style.backgroundPosition="0 -39px";
		}
		navList[i].onmouseout=function(){
			this.className="";
			navPic[this.index].style.backgroundPosition="0 0";
		}
		
		sjSpans[1].onclick=function(){
			$('.sj-game-list')[0].style.left=1*-195+'px';
			this.className="span-r1";
			this.previousElementSibling.className="span-l";
		}
		sjSpans[0].onclick=function(){
			$('.sj-game-list')[0].style.left=0*-195+'px';
			this.className="span-l1";
			this.nextElementSibling.className="span-r";
		}
		
		sjList[i].onmousemove=function(){
			this.firstElementChild.style.opacity=0;
			this.lastElementChild.className="sj-game-bg";
			this.style.color="white";
		}
		sjList[i].onmouseout=function(){
			this.firstElementChild.style.opacity=1;
			this.lastElementChild.className="sj-game-bg1";
			this.style.color="black";
		}
	}
	
	$('span',$('#footer-nav'))[1].onclick=function(){
		setTimeout(function(){
			$('#soushuo').style.display="block";	
		},1500)
		this.parentNode.style.width=0;
		this.style.display="none";
	}
	
	$('#soushuo').onmouseover=function(){
		this.lastElementChild.style.width=120+'px';
		this.childNodes[3].style.opacity=1;
	}
	$('#soushuo').onmouseout=function(){
		this.lastElementChild.style.width=0;
		this.childNodes[3].style.opacity=0;
	}
	
	$('.fot-span1')[1].onclick=function(){
		setTimeout(function(){
			$('span',$('#footer-nav'))[1].style.display='block';
		},1500)
		this.parentNode.parentNode.parentNode.style.display='none';
		$('#footer-nav').style.width=100+'%';
	}
	$('span',$('#soushuo'))[1].onclick=function(){
		this.parentNode.style.display="none";
	}
	
	var newSpans = $('span',$('#new-lis'));
	var newlist = $(".new-list");
	
	for(var i=0;i<newSpans.length;i++){
		newSpans[i].index=i
		newSpans[i].onclick=function(){
			for(var i=0;i<newSpans.length;i++){
				newSpans[i].className="";
				newlist[i].style.display='none';
			}
			this.className='hui';
			newlist[this.index].style.display='block';
		}
	}
	
	var newPic = $('ul',$('.new-pic')[0])[0];
	var newList = $('a',$('.new-pic')[0]);
	var cls = 1;
	var num1 = 0;
	
	Newlist();
	
	newPic.onmousemove=function(){
		clearInterval(timer);
	}
	newPic.onmouseout=function(){
		Newlist();
	}
	
	for(var i=0;i<newList.length;i++){
		newList[i].index=i
		newList[i].onmousemove=function(){
			for(var i=0;i<newList.length;i++){
				newList[i].className="";
			}
			this.className="active";
			newPic.style.left=this.index*-260+'px';
		}
	}
	function Newlist(){
		timer = setInterval(function(){
			for(var i=0;i<newList.length;i++){
				newList[i].className="";
			}
			num1+=cls;
			if(num1<=0 || num1>=2){
				cls=-cls;
			}
			newPic.style.left=num1*-260+'px';
			newList[num1].className="active";
		},2000)
	}
	
	$('#warp-hj').onmousemove=function(){
		this.firstElementChild.style.opacity=0;
		this.children[1].style.opacity=1;
	}
	$('#warp-hj').onmouseout=function(){
		this.firstElementChild.style.opacity=1;
		this.children[1].style.opacity=0;
	}
	
	window.onresize=window.onscroll=function(){
		var height = window.pageYOffset;
		$('#warp-gg').style.top=(500+height)+'px';
		if(height>430){
			$('#warp-hj').style.opacity=1;
		}else{
			$('#warp-hj').style.opacity=0;
		}
		if(height==0){
			$('#warp-hj').style.transition="none";
			$('#warp-hj').style.top=65+'%';
			$('#hj').style.opacity=0;
		}
	}
	
	var timer1 = 0;
	$('#warp-hj').onclick=function(){
		timer1 = setInterval(function(){
			var height = window.pageYOffset;         
			var scroll = height-30;          
			window.scrollTo(0,scroll);          
			if(!height){
				clearInterval(timer1);
			}
		},20)
		this.children[2].style.opacity=1;
		$('#warp-hj').style.top=-250+'px';
		$('#warp-hj').style.transition=".4s";
	}
	$('.gg')[0].onclick=function(){
		$('#warp-gg').style.right=80+'px';
		setTimeout(function(){
			$('#warp-gg').style.right=-230+'px';
			setTimeout(function(){
				$('#warp-gg').style.display='none';
			},500)
		},500);
	}
	
	var num2=4;
	var gG = $('span',$('#gg-pic-w'))[0];
	setTimeout(function(){
		$('#gg-pic-w').style.top=0;
	},500)
	timer2 = setInterval(function(){
		num2--;
		if(num2==0){
			num2=0;
			clearInterval(timer2);
			setTimeout(function(){
				$('#gg-pic-w').style.top=-768+'px';
			},600)
		}
		gG.innerHTML=num2;
	},1000)
}
