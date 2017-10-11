$(document).ready(function(){
	randomQuote();

	function randomQuote() {
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json){
			var jsonData = json;
			$(".quote-text").text(jsonData.quoteText);
			$(".quote-person").text(jsonData.quoteAuthor);

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




/* BACKUP RANDOM COLOR BACKGROUND */


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

