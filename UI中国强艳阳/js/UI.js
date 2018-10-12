

window.onload=function(){

	//1.导航栏菜单
	let Find=document.querySelector(".Find");
	let find=document.querySelector(".find");
	let li1=document.querySelectorAll(".find>li")
	select(Find,find,li1);

	let Study=document.querySelector(".Study");
	let study=document.querySelector(".study");
	let li2=document.querySelectorAll(".study>li")
	select(Study,study,li2);

	let Train=document.querySelector(".Train");
	let train=document.querySelector(".train");
	let li3=document.querySelectorAll(".train>li")
	select(Train,train,li3);

	let More=document.querySelector(".More");
	let more=document.querySelector(".more");
	let li4=document.querySelectorAll(".more>li")
	select(More,more,li4);

	//2.轮播图
	let banner=document.querySelector(".banner");
	let banner_left=document.querySelector(".banner_left");
	let banner_right=document.querySelector(".banner_right");
	let dots=document.querySelectorAll(".b_c_l>ul>li");
	let imgs=document.querySelectorAll(".b_c_l_img>ul>li");
	bannerOpacity(banner,dots,imgs,banner_left,banner_right,2000,"active");
	

	//2.banner下的公告部分
	let botton_select=document.querySelectorAll(".select_right_botton>i");
	let font=document.querySelectorAll(".select_right>ul>li");

	botton_select[0].style.color="#E67E22";
	font[0].style.opacity=1;

	for(let i=0;i<botton_select.length;i++){
		botton_select[i].onclick=function(){
			for(let j=0;j<botton_select.length;j++){
				botton_select[j].style.color="#000";
				font[j].style.opacity=0;
			}
			botton_select[i].style.color="#E67E22";
			font[i].style.opacity=1;
		}
	}

	//3.首页推荐的盒子块转换
	let big_Box=document.querySelectorAll(".main_one_big>li");
	let select_Name=document.querySelectorAll(".select_left li");

	select_Name[0].style="border: 1px solid #3498db;color: #3498db;font-weight: bold;";
	big_Box[0].style.opacity=1;
	for(let i=0;i<big_Box.length;i++){
		select_Name[i].onclick=function(){
			for(let j=0;j<big_Box.length;j++){
				select_Name[j].style="border: none;color: #000;font-weight: 100;";
				big_Box[j].style.opacity=0;
			}
			select_Name[i].style="border: 1px solid #3498db;color: #3498db;font-weight: bold;";
			big_Box[i].style.opacity=1;
		}
	}

	//4.首页推荐的盒子移入效果
	let box=document.querySelectorAll(".main_1_back");
	let box_img=document.querySelectorAll(".main_1_Img>img");
	let id_name=document.querySelectorAll(".main_1 b");
	let back=document.querySelectorAll(".main_one_small>li")

	for(let i=0;i<box.length;i++){
		back[i].onmouseover=function(){
			for(let j=0;j<box.length;j++){
				box[j].style.opacity=0;
				box_img[j].style.transform="scale(1,1)";
				id_name[j].style.color="#000";
			}
			box[i].style.opacity=1;
			box_img[i].style.transform="scale(1.1,1.1)";
			id_name[i].style.color="#3498DB";
		}
		back[i].onmouseout=function(){
			box[i].style.opacity=0;
			box_img[i].style.transform="scale(1,1)";
			id_name[i].style.color="#000";
		}
	}
		
	//5.推荐文章的盒子移入效果


	//6.返回顶部
	let backtop=document.querySelector(".backtop");
	let backtop1=document.querySelector(".backtop1");
	window.onscroll=function(){
		let bodytop=document.body.scrollTop||document.documentElement.scrollTop;
		if(bodytop>200){
			backtop.style.opacity=1;
		}
		if(bodytop<200){
			backtop.style.opacity=0;
		}
		backtop1.onclick=function(){
			animate(document.body,{scrollTop:0});
			animate(document.documentElement,{scrollTop:0});
		}
	}
}
