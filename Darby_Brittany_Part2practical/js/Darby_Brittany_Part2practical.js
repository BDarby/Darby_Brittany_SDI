/*
 *Brittany Darby
 *1-29-2015
 *Final exam pt2
 */

//alert("testing");


var item=prompt("Please enter the total cost of your merchandise");

while (item==="" || isNaN(item)) {
    item=prompt("Please enter ONLY a number");//this is my prompt and validation for cost of items.
}



var discount=prompt("What is your discount percentage? \nChooose a number 0-100");

while (isNaN(discount) || discount==="" || (discount<0 || discount>100)) {
    discount=prompt("Please enter a discount percentage only \nChoose a number 0-100");//this is my prompt and validation for discount.
    
}





function product(cost,discount) {    //this is my function, that i finally got right.
    var equations=cost*(discount/100);
    var dPrice= cost-equations;
    return dPrice;
}
var results= product(item,discount);  //this is the function call
console.log("The final cost of an item that cost $"+item+" with a discount of "+discount+"% is $"+results);
//above is my concatenation.

