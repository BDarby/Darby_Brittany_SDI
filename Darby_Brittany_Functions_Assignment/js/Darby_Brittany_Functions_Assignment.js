/*
 *Brittany Darby
 *1-27-2015
 *Functions Assignment
 *SDI C201501
 */

//alert("testing");

var width=prompt("Please enter a number for the width");
while (width==="" || isNaN(width)) {
    width=prompt("Please re enter a number for width");
}

var length=prompt("Please enter a number for the length");
while(length==="" || isNaN(length)){
    length=prompt("Please re enter a number for the length");
}

var height=prompt("Please enter a number for the height");
while (height==="" || isNaN(height)) {
    height=prompt("Please re enter a number for height")
}
//above are my prompts


//the is the normal funcntion

function rectPrism(w,l,h) {
    area= 2*width*length+2*height*length+2*height*width;  //this is the formula for a rectangular prism
    return area
}
var rectPrism2=rectPrism (width,length,height);
console.log("You entered "+width+" for the width, "+length+ " for the length and "+height+ " for the height. \nSo the area of your rectangular prism is "+rectPrism2+".");

//I put the 3 in for width, 4 in for length, and 5 in for height
// 2*3*4+2*5*4+2*5*3=94



//this is my anonymous function

var rectPrismAnon= function(width,length,height){
    var area=2*width*length+2*height*length+2*height*width;   ///this is the formula for the area of a retangular prism
    return area;
}
var rectPrism3=rectPrismAnon(width, length,height);

console.log("This anonymous function answer is "+rectPrism3);
//It didn't say in the directions that my anonymous function couldn't be similar to my normal function.

//________________________________________________________________________________________________
//this is the other anon function that is different from the normal function.

var cube= prompt("Please enter a number for the side of a cube"); // this is the volume of a cube
while (cube==="" || isNaN(cube)) {
    cube=prompt("Please re enter that number.");
}

var cubeAnon= function(volumn){
    var vol= Math.pow (volumn,3);
    return vol;
}
var cube2= cubeAnon(cube);
console.log("This is the other anon function. \nYou enter the number " +cube+ ", the volumn of your cube is "+cube2);// my concatenation
//I entered 4 and got 64, which would be the right answer.
















