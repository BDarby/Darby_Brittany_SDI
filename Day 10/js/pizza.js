/*
 *Brittany Darby
 *1-27-2015
 *pizza function
 */
//alert("working or nah");

//calculate how much pizza cost per sq in and how much per slice

//prompt the user for:
//radius of pizza
//cost of pizza
//and number of slices per pizza


var pizzaRadius=prompt("what is the radius of your pizza?");
//validate the prompt
while(pizzaRadius==="" || isNaN(pizzaRadius)){
    //reprompt the user
    pizzaRadius=prompt("Please don't leave blank. \nWhat is the radius of your pizza");
}

//do while validation-IMPORTANT
do{
    //prompt the user
    var pizzaCost= prompt("How much does your pizza cost in total");
}while (pizzaCost==="" || isNaN(pizzaCost));

var pizzaSlices=prompt("How many slices are in your pizza?");
while (pizzaSlices==="" || isNaN(pizzaSlices)) {
    pizzaSlices=prompt("Please don't leave blank, \nhow many slives are in your pizza?");
} 
    
    
    //create a function that calculates the area of a pizza
    
function pizzaArea(r) {       //parameter is r
    var area=Math.PI *r*r;
    return area;
}
    
    
    //lets create a funtion that calc that price per sq inof pizza
function pizzaSqInCost(price,area) {
    //price/area
    var costPerIn=price/area;
    //round to 2 decimal places
    costPerIn=costPerIn.toFixed(2);
    return costPerIn;
}


//function that calcs the price per slice
function pricePerSlice(price, slice) {
    //price/slice
    var costPerSlice=price/slice;
    costPerSlice=costPerSlice.toFixed(2);
    return costPerSlice;
}

//function call that starts the lordFunction
var result=lordFunction(pizzaRadius,pizzaCost,pizzaSlices);


console.log("Your pizza per sq in in cost "+result[0]+" that comes out to "+result[1]+" per slice.");

//create a function that will start all of the other functions
function lordFunction(radius,cost,slices) {
    //calc the area
    var area=pizzaArea(radius);
    // calc the cost per area
    var areaCost=pizzaSqInCost(cost,area);
    //calc the price per slice
    var slicePrice=pricePerSlice(cost,slices);
    //return the area cost and the slice per price
    return [areaCost,slicePrice];

}














