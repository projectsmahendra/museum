(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});


	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
		$('.hero-slider').slick({
			autoplay: true,
			autoplaySpeed: 7500,
			pauseOnFocus: false,
			pauseOnHover: false,
			infinite: true,
			arrows: true,
			fade: true,
			prevArrow: '<button type=\'button\' class=\'prevArrow\'><img class="img-fluid" src="../../assets/images/icons/hero-arr-left.png" alt="arrow"></button>',
			nextArrow: '<button type=\'button\' class=\'nextArrow\'><img class="img-fluid" src="../../assets/images/icons/hero-arr-right.png" alt="arrow"></button>',
			dots: true
		});
		$('.hero-slider').slickAnimation();
		// Silk Carousel (at museums.html page)
		$(".regular").slick({
			dots: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: '<img class="car-arr-right img-fluid" src="../../assets/images/icons/car-arr-right.png" alt="arrow">',
			prevArrow: '<img class="car-arr-left img-fluid" src="../../assets/images/icons/car-arr-left.png" alt="arrow">',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});






	$(document).ready(function () {
		// Wishlist (at current-auctions.html page)
		$(".wishlist").click(function () {

			$(this).toggleClass("itsdone");
			// $(this).parent().parent().parent().parent().toggleClass("itsdone-parent");	

			if ($(this).hasClass("itsdone")) {
				$(this).parent().parent().parent().parent().removeClass("removed-wish");
				$(this).parent().parent().parent().parent().addClass("itsdone-parent added-wish");
			} else {
				$(this).parent().parent().parent().parent().removeClass("itsdone-parent added-wish");
				$(this).parent().parent().parent().parent().addClass("itsdone-parent removed-wish");
			}

		});

		$(".alert-close").click(function () {
			// $(".current-bottom").removeClass("itsdone-parent");
			$(this).parent().parent().parent().parent().parent().removeClass("itsdone-parent");
		});

		// wishlist tooltip
		$('[data-toggle="tooltip"]').tooltip();


		var $grid = $('.grid').masonry({
			// columnWidth: 120,
			itemSelector: '.grid-item',
			gutter: 10
		});

		// $grid.on( 'click', '.curr-list-box', function( event ) {
		// 	// $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
		// 	$(this).parent().parent().parent().parent().parent().parent().parent().toggleClass("is-expanded");
		// 	$grid.masonry();
		// });

		// $grid.on('click', '.cbul', function (event) {
		// 	$(this).parent().parent().parent().parent().parent().parent().toggleClass("is-expanded");
		// 	$grid.masonry();
		// });


		// $('.cbul').hover(
		// 	function () {
		// 		$(this).parent().parent().parent().parent().parent().parent().addClass("is-expanded"); //Add an active class to the anchor
		// 	},
		// 	function () {
		// 		$(this).parent().parent().parent().parent().parent().parent().removeClass("is-expanded"); //Remove an active class to the anchor
		// 	}
		// )

		// $('.current-list').hover(
		// 	function () {
		// 		$(this).parent().parent().parent().parent().parent().addClass("is-expanded"); //Add an active class to the anchor
		// 	},
		// 	function () {
		// 		$(this).parent().parent().parent().parent().parent().removeClass("is-expanded"); //Remove an active class to the anchor
		// 	}
		// )

		$('.grid-item').hover(
			function () {
				$(this).addClass("is-expanded"); //Add an active class to the anchor
			},
			function () {
				$(this).removeClass("is-expanded"); //Remove an active class to the anchor
			}
		)

		



		// Hide think-section from Coming Soon Page
		// alert("Hi - "+window.location.pathname);
		if (window.location.pathname == "/coming-soon") {
			$('.think-section').hide();
		} else {
			$('.think-section').show();
		}

	});
	// List (at current-auctions.html page)
	// $(".curr-list-box").click(function(){

	// $(this).parent().parent().parent().parent().parent().parent().toggleClass("current-parent");

	// $(this).parent().parent().parent().parent().parent().parent().parent().toggleClass("current-parent");

	// $(".current-list").toggleClass("open-list");
	// $(".current-section .card, .current-section .card .card-body, .current-section .current-overlay").height("760px");
	// });



	// Searchbar
	// var subjectObject = {
	// 	"Front-end": {
	// 		"HTML": ["Links", "Images", "Tables", "Lists"],
	// 		"CSS": ["Borders", "Margins", "Backgrounds", "Float"],
	// 		"JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
	// 	},
	// 	"Back-end": {
	// 		"PHP": ["Variables", "Strings", "Arrays"],
	// 		"SQL": ["SELECT", "UPDATE", "DELETE"]
	// 	}
	// }
	// window.onload = function () {
	// 	var subjectSel = document.getElementById("subject");
	// 	var topicSel = document.getElementById("topic");
	// 	var chapterSel = document.getElementById("chapter");
	// 	for (var x in subjectObject) {
	// 		subjectSel.options[subjectSel.options.length] = new Option(x, x);
	// 	}
	// 	subjectSel.onchange = function () {
	// 		//empty Chapters- and Topics- dropdowns
	// 		chapterSel.length = 1;
	// 		topicSel.length = 1;
	// 		//display correct values
	// 		for (var y in subjectObject[this.value]) {
	// 			topicSel.options[topicSel.options.length] = new Option(y, y);
	// 		}
	// 	}
	// 	topicSel.onchange = function () {
	// 		//empty Chapters dropdown
	// 		chapterSel.length = 1;
	// 		//display correct values
	// 		var z = subjectObject[subjectSel.value][this.value];
	// 		for (var i = 0; i < z.length; i++) {
	// 			chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
	// 		}
	// 	}
	// }


})(jQuery);


/* PLACE A BID - Product Slider */
$ = jQuery;
$(document).ready(function () {

	$h_slider_options = {
		gallery: false,
		item: 1,
		loop: true,
		slideMargin: 0,
		thumbItem: 6,
		galleryMargin: 10,
		thumbMargin: 10,
	};

	h_slider = $('#bidlightSlider').lightSlider($h_slider_options);

	$selector = '#bidlightSlider li:not(".clone") a';

	$().fancybox({
		selector: $selector,
		backFocus: false,
		buttons: [
			'slideShow',
			'fullScreen',
			'close'
		]
	});

});

$(window).resize(function () {
	slider.destroy();
	h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
});

/* -------------------- */

/* countdown ---------- */
/*
$(function() {
  
	var targetDate  = new Date(Date.UTC(2017, 3, 10));
	var now   = new Date();
  
	window.days = daysBetween(now, targetDate);
	var secondsLeft = secondsDifference(now, targetDate);
	window.hours = Math.floor(secondsLeft / 60 / 60);
	secondsLeft = secondsLeft - (window.hours * 60 * 60);
	window.minutes = Math.floor(secondsLeft / 60 );
	secondsLeft = secondsLeft - (window.minutes * 60);
	console.log(secondsLeft);
	window.seconds = Math.floor(secondsLeft);
  
	startCountdown();
  });
  var interval;
  
  function daysBetween( date1, date2 ) {
	//Get 1 day in milliseconds
	var one_day=1000*60*60*24;
  
	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
  
	// Calculate the difference in milliseconds
	var difference_ms = date2_ms - date1_ms;
	  
	// Convert back to days and return
	return Math.round(difference_ms/one_day); 
  }
  
  function secondsDifference( date1, date2 ) {
	//Get 1 day in milliseconds
	var one_day=1000*60*60*24;
  
	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = date2_ms - date1_ms;
	var difference = difference_ms / one_day; 
	var offset = difference - Math.floor(difference);
	return offset * (60*60*24);
  }
  
  
  
  function startCountdown() {
	$('#input-container').hide();
	$('#countdown-container').show();
	
	displayValue('#js-days', window.days);
	displayValue('#js-hours', window.hours);
	displayValue('#js-minutes', window.minutes);
	displayValue('#js-seconds', window.seconds);
  
	interval = setInterval(function() {
	  if (window.seconds > 0) {
		window.seconds--;
		displayValue('#js-seconds', window.seconds);
	  } else {
		// Seconds is zero - check the minutes
		if (window.minutes > 0) {
		  window.minutes--;
		  window.seconds = 59;
		  updateValues('minutes');
		} else {
		  // Minutes is zero, check the hours
		  if (window.hours > 0)  {
			window.hours--;
			window.minutes = 59;
			window.seconds = 59;
			updateValues('hours');
		  } else {
			// Hours is zero
			window.days--;
			window.hours = 23;
			window.minutes = 59;
			window.seconds = 59;
			updateValues('days');
		  }
		  // $('#js-countdown').addClass('remove');
		  // $('#js-next-container').addClass('bigger');
		}
	  }
	}, 1000);
  }
  
  
  function updateValues(context) {
	if (context === 'days') {
	  displayValue('#js-days', window.days);
	  displayValue('#js-hours', window.hours);
	  displayValue('#js-minutes', window.minutes);
	  displayValue('#js-seconds', window.seconds);
	} else if (context === 'hours') {
	  displayValue('#js-hours', window.hours);
	  displayValue('#js-minutes', window.minutes);
	  displayValue('#js-seconds', window.seconds);
	} else if (context === 'minutes') {
	  displayValue('#js-minutes', window.minutes);
	  displayValue('#js-seconds', window.seconds);
	}
  }
  
  function displayValue(target, value) {
	var newDigit = $('<span></span>');
	$(newDigit).text(pad(value))
	  .addClass('new');
	$(target).prepend(newDigit);
	$(target).find('.current').addClass('old').removeClass('current');
	setTimeout(function() {
	  $(target).find('.old').remove();
	  $(target).find('.new').addClass('current').removeClass('new');
	}, 900);
  }
  
  function pad(number) {
	return ("0" + number).slice(-2);
  }
*/

/* ----------- */