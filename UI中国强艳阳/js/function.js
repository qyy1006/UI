
//菜单下拉
function select(Find,find,li){

	Find.onmouseover=function(){
		find.style.height= "160px";
		find.style.boxShadow="0 0px 1px rgba(0,0,0,0.2)";
		Find.style.boxShadow="0.5px 0px 2px rgba(0,0,0,0.2)";
		Find.style.borderTop="solid 4px #3498DB";
		
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				li[i].style.backgroundColor="#EFF3F5";
				li[i].style.color="#3498DB";
				li[i].style.fontWeight="bold";
			}
			li[i].onmouseout=function(){
				li[i].style.backgroundColor="";
				li[i].style.color="#000";
				li[i].style.fontWeight="";
			}
		}
		Find.onmouseout=function(){
			find.style.height= "0px";
			Find.style.boxShadow="";
			Find.style.borderTop="";
		}
	}

}

//banner
function bannerOpacity(banner,dots,imgs,bannerLbtn,bannerRbtn,time,active){

	imgs[0].style.opacity=1;
	dots[0].classList.add(active);
	let flag=true; //定义一个开关，
	for(let i=0;i<dots.length;i++){
		dots[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				// dots[j].style.backgroundColor="#748793";
				dots[j].classList.remove(active);
				imgs[j].style.opacity=0;
			}
			// dots[i].style.backgroundColor="#fff";
			dots[i].classList.add(active);
			imgs[i].style.opacity=1;
			//赋值，
			num=i;
		}
	}

	//自动轮播

	let num=0;
	let t=setInterval(move,time);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity=0;
			// dots[j].style.backgroundColor="#748793";
			dots[j].classList.remove(active);
			flag=true;
		}
		// dots[num].style.backgroundColor="#fff";
		dots[num].classList.add(active);
		imgs[num].style.opacity=1;
		flag=true;
	}
	//鼠标移入banner时，暂停时间间隔函数
	banner.onmouseover=function(){
		clearInterval(t);
	}
	//鼠标移出banner时，继续函数
	banner.onmouseout=function(){
		t=setInterval(move,time);
	}
	
	//点击右箭头
	bannerRbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}
	//点击左箭头
	bannerLbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveL();
	}
	function moveL(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity=0;
			// dots[j].style.backgroundColor="#748793";
			dots[j].classList.remove(active);
			flag=true;
		}
		// dots[num].style.backgroundColor="#fff";
		dots[num].classList.add(active);
		imgs[num].style.opacity=1;
		flag=true;
	}

	//窗口失去焦点，暂停时间间隔函数
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,time);
	}


	
}

//