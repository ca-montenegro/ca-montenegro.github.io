/*global jQuery:true */
(function ($) {

	"use strict";
	/*Function that load html content based on json info*/
	function callback(data){

		/*Section about, load basic description*/
	$("#description").append(data.map(function(d){
		return $("<h7>").text(d.about.description);
	}));
	$("#subdescription").append(data.map(function(d){
		return $("<h8>").text(d.about.subdescription);
	}));
	$("#subsubdescription").append(data.map(function(d){
		return $("<h9>").text(d.about.subsubdescription);
	}));

	/* Section: Work Experience, load the info from json with each jQuery function*/
	$.each(data[0].workExperience, function (k,v) {


		var img = $("<img>").addClass("img-responsive").attr({
			src: v.image,
			alt: v.image
		});
		var tet = $("<p>").text(v.description);
		var role = $("<h3>").text(v.role);
		var date = $("<p>").text(v.dates);
		var div = $("<div>").addClass("col-md-3").append(img).append(role)
		.append(tet)
		.append(date);
		$("#workExperienceList").append(div);

	});
        /* Section: Skills, load the info from json with each jQuery function*/
	$.each(data[0].skills, function(k,v){
		var img = $("<img>").addClass("img-responsive").attr({
			src:v.image,
			alt:v.image
		});
		var level = v.level;
		var stars = function(){
			var retu = $("<p>");
			for(var i = 0; i<level; i++){
				var li = $("<i>").addClass("fa fa-star fa-2x");
				retu.append(li);
			}
			return retu;
		}
		var div = $("<div>").addClass("col-md-3 animated fadeInUp")
		.append(stars())
		.append(img);
		$("#skillsList").append(div);
	});
        /* Section: Projects, load the info from json with each jQuery function*/
	$.each(data[0].projects, function(k,v){
		var fafa = $("<span>").addClass(v.iconClass);
		var h5 = $("<h5>").text(v.name);
		var h5_2 = $("<h5>").text("Team size: " + v.teamSize);
		var line = $("<div>").addClass("divider-header");
		var descrip = $("<p>").text("Description: " + v.description);
		var tech = $("<p>").text("Technologies: " + v.technologies);
		var btn = $("<a>").addClass("btn btn-skin btn-lg btn-block").attr({
			href : v.repository,
			target:"_blank"
		}).text("Repository").append($("<i>").addClass("fa fa-github"));
		var divService = $("<div>").addClass("service-desc").append(h5)
		.append(line)
		.append(h5_2)
		.append(descrip)
		.append(tech)
		.append(btn);
		var mainDiv4 = $("<div>").addClass("service-icon").append(fafa);
		var mainDiv3 = $("<div>").addClass("service-box").append(mainDiv4).append(divService);
		var mainDiv2 = $("<div>").addClass("animated rotateInDownLeft").append(mainDiv3);
		var mainDiv = $("<div>").addClass("col-md-4").append(mainDiv2);
		$("#projectsList").append(mainDiv);

	});

        /* Section: Hobbies load the info from json with each jQuery function*/
	$.each(data[0].hobbies, function(k,v){
		var img = $("<img>").attr({
			src:v.image,
			style:"width:100%",
			alt: v.name
		})
		var indice = k+1+"/5";
		var subdiv = $("<div>").addClass("numbertext").text(indice);
		var mainDiv="";
		if(k===0)
			mainDiv = $("<div>").addClass("mySlides fades")
				.attr({style:"display:block;"})
				.append(subdiv)
				.append(img)
				.append($("<div>")
					.addClass("text")
					.text(v.caption));
		else
            mainDiv = $("<div>").addClass("mySlides fades")
				.append(subdiv).append(img)
				.append($("<div>")
					.addClass("text")
					.text(v.caption));
		$("#hobbiesList").append(mainDiv).attr({
			style:"max-height:70% max-width:70%"
		})

	})
}

/*Asincronic function to load json info into callback function*/
$.getJSON("../data/data.json",callback);

/*Automatic hide the navbar when click any section*/
$('.navbar-nav>li>a').on('click', function() {
	'use strict';
	$('.navbar-collapse').collapse('hide');
});

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
		//afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		//onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		//onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

	jQuery('.appear').appear();
	/*jQuery(".appear").on("appear", function(data) {
		var id = $(this).attr("id");
		jQuery('.nav li').removeClass('active');
		jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
	});*/
	
})(jQuery);
