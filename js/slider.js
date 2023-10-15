const swiperEl = document.querySelector('swiper-container');

const swiperParams = {
    slidesPerView: 3,
	on: {
		init() {
			false
		}
	}
	
  };

	// slidesPerView: 2,
	// autoplay: {
	// 	delay: 100,
	// 	disableOnInteraction: false,
	// },
// var info_slider = new Swiper(".info-slider", {
// 	slidesPerView: 3,
// 	spaceBetween: 36,
// 	mousewheel: false,
// 	autoplay: {
// 		delay: 7000,
// 		disableOnInteraction: false,
// 	},
// 	navigation: {
// 		nextEl: ".next",
// 		prevEl: ".prev",
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		1024: {
// 			slidesPerView: 3,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		1200: {
// 			slidesPerView: 3,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 	},
// });

// new Swiper(".services_swiper", {
// 	slidesPerView: 3,
// 	spaceBetween: 36,
// 	mousewheel: false,
// 	autoplay: {
// 		delay: 7000,
// 		disableOnInteraction: false,
// 	},
// 	navigation: {
// 		nextEl: ".next",
// 		prevEl: ".prev",
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		1024: {
// 			slidesPerView: 3,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 		1200: {
// 			slidesPerView: 3,
// 			spaceBetween: 36,
// 			slideToClickedSlide: true,
// 		},
// 	},
// });