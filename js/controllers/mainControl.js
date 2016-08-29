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

            // use jQuery to add class of what animation i want to happen
          },
          
          offset:'10%'
           
       });

      

    });
})();