// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// alert('hello');
var finalTop = "Hi! Welcome to my page.";
var finalBottom = "- Morgan Howell";
var currentTop = "";
var currentBottom = "";

// typeWriter = (x) -> 
// 	if x > finalTop.length
// 		alert 'YO'

// 	else

// 		alert 'hey'

// alert('yy')
// $('#welcome-home').html 'asdfasdf66666669898'
// alert('zz')

var tickOnFront = function(isTop) {
	if (isTop) {
		current = $('#welcome-home').html();
		$('#welcome-home').html('asdfasdf');
		var eraseTickOnFront = function() {
			current = $('#welcome-home').html()
			$('#welcome-home').html(current.slice(0, current.length-1))}
		//window.setTimeout(eraseTickOnFront, 2000)
	}
	else {
		current = $('#signature-home').html();
		$('#signature-home').html(current + '_');
	}
}

// tickOffFront = (isTop) ->
// 	alert "hello"


setInterval(tickOnFront(true), 2500);

