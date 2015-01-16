
 /*
Brittany Darby
SDI Campus
1/15/2015
Prompting
 */
//alert("Testing to see if it work");





//Expressions with Conditionals

 var gasMileage= 25;
 var carCapacity= 35;
 var gaugePercent= 33.3;

 var gaugeDecimal = gaugePercent / 100;
 var totalGasRemaining = gaugeDecimal * carCapacity;



 if(totalGasRemaining>gasMileage){
  console.log("Yes you can make it without stopping");

 }else{
  console.log("You only have " +totalGasRemaining+ " gallons in your tank, better get gas while you can");
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


 if(Age<10){
  console.log("Your ticket will cost $7.00");
 }else if(Age>55){
  console.log("Your ticket will cost $7.00");
 }else if(movieTime<3){
  console.log("Your ticket will cost $12.00");
 }else if(movieTime>5){
  console.log("Your ticket will be $12.00");
 }else{
  console.log("Your ticket will be $7.00");
 }



















