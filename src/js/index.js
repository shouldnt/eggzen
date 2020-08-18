
import Utils from './utils.js'
$(document).ready(function() {
	new WOW().init();
	
	new Swiper('.farm-swiper-container', {
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.farm-swiper-next',
			prevEl: '.farm-swiper-prev',
		},
		breakpoints: {
			991: {
				slidesPerView: 3
			},
			767: {
				slidesPerView: 2
			},
			420: {
				slidesPerView: 1
			},
		}
	})

	$('.mobile-toggle').click(function(e) {
		e.preventDefault();
		let $this = $(this);
		if($this.hasClass('active')) {
			$('.mobile-toggle').removeClass('active');
			$('body').removeClass('mobile-menu-open');
		} else {
			$('.mobile-toggle').addClass('active');
			$('body').addClass('mobile-menu-open');
		}
	})

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 200) {
	        //clearHeader, not clearheader - caps H
	        $(".site-header").addClass("scroll-down");
	    } else {
	    	$(".site-header").removeClass("scroll-down");
	    }
	});
	$(window).scroll();

})
