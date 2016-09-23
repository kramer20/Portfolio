(function() {
    'use strict';
    
    angular
    .module('portfolio',[])
    .controller('MainController', function() {
       var vm = this;
      

      //For animations to work use jQuery to add class of 
      //what animation I want to take place.

      //animation for about section
       var waypoint = new Waypoint({
       		element: document.getElementById('about'),
       		handler: function(){
            // alert('hi');
              $('#about .about').css('opacity', 100);
              $('.smallAbout').addClass('animated smallAboutAnimation');
              $('.medAbout').addClass('animated medAboutAnimation');
              $('.aboutBubble').addClass('animated aboutBubbleAnimation');
              $('#me').addClass('animated meAnimation');
              $(".navList a").removeClass("active");
              $(".aboutScroll").addClass("active"); 
       		},
          
          offset:'5%'
          
           
       });

       //remove nav line from work when in intro section
       var waypointOne = new Waypoint({
          element: document.getElementById('intro'),
          handler: function(){
            // alert('hi');
            $(".navList a").removeClass("active");
            $(".introScroll").addClass("active"); 
              
          },
          
          offset:'-5%'
           
       });

       //animation for work section
       var waypointTwo = new Waypoint({
          element: document.getElementById('work'),
          handler: function(){
            // alert('hi');
              $('#work .work').css('opacity', 100);
              $('.smallWork').addClass('animated smallWorkAnimation');
              $('.medWork').addClass('animated medWorkAnimation');
              $('.workBubble').addClass('animated workBubbleAnimation');
              $('.my-slider').addClass('animated workSliderAnimation');
              $('#meWork').addClass('animated meWorkFadeAnimation');
              $('#meWorkTwo').addClass('animated meAppearAnimation');
              $(".navList a").removeClass("active");
              $(".workScroll").addClass("active"); 
          },
          
          // offset:'5%'
           
       });

       
       //animations for contact section
       var waypointFour = new Waypoint({
          element: document.getElementById('contact'),
          handler: function(){
            // alert('hi');
              $('#contact .contact').css('opacity', 100);
              $('.smallContact').addClass('animated smallContactAnimation');
              $('.medContact').addClass('animated medContactAnimation');
              $('.contactBubble').addClass('animated contactBubbleAnimation');
              $('#meContact').addClass('animated animationSlideLeft');
              $('.rightLeft').addClass('animated animationFadeTwo');
              $('.contactCol').addClass('animated contactItemsAnimation');
              $(".navList a").removeClass("active");
              $(".contactScroll").addClass("active"); 
          },
          
          offset:'30%'
           
       });


          jQuery(document).ready(function($) {
           $('.my-slider').unslider();
          });

          //on click line stays on active nav item
          $("a").click(function(){
                $("a").removeClass("active");
                // console.log("a");
                $(this).addClass("active");
          });

          //on click active section stays purple in nav
          $("a").click(function(){
              $("a").removeClass("active");
              // console.log("a");
              $(this).addClass("active");
          })

          //function for a smooth transition between different sections
          $('a').click(function(){
          $('html, body').animate({
               scrollTop: $( $(this).attr('href') ).offset().top
           }, 500);
           return false;
          });

           //function for mobile menu on click
          $(".navToggle").on("click", function(){
            $(this).toggleClass("open");
            $("#menu").toggleClass("active");
          });

    });
})();