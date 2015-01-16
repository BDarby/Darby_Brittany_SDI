
 /*
Brittany Darby
SDI Campus
1/13/2015
Ternary
 */
//alert("Testing to see if it work");

 //if your gpa is greater than 2.0 you can graduate!

 // (condition to test) ? true code: false code;

 //Normal if else statement

var gPA= 3.8;

 if(gPA>2.0){
  console.log ("congrats you can graduate");
 } else {
  console.log("sorry your gpa is too low");
 }
//ternary way
 (gPA>2.0) ? console.log("congrats you can graduate") : console.log("sorry your gpa is too low");







 //Decide what book a kid will read
 var age= 16;
 var book;

 //if the child is under 10, they read green eggs and ham
 //other wise they can read the time machine.
 // if the kid is older then 15, then they read twilight

 book= (age<10) ? "Green eggs and Ham" : "The Time Machine";

 var book2= (age<10) ? "Green eggs and Ham" : (age < 15) ? "The Time Machine" : "twilight";

 console.log ("you should read "+book);
 console.log(book2);
