//page-specific javascript
$(".blog.main").ready(
	function(){

		var inverseMain = function() {
			$('#introvid').addClass('hidden');
			$('#wrapper').addClass('hidden');
			$('.menu-info').addClass('hidden');
		}

		
		$('.hm').click(function(){
			inverseMain();
			$('#dsa-wrapper').toggleClass('hidden');
		});


		$('.fb').click(function(){
			inverseMain();
			$('#ips-wrapper').toggleClass('hidden');
		});


		$('.gp').click(function(){
			inverseMain();
			$('#clrs-wrapper').toggleClass('hidden');
		});


		$('.tw').click(function(){
			inverseMain();
			$('#workout-wrapper').toggleClass('hidden');
		});
		
		$('.back-button').click(function(){
			$('#workout-wrapper').addClass('hidden');
			$('#dsa-wrapper').addClass('hidden');
			$('#ips-wrapper').addClass('hidden');
			$('#clrs-wrapper').addClass('hidden');
			$('#introvid').removeClass('hidden');
			$('#wrapper').removeClass('hidden');
			$('.menu-info').removeClass('hidden');
		});

		$('#menu-info').click(function(){
			$('#introvid').toggleClass('hidden');
			$('#modal9').modal('show');
		})



});