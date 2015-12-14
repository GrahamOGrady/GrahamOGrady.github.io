var IE = document.all?true:false;
var mau5X = 0;
var mau5Y = 0;
function mau5Pos(){
	if(!IE) document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove = getMau5;
}
function getMau5(e){
	if(IE){
		mau5X = event.clientX+document.body.scrollLeft;
		mau5Y = event.clientY+document.body.scrollTop;
	}else{
		mau5X = e.clientX+document.body.scrollLeft;
		mau5Y = e.clientY+document.body.scrollLeft;
	}
	drawMau5();
	return true;
}
function drawMau5(){
	var c = document.getElementById("mau5");
	var ctx = c.getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	var img = document.getElementById("doge");
	ctx.drawImage(img,mau5X,mau5Y,50,50);
}