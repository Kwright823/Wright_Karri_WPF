//Karri Wright Conditionals Industry

//will the sign fit on the sign board?
//display board measurements
var width = prompt("Lets find out if the sign will fit on the display board n/ What is the width of the display board?");
var length = prompt("What is the length of the display board?");
//sign measurements
var signWidth = prompt("What is the width of the sign?");
var signLength = prompt("What is the length of the sign?");
//area of each
var boardArea = width * length;

var signArea = signWidth * signLength;

//if else

if((signArea - 5) < boardArea){
    console.log("The sign will fit on the display board!");
    alert("The sign will fit on the display board!")
}else if((signArea - 5) >= boardArea){
    console.log("The sign will not fit, please try a different sign.");
    alert("The sign will not fit, please try a different sign.")
}


