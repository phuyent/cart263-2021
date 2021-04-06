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
  {
    image:
      "https://designindaba.com/sites/default/files/node/news/21910/2-flood-house-2016.photography-brotherton-lock.jpg",
    date: "26th May 2016",
    title: "Flood House explores a new typology of responsive architecture ",
    topics: "Architecture &amp; Interiors",
    teaser:
      "Matthew Butcher\u2019s Flood House looks at how future dwellings should be adapted to co-exist with their native environments."
  },
  {
    image:
      "https://designindaba.com/sites/default/files/node/video/21953/722%20-%20481%20BC%20%5B4%5D.jpeg",
    date: "6th June 2016",
    title: "New mural by Faith47 in Manchester urges for LGBT rights",
    topics: "African Design, Design Activism",
    teaser:
      "New work by Faith47 in Manchester, UK pays homage to human intimacy as well as asserting support for the LGBT rights. "
  },
  {
    image:
      "https://designindaba.com/sites/default/files/node/news/22068/american-dream.jpg",
    date: "5th July 2016",
    title: "Public art melts away in political protest ",
    topics: "Design Activism, Urban &amp; Landscape Design",
    teaser:
      "Created by American design duo LigoranoReese, these ice sculptures show the disintegration of the American Dream. "
  },
  {
    image:
      "https://designindaba.com/sites/default/files/node/news/22142/lagos-01makoko-waterfront1200.jpg",
    date: "21st July 2016",
    title: "Artist imagines colossal vertical slums in Lagos ",
    topics: "African Design, Urban &amp; Landscape Design",
    teaser:
      "Are slums shaping the face of Africa? Nigerian-born artist Lekan Jeyifo conceptualises the future of slums in Lagos. \r\n"
  },
  {
    image:
      "https://designindaba.com/sites/default/files/node/news/22022/cars.jpg",
    date: "20th June 2016",
    title: "Why London&#039;s cars are like America&#039;s guns",
    topics: "Design Activism, Design Thinking",
    teaser:
      "Issue 2 of Do The Green Thing, \"Why London's cars are like America's guns\", is a call to reduce the number of cars and protect public space and fresh air."
  },]

$('.room__content').each(function(i,el){
  var el = $(el);
  var img = '<img src="'+content[i].image+'" />';
  el.append(img);
})
function preload() {

}


function setup() {

}

function draw() {

}
