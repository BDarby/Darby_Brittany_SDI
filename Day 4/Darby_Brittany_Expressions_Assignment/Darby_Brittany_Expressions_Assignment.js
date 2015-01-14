/*
Brittany Darby
SDI sec.1 C201501
1/13/2015
 */
 //alert=("Testing to see if this works"); //this is the alert to see if everything is working


// Finding the Area of a Trapezoid


var base1= parseInt(prompt("Please enter a number for the first base of the Trapezoid"));
var base2= parseInt(prompt("Please enter a number for the second base of the trapezoid"));
var height= parseInt(prompt("Please enter a number for the height"));

var trapezoid= [base1,base2,height];//this is my array for the trapezoid


var total= ((trapezoid[base1]) + (trapezoid[base2])/2 * (trapezoid[height]) ); // this is the formula to find the area of a trapezoid, I also put my arrays in there too

console.log("For the first base you chose the number "+base1+ ", for the second base you chose the number " +base2+ ", and for the height you picked " +height+ ", when these numbers are input in the formula for the area of a trapezoid, the answer is " +total);

