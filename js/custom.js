/*global jQuery:false */
(function ($) {


	function callback(data){
	console.log("preJson");
	//console.log(data);
	
	$("#description").append(data.map(function(d){
		return $("<h6>").text(d.about.description);
	}));
	$("#subdescription").append(data.map(function(d){
		return $("<h6>").text(d.about.subdescription);
	}));
	// console.log(data);
	$("#workExpGallery").each(function(k,v){
		console.log("key "+k+" val "+ data[0].workExperience[0].description );
	})
	// $("#workExperienceList").append(data.map(function(d){
	// 	var dLength = d.workExperience.length;
	// 	var i = 0;
	// 	var retu = "";
	// 	while(i<dLength){
	// 	console.log();
	// 	var img = $("<img>").addClass('img-responsive').attr({
	// 		src: d.workExperience[i].image,
	// 		alt: 'img'
	// 	});
	// 	var role = $("<h3>").text(d.workExperience[i].role);
	// 	var description = $("<h4>").text(d.workExperience[i].description);
	// 	var dates = $("<p>").text(d.workExperience[i].dates);
	// 	i+=1;
	// 	return(($("<div>").append(img).append(role).append(description).append(dates)));
	// }
	// console.log(retu);
	// return retu;
	// }))
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
