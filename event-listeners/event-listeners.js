// YOUR TASK: Add more pictures!
var pictures = ['./imgs/nathan.jpg','./imgs/rayn1.jpg','./imgs/rayn2.jpg','./imgs/seth.jpg','./imgs/jim.jpg'];
var currentIndex = 0;

function showNextPicture() {
	currentIndex++; // increment current picture
  	// if currentIndex is too large, start from the beginning again
  	if (currentIndex >= pictures.length) {
    	currentIndex = 0;

  	}
  	document.getElementById("image").src=pictures[currentIndex];
}
document.getElementsByTagName('img')[0].addEventListener("click", function(event){
	showNextPicture(event.target)
});

