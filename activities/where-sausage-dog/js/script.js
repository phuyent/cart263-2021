"use strict";

/**
Where's the sausage dog? assignment 1
Huyen Tran Pham
*/

//Declare one constant for the number of animals images,another constant for the number of animals to display
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMAL_DISPLAY = 100;

// Declare one array for the number of animals images,another array for the animal objects
let animalImages = [];
let animals = [];

//Load all the animal images from assets/images
function preload() {
 for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
   let animalImage = loadImage(`assets/images/animal${i}.png`);

   animalImages.push(animalImage);

 }
}


//Create canvas
//Using a loop to create animals with random positions from the animal images array
function setup() {
 createCanvas(windowWidth, windowHeight);

 //Create the animals
 for (let i = 0; i < NUM_ANIMAL_DISPLAY; i++) {
   let x = random(0,width);
   let y = random(0,height);
   let animalImage = random(animalImages);
   let animal = new Animal(x,y,animalImage);
   animals.push(animal);
 }
}


//Create a white background
//
function draw() {
  background(255,255,255);

  for(let i = 0; i<animals.length; i++) {
    animals[i].update();
  }
}
