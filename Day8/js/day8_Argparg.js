/*
 *Brittany Darby
 *1-22-2015
 *
 */

//alert("Testing");

//Arguements-goes in the function call
//parameters-goes in the function definition
//must have the same number of arguements and perameters...usually

//create a function to calculate the are of a rectangle

function calcArea(w,h) {//paramters go here
    //var width=10;
    //var height=20;
    //var area=width*height;
    
    
    
    var area=w*h;
    console.log("The area is "+area);
}
//function call
calcArea(10,20);
calcArea(5,4);

//calculate dog years, and get out dog years
//put in human years
function dogYears(humanAge) { //humanAge parameter
//dogyear= human*7
var dogAge=humanAge*7
console.log("Dog age is " +dogAge);
    
}

//function call with arguements
dogYears(21);

var userAge=prompt("How old are you?");
dogYears(Number(userAge));