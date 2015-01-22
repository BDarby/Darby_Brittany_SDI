/*
 *Brittany Darby
 *1/22/2015
 *looping arrays
 *
 */

//alert("testing");

//basic structure of the for loop over arry
//for(var i=0; i<array.length; i++){}
//create an array of scooby doo characters
var names=["shaggy", "shaggy","velma","Fred"];

//loops through the whole array and tell each one that they solve
for (var i=0; i<names.length; i++) {
    console.log(i);
    console.log(names[i]);
    console.log("You solved the case "+names[i]);
}


//create an array of bills and add them up
var bills= [50,10,2,20,10];
//create a variable to hold the total
var totalBills=0;
for (var j=0; j<bills.length;j++) {
    //add each individual bill to the total
    //totalBills=totalBills+bills[j];
    //only care about bills that are equal to or greater then $20
    if (bills[j]>=20) {
        totalBills+=bills[j];
    }
}
console.log("The total of the bills is "+totalBills);

