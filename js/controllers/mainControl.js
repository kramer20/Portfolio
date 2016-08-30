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
              // $('#meWork').addClass('animated meWorkAnimation');
              // $('.topBottom').addClass('animated meWorkFadeAnimation');
              $('.technicalList').addClass('animated skillsListAnimation');
              $('.htmlOne').addClass('animated htmlOneAnimation');
              $('.htmlTwo').addClass('animated htmlTwoAnimation');
              $('.htmlThree').addClass('animated htmlThreeAnimation');
              $('.htmlFour').addClass('animated htmlFourAnimation');
              $('.htmlFive').addClass('animated htmlFiveAnimation');
              $('.htmlSix').addClass('animated htmlSixAnimation');
              $('.htmlSeven').addClass('animated htmlSevenAnimation');
              $('.cssOne').addClass('animated cssOneAnimation');
              $('.cssTwo').addClass('animated cssTwoAnimation');
              $('.cssThree').addClass('animated cssThreeAnimation');
              $('.cssFour').addClass('animated cssFourAnimation');
              $('.cssFive').addClass('animated cssFiveAnimation');
              $('.cssSix').addClass('animated cssSixAnimation');
              $('.cssSeven').addClass('animated cssSevenAnimation');
              $('.javaOne').addClass('animated javaOneAnimation');
              $('.javaTwo').addClass('animated javaTwoAnimation');
              $('.javaThree').addClass('animated javaThreeAnimation');
              $('.javaFour').addClass('animated javaFourAnimation');
              $('.javaFive').addClass('animated javaFiveAnimation');
              $('.javaSix').addClass('animated javaSixAnimation');
              $('.javaSeven').addClass('animated javaSevenAnimation');
              $('.jOne').addClass('animated jOneAnimation');
              $('.jTwo').addClass('animated jTwoAnimation');
              $('.jThree').addClass('animated jThreeAnimation');
              $('.jFour').addClass('animated jFourAnimation');
              $('.jFive').addClass('animated jFiveAnimation');
              $('.jSix').addClass('animated jSixAnimation');
              $('.jSeven').addClass('animated jSevenAnimation');
              $('.angOne').addClass('animated angOneAnimation');
              $('.angTwo').addClass('animated angTwoAnimation');
              $('.angThree').addClass('animated angThreeAnimation');
              $('.angFour').addClass('animated angFourAnimation');
              $('.angFive').addClass('animated angFiveAnimation');
              $('.angSix').addClass('animated angSixAnimation');
              $('.angSeven').addClass('animated angSevenAnimation');
              $('.photoOne').addClass('animated photoOneAnimation');
              $('.photoTwo').addClass('animated photoTwoAnimation');
              $('.photoThree').addClass('animated photoThreeAnimation');
              $('.photoFour').addClass('animated photoFourAnimation');
              $('.photoFive').addClass('animated photoFiveAnimation');
              $('.photoSix').addClass('animated photoSixAnimation');
              $('.photoSeven').addClass('animated photoSevenAnimation');
              $('.designOne').addClass('animated designOneAnimation');
              $('.designTwo').addClass('animated designTwoAnimation');
              $('.designThree').addClass('animated designThreeAnimation');
              $('.designFour').addClass('animated designFourAnimation');
              $('.designFive').addClass('animated designFiveAnimation');
              $('.designSix').addClass('animated designSixAnimation');
              $('.designSeven').addClass('animated designSevenAnimation');


            // use jQuery to add class of what animation i want to happen
          },
          
          offset:'10%'
           
       });


      

    });
})();