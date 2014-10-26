/**
 * Created by karriwright on 10/23/14.
 */
//Functions Wacky Karri Wright October 2014


//What should I make my kids for lunch?

var kid1 = prompt("Is this for Ava or JJ?");

if(kid1 === "Ava"){
    console.log("Make Ava a PB&J or Nutella Sandwich.");
    alert("Make Ava a PB&J or Nutella Sandwich.")
}else{
    console.log("Make JJ a bologna or PB&J sandwich");
    alert("Make JJ a bologna or PB&J sandwich")
}

var bread = prompt("Do you have bread?");

if(bread === "yes"){
    console.log("Make a sandwich.")
}else{
    console.log("Use a tortilla.")
}
