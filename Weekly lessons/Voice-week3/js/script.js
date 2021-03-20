"use strict";


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

  if (annyang) {
    let commands = {
      'Hello': function () {
        alert(`Xin chao`);
      },
      'Goodbye': function () {
        alert(`Tam biet`);
      }
    };

    annyang.addCommands(commands);
    annyang.start();
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);
}
