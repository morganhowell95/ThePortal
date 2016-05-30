//page-specific javascript
$(".blog.main").ready(
	function(){

		var menuSelect = function (selection) {
			$('#wrapper').hide();
			var partialInclude = "<%= render '_"+ selection + "_partial' %>";
			$('body').append(partialInclude);
		};

		
		$('.hm').click(function(){
			alert('clicked');
			$('#wrapper').hide();
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
			menuSelect("workout");
			
		});
		



});