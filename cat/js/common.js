//根节点字体大小计算	
	
	fontSize()
	
	window.onresize = function(){
		fontSize()	
	}
	
	function fontSize(){
		//规定屏幕的大小750px  html字体大小100px  
	
	//盒子的宽度/字体大小=750/100
	
	let width = document.documentElement.clientWidth * 2
	
	width = width > 750 ? 750 : width
	
	fontsize = width/750*100
	
	document.querySelector('html').style['font-size'] = fontsize + 'px'
	
	}