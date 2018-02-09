/*global jQuery:false */
(function ($) {


	function callback(data){
	console.log("preJson");
	console.log(data);
	
	$("#description").append(data.map(function(d){

		return $("<h6>").text(d.about.description);
	}))
	$("#subdescription").append(data.map(function(d){
		return $("<h6>").text(d.about.subdescription);
	}))
	$("#workExperienceList").each(function(index, el) {
		var ind = index+1;
		var img = $("<img>").addClass('img-responsive').attr({
			src: el.workExperience.image,
			alt: 'img'
		});
		console.log(img);
	});
	/*.append(data.map(function(d){
		var img = $("<img>").addClass('img-responsive').attr({
			src: d.workExperience.image,
			alt: 'img'
		});
		var role = $("<h3>").text(d.workExperience.role);
		var description = $("<h4>").text(d.workExperience.description);
		var dates = $("<p>").text(d.workExperience.dates);
		return $("<div>").append(img).append(role).append(description).append(dates);
	}))*/
	}

	$.getJSON("../data/data.json",callback);

	
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });
	


	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});	

	
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
		$('a.totop,a#btn-scroll,a.btn-scroll,.carousel-inner .item a.btn').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	//nivo lightbox
	$('.gallery-item a').nivoLightbox({
		effect: 'fadeScale',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
		});
	
})(jQuery);
