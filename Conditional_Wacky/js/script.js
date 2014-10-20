//Karri Wright Conditionals Wacky

//What movie would you like to watch today?

var movie = prompt("Let us suggest a movie for you to watch. \n" +
    "What are you in the mood for today? \n" +
    "Action, romcom, bromance, or musical?");

if(movie === "action"){
    console.log("You should watch Gladiator");
    alert("You should watch Gladiator")

}else if(movie === "romcom"){
    console.log("You should watch What to Expect When Expecting");
    alert("You should watch What to Expect When Expecting")

}else if(movie === "bromance"){
    console.log("You should watch This is the End");
    alert("You should watch This is the End")

}else if(movie === "musical"){
    console.log("You should watch Labyrinth");
    alert("You should watch Labyrinth")
}