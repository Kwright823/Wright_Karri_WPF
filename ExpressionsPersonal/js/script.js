//Karri Wright October 9, 2014 Expressions_Personal

//How much money can I save before my friend's wedding next year?

var saveTotal2 = prompt("How much money do you have available to save per week?");
var timeFrame1 = prompt("How many weeks until the wedding?");

var saveTotal = prompt("How much money do you have available to save per month?");
var timeFrame2 = prompt("How many months until the wedding?");


var totalWeek = saveTotal2 * timeFrame1;
var totalMonth = saveTotal * timeFrame2;
console.log(totalWeek); //print it out to console
console.log(totalMonth);


alert("If you save" + " " + "$" +saveTotal2 + " " + "a week, you will have" +
" " + "$" + totalWeek + " " + "available to spend." +
" " + "Or if you save" + " " + "$" + saveTotal + " " + "a month, you will have" +
" " + "$" + totalMonth + " " + "available to spend.");





