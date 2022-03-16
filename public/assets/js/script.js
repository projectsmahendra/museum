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
		$(".current-bottom").removeClass("itsdone-parent");
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

	$grid.on('click', '.cbul', function (event) {
		$(this).parent().parent().parent().parent().parent().parent().toggleClass("is-expanded");
		$grid.masonry();
	});


	// List (at current-auctions.html page)
	// $(".curr-list-box").click(function(){

	// $(this).parent().parent().parent().parent().parent().parent().toggleClass("current-parent");

	// $(this).parent().parent().parent().parent().parent().parent().parent().toggleClass("current-parent");

	// $(".current-list").toggleClass("open-list");
	// $(".current-section .card, .current-section .card .card-body, .current-section .current-overlay").height("760px");
	// });



	// Searchbar
	var subjectObject = {
		"Front-end": {
			"HTML": ["Links", "Images", "Tables", "Lists"],
			"CSS": ["Borders", "Margins", "Backgrounds", "Float"],
			"JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
		},
		"Back-end": {
			"PHP": ["Variables", "Strings", "Arrays"],
			"SQL": ["SELECT", "UPDATE", "DELETE"]
		}
	}
	window.onload = function () {
		var subjectSel = document.getElementById("subject");
		var topicSel = document.getElementById("topic");
		var chapterSel = document.getElementById("chapter");
		for (var x in subjectObject) {
			subjectSel.options[subjectSel.options.length] = new Option(x, x);
		}
		subjectSel.onchange = function () {
			//empty Chapters- and Topics- dropdowns
			chapterSel.length = 1;
			topicSel.length = 1;
			//display correct values
			for (var y in subjectObject[this.value]) {
				topicSel.options[topicSel.options.length] = new Option(y, y);
			}
		}
		topicSel.onchange = function () {
			//empty Chapters dropdown
			chapterSel.length = 1;
			//display correct values
			var z = subjectObject[subjectSel.value][this.value];
			for (var i = 0; i < z.length; i++) {
				chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
			}
		}
	}


})(jQuery);