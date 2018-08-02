// Put all your JavaScript in this file!
var bg= document.getElementsByTagName('body');

function r(){
	bg[0].style.backgroundColor= "red";
}
function b(){
	bg[0].style.backgroundColor= "blue";
}
function g(){
	bg[0].style.backgroundColor= "green";
}
function myFunction(event){
	var x = event.which || event.keyCode;
	if(x==114){
		r()
	}
	if(x==103){
		g()
	}
	if(x==98){
		b()
	}

}