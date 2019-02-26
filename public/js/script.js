(function ($) {
   var zoom = parseInt($("#map").attr('data-zoom'));
   var latitude = $("#map").attr('data-latitude');
   var longitude = $("#map").attr('data-longitude');
   "use strict";
   var scrollOffset = -30;
   Pace.on("start", function () {
      $("#preloader").show();
   });
   Pace.on("done", function () {
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(1000).css({'overflow-x': 'hidden'}).css({'overflow-y': 'auto'});
      $('body').scrollspy({target: '.nav-menu'});
      $('body').data()['bs.scrollspy'].options.offset = Math.abs(scrollOffset) + 10; // Set the new offset
      $('body').data()['bs.scrollspy'].process(); // Force scrollspy to recalculate the offsets to your targets
      $('body').scrollspy('refresh'); // Refresh the scrollspy.
      var wow = new WOW(
              {
                 boxClass: 'wow', // animated element css class (default is wow)
                 animateClass: 'animated', // animation css class (default is animated)
                 offset: '-200px', // distance to the element when triggering the animation (default is 0)
                 mobile: true, // trigger animations on mobile devices (default is true)
                 live: true        // act on asynchronously loaded content (default is true)
              }
      );
      new WOW().init();
      function getImgSize(el, imgSrc) {
         var newImg = new Image();
         newImg.onload = function () {
            var height = newImg.height;
            var width = newImg.width;
            el.css('height', height);
         };
         newImg.src = imgSrc;
      }
//init functions
      swapNav();
      $(window).resize(function () {
         swapNav();
         eqDimensions();
      });
      function setupResume() {
         if ($('.skill-item').length > 0) {
            skillMaker($('.skill-item'));
         }
      }
      function skillMaker(el) {
         if (el.hasClass('line')) {
            var cntr = 1;
            el.each(function () {
               var el = $(this);
               var prcnt = el.attr('data-percent');
               var w = el.attr('data-percent');
               el.find('.bar').delay(cntr * 400).animate({width: w + "%"}, 2000, 'easeInOutExpo');
               cntr++;
            });
         }
         if (el.hasClass('dotted')) {
            var cntr = 1;
            el.each(function () {
               var el = $(this);
               var width = el.find('.skill-dots').width();
               var prcnt = el.attr('data-percent');
               var circleWidth = el.find('span').outerWidth(true);
               var allCircles = Math.ceil(width / circleWidth);
               var filledCircles = Math.ceil(prcnt * allCircles / 100);
               el.find('.init').remove();
               for (var j = 1; j < filledCircles; j++) {
                  el.find('.prg').append('<span class="filled"></span>');
               }
               for (var i = 1; i < allCircles - filledCircles; i++) {
                  el.find('.prg').append('<span class="empty"></span>');
               }
               //     el.find('.bar').delay(cntr * 400).animate({width: w + "%"}, 2000, 'easeInOutExpo');
               cntr++;
            });
         }
      }
      function swapNav() {
         if ($(window).width() < 966) {
            $('#nav-row nav').prependTo($('#top-bar'));
         } else {
            $('#top-bar nav').appendTo($('#nav-row .container'));
         }
      }
      $(".slider-thumbs").owlCarousel({
         pagination: false,
         singleItem: true,
         navigation: true,
         navigationText: ["", ""],
         mouseDrag: true,
         afterInit: function () {
            $('.slider-thumbs .owl-buttons').appendTo($('.slider-thumbs'));
         }
      });
      $(".clients-slider-holder").owlCarousel({
         pagination: false,
         singleItem: true,
         navigation: true,
         navigationText: ["", ""],
         mouseDrag: true,
         afterInit: function () {
            $('.clients-slider-holder .owl-buttons').appendTo($('.clients-slider-holder'));
         }
      });
      function setupPortfolio() {
         var $container = $('#portfolio-grid');
         $container.isotope({
            masonry: {
               columnWidth: 5
            }
         });
         $('.group-selectors a').click(function (e) {
            e.preventDefault();
            var selector = $(this).attr('data-filter');
            $container.isotope({filter: selector});
            $('.group-selectors a.active').removeClass('active');
            $(this).toggleClass('active');
            return false;
         });
      }
      if ($('.bg-image[data-bg-image]').length > 0) {
         $('.bg-image[data-bg-image]').each(function () {
            var el = $(this);
            var sz = getImgSize(el, el.attr("data-bg-image"));
            el.css('background-position', 'center').css('background-image', "url('" + el.attr("data-bg-image") + "')").css('background-size', 'cover').css('background-repeat', 'no-repeat');
         });
      }
      if ($('.bg-color[data-bg-color]').length > 0) {
         $('.bg-color[data-bg-color]').each(function () {
            var el = $(this);
            el.css('background-color', el.attr("data-bg-color"));
         });
      }
      function eqDimensions() {
         $('.eq-dimensions').each(function () {
            var h = $(this).height();
            var w = $(this).width();
            var destinationValue = Math.max(h, w);
            $(this).width(destinationValue).height(destinationValue);
         });
      }
      eqDimensions();
      function setupCustomMap() {
         if ($('.map-holder').length > 0) {
            var styles = [
               {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                     {
                        "visibility": "simplified"
                     },
                     {
                        "color": "#E6E6E6"
                     }
                  ]
               }, {
                  "featureType": "administrative",
                  "stylers": [
                     {
                        "visibility": "simplified"
                     }
                  ]
               }, {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                     {
                        "visibility": "on"
                     },
                     {
                        "saturation": -100
                     }
                  ]
               }, {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                     {
                        "color": "#808080"
                     },
                     {
                        "visibility": "on"
                     }
                  ]
               }, {
                  "featureType": "water",
                  "stylers": [
                     {
                        "color": "#CECECE"
                     },
                     {
                        "visibility": "on"
                     }
                  ]
               }, {
                  "featureType": "poi",
                  "stylers": [
                     {
                        "visibility": "on"
                     }
                  ]
               }, {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                     {
                        "color": "#E5E5E5"
                     },
                     {
                        "visibility": "on"
                     }
                  ]
               }, {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [
                     {
                        "color": "#ffffff"
                     },
                     {
                        "visibility": "on"
                     }
                  ]
               }, {}
            ];
            var lt = (latitude);
            var ld = (longitude);
            var options = {
               mapTypeControlOptions: {
                  mapTypeIds: ['Styled']
               },
               center: new google.maps.LatLng(lt, ld),
               zoom: zoom,
               disableDefaultUI: true,
               scrollwheel: false,
               mapTypeId: 'Styled'
            };
            var div = document.getElementById('map');
            var map = new google.maps.Map(div, options);
            var styledMapType = new google.maps.StyledMapType(styles, {
               name: 'Styled'
            });
            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(latitude, longitude),
               map: map,
            });
            map.mapTypes.set('Styled', styledMapType);
         }
      }
      $('[data-placeholder]').focus(function () {
         var input = $(this);
         if (input.val() == input.attr('data-placeholder')) {
            input.val('');
         }
      }).blur(function () {
         var input = $(this);
         if (input.val() == '' || input.val() == input.attr('data-placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('data-placeholder'));
         }
      }).blur();
      $('[data-placeholder]').parents('form').submit(function () {
         $(this).find('[data-placeholder]').each(function () {
            var input = $(this);
            if (input.val() == input.attr('data-placeholder')) {
               input.val('');
            }
         });
      });
//radial navigation
      var button = document.getElementById('cn-button'),
              wrapper = document.getElementById('cn-wrapper'),
              overlay = document.getElementById('cn-overlay');
      //open and close menu when the button is clicked
      var open = false;
      button.addEventListener('click', handler, false);
      wrapper.addEventListener('click', cnhandle, false);
      function cnhandle(e) {
         e.stopPropagation();
      }
      function handler(e) {
         if (!e)
            var e = window.event;
         e.stopPropagation();//so that it doesn't trigger click event on document
         if (!open) {
            openNav();
         } else {
            closeNav();
         }
      }
      function openNav() {
         open = true;
         button.innerHTML = "-";
         classie.add(overlay, 'on-overlay');
         classie.add(wrapper, 'opened-nav');
      }
      function closeNav() {
         open = false;
         button.innerHTML = "+";
         classie.remove(overlay, 'on-overlay');
         classie.remove(wrapper, 'opened-nav');
      }
      document.addEventListener('click', closeNav);
      //Contact form setup
      $('.submit').click(function (e) {
         e.preventDefault();
         $(this).parents('form').submit();
      });
      function checkContactForm() {
         if ($(".contact-form").length > 0) {
            var formStatus = $(".contact-form").validate();
            //   =====================================================
            //sending contact form
            $(".contact-form").submit(function (e) {
               e.preventDefault();
               
            });
         }
      }
      var mapIsActive = false;
      var portfolioIsActive = false;
      var resumeIsActive = false;
      $('#sticked-nav a').click(function () {
         closeNav();
      });
//navigation functions
      $('#sticked-nav a,.nav-link,.nav-link-holder a,#hire-link, #available-label ,.close-btn').click(function () {
         var el = $(this);
         var link = el.attr('href');
         if (link !== "#home") {
            $("#sticked-nav").removeClass('invisible');
         } else {
            $("#sticked-nav").addClass('invisible');
         }
         switch (link) {
            case '#contact':
               if (!mapIsActive) {
                  mapIsActive = true;
                  setTimeout(setupCustomMap, 500);
               }
               break;
            case '#portfolio':
               if (!portfolioIsActive) {
                  portfolioIsActive = true;
                  setTimeout(setupPortfolio, 500);
               }
               break;
            case '#about':
               if (!resumeIsActive) {
                  resumeIsActive = true;
                  setTimeout(setupResume, 500);
               }
               break;
         }
         $('.page.active').stop().fadeOut(function () {
            $('.page.active').removeClass('active');
            $(link).stop().fadeIn(function () {
               $(link).addClass('active');
            });
         });
      });
      checkContactForm();
   });
   $('.goto-top').click(function (e) {
      e.preventDefault();
      $('html,body').animate({
         scrollTop: 0
      }, 2000);
   });
   if ($('a[data-rel="prettyphoto"]').length > 0) {
      $('a[data-rel="prettyphoto"]').prettyPhoto();
   }
   if ($('a[data-rel="prettyPhoto"]').length > 0) {
      $('a[data-rel="prettyPhoto"]').prettyPhoto();
   }
   /**
    Provides requestAnimationFrame in a cross browser way.
    @author paulirish / http://paulirish.com/ */
   if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (function () {
         return window.webkitRequestAnimationFrame ||
                 window.mozRequestAnimationFrame ||
                 window.oRequestAnimationFrame ||
                 window.msRequestAnimationFrame ||
                 function (/* function FrameRequestCallback / callback, / DOMElement Element */ element) {};
      })();
   }
})(jQuery);
