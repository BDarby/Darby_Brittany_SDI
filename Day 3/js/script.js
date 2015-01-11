/*
Brittany Darby
1/10/2015
Day 3 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see if this is connected");

//Console.log - allows programmers to see information
console.log("This is the console.");


//Declare a variable
// use the keyword of var
var whatever1;    //Declaration of a variable
whatever1 = 42;   // Definition of a variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
 a = a+3;
console.log(a);

var b;
b= a+3;
console.log(b);
console.log(a);

//Find our age
var yearBorn = 1993;

//age is calculated by current year minus year born
var currentYear = 2015

var age = currentYear - yearBorn - 1;
console.log(age);

//Math
//+, -, *, /,

//find area of triangle
// 1/2 * base *height
var base = 8;
var height = 10;

var areaTrangle = 1/2 * base * height;
console.log(areaTrangle);

// modulo - %
//Gives remainder
var remainder = 32%10
console.log (remainder);

//Find if even or odd
var evenOrgOdd = 67%2;
console.log(evenOrgOdd);




//Assignment Operators
/*
= Assignment
 ++ Adds 1 to the variable
 -- subtracts from the variable
+-  Addition assignment
+= number addtion assignment
-= number minus assignment
/= number division assigment
*= number mutiply assignment
 */

var counter = 1 ;
counter++;   //counter = counter 1;
console.log(counter);

counter--; //counter + counter - 1;
console.log(counter);

counter +=3;  //counter = counter + 3;
console.log (counter);

counter -= 2;  // counter = counter -2
console.log (counter);

counter /= 2;  //counter = counter /2
console.log(counter);

counter *=4;  //counter = counter *4
console.log(counter);

//String - is any text variable
//  "is used at the beginning and the end of the string"
// used to distinguished between variable name and random text
// single quotes ' double quotes " are bot use BUT must match

var kermit = "light green";

var frogName = "Kermit";

console.log(frogName);

//Double quote or single quote?
// can use an escaping character \backslash in front od the apostrophe

var phase = 'I don\'t know'
console.log(phase);

// Multi-lines by using \n - new line characters
var phase2 = "I don't know! \nYou never know;"
console.log(phase2);





