
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

var grade= (parseInt(prompt("Enter the number of what grade you got")));

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

