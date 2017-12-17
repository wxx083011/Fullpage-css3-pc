
		window.onload = function(){
			var liNodes = document.querySelectorAll(".header .inner .menu li")
	         
			var cLiNodes = document.querySelectorAll('.content .list li');
			var head = document.querySelector(".header");
			var cList = document.querySelector(".content .list");   
		    var content = document.querySelector('.content');
	        
	        
	        var now = 0;//用于实时更新now
			var timer =0;
			
			
			var oldIndex =0;
			var autoIndex =0;
			var timer3d = 0;
			var preIndex =0;
			
			var menuLis = document.querySelectorAll(".content .menuBar li");
			
			/*窗口重绘*/
	        window.onresize = function(){
				/*整个content的部分都会因为窗口边大变小而变化*/
				contentBind();
				/*全部li的top移动也根据视口重创来更新*/
				cList.style.top = -now *(document.documentElement.clientHeight - head.offsetHeight) +"px";

			}
	        
	        /*开机动画*/
	        var animationAttr = [
			/*第一屏出场动画 start*/
		    {
		    	inAn:function(){
		    		var img1 = document.querySelector(".content .list .page1 img ");
			        img1.style.opacity=1;
			       
		    	},
		    	outAn:function(){
		    		var img1 = document.querySelector(".content .list .page1 img ");
			        img1.style.opacity=0;
		    	}
		    },

			/*第二屏出场动画 start*/
		    {
					inAn:function(){
						var  li1   = document.querySelector(".list .page2 .left  .li1");
						var  li2   = document.querySelector(".list .page2 .left  .li2");
						var  li3   = document.querySelector(".list .page2 .left  .li3");
						var  right2   = document.querySelector(".list .page2 .right ");
						
						li1.style.transform="translateY(0px)";
						li2.style.transform="translateY(0px)";
						li3.style.transform="translateY(0px)";
						right2.style.transform="translateY(0px)";
						
						
						
					},
					outAn:function(){
						var  li1   = document.querySelector(".content .list .page2 .left .li1");
						var  li2   = document.querySelector(".content .list .page2 .left  .li2");
						var  li3   = document.querySelector(".content  .list .page2 .left  .li3");
						var  right2   = document.querySelector(".list .page2 .right ");
						
						li1.style.transform="translateY(1000px)";
						li2.style.transform="translateY(1200px)";
						li3.style.transform="translateY(1400px)";
						right2.style.transform="translateY(-500px)";
						
						
					}
				},

		    /*第三屏*/
		   {
					inAn:function(){
						var  li1   = document.querySelector(".list .page3 .left  .li1");
						var  li2   = document.querySelector(".list .page3 .left  .li2");
						var  li3   = document.querySelector(".list .page3 .left  .li3");
						var  right2   = document.querySelector(".list .page3 .right ");
						
						li1.style.transform="translateX(0px)";
						li2.style.transform="translateX(0px)";
						li3.style.transform="translateX(0px)";
						right2.style.transform="translateX(0px)";
						
						
						
					},
					outAn:function(){
						var  li1   = document.querySelector(".list .page3 .left  .li1");
						var  li2   = document.querySelector(".list .page3 .left  .li2");
						var  li3   = document.querySelector(".list .page3 .left  .li3");
						var  right2   = document.querySelector(".list .page3 .right ");
						
						li1.style.transform="translateX(0px)";
						li2.style.transform="translateX(-279px)";
						li3.style.transform="translateX(-558px)";
						right2.style.transform="translateX(500px)";
						
					}
				},
		    
				/*第四屏*/
				{
					inAn:function(){
						var  li1   = document.querySelector(".list .page4 .left  .li1");
						var  li2   = document.querySelector(".list .page4 .left  .li2");
						var  li3   = document.querySelector(".list .page4 .left  .li3");
						var  right2   = document.querySelector(".list .page4 .right ");
						
						li1.style.animation="move1 2s 0.8s forwards";
						li2.style.animation="move2 2s 0.8s forwards";
						li3.style.animation="move3 2s 0.8s forwards";
						right2.style.opacity=1;
						
					},
					outAn:function(){
						var  li1   = document.querySelector(".list .page4 .left  .li1");
						var  li2   = document.querySelector(".list .page4 .left  .li2");
						var  li3   = document.querySelector(".list .page4 .left  .li3");
						var  right2   = document.querySelector(".list .page4 .right ");
						
						li1.style.transform="translate(330px,-500px)";
						li2.style.transform="translate(0,-500px)";
						li3.style.transform="translate(-330px,-500px)";
						right2.style.opacity=0;
					}
				},

				/*第五屏*/
				{
					inAn:function(){
						var  li1   = document.querySelector(".list .page5 .left  .li1");
						var  li2   = document.querySelector(".list .page5 .left  .li2");
						var  li3   = document.querySelector(".list .page5 .left  .li3");
						var  right2   = document.querySelector(".list .page5 .right ");
						
						li1.style.transform="translate3d(0,0,0) rotateX(0deg)";
						li2.style.transform="translate3d(0,0,0) rotateX(0deg)";
						li3.style.transform="translate3d(0,0,0) rotateX(0deg)";
						right2.style.opacity=1;
						
					},
					outAn:function(){
						var  li1   = document.querySelector(".list .page5 .left  .li1");
						var  li2   = document.querySelector(".list .page5 .left  .li2");
						var  li3   = document.querySelector(".list .page5 .left  .li3");
						var  right2   = document.querySelector(".list .page5 .right ");
						
						li1.style.transform="translate3d(-800px,-800px,-500px) rotateX(145deg)";
						li2.style.transform="translate3d(-1000px,-800px,-500px) rotateX(145deg)";
						li3.style.transform="translate3d(-1200px,-800px,-500px) rotateX(145deg)";
						
						right2.style.opacity=0;
						
					}
				}

				]
			
			//出厂动画结束
	        for(var i=0;i<animationAttr.length;i++){
				animationAttr[i]["outAn"]();
			}
			
			setTimeout(function(){
				animationAttr[0]["inAn"]();
			},1000);
	        
	        
	        
	        
	        /*滚轮逻辑start*/
			//滚动逻辑
			//滚轮事件的一般写法
			if(content.addEventListener){
				content.addEventListener("DOMMouseScroll",function(ev){
					clearTimeout(timer);
					timer=setTimeout(function(){
						fn(ev);
					},200)
				});
			}
			content.onmousewheel=function(ev){
					clearTimeout(timer);
					timer=setTimeout(function(){
							fn(ev);
						},200)
			};
			function fn(ev){
				ev = ev||event;
				var flag ="";
				if(ev.detail){
					flag = ev.detail>0?"down":"up";
				}else if(ev.wheelDelta){
					flag = ev.wheelDelta<0?"down":"up";
				}
				
				preIndex =now;
				if((now==0&&flag=="up")||(now==cLiNodes.length-1&&flag=="down")){
						return;
				}
				
				switch (flag){
					case "up":
						if(now>0){
							now--;
						}
						move(now);
						break;
					case "down":
						if(now<4){
							now++;
						}
						move(now);
						break;
				}
				
				if(ev.preventDefault){
					ev.preventDefault();
				}
				
				return false;
			}
			
			/*滚轮逻辑end*/
           
           /*内容区 star*/
	        contentBind();
			function contentBind(){
				//让content = 整个界面的高-头部界面的高
				content.style.height = document.documentElement.clientHeight - head.offsetHeight +"px";
				//让每个li的高 = 整个界面的高-头部的高
				for(var i=0;i<cLiNodes.length;i++){
					cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight +"px";
				}
			}  
			
			/*设置头部*/
			headBind();
			function headBind(){
			for(var i = 0;i<liNodes.length;i++){
				liNodes[i].index = i;
				liNodes[i].onclick = function(){
				preIndex=now;	
				move(this.index);
				/*当li点击的时候告诉我现在的now在哪里*/
				now = this.index;
			 }
			}
			/*侧边菜单*/
			for(var i=0;i<menuLis.length;i++){
						menuLis[i].index = i;
						menuLis[i].onclick=function(){
							preIndex=now;
							move(this.index);
							now = this.index;
						}
					}
			}
		
			
			
		move(now);
		function move(index){
			//导航条
                for(var i=0;i<liNodes.length;i++){
                        liNodes[i].className="";
          			}
         			liNodes[index].className = 'active';
         			
         	//同步侧边导航的选中状态
				for(var i=0;i<menuLis.length;i++){
					menuLis[i].className="";
				}
				   menuLis[index].className="active";
                
				//当点击li时，整个top都随着下边*高度，来移动，在top给个过渡
				cList.style.top = -index *(document.documentElement.clientHeight - head.offsetHeight) +"px";
				//出入场逻辑
				if(animationAttr[index]&&animationAttr[index]["inAn"]){
					animationAttr[index]["inAn"]();
				}
				if(animationAttr[preIndex]&&animationAttr[preIndex]["outAn"]){
					animationAttr[preIndex]["outAn"]();
				}
						
				}

		}
