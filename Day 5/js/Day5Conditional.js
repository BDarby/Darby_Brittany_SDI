
 /*
Brittany Darby
SDI Campus
1/15/2015
Conditionals
 */
//alert("Testing to see if it work");

 //Basic conditional statement

 //create a boolean variable to test
 var oldEnough=false;

 //If the child is old enough, then print to the console you can ride!

 /*
 Basic structure of if, else statement

 if(condition to test) {

 the code to run if the
 condition is true
 } else{
 code to run if the condition is false
 }

  */

 if(oldEnough){
  //code inside of curly brackets will run if true
  //code will be skip if the test is false
  console.log("You can ride the roller coaster");
 }
 console.log("What comes after the if statement");

 //true in the inside, false in the outside


 //relational expression

 //If the kid is over 48" tall, then he can ride
 var kidHeight=47;

 //create variable for miniumum height
 var minHeight= 48;

 //create a variable for a shoe lift
 var shoeLift= 2;
 //Is the child tall enough with the shoe lift?

 if(kidHeight+ shoeLift > minHeight){
  console.log("You are tall enough to ride!");
 } else{
  //this code will run if the test is false.
  console.log("Sorry you are too short!");


 }
//what ride can the kid go on, based in his height?
 //if the kid is 48 and up, then space mountain
 //if 40+ then Buzz Lightyear ride
 //Anything shorter, then Winnie the Pooh

 var childHeight = 42;
 if(childHeight>=48){

  console.log("You can ride space mountain, buzz lightyear and winnie the pooh!");

 } else if(childHeight>=40){
  console.log("You can ride Buzz Lightyear and winnie the pooh!");

 } else{
  console.log("You can ride winnie the pooh");
 }






/*
If, else if, else statement

if(conditon1 to test) {

code to run if conditon1 is true

} else if (condition2 is true){

condition2 will only be tested if condition1 false
code to run if condition2 is true

} else {

code to run if condition1 & condition are false
 */













