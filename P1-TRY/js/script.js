"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


//Start the state of the game at 0
let state = 0;

//Three image titles to open the story of Javaland
var imageTitle;
var imageSubtitle;
var imageSubtitle2;

//A variable for the opening storyline
var openMusic;

//Preloading the pictures and music needed
function preload() {
  //Set the format
  soundFormats('mp3');
  //The opening song
  openMusic = loadSound('assets/sounds/theme-song.mp3');
  //Preload the images for the title storyline
  imageTitle = loadImage('assets/images/title.png');
  imageSubtitle = loadImage('assets/images/subtitle.png');
  imageSubtitle2 = loadImage('assets/images/subtitle2.png');

}
  //Description of setup
  function setup() {
    //Setup the dimension of the game
    createCanvas(windowWidth, windowHeight);
  }


  //Description of draw()
  function draw() {


    //For moving from the title storyline to one room to another room
    //There are a ttoal of 10 rooms to make it out of the building
    switch(state) {
      case 0:
      gameTitle();

      break;

      case 1:
        gameSubtitle1();
      break;

      case 2:
        gameSubtitle2();
      break;

      case 3:
        roomOne();
      break;
    }

  }

  //gameTitile()
  //
  //Set up the beginning of the game
  function gameTitle(){
    //Play music at the beginning only
    openMusic.play();
    noStroke();
    imageMode(CORNER);
    image(imageTitle,0,0,windowWidth,windowHeight);
    fill(255);
    textSize(40);
    text('Press spacebar to start',width/2, height*0.7);
    textFont('Times New Roman',30);
    textStyle(BOLD);
    textAlign(CENTER);
  }

  //gameSubtitle1()
  //
  //Set up the beginning of the game
  function gameSubtitle1(){
    noStroke();
    imageMode(CORNER);
    image(imageSubtitle,0,0,windowWidth,windowHeight);
    fill(255);
    textSize(40);
    text('Press spacebar to continue',width/2, height*0.7);
    textFont('Times New Roman',30);
    textStyle(BOLD);
    textAlign(CENTER);
  }

  //gameSubtitle2()
  //
  //Set up the beginning of the game
  function gameSubtitle2(){
    noStroke();
    imageMode(CORNER);
    image(imageSubtitle2,0,0,windowWidth,windowHeight);
    fill(255);
    textSize(40);
    text('Press spacebar to continue',width/2, height*0.7);
      text('End of storyline',width/2, height*0.9);
    textFont('Times New Roman',30);
    textStyle(BOLD);
    textAlign(CENTER);
  }

  //roomOne()
  //
  //Set up room One
  function roomOne() {
text('ROOM ONE',width/2,height*0.7);
  }


function keyPressed() {
  if (keyCode === 32 ) {
    state = 1;
  }
   if (keyCode === 32) {
    state = 2;
  }
  else if (keyCode === 32 && keyCode === 32 && keyCode === 32) {
    state =3;
  }

  //Press 'enter' to play again from the beginning if the player is at the final state
  if (keyCode === 13 ) {
    state = 0;
  }
}
