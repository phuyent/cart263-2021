"use strict";

//Project 2 prototype
//Huyen Tran Pham
//Code source for the room: https://codepen.io/ChrisAros/pen/RZGJWE?editors=1111

//An variable for the title image
let titleImage;
//An variable for the end image
let endImage;
//An variable for changing room,start at the title room
let room = 0;
//Variables for pictures in room one
let roomOneImage1;
let roomOneImage2;
let roomOneImage3;
let roomOneImage4;
let roomOneImage5;
let roomOneImage6;

//Variable for wall and pictures in room two
let wallBackground2;
let roomTwoImage1;
let roomTwoImage2;


//Variables for floor plan buttons
let button0;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;

//Variable for facing wall in the room
let wall = 0;

//Description of preload
function preload() {
  //Preload the title background
  titleImage = loadImage(`assets/images/front-title.png`);

  //Preload the end background
  endImage = loadImage(`assets/images/back-end.png`);

  //Preload all pictures in roomOne
  roomOneImage1 = loadImage(`assets/images/photos-rooms/room1/modern1.JPG`);
  roomOneImage2 = loadImage(`assets/images/photos-rooms/room1/modern2.JPG`);
  roomOneImage3 = loadImage(`assets/images/photos-rooms/room1/modern3.JPG`);
  roomOneImage4 = loadImage(`assets/images/photos-rooms/room1/modern4.JPG`);
  roomOneImage5 = loadImage(`assets/images/photos-rooms/room1/modern5.JPG`);
  roomOneImage6 = loadImage(`assets/images/photos-rooms/room1/modern6.JPG`);

//Preload pictures and music in roomTwo
wallBackground2 = loadImage(`assets/images/photos-rooms/room2/wall.JPG`);
roomTwoImage1 = loadImage(`assets/images/photos-rooms/room2/RE1.png`);
roomTwoImage2 = loadImage(`assets/images/photos-rooms/room2/RE2.png`);


}

//Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

}


//Description of draw()
function draw() {
  switch (room) {
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
    roomFour();
    break;

    case 5:
    roomFive();
    break;

    case 6:
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
  text("Click to move around in the gallery",width*0.56,height*0.65);
  pop();

}
//roomOne()
//
//Create a main wall and use lines to create 3D dimensions
function roomOne() {
  switch (wall) {
    case 0:
    centerWall();
    break;

    case 1:
    leftWall();
    break;

    case 2:
    rightWall();
    break;
  }
  function centerWall() {
    push();
    //Display photos
    imageMode(CORNER);
    image(roomOneImage1,850,100,400,500);
    image(roomOneImage2,400,100,400,500);
    //Main wall
    noFill();
    rectMode(CENTER);
    rect(width/2,height*0.5,950,600);
    //Frames
    rectMode(CORNER);
    strokeWeight(6);
    rect(850,100,400,500);
    rect(400,100,400,500);
    //Side walls
    strokeWeight(1);
    line(325,80,10,0,0,0);
    line(325,680,60,790,1500,10);
    line(1275,80,1500,0,800,1000);
    line(1275,679,1500,750,2000,1500);
    stroke(255);

    pop();

    }
    function leftWall() {
      push();
      //Display photos
      imageMode(CORNER);
      image(roomOneImage3,850,100,400,500);
      image(roomOneImage4,400,100,400,500);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);
      //Frames
      rectMode(CORNER);
      strokeWeight(6);
      rect(850,100,400,500);
      rect(400,100,400,500);
      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);

      pop();
    }
    function rightWall() {
      push();
      //Display photos
      imageMode(CORNER);
      image(roomOneImage5,850,100,400,500);
      image(roomOneImage6,400,100,400,500);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);
      //Frames
      rectMode(CORNER);
      strokeWeight(6);
      rect(850,100,400,500);
      rect(400,100,400,500);
      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);

      pop();
    }
  }


//roomTwo()
//
//Create a main wall and use lines to create 3D dimensions
function roomTwo() {
  push();
  imageMode(CORNER);
  //Display the wall behind
  image(wallBackground2,0,0,windowWidth,windowHeight);
  //Display photos
  image(roomTwoImage1,850,100,400,500);
  image(roomTwoImage2,400,100,400,500);

  //Main wall
  noFill();
  rectMode(CENTER);
  rect(width/2,height*0.5,950,600);
  //Side walls
  line(325,80,10,0,0,0);
  line(325,680,60,790,1500,10);
  line(1275,80,1500,0,800,1000);
  line(1275,679,1500,750,2000,1500);
  stroke(255);
  pop();
}
//roomThree()
//
//Create a main wall and use lines to create 3D dimensions
function roomThree() {
  push();
  //Main wall
  noFill();
  rectMode(CENTER);
  rect(width/2,height*0.5,950,600);
  //Side walls
  line(325,80,10,0,0,0);
  line(325,680,60,790,1500,10);
  line(1275,80,1500,0,800,1000);
  line(1275,679,1500,750,2000,1500);
  stroke(255);
  pop();
}
//roomFour()
//
//Create a main wall and use lines to create 3D dimensions
function roomFour() {
  push();
  //Main wall
  noFill();
  rectMode(CENTER);
  rect(width/2,height*0.5,950,600);
  //Side walls
  line(325,80,10,0,0,0);
  line(325,680,60,790,1500,10);
  line(1275,80,1500,0,800,1000);
  line(1275,679,1500,750,2000,1500);
  stroke(255);
  pop();
}
//roomFive()
//
//Design a 3D box with transparent walls
function roomFive() {
  push();
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(200);
  rotateX(2 * 0.01);
  rotateY(50 * 0.01);
  //Make the color of the room transparent
  let c = color(255, 204, 0, 70);
  fill(c);
  box(300);
  pop();
}

//gameEnd()
//
//End the game when the visiter click on exit room
function end(){
  push();
  resizeCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(endImage,0,0,windowWidth,windowHeight);
  pop();
}


function keyPressed() {
  if (wall === 0 && keyCode === 37) {
    wall = 1;
  }
  else if (wall === 0 && keyCode === 39) {
    wall = 2;
  }
  else if (wall === 1 && keyCode === 37) {
    wall = 2;
  }
  else if (wall === 1 && keyCode === 39) {
    wall = 0;
  }
  else if (wall === 2 && keyCode === 37) {
    wall = 0;
  }
  else if (wall === 2 && keyCode === 39) {
    wall = 1;
  }

}
