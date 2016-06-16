window.onload=function(){
	drag('div1');
}
function drag(id){
	//获取拖拽的元素
	var oDiv=document.getElementById(id);
	oDiv.onmousedown=function(ev){
		var ev=ev||window.event;
		var disX=ev.clientX-oDiv.offsetLeft;
		var disY=ev.clientY-oDiv.offsetTop;
		document.onmousemove=function(ev){
			var ev=ev||window.event;
			oDiv.style.left=ev.clientX-disX+'px';
			oDiv.style.top=ev.clientY-disY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		ev.preventDefault();
	}
}
//drag('div1');
