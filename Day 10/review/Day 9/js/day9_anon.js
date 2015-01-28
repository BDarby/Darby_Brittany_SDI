/*
 *Brittany Darby
 *1-24-2015
 *Anonomus
 */
//alert("testing");

//anonymous function
//widely used in JS and jQuery
//Important in object oriented programming
//can be used interchangably with normal funtions, if done rigt
//very quick and easy and saves memory


/*
 *basic structure of anon functoin
 *var functionName = function(parameters){
    code to run goes here.
 }
 */


//function call BEFORE the normal function is defined
var results2= triArea(6,7);
console.log("Before the functions results2 is "+results2);


//function call BEFORE the anon function is defined
//this does not work  function has to come after anon func
var results4= triAreaAnon(7,8);
console.log("Before");







//creat a NORMAL function for area of a triangle
function triArea(b, h) {
    //area= 1/2 * base * height
    var area= .5*b*h;
    return area;
}

//function Call
var results1= triArea(5,6);
console.log(results1);

// create an anonymous funtion that calc the area of a triangle

var triAreaAnon= function(b,h){
    var area=.5*b*h;
    return area;

}

//function call after the defined of anon function
var results3= triAreaAnon(4,5);
console.log("Results of anonymous function after defined is " +results3);























