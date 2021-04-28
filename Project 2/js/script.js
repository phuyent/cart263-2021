"use strict";

//Project 2 : The Coded Multidisciplinary Gallery aka CMG
//Huyen Tran Pham
//Code source for the room: https://codepen.io/ChrisAros/pen/RZGJWE?editors=1111

//An variable for the title image
let titleImage;
//An variable for the end image
let endImage;
//Start the gallery at state 0 which is the title
let state = 0;


//Description of preload
function preload() {
//Preload the title background
titleImage = loadImage(`assets/images/front-title.png`);

//Preload the end background
endImage = loadImage(`assets/images/back-end.png`);
}

//Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

}


//Description of draw()
function draw() {


switch(state) {
    case 0:
    title();
    break;

    case 1:
    roomOne();
    break;

    case 2:
    roomTwo();
    break;

    case 3:
    roomThree();
    break;

    case 4:
    end();
    break;
  }
}


//title()
//
//Design the front
function title() {
  push();
  imageMode(CORNER);
  image(titleImage,0,0,windowWidth,windowHeight);
  textFont("Times New Roman");
  textSize(40);
  text("THE CODED \nMULTIDISCIPLINARY GALLERY",width*0.56,height*0.3);
  textSize(20);
  fill(0);
  text("Huyen Tran Pham",width*0.56,height*0.6);
  text("Click on the floorplan to move around in the gallery",width*0.56,height*0.65);
  pop();

}


//roomOne()
//
//Design room with modern photography works
function roomOne() {
  //An aray containing the images in the room
  let content = [
    {
      image:
        "assets/images/scene1.JPG",
    },
    {
      image:
        "assets/images/scene2.JPG",
    },
  ]

}


//roomTwo()
//
//Design room two with a Renaissance theme
function roomTwo() {

}

//roomOne()
//
//Design room three with yellow light covering the whole room
function roomThree() {

}


//gameEnd()
//
//End the game when the visiter click on exit room
function end(){
  push();
  imageMode(CORNER);
  image(endImage,0,0,windowWidth,windowHeight);
  pop();
}
