/*
 *Brittany Darby
 *SDI
1/17/2015
Conditional Assignment
*/

//alert= "testing to see if this works"

var apples= parseInt(prompt("Please enter how many apple you have, a number 0-24"));

if (apples == 0) {
    console.log("You have zero apples");
}else if (apples <= 5) {
    console.log("You have a peck of apples");
}else if (apples>=6 || apples<=11) {
    console.log("You have half a bushel of apples");
}else if ((apples>=12 && apples<=24) ) {
    console.log("You have a bushel of apples");
}else(
    console.log("You didn't enter a correct number")
)
while (apples===""){
    apples=prompt("Please enter a number 0-24")  // this is my validations
}
while(isNaN(apples) || apples ===""){
apples=prompt("Please enter a number 0-24")
}


//conditonal 1
//I used || and && in this coditional





var oranges= parseInt(prompt("Please enter how many pears you have, a number 0- 10"));
if (oranges == 0) {
    console.log("You have no pears")
}else if (oranges<=3) {
    console.log("You have a small bowlfull of oranges");
}else if (oranges >=3 || oranges<6) {
    console.log ("You have a full bowl of oranges");
}else if (oranges>7 || oranges<10) {
    console.log("You have a bushel of oranges");
}else(
    console.log("You didn't enter the right number")
)
//conditonal 2
//I used || in this conditional

while (oranges===""){
    oranges=prompt("Please enter a number 0-10")  // this is my validations
}
while(isNaN(oranges) || oranges ===""){
oranges=prompt("Please enter a number 0-10")
}




var pears= parseInt(prompt("Please enter how many pears you have, a number 0-14"));
if (pears==0) {
    console.log("You have no pears")
}else if (pears<=4) {
    console.log("You have a pint of pears");
}else if (pears>=5 || pears>=9) {
    console.log("You have a bowl of pears");
}else if (pears>=10 || pears<=14) {
    console.log("You a bushel of pears");
}else(
    console.log("You didn't enter the right number")
)
//conditonal 3
//I used || in this conditional


while (pears===""){
    pears=prompt("Please enter a number 0-14")//this is my validations 
}
while(isNaN(pears) || pears ===""){
pears=prompt("Please enter a number 0-14")
}




var total= apples+oranges+pears
console.log("You have enter the numbers " + apples+ " for apples "+ oranges+ " for oranges and, " +pears+ " for pears. All together that equals "+total+ " pieces of fruit");
// this is my math




var fruitSalad= prompt("Do you want a fruit salad?, enter yes or no?");


(fruitSalad=="yes")? console.log("You can mix all the fruits together to make a fruit salad") : console.log("Then you won't get a fruit salad");    

//above is my attempt on doing a ternary statement.






