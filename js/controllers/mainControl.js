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
       		},
          
          offset:'10%'
           
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

          },
          
          offset:'10%'
           
       });

       //animation for skills section
       var waypointThree = new Waypoint({
          element: document.getElementById('skills'),
          handler: function(){
            // alert('hi');
              $('#skills .skills').css('opacity', 100);
              $('.smallSkills').addClass('animated smallSkillsAnimation');
              $('.medSkills').addClass('animated medSkillsAnimation');
              $('.skillsBubble').addClass('animated skillsBubbleAnimation');
              $('#meSkills').addClass('animated rateSlideAnimation');
              $('.upDown').addClass('animated fadeRateAnimation');
              $('.technicalList').addClass('animated skillsListAnimation');
              $('.htmlOne').addClass('animated htmlOneAnimation');
              $('.htmlTwo').addClass('animated htmlTwoAnimation');
              $('.htmlThree').addClass('animated htmlThreeAnimation');
              $('.htmlFour').addClass('animated htmlFourAnimation');
              $('.htmlFive').addClass('animated htmlFiveAnimation');
            
              $('.cssOne').addClass('animated cssOneAnimation');
              $('.cssTwo').addClass('animated cssTwoAnimation');
              $('.cssThree').addClass('animated cssThreeAnimation');
              $('.cssFour').addClass('animated cssFourAnimation');
              $('.cssFive').addClass('animated cssFiveAnimation');
              
              $('.javaOne').addClass('animated javaOneAnimation');
              $('.javaTwo').addClass('animated javaTwoAnimation');
              $('.javaThree').addClass('animated javaThreeAnimation');
              $('.javaFour').addClass('animated javaFourAnimation');
              $('.javaFive').addClass('animated javaFiveAnimation');
             
              $('.jOne').addClass('animated jOneAnimation');
              $('.jTwo').addClass('animated jTwoAnimation');
              $('.jThree').addClass('animated jThreeAnimation');
              $('.jFour').addClass('animated jFourAnimation');
              $('.jFive').addClass('animated jFiveAnimation');
             
              $('.angOne').addClass('animated angOneAnimation');
              $('.angTwo').addClass('animated angTwoAnimation');
              $('.angThree').addClass('animated angThreeAnimation');
              $('.angFour').addClass('animated angFourAnimation');
              $('.angFive').addClass('animated angFiveAnimation');
             
              $('.photoOne').addClass('animated photoOneAnimation');
              $('.photoTwo').addClass('animated photoTwoAnimation');
              $('.photoThree').addClass('animated photoThreeAnimation');
              $('.photoFour').addClass('animated photoFourAnimation');
              $('.photoFive').addClass('animated photoFiveAnimation');
            
              $('.designOne').addClass('animated designOneAnimation');
              $('.designTwo').addClass('animated designTwoAnimation');
              $('.designThree').addClass('animated designThreeAnimation');
              $('.designFour').addClass('animated designFourAnimation');
              $('.designFive').addClass('animated designFiveAnimation');
    
          },
          
          offset:'10%'
           
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
           
          },
          
          offset:'30%'
           
       });

       //work scroll line
       var waypointFive = new Waypoint({
          element: document.getElementById('work'),
          handler: function(){
              $('a.workScroll').css('opacity', 100);
              $('a.workScroll').addClass('scrollLine');     
          },

          offset:'10%'
       });

       //about scroll line
       var waypointSix = new Waypoint({
          element: document.getElementById('about'),
          handler: function(){
              $('a.workScroll').removeClass('scrollLine');
              $('a.aboutScroll').css('opacity', 100);
              $('a.aboutScroll').addClass('scrollLineA');     
          },

          offset:'10%'
       });

       //skills scroll line
       var waypointSeven = new Waypoint({
          element: document.getElementById('skills'),
          handler: function(){
              $('a.aboutScroll').removeClass('scrollLineA');
              $('a.skillsScroll').css('opacity', 100);
              $('a.skillsScroll').addClass('scrollLineB');     
          },

          offset:'10%'
       });

       //contact scroll line
       var waypointEight = new Waypoint({
          element: document.getElementById('contact'),
          handler: function(){
              $('a.skillsScroll').removeClass('scrollLineB');
              $('a.contactScroll').css('opacity', 100);
              $('a.contactScroll').addClass('scrollLineC');     
          },

          offset:'10%'
       });

          jQuery(document).ready(function($) {
           $('.my-slider').unslider();
          });

          //on click line stays on active nav item
          $("a").click(function(){
                $("a").removeClass("active");
                console.log("a");
                $(this).addClass("active");
          });

          //function for a smooth transition between different sections
          $('a').click(function(){
          $('html, body').animate({
               scrollTop: $( $(this).attr('href') ).offset().top
           }, 500);
           return false;
 });
    });
})();