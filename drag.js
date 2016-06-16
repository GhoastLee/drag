window.onload=function(){
	drag('div1');
}
function drag(id){
	//获取拖拽的元素
	var oDiv=document.getElementById(id);
	//鼠标按下的时候
	oDiv.onmousedown=function(ev){
		var ev=ev||window.event;
		var disX=ev.clientX-oDiv.offsetLeft;
		var disY=ev.clientY-oDiv.offsetTop;
		document.onmousemove=function(ev){
			var ev=ev||window.event;
			var posX=ev.clientX-disX;
			var posY=ev.clientY-disY;
			if(posX<0){
				posX=0;
			}else if(posX>document.documentElement.clientWidth-oDiv.offsetWidth){
				posX=document.documentElement.clientWidth-oDiv.offsetWidth;
			}
			oDiv.style.left=posX+'px';
			oDiv.style.top=posY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		ev.preventDefault();
	}
}
//drag('div1');
