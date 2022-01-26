//окно gare.g
$('.js-button-campaign').click(function() { 			//popup main
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});


$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});


//LOCATION popup
$('.js-btn-location').click(function() { 			
            
	$('.js-popup-location').fadeIn();
	$('.js-popup-location').addClass('disabled');
	});


	$('.js-close-location').click(function() { 
		$('.js-popup-location').fadeOut();
	
	});