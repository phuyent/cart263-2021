"use strict";

//Project 2 prototype
//Huyen Tran Pham
//Code source for the room: https://codepen.io/ChrisAros/pen/RZGJWE?editors=1111
//An aray containing the images in the room
var content = [{
    image:
      "assets/images/scene1.JPG",
    date: "14th June 2016",
    title: "Willy-Wonka style elevators proposed for London ",
    topics: "Architecture &amp; Interiors",
    teaser:
      "Elevators that transport Londoners out of the subway up to their office blocks using upward, downward and sideways movement. \r\n"
  },

    {
      image:
        "assets/images/scene2.JPG",
      date: "14th June 2016",
      title: "Willy-Wonka style elevators proposed for London ",
      topics: "Architecture &amp; Interiors",
      teaser:
        "Elevators that transport Londoners out of the subway up to their office blocks using upward, downward and sideways movement. \r\n"
    },
]

$('.room__content').each(function(i,el){
  var el = $(el);
  var img = '<img src="'+content[i].image+'" />';
  el.append(img);
});

function preload() {

}

function setup() {

}

function draw() {

}
