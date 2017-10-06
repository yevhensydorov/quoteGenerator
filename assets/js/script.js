function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " +  g + ", " + b + ")";
}

$("body").css("background", randomColor());

$(document).ready(function(){
	$.getJSON("http://api.chrisvalleskey.com/fillerama/get.php?count=100&format=json&show=futurama", function(json){
		var jsonData = json;
		$(".quote").text(jsonData["db"][0].quote);
		// console.log(jsonData["db"][0].quote);
	});
});