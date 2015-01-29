/*
 *Brittany Darby
 *1-24-2015
 *Multiple
 */
//alert("bruh");

//prompt the users for a width and a height
//calculate both the area and perimeter of a rectangle

//First set up the area of a ractangle function
function areaRect(w,h) {
    //area of rect id width *height
    var area= w*h;
    return area;
}


//setup perimeter function
function periRect(w,h){
    //perimether of a rectangle is 2*width+2*height
    var perimeter=2*w+2*h;
    //return the perimter
    return perimeter;

    //above are the functions
    
}
//prompt the user for with and height
var width=prompt("Please enter the width of your rectangle");
//validate them
while (width==="" || isNaN(width)) {
    //reprompt the user
    width=prompt("Please don't leave blank and only use numbers. \nWhat is the width");
}

var height= prompt("Please enter the height");
//validate
while (height==="" || isNaN(height)) {
    height=prompt("Please don't leave blank and only type in numbers;")
}

//function call both function...ONE at a time

var resultsArea=areaRect(width, height);
var resultsPeri=periRect(width, height);
//report out to the user
console.log("The area of the rectangle is "+resultsArea+" and the perimeter is "+resultsPeri);




//combine function to calculate the perimeter an the area
function combinedRect(w,h) {
    //calc the area first
    var area = w*h;
    //calc the perimter
    var peri=2*w+2*h;
    //return BOTH values
    
    return[area, peri];
}

//function call
var combinedResults= combinedRect(width, height);
console.log(combinedResults[0]);// if don't put in brackets[], it will put them together

//to get more then one output, must use arrays















