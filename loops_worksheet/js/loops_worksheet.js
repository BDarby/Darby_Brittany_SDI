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





//This is my while loop

var scoops=prompt("Enter the number of scoops you would like 1-4");
while (scoops<4) {
do{
    while (isNaN("scoops")){ 
        scoops=prompt("PLEASE ENTER A NUMBER 1-4");
    }
    console.log("You have "+scoops+" scoops of ice cream")
    scoops++;
    break;
}while (days<=4); 





//This is my for loop
dog=prompt("Enter a number of dog(s) you have, 1-7")
for(var dog=1; dog<7; dog++){
console.log("You have "+(dog+1)+" Dog(S)"); //how to add plus one?
while(dog==="") {
    dog=prompt("Please enter a number 1-7");
    dog++;
}
break;
}
}