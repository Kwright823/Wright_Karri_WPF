//Karri Wright Conditionals Industry

//will the sign fit on the sign board?

var width = prompt("What is the width of the board?");
var length = prompt("What is the length of the board?");

var signWidth = prompt("What is the width of the sign?");
var signLength = prompt("What is the length of the sign?");

var boardArea = width * length;

var signArea = signWidth * signLength;

//if else

if((signArea - 5) < boardArea){
    console.log("The sign will fit on the display board!");
    alert("The sign will fit on the display board!")
}else if((signArea - 5) >= boardArea){
    console.log("The sign will not fit, please try a different sign.")
}


