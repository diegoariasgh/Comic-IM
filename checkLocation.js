var stationName;

function checkLocation() {  
var w = document.getElementById("map").width;
var h = document.getElementById("map").height;
var xpos = event.clientX;
var ypos = event.clientY;
console.log("x: " + xpos);
console.log("y: " + ypos);

counter = 1;
//i think we should narrow it down to the following:
//zhongxing
 if ((ypos>0)&&(ypos<150)) {
 	document.getElementById("map").src = "images/line8.1.jpg";
	var audio = new Audio('metro.mp3');
	audio.play();
	stationName = "zhongxing";
	document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
 }

 //people's square
if ((ypos>150)&&(ypos<215)) {
	document.getElementById("map").src = "images/line8.2.jpg";
	var audio = new Audio('metro.mp3');
	audio.play();
	stationName = "peoples";
	document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
}

 //laoximen   
if ((ypos>240)&&(ypos<270)) {
	document.getElementById("map").src = "images/line8.3.jpg";
	var audio = new Audio('metro.mp3');
	audio.play();
	stationName = "laoximen";
	document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
}

 // south xizang road
 if ((ypos>290)&&(ypos<330)) {
 	document.getElementById("map").src = "images/line8.4.jpg";
	var audio = new Audio('metro.mp3');
	audio.play();
	stationName = "xizang";
	document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
}

changeClock();

}