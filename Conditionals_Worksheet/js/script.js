//Conditionals_Worksheet Karri Wright

//Celsius to Fahrenheit converter
/*var unit = prompt("Please enter the unit of degrees.");
console.log(unit);

var temp = prompt("Are we converting to Celsius or to Fahrenheit?" +
    "\n C for Celsius. F for Fahrenheit.");
console.log(temp);

var cels = (unit - 32) * .5556;
var fahr = unit * 9 / 5 + 32;

if(temp === "C"){
    console.log("The temperature is " + cels + " degrees Celsius.");
    alert("The temperature is " + cels + " degrees Celsius.")
}else if(temp === "F"){
    console.log("The temperature is " + fahr + " degrees Fahrenheit.");
    alert("The temperature is " + fahr + " degrees Fahrenheit.")
}
/*

 */
//Last Chance for Gas!
//MPG, gauge reading of gas in tank (in %), tank capacity (gal)

/*var mpg = prompt("Please enter your car's MPG.");
var gasReading = prompt("How much is currently in your gas tank (in %).");
var tankCap = prompt("What is the capacity of your tank?");

var miles = (tankCap * mpg)* gasReading;
console.log(miles);

if(miles > 200){
    console.log("Yes, you can make it without stopping for gas!");
    alert("Yes, you can make it without stopping for gas!")
}else if(miles < 200){
    console.log("You only have " + miles + " miles left in your gas tank, better get gas now while you can.");
    alert("You only have " + miles + " miles left in your gas tank, better get gas now while you can.")
}

/*

 */
//Group 2
//Check the Login

/*var userName = "Fullsail987";
var passWord = "Passw0rd"; //worst password EVER

var userEnter = prompt("Please enter your username.");
var passEnter = prompt("Please enter your password.");

if(userEnter === userName){
    console.log("Username is a match.");

}if(passEnter === passWord){
    console.log("Password is a match.");
    alert("Welcome, Fullsail987!")

}else if(userEnter != userName){
    console.log("User not found!");
    alert("User not found. Try again.")

}else if(passEnter != passWord){
    console.log("Password does not match our records.");
    alert("Password does not match our records.")
}
/*

 */
//Group 3
//Movie Ticket Price

var RegPrice = 12;
var seniorChild = 7;
var matinee = 7;

var time = prompt("What time does the movie start?");
var age = prompt("What is your age?");

if(age >= 55){
    console.log(age);
    alert("The ticket price is $7")

}if(age <= 10){
    console.log(age);
    alert("The ticket price is $7")

}if(time === 3){
    console.log(time);
    alert("The ticket price is $7")

}if(time === 4){
    console.log(time);
    alert("The ticket price is $7")

}if(time === 5){
    console.log(time);
    alert("The ticket price is $7")

}else if(age){
    console.log(age);
    alert("The ticket price is $12")

}else if(time){
    console.log(time)
    alert("The ticket price is $12")

}