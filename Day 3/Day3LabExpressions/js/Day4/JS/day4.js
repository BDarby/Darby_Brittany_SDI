/*
Brittany Darby
SDI Campus
1/13/2015
Day 4 In class assignment
 Arrays
 */

//alert ("testing");

//Create a basic array
var avengersNames= ["Thor", "Black Widow", "Iron Man"];

//Print it out to the console
console.log(avengersNames);

//Print out one specific item
console.log(avengersNames[1]);

//Switch a team member - iron man for spiderman
avengersNames[2]= "spiderman";

console.log(avengersNames);

//add a team member
avengersNames[3]= "Storm";

 //print out rooster
console.log(avengersNames);

//Use a variable as an index number
var num= 2;
console.log(avengersNames[num]);

// Length property
// Dot Syntax - fancy for use a period
console.log(avengersNames.length);

// Last index number is the length - 1

// next open space?

//recruit a new team member
avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);



