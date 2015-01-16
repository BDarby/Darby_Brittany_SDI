
 /*
Brittany Darby
SDI Campus
1/13/2015
Prompting
 */
//alert("Testing to see if it work");





//Expressions with Conditionals

 var gasMileage= 25;
 var carCapacity= 35;


 if(carCapacity>gasMileage){
  console.log("Yes you can make it without stopping");

 }else{
  console.log("You only have " +carCapacity+ " gallons in your tank, better get gas while you can");
 }


 //Multiple Results

var grade= parseInt(prompt("Enter the number of what grade you got"));

if(grade>90){
 console.log("You have a " +grade+ " which means you earned an A");

}else if(grade>=80){
 console.log("You have a " +grade+ " which means you earned a B");

}else if(grade>= 70){
 console.log("You have a " +grade+ " which means you earned a C");
} else {
  console.log("You have a " +grade+ " which means you get a F");
 }


 //Multiple Conditions

 var movieTime= parseInt(prompt("Enter The movie time"));
 var Age= parseInt(prompt("Enter your age"));
 var results= movieTime+Age;

 if(Age<10){
  console.log("Your ticket will cost $7.00");
 }else if(Age>55){
  console.log("Your ticket will cost $7.00");
 }else{
  console.log("Your ticket will be $12.00");
 }

if(movieTime<3){
  console.log("You will have to pay $12.00 for your ticket");
 } else if( movieTime>5){
 console.log("You will have to $12.00 for your ticket");
}else{
 console.log("You will pay the discount price of $7.00");
}
 console.log("The ticket price is "+results);



















