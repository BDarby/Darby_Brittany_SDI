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


//Pick  oranges and track how many we have

var orangeBins= [12, 20, 14];

// How many oranges did we pick in total
var total= orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log("The total number of orange bins collected is " +total);


//Advance Array

var fruitBowl= ["Orange", "tomato", "Strawberry"];

// Property - Length - how many items are in the array
console.log(fruitBowl.length + " items in out fruit bowl");

// Method of Arrays

// Push - inserts an item at the end of our array
// arrayName.push(item to push)

fruitBowl.push("apple");

//see fruitbowl
console.log(fruitBowl);

//push another fruit
fruitBowl.push("kiwi");
console.log(fruitBowl);

//pop - takes off last item in an array AND returns it
// arrayName.pop()
// Create a variable to catch the return value
var caught= fruitBowl.pop();
console.log(fruitBowl);
console.log (caught);
var caught2= fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

//splice - used to removing or adding items into an existing before
// arrayName.splice(position to start from, number of items to remove, items to put in);
fruitBowl.splice(2,0, "Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"kiwi");
console.log(fruitBowl);

//adding more items
fruitBowl.splice(1,0, "tangerines", "babboa", "grapes");
console.log(fruitBowl);











