/*
 *Brittany Darby
 *1/20/2015
 *Validating Prompts
 */

//alert("testing");


var userInput=prompt("Please type in your name:");

//validating prompt with an conditional
if (userInput===" ") {
    //user did not type anything in
    userInput=prompt ("Please don not leave it blank");
}

//insted use a while loop
//check the input multiple times as many as it takes

var firstName= prompt("Please type in your first name:");

while(firstName===""){     //while makes it come up multiple times
    //this means the user typed in nothing
    //reprompt for the first time
    firstName= prompt("please type in your first name and DON'T LEAVE IT BLANK ");
    
}


//to test to see if it is a number
//isNan()- test what is inside of (). It is not a number?
//numbers return false
//everything else returns true

console.log(isNaN("Monkey")); //returns true
console.log(isNaN(7));//returns false

//let's ask the user their age

var age=prompt("please enter your age");

//now validate if the user typed in a number
while(isNaN(age) || age ===""){
    //this codes runs anytime the age is not a number.
    //reprompt the user for a number
    age=prompt("only use numbers, please enter your age");
}

var choice= prompt("Please type in yes or no");
//convert to lower case
choice = choice.toLowerCase();



while (choice!="yes" && choice!="no") {
    choice = prompt("please type in yes or no")
}























