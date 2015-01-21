/*
 *Brittany Darby
 *1/20/2015
 *Loops worksheet
 */


//alert("testing");

//This is my Do while loop

var days=prompt("Please enter the day you would like to start at, 1-31")

do{
    while (isNaN(days)) {
        days=prompt("PLEASE enter a NUMBER 1-31!"); 
    }
    
    console.log("There are "+(days)+ " days");
    days++;
} while (days<=31);

//the other teacher, vik?, helped with this but does not work



//This is my while loop

var scoops=prompt("Enter the number of scoops you would like 1-4");

while (scoops<=4) {
do{
   while (isNaN("scoops") && age===""){ 
        scoops=prompt("PLEASE ENTER A NUMBER 1-4");
       scoops++;  //this is the counter
    }
    console.log("You have "+scoops+" scoops of ice cream");
    scoops++;//do I need 2 counters?
    
}while (days<=4); 

//^^keeps getting stuck in infinite loop. fml



//This is my for loop
dog=prompt("Enter a number of dog(s) you have, 1-7")

for(var dog=1; dog<7; dog++){

console.log("You have "+(dog+1)+" Dog(S)"); //how to add plus one?

while (isNaN("dogs")){
    dog=prompt("Please enter a number 1-7");
    dog++; //this is the counter
}
break;
}
}
//^^sometimes errors come up with that last bracket idk why.