//Conditionals_Worksheet Karri Wright

//Celsius to Fahrenheit converter
var unit = prompt("Please enter the unit of degrees.");
var temp = prompt("Are we converting to Celsius or to Fahrenheit?" +
    "\n C for Celsius. F for Fahrenheit.");

var cels = unit - 32 * .5556;
var fahr = unit * 9 / 5 + 32;

if(temp = "C"){
    console.log("The temperature is " + cels + " degrees Celsius.");
    alert("The temperature is " + cels + " degrees Celsius.")

}else if(temp = "F"){
    console.log("The temperature is " + fahr + " degrees Fahrenheit.");
    alert("The temperature is " + fahr + " degrees Fahrenheit.")
}