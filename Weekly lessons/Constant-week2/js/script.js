"use strict";


//Declare a constant
const PI = 3.14159;

const I_LOVE_TO_LEARN = true;

const MY_FAVORITE_PROGRAMMING_LANGUAGE = `Javasript`;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas (500,500);

}

/**
Description of draw()
*/
function draw() {
 background(0);

for (let i = 0; i<10; i++) {
  push();
  fill(255,circleAlpha);
  ellipse(width/2,height/2, i*50);
  pop;
  } 
}
