//page-specific javascript
$(".blog.main").ready(
	function(){

		
		$('.hm').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#dsa-wrapper').toggleClass('hidden');
		});


		$('.fb').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#ips-wrapper').toggleClass('hidden');
		});


		$('.gp').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#clrs-wrapper').toggleClass('hidden');
		});


		$('.tw').click(function(){
			$('#wrapper').toggleClass('hidden');
			$('#workout-wrapper').toggleClass('hidden');
		});
		
		$('.back-button').click(function(){
			$('#workout-wrapper').addClass('hidden');
			$('#dsa-wrapper').addClass('hidden');
			$('#ips-wrapper').addClass('hidden');
			$('#clrs-wrapper').addClass('hidden');
			$('#wrapper').toggleClass('hidden');
		});



});