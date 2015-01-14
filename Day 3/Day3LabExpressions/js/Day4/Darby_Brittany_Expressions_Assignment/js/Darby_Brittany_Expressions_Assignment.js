/*
Brittany Darby
SDI sec.1 C201501
1/13/2015
 */
var alert=("Testing to see if this works"); //this is the alert to see if everything is working


// Finding the Perimeter of a rectangle


var length= parseInt(prompt("Please enter one number 6,4,9 for the length"));
var width= parseInt(prompt("Please enter one number 6 4,9 for the width"));

var rectangle= [length,width];//this is my array of numbers you can choose from. I chose rectangle.


var total= (2* (rectangle[length] + rectangle[width])); // this is the formula to find the perimeter of a rectangle

console.log("The length of the rectangle is " +length+ " and the width of the rectangle is " +width+ " thus the total perimeter of the rectangle is " +total);
// above is my concatenation and answer.

var numberAdd= parseInt(prompt("Pick a number 1-10 to add on the rectangle for fun!")); // this is my 3rd prompt.

total2= (2*(length+width))+numberAdd; //the new equation for the 3rd prompt
console.log("You added the number " +numberAdd+ " so the new total is " +total2);// new concatenation for the 3rd prompt