/*
 *Brittany Darby
 *1/20/2015
 *Loops worksheet
 */


//alert("testing");

//This is my Do while loop

var days=prompt("Please enter the day you would like to start at, 1-31")

do (days<=31){
    console.log("You started at day "+days);
    days++;
}
while (isNaN(days)) {
    days= prompt("Please enter a valid number again");
    days++;
}

    
    
    

//the other teacher, vik?, helped with this but does not work, just redid it.



//This is my while loop

var scoops=prompt("Enter the number of scoops you would like 1-4");

while (scoops<=4) {
    
    (isNaN(scoops) || scoops===""){ 
        scoops=prompt("PLEASE ENTER A NUMBER 1-4");
         
       console.log("You have "+scoops+" scoops of ice cream");
    scoops++;//do I need 2 counters?
    }
     

//^^keeps getting stuck in infinite loop. fml



//This is my for loop
dog=prompt("Enter a number of dog(s) you have, 1-7")

for(var dog=1; dog<=7; dog++){

console.log("You have "+dog+" Dog(S)"); 
}
while (isNaN("dogs")|| dogs===""){
    dog=prompt("Please enter a number 1-7");
    dog++; //this is the counter
}

//this does infinite loop as well
