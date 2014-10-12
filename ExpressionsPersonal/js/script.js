//Karri Wright October 9, 2014 Expressions_Personal

//How much money can I save before my friend's wedding next year?

var saveTotal = prompt("How much do you have available to save per month?");
var timeFrame = prompt("How many months until the wedding?");
var totalPerMonth = timeFrame * saveTotal;
console.log(totalPerMonth); //print it out to console

var result = "The total you need to save per month is $" + totalPerMonth;
alert(result);




