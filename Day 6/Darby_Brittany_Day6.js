//alert("JavaScript works!");

/*
 * Brittany Daby
 * SDI 1502
 * Day6
 * 1/17/2015
 */
// Is my steak done

/*
 *120 and under is undercook
 *120-124 - steak is rare
 *125-129 - steak is med-rare
 *130-139 - steak is med
 *140-149 - steak is med-well
 *150-165 - steak is well done
 *> 165 is burnt to a crisp
 */

var steakTemp = 451;


if (steakTemp < 120){
    var steakDone = "Not done";
}else if (steakTemp <=124) {
    steakDone="Rare steak";
}else if (steakTemp <=129) {
    steakDone= "Medium Rare";
}else if (steakTemp<=139) {
    steakDone="medium";
}else if (steakTemp <=149) {
    steakDone= "Medium-well";
}else if (steakTemp<= 165) {
    steakDone="well done";
}else{
    console.log("The steak is " +steakTemp+ ".");
}




//get outside temperature

//var airTemp = parseInt(prompt("What is the temp outside?", "65"));
//
////create the variable for the water temperature
//var waterTemp;
//
////conditional to see what we're doing
//if (airTemp>= 85) {
//    console.log("Let's go to the beach.");
//
//    waterTemp= parseInt(prompt("What's the temperature of the water?", "75"));
//
//
//    if (waterTemp >=75) {
//    console.log("Lets go in the water");
//    }else{
//    console.log("Let's build a sandcastle.");
//    }
//}else{
//    console.log("We're going to the movies")
//}

//round()
//Normal rounding .5 and up

var num1= 9.544444;
console.log(num1);
num1= Math.round(num1);
console.log(num1);


//floor(x)
//returns x, rounded down to the nearest integer/ whole number
var num2= 6.1;
console.log(num2);
num2= Math.floor(num2);
console.log(num2);

// ceil(x)
//returns x rounded up to the next integer/whole number
var num3= 4.888
console.log(num3);
num3=Math.ceil(num3);
console.log(num3);




//random()
//returns a number between 0 and 1
var num4= Math.round(Math.random()*100);
console.log(num4);



//Random number between two numbers
//Math.random() * (max-min) + min
var num5= Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);




var arrOfItems = ["Chips ahoy", "Oreos", "El Fudge", "Thin Mints"];


var randomCookie = Math.floor(Math.random() * (arrOfItems.length));


console.log("My current fav is " +arrOfItems[randomCookie]);

console.log(Math.PI);
console.log(Math.SQRT2);





























