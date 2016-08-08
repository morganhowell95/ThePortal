//page-specific javascript
$(".blog.main").ready(
	function(){

		var inverseMain = function() {
			$('#introvid').addClass('hidden');
			$('#wrapper').addClass('hidden');
			$('.menu-info').addClass('hidden');
			$('.wrapper').addClass('hidden');
		}

		var inverseMenuGeneral = function() {
			$('.menu').addClass('hidden');
		}

		
		$('#algo').click(function(){
			inverseMain();
			$('#dsa-wrapper').toggleClass('hidden');
		});


		$('#interview').click(function(){
			inverseMain();
			$('#ips-wrapper').toggleClass('hidden');
		});


		$('#clrs').click(function(){
			inverseMain();
			$('#clrs-wrapper').toggleClass('hidden');
		});


		$('#workout').click(function(){
			inverseMain();
			$('#workout-wrapper').toggleClass('hidden');
		});

		//algo content
		$('#qs').click(function(){
			inverseMenuGeneral();
			$('#queues-stacks-wrapper').removeClass('hidden');
		})
		
		$('.back-button').click(function(){
			$('#workout-wrapper').addClass('hidden');
			$('#dsa-wrapper').addClass('hidden');
			$('#ips-wrapper').addClass('hidden');
			$('#clrs-wrapper').addClass('hidden');
			$('#queues-stacks-wrapper').addClass('hidden');
			$('#introvid').removeClass('hidden');
			$('#wrapper').removeClass('hidden');
			$('.menu-info').removeClass('hidden');
			$('.menu').removeClass('hidden');
		});

		$('#menu-info').click(function(){
			$('#introvid').toggleClass('hidden');
			$('#modal9').modal('show');
		})

});