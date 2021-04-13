"use strict";

//Project 2 prototype
//Huyen Tran Pham
//Code source for the room: https://codepen.io/ChrisAros/pen/RZGJWE?editors=1111
//An aray containing the images in the room
var content = [
  {
      image:
        "https://designindaba.com/sites/default/files/node/news/22116/martian-soil.png",
      date: "15th July 2016",
      title:
        "Take me to your feeder! Scientists successfully farm edible crops in Martian soil",
      topics: "Food Design",
      teaser:
        "Scientists at Wageningen University have successfully grown edible cereals and vegetables including peas, radishes, tomatoes and rye in Martian soil."
    },
    {
      image:
        "https://designindaba.com/sites/default/files/node/news/21986/innovative-elevator-system-multi-c-thyssenkrupp.jpg",
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
