"use strict";


/**
Description of setup
*/
function setup() {
createCanvas(500,500);

}


/**
Description of draw()
*/
function draw() {
background(0);
}

function mousePressed() {
  responsiveVoice.speak("I am going to crawl out of the sewer grate in your basement", "UK English Male", {
    pitch : 0.5,
    rate: 0.5,
    volume : 1
  });
}
