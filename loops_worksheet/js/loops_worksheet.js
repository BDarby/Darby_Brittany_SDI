/*
 *Brittany Darby
 *1/20/2015
 *Loops worksheet
 */


//alert("testing");

//This is my Do while loop

var days;

do{
    days=prompt("Please enter a number 1-31");
} while ((days==="") || isNaN(days));

console.log("You started on day " +days+ " of this month");
    



//This is my while loop

var scoops=prompt("Enter the number of scoops you would like 1-4");

while (isNaN(scoops) || scoops===""){ 
        scoops=prompt("PLEASE ENTER A NUMBER 1-4");
         
        scoops;//do I need 2 counters?
    }
     console.log("You have "+scoops+" scoops of ice cream");





//This is my for loop
dog=prompt("Enter a number of dog(s) you have, 1-7");

for(var dog; dog<=0; dog)
 
while (isNaN(dog) || dog===""){
    dog=prompt("Please enter a number 1-7");
     
}
 console.log("You have "+dog+" Dog(S)");














