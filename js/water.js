// JavaScript File
/* global $ */


function myMove() {
  var elem = document.getElementById("animate"); 
  var height= elem.style.height;
  var id = setInterval(frame, 5);
  function frame() {
    if (height == 350) {
      clearInterval(id);
    } else {
      height++; 
      elem.style.height = height + "px"; 
      
    }
  }}
  
  