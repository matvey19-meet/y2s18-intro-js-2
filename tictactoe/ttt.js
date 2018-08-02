var boxes = $('.box');

function Apply(){
	var boxes = $('.box');
	for(var i=0;i<boxes.length;i++){
		boxes.eq(i).html('<img src="X.png"/>');
	}
		


}
boxes.on("click", function(){Apply();});