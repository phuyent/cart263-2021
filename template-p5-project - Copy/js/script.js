"use strict";

/**

https://codepen.io/tr-n-phm/pen/bGgPbKo

*/
function roomFour() {
  $(document).ready(function(){
    var $prev = $('.previous');
    var $next = $('.next');
    var mode = "auto";
    $prev.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showPreviousImage();
      }
    });
    $next.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showNextImage();

      }
    });

    setInterval(function(){
      if(mode==="auto"){
        showNextImage();
      }
    },3000);

    function showNextImage(){
        var $actEl = $('.active');
        var $nextEl = $actEl.next('.slide');
        if($nextEl.length){
          $actEl.removeClass('active');
          $nextEl.addClass('active');
        }else{
          $actEl.removeClass('active');
          $('.slide:first-child').addClass('active');
        }
    }

    function showPreviousImage(){
        var $actEl = $('.active');
        var $prevEl = $actEl.prev('.slide');
        if($prevEl.length){
          $actEl.removeClass('active');
          $prevEl.addClass('active');
        }else{
          $actEl.removeClass('active');
          $('.slide.last').addClass('active');
        }
    }
  });
}

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {

}
