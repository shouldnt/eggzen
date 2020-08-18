
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

	let scrolling = false;
	function goToByScroll(selector) {
	    // Remove "link" from the ID
	    // Scroll
	    scrolling = true;
	    $('html,body').animate({
	        scrollTop: $(selector).offset().top - 150
	    }, {
	    	duration: 500,
	    	complete() {
	    		scrolling = false;
	    	}
	    });
	}

	$('.scroll-to-div').click(function(e) {
		e.preventDefault();
		let id = $(this).attr('href');
		$('html,body').animate({
	        scrollTop: $(id).offset().top - 150
	    }, {
	    	duration: 500,
	    });
	})

	$('.goto').click(function(e) {
		e.preventDefault();
		let id = e.target.getAttribute('href');
		goToByScroll(id);
		$('.goto').removeClass('active');
		$(`.goto[href="${id}"]`).addClass('active');

	});
	$(window).scroll(function() {
		let currentScrollTop = $(document).scrollTop() + 220;
		if (currentScrollTop >= 200 + 220) {
	        //clearHeader, not clearheader - caps H
	        $(".site-header").addClass("scroll-down");
	    } else {
	    	$(".site-header").removeClass("scroll-down");
	    }
		$('.scroll-top-section').each(function() {
			let $this = $(this);
			let scrollTop = $this.offset().top;
			let scrollTopBottom = scrollTop + $this.outerHeight();
			let id = $this.attr('id');
			if(scrollTop < currentScrollTop && scrollTopBottom > currentScrollTop && !scrolling) {
				$('.goto').removeClass('active');
				$(`.goto[href="#${id}"]`).addClass('active');
			}
		})
	})
	$(window).scroll();

})
