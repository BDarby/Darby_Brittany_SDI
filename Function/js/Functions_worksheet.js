/*
 *Brittany Darby
 *1-22-2015
 *Functions Worksheet
 */

//alert("testing");


//This is circumference

var radius = 2

function circleCircumference(r) {

    var total = 2*Math.PI*r;  //I used the math function
    return total;
}
 var returntotal= circleCircumference(radius);
console.log("The circumference of the cirlce is "+returntotal.toFixed(1));


//Stung!

    var weight= 192;
    var toKill=8.666;

function beeStungs(w, tK) {
    var beeStings = w*tK;
    return beeStings;
}

var returnBeeStings = beeStungs(weight, toKill);

console.log("It takes "+returnBeeStings.toFixed(1)+" bee stings to kill a human.");


