// Karri Wright Oct. 9, 2014 Expression Worksheet

//Dog Years
//Calculate Sparky's age in human years

var dogAge = 7;
var humAge = 5;

//multiply the dog age 7 by human age 5.

var actAge = dogAge * humAge;
//print out the total of how old Sparky is in dog years.
console.log("Sparky is" + " " + humAge + " " + "human years old which is" + " " + actAge + " " + "in dog years");


//Slice of Pie part 1
//How many slices of pizza will each partygoer have

var slicePerPizza = 9;
var partyGoers = 6;
var pizzasOrdered = 3;

//total how many slices there are in all by multiplying 9 and 3 then dividing by amount of partygoers 6

var slicePerPerson = slicePerPizza * pizzasOrdered / partyGoers;
console.log("Each person ate" + " " + slicePerPerson + " " + "slices of pizza at the party.");


//Slice of Pie part 2
//How many slices will Sparky get?

var partyPeople = 10
var pizzas = 4
var slices = 8
//I am not sure how to make this math work to show how many Sparky will get
var totalSlices = slices * pizzas / partyPeople;
var sparky = totalSlices - 3;
console.log("Sparky got" + " " + sparky + " " + "slices of pizza");


//Average Shopping Bill

var weekGrocery = [230, 300, 245, 280, 350]; //array index 0,1,2,3,4
//I want to total each week then divide by 5 weeks
var monthTotal = 230+300+245+280+350;//total of all 5 weeks

console.log("You have spent a total of" + " " + "$" + monthTotal + " " +
    "on groceries over 5 weeks. That is an average of" + " " + weekGrocery[(0+1+2+3+4)/5] +
    " " + "per week.");



//Discounts

var origPrice = 100.00
var disCount = 20
var salesTax = 6
var description = "t-shirt"

var withTax = 100.00 * .20 * .06;
var withoutTax = 100.00 * .20;

console.log("Your" + " " + description + " " +
"was originally" + " " + origPrice + ", but after a" +
disCount + "% discount, it is now $" + withoutTax + ", without tax, and $" +
withTax + " " + "with tax.");





