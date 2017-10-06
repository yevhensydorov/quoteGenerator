var randomColor = function randomColorGenerator(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " +  g + ", " + b + ")";
}

$("body").css("background", randomColor);
var pickedColor = document.querySelector("body").style.backgroundColor;

$(".new-quote").css("background", pickedColor);

$(document).ready(function(){
	$.getJSON("http://api.chrisvalleskey.com/fillerama/get.php?count=100&format=json&show=futurama", function(json){
		var jsonData = json;
		$(".quote-text").text(jsonData["db"][0].quote);
		$(".quote-person").text(jsonData["db"][0].source);
	});
});

