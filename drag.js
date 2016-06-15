function drag(id){
	var oDiv=document.getElementById('div1');
	oDiv.onmousedown=function(ev){
		var ev=ev||window.event;
		var disX=ev.clientX-oDiv.offsetLeft;
		var disY=ev.clientY-oDiv.offsetTop;
	}
}