$(document).ready(function() {
	// burger-icon
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu-mobile').toggleClass('active');
	});

	//TOP-SEARCH
    $("body").on("click", ".js-top-search", function(e){
        e.preventDefault();
        $(".top-search__toggle").animate({
	        width: 'toggle',
	    },150);
	});
    $("body").on("click", ".js-top-search__close", function(e){
        e.preventDefault();
        $(".top-search__toggle").animate({
	        width: 'toggle',
	    },150);
	});

	//MOBILE SUBMENU
	$('body').on('click','.js-menu-mobile__toggle', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.menu-mobile__item').find('.menu-mobile-sub').slideToggle(150);
	});


	//TABLE-WRAP
	if ($("table").length > 0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}


	if($('.hero-slider').length>0){
		$('.hero-slider').on('init', function(event, slick) {
			$(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
			$('.current').text(slick.currentSlide + 1);
			$('.total').text(slick.slideCount);
	   }).slick({
			dots: false,
			arrows:true,
			infinite: false,
			// speed: 300,
			fade: true,
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$('.current').text(nextSlide + 1);
	   });
	}




	//video-play
	$("body").on("click", ".js-page-video__link", function(e){
		e.preventDefault();
		$(this).parents('.page-video__view').find('.videoPopUpBox').show();
		$(this).parents('.page-video__view').find('.video-js').trigger('play');
	});
	//video-close
	$("body").on("click", ".videoPopUpBox", function(e){
		e.preventDefault();
		$(this).hide();
		$(this).parents('.page-video__view').find('.video-js').trigger('pause');
	});


	//TABS-simple
	$(".tab_content").hide();
	$(".tab-btn:first").addClass("m-active").show();
	$(".tab_content:first").show();

	$(".tab-btn").click(function(e) {
		e.preventDefault();
		$(".tab-btn").removeClass("m-active");
		$(this).addClass("m-active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn();
	});


	$('[data-fancybox]').fancybox({
		toolbar : true,
  		smallBtn : false,
		buttons : ['close'],
		opacity : 1,
	});


	//gallerty-top-toggle
	$("body").on("click", ".js-collection__top", function(e){
        e.preventDefault();
        $(this).toggleClass('active');
		$(this).parents('.collection-top-wrap').find('.collection-top-list').slideToggle(200);
	});


	if($('.inspiration-slider').length>0){
		$('.inspiration-slider').slick({
			dots: false,
			arrows:false,
			infinite: false,
			speed: 300,
			// slidesToShow: 1,
			swipe: true,
			// centerMode: true,
			variableWidth: true
		});
	}

	
	if($('.item-top').length>0){
		$('.item-top-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.item-top-nav__slider'
		});
		$('.item-top-nav__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.item-top-for',
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true
		});
	}



	if($('.i-slider').length>0){
		$('.i-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
		});
	}


	if($('.item-collection').length>0){
		$('.item-collection-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.item-collection-nav'
		});
		$('.item-collection-nav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.item-collection-for',
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
	}



	//mobile-filter
	$("body").on("click", ".js-page-aside-mobile-btn", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.page-aside__wrap').slideToggle(100);
	});


	if($('.main-collections-view').length>0){
		$('.main-collections-view').slick({
			dots: false,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			//slidesToScroll: 1,
			// variableWidth: true,
			responsive: [
			  	{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						variableWidth: false,
					}
			  	},
				  {
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: false,
					}
			  	},
			]
		});
	}


	if($('.m-index').length>0){
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(".laparet__img", {
			yPercent: -20,
			ease: "none",
			scrollTrigger: {
			  	trigger: '.laparet',
			  	scrub: true
			}, 
		});
		gsap.to(".laparet__info", {
			yPercent: 20,
			ease: "none",
			scrollTrigger: {
			  	trigger: '.laparet',
			  	scrub: true
			}, 
		});

		//console.log($('.inspiration__line').innerWidth());

		gsap.to(".line-horizontal", {
			//x:"-=30%",
			 xPercent: -100,
    		// x: -innerWidth,
			ease: "none",
			scrollTrigger: {
			  	trigger: ".main-products",
			  	start: "top bottom",
			  	end: "bottom top",
			  	scrub: 1.5
			}
		});
		gsap.to(".line-horizontal-reverse", {
			//x:"+=30%",
			xPercent: 100,
			ease: "none",
			scrollTrigger: {
			  	trigger: ".main-products",
			  	start: "top bottom",
			  	end: "bottom top",
			  	scrub: 1.5
			}
		});



		// const thisAnimWrap = document.querySelector('.inspiration__wrap');
		//console.log($(".inspiration__wrap").outerHeight());

		//collections
		var tlCollections = gsap.timeline({
			scrollTrigger: {
				trigger: ".main-collections",
				start: "top 50%",
				// toggleActions: "restart none none reset",
			}
		})
		tlCollections.from(".main-collections-view__item", {
			y: 30,
			autoAlpha: 0,
			ease: Power4.out,
			delay: -0.9,
			//skewY: 7,
			stagger: .2,
		})


		// var line_length = $('.inspiration__line').length;
		// console.log(line_length);
		// if(line_length>=3){
			var tl1 = gsap.timeline({
				// duration: -5,
				scrollTrigger: {
					trigger: ".inspiration",
					  start: "top top",
					  // end: () => `+=${document.querySelector(".inspiration").offsetHeight}`,
					// end: '400% top',
					end: 'bottom',
					  pin: true,
					scrub: 3,
		
					anticipatePin: 0,
				}
			});
	
			tl1.to(".inspiration__wrap", {
				// x: '-=100',
				//yPercent: -100,
				// y: () => `-=${document.querySelector(".inspiration__wrap").offsetHeight}`,
				y: '-=600',
				xPercent: -55,
				ease: "none",
				duration: 1000,
		
			});
			tl1.from(".inspiration .see-all-link", {
				y:50,
				opacity: 0,
				ease: "easeIn",
				duration: 10
			})
		// }
		

	}



	//PHONE-SELECT
	if ($("#phone").length>0) {
		var input = document.querySelector("#phone");
		window.intlTelInput(input, {
			utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",//only for placeholders
			onlyCountries: ["ru", "by", "cn", "us"],
			initialCountry:"us",
			preferredCountries:false,
			separateDialCode:true,
			nationalMode: false,
		});
	};


	if($('.contact').length>0){
		//popup
		const modalTriggers = document.querySelectorAll('.popup-trigger');
		const modalCloseTrigger = document.querySelectorAll('.modal-close');
		const p_modal = document.querySelectorAll('.popup-modal');
		const bodyBlackout = document.querySelector('.body-blackout');

	

		modalTriggers.forEach(trigger => {
			trigger.addEventListener('click', (e) => {
				e.preventDefault();

				const { popupTrigger } = trigger.dataset;

				const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

				// Array.from(document.querySelectorAll('.popup-modal')).forEach(
				// 	(el) => el.classList.remove('is--visible')
				// );

				popupModal.classList.add('is--visible');

				bodyBlackout.classList.add('is-blacked-out');

				popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
					popupModal.classList.remove('is--visible')
					bodyBlackout.classList.remove('is-blacked-out')
				});

				bodyBlackout.addEventListener('click', () => {
					popupModal.classList.remove('is--visible')
					bodyBlackout.classList.remove('is-blacked-out')
				});

				popupModal.querySelector('.modal-close').addEventListener('click', () => {
					popupModal.classList.remove('is--visible')
					bodyBlackout.classList.remove('is-blacked-out')
				});
			})
		});
	}

	$("body").on("click", ".js-format-toggle__link", function(e){
        e.preventDefault();
        $(this).parents('.format-toggle').toggleClass('active');
		
	});


	//CHECKBOX-MORE
	$("body").on("click", ".js-checkbox-more", function(e){
        e.preventDefault();
        $(this).parents('.page-aside__select').find('.checkbox-item').removeClass('m-hidden');
		$(this).hide();
	});
});



// functions

$(function() {
	$("body").on("click", ".js-accordion__link", function (e) {
		e.preventDefault();
		$(this).parents('.accordion__item').toggleClass('active');
		$(this).next('.accordion__view').slideToggle();
		//}
	});
});


