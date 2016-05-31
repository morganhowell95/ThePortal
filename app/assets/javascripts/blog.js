//page-specific javascript
$(".blog.main").ready(
	function(){

		
		$('.hm').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#dsa-wrapper').toggleClass('hidden');
		});


		$('.fb').click(function(){
			alert('clicked');
			$('#wrapper').hide();
		});


		$('.gp').click(function(){
			alert('clicked');
			$('#wrapper').hide();
		});


		$('.tw').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#workout-wrapper').toggleClass('hidden');
		});
		
		$('.back-button').click(function(){
			$('#workout-wrapper').addClass('hidden');
			$('#dsa-wrapper').addClass('hidden');
			$('#wrapper').toggleClass('hidden');
		});



});