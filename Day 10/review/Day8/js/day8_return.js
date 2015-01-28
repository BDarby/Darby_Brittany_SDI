/*
 *Brittany Darby
 *1-22-2015
 *Returns
 */
//alert("Testing");

//create a function to calcualate the area of a rectangle
function calcArea(w,h) {
    //calcArea
    var area=w*h;
    //console.log(area);
    //return the area of value to the main code
    //does not return the variable itself
    return area;
}
//function call

//create a variable that will catch the return value
var returnArea = calcArea(77,9);//this is considered a catch

//console.log(area);
//^^This doesn't work
console.log(returnArea);



//create a function to calculate the area of a circle
//area =pi*r*r
function circleArea(radius) {
    var area=Math.PI*radius*radius;
    //return this area
    return area;
}

//function call
 var result = circleArea(6);
 console.log("The area of the circle is "+result);
 
 //had to circles with the same radius. what is the total area?
 var twoArea=result*2;
 console.log("The area of both circles is "+twoArea.toFixed(2));
 
 
 var result2= circleArea(3);
 console.log("The area of the circle with a radius of 3 is "+result2);
 
 
 
 //prompt user for a radius. Calcarea
 var userRad=prompt("please type in a radius:");
 
 //validate prompt
 while (isNan(userRad) || userRad==="") {
    userRad=prompt("Please only use numbers. \nType in a radius:");
 }
 
 
 //parseInt the variable
 userRad=parseInt(userRad);
 
 //create a variable to catch the results!
 var userResults=cirl(userRad);
 
 
 console.log("The area of your circle with a radius" +userRad+ " is " +userResults);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 