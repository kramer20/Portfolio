(function() {
    'use strict';
    
    angular
    .module('portfolio',[])
    .controller('MainController', function() {
       var vm = this;
      
       var waypoint = new Waypoint({
       		element: document.getElementById('about'),
       		handler: function(){
            // alert('hi');
              $('#about .about').css('opacity', 100);
              $('.smallAbout').addClass('animated smallAboutAnimation');
              $('.medAbout').addClass('animated medAboutAnimation');
              $('.aboutBubble').addClass('animated aboutBubbleAnimation');
              $('#me').addClass('animated meAnimation');

       			// use jQuery to add class of what animation i want to happen
       		},
          
          offset:'10%'
           
       });

       var waypointTwo = new Waypoint({
          element: document.getElementById('work'),
          handler: function(){
            // alert('hi');
              $('#work .work').css('opacity', 100);
              $('.smallWork').addClass('animated smallWorkAnimation');
              $('.medWork').addClass('animated medWorkAnimation');
              $('.workBubble').addClass('animated workBubbleAnimation');
              // $('#meWork').addClass('animated meWorkAnimation');
              // $('.topBottom').addClass('animated meWorkFadeAnimation');

            // use jQuery to add class of what animation i want to happen
          },
          
          offset:'10%'
           
       });

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
              


            // use jQuery to add class of what animation i want to happen
          },
          
          offset:'10%'
           
       });

       var waypointFour = new Waypoint({
          element: document.getElementById('contact'),
          handler: function(){
            // alert('hi');
              $('#contact .contact').css('opacity', 100);
              // $('.smallWork').addClass('animated smallWorkAnimation');
              // $('.medWork').addClass('animated medWorkAnimation');
              // $('.workBubble').addClass('animated workBubbleAnimation');
              // // $('#meWork').addClass('animated meWorkAnimation');
              $('.rightLeft').addClass('animated animationFadeTwo');

            // use jQuery to add class of what animation i want to happen
          },
          
          offset:'10%'
           
       });

          jQuery(document).ready(function($) {
           $('.my-slider').unslider();
          });

          //on click like stays on active nav item
          $("li.page-scroll > a").click(function(){
              // console.log("li.page-scroll > a");
                $("li.page-scroll > a").removeClass("in-active");
                console.log("li.page-scroll > a");
                $(vm).addClass("active");
          });
    });
})();