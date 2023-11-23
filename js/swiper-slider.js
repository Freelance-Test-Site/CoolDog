
/************************************************************************ Slider - Swiper **************************************************************************************/

new Swiper('.review-slider', {


	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },

	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 90,
	grabCursor: true,

	slideToClickedSlide: true,

	// hashNavigation: {
	// 	watchState: true,
	// },

	// keyboard: {
	// 	enable: true,
	// 	onlyInViewport: true,
	// 	pageUpDown: true,
	// },
	// autoHeight: true,

	// watchOverflow: true,

	spaceBetween: 30,

	slidesPrGroup: 3,

	centeredSlides: true,

	initialSlide: 1,

	// loop: true,
	// loopedSlides: 6,

	freeMode: true,

	breakpoints: {
		1366: {
			slidesPerView: 3.2,
		},
		1024: {
			slidesPerView: 2.2,
		},
		768: {
			slidesPerView: 1.2,
		},
	}
});

/************************************************************************ Slider - Swiper **************************************************************************************/