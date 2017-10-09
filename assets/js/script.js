$(document).ready(function(){
	randomQuote();

	function randomQuote() {
		$.getJSON("http://api.chrisvalleskey.com/fillerama/get.php?count=100&format=json&show=starwars", function(json){
			var jsonData = json;
			$(".quote-text").text(jsonData["db"][0].quote);
			$(".quote-person").text(jsonData["db"][0].source);

			quoteText = $(".quote-text").html();
			quoteAuthor = $(".quote-person").html();

		});
		// setBackground();
	}

	$("#new-quote").on("click", function(){
		randomQuote();
		// setBackground();
	});

	$("#twt-share").on("click", function(){
		var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent('"' + quoteText + '"') + encodeURIComponent(" ") + encodeURIComponent(quoteAuthor);
		window.open(twtLink,'_blank');
	});

});







// function randomColorGenerator(){
// 	//pick a "red" from 0-255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from 0-255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from 0-255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " +  g + ", " + b + ")";
// }

// function setBackground() {
// 	//Set a random background to the body
// 	// $("body").css("background", randomColorGenerator());
// 	//Take the current body background color
// 	var pickedColor = document.querySelector("body").style.backgroundColor;
// 	//Set the similar background color to the twitter and new-quote buttons
// 	$("#new-quote").css("background", pickedColor);
// 	$("#twt-share").css("background", pickedColor);
// }

