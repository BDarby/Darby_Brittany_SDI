/*
 *Brittany Darby
 *1-24-2015
 *Functions Assignment
 */

//alert("testing");

var width=prompt("Please enter a number for the width");
while (width==="" || isNaN(width)) {
    width=prompt("Please re enter a number for width");
}
//console.log(width);


var length=prompt("Please enter a number for the length");
while(length==="" || isNaN(length)){
    length=prompt("Please re enter a number for the length");
}

var height=prompt("Please enter a number for the height");
while (height==="" || isNaN(height)) {
    height=prompt("Please re enter a number for height")
}

//the is the normal funcntion

function rectPrism(w,l,h) {
    area= 2*width*length+2*height*length+2*height*width;
    return area
}
var rectPrism2=rectPrism (width,length,height);
console.log("You entered "+width+" for the width, "+length+ " for the length and "+height+ " for the height. \nSo the area of your rectangular prism is. "+rectPrism2);

//I put the 3 in for width, 4 in for length, and 5 in for height
// 2*3*4+2*5*4+2*5*3=94



//this is my anonymous function

var rectPrismAnon= function(width,length,height){
    var area=2*width*length+2*height*length+2*height*width;
    return area;
}
var rectPrism3=rectPrismAnon(width, length,height);

console.log("This anonymous function answer is "+rectPrism3);


