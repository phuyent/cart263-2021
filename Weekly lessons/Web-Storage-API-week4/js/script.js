"use strict";

let userData = {
  name: `stranger`
};

function setup() {
  createCanvas(windowWidth, windowHeight);

//Load the data in web-storage-ex-personalization, convert it into JV file
  let data = JSON.parse(localStorage.getItem(`web-storage-example-personalization`));
  //Check if data is null
  if (data !== null) {
    userData.name = data.name;
  }
  else{
    //Ask user to input info
    userData.name = prompt(`What's ya name?`);
    //Store info, convert it to string
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }
}

//Display the info
function draw() {
  background(255);

  push();
  textSize(64);
  textAlign(CENTER);
  text(`Hi, ${userData.name}~`, width/2, height/2);
  pop();

}
