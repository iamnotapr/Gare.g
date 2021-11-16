
//swiper
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
loop: true,

navigation: {
	nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

scrollbar: {
	el: '.swiper-scrollbar',
},
});
	//select
document.querySelector(".select").onchange = function () {
	location.assign(this.value);
}
//shopMenu
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});


$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});