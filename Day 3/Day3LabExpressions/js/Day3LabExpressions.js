/*
Brittany Darby
1/10/2015
c201501
Day3LabExpressions
 */


//area for a rectangle width * length


//I am finding an the area of a rectangle
//by doing this I will be multiplying the bas and the height, then divide by 1/2

var length= 6;
var width = 10;

var areaTriangle = length * width;
console.log( areaTriangle);

//the answer is 60

//the problem above is an example tht was in the notes


//Slice of pie pt 1
var sliceOfPizza= 8;  //each pizza has 8 slices of pizza
var peopleAtParty= 32 // there are 32 people at the party
var numOfPizzas= 9 //there are 8 pizzas

var numSlicePer= sliceOfPizza*numOfPizzas/peopleAtParty
//above is the calculation
console.log("each person ate " + numSlicePer  + " slices of pizzas");
//according this calculation each person got 2 slices.



//Slice of pie pt 2

console.log( "Sparky got " +sliceOfPizza*numOfPizzas%peopleAtParty+ " slices of pizza" );
//first you have to multiply sliceOfPizza and numOfPizza, then modulo peopleAtParty and you get 8




//Average Shopping Bill

var week1= 73.25;
var week2= 87.23;
var week3= 203.53;
var week4= 180.29;
var week5= 150.48;

//above is how much they each week for 5 weeks

var totalSpentGroceries= week1+week2+week3+week4+week5;
var averageSpent = (week1 + week2 + week3 + week4 + week5) / 5;

console.log(totalSpentGroceries); //this added all the numbers up
console.log(averageSpent); // this added all the numbers up then divided by 5

var A= "You have spent a total of " +totalSpentGroceries+ " groceries over 5 weeks"; // I combined the string with "you have spent..." with totalSpentGroceries
var B= " That is an average of " +averageSpent+" per week"; // you have to put plus signs "+" to let the computer know you are adding the variable +averageSpent+ in the string

var combine= A+B;
console.log(combine);


//Discounts

var originalPrice= 234.00;  // this is how much the sweater cost originially
var discountPercentage= .5;  // it's a .5 percent discount
var Description= "Italian Cashmere sweater"; // the item is an italian cashmere sweater
var salesTaxPercentage= .07; // and the sales tax is .07

var priceWithoutTax= originalPrice - (discountPercentage * originalPrice);
var discountPrice= originalPrice* (1 - discountPercentage);
var percentWithTax= discountPrice * (1 + salesTaxPercentage);

console.log("Your "+Description+ " was orginally " +originalPrice+ ", but after a " +salesTaxPercentage+ " discount, it is now " +priceWithoutTax+ " without tax and  " +percentWithTax+ " with tax ");









