
 /*
Brittany Darby
SDI Campus
1/13/2015
Prompting
 */
//alert("Testing to see if it work");


var input= prompt("Please enter the name of your dog");
while (input==="" || isNaN(input)) {
    input=prompt("PLEASE don't leave it blank");
    
}
console.log("My dog is "+input+ " years old");