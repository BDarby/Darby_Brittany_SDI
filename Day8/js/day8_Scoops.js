/*
 *Brittany Darby
 *1-22-2015
 *scopes
 */

//alert("this shit work or nah");

//variable scope
//variable inside & outside ofa functions

//try not to use the same variable
//HOWEVER in large files this is going to be impossible

//variable created insideof those functions

//created a variable for width in our MAIN code
var width=5; //scope outside of the function-main code

//create a function that calculates the perimeter or a rectangle
function calcPeri(){
    var width=10; //scoped to the function calcPeri
    console.log("Inside of the function the value of width is "+width);
    var height=20
    var perimter= width*2+height*2;
    console.log("Inside the function the perimeter is "+perimter);
}
console.log("Before call "+width);
calcPeri();
console.log("An after call "+width);
console.log("After call the perimeter is "+perimeter);