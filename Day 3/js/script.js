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

// Boolean
// kind of light switch - either on or off
// true or false - NOT "true" or "false"

var yes = true;

var no = false;

//This is not a boolean
var wrong = "true";

// Order of Operation
// PEMDAS - Pleas Excuse My Dear Aunt Sally
//Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

//Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//average - add them and divide how may there are
var average = (quiz1 + quiz2 + quiz3)/3;
console.log(average);

//Do NOT overuse parenthesis
// var parimeter = (length*2 + (width *2));


//Concatenation - combining text strings
// use the + plus sign for the text and not just for numbers

var firstName = "Kermit";
var lastName = "The Frog";

//Concatenate the first and last name into a full name
var fullname = firstName +" "+ lastName;
console.log(fullname);

console.log(fullname + " is my favorite muppet!");

var d = "6";
var e = 7;

var combine = d+e;
console.log(combine);


//text string of "6" is not the same as 6

//constant values are always UPPERCASE
var PI = 3.14;

//Round to a decimal place
//  toFixed(3) - # is how many decimal places we want

var num = 5.7249580249;
num = num.toFixed(2);
console.log(num);






