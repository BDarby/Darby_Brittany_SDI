
 /*
Brittany Darby
SDI Campus
1/13/2015
Casting
 */
//alert("Testing to see if it work");

 //casting one varible type to another variable type
 var stringvar = "6";
 var results = 7 + stringvar;
 console.log(results);

 //number(variable or value to cast) - treats anything inside the parentheses as a number

 var castingResults = 7 +Number(stringvar);
 console.log(castingResults);

 //String() - anything inside the parentheses is treated as a text string
 var areaCode = 407;
 var firstPart = 203;
 var secondPart = 1234;

 var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
console.log(phoneNumber);

 var phoneNumber2 = "("+String(areaCode)+")" + String(firstPart) +"-" +String(secondPart);
 console.log(phoneNumber2);

 var phoneNumber3 = "("+areaCode+")" + firstPart+ "-" +secondPart;
 console.log(phoneNumber3);

 // Parsing Integers
 // parseInt() - it looks through a text string and returns an integers.
 //Only the first number in the string is returned
 //Text String has to start with a number
 //Leading and trailing spaces are allowed
 //If it can't find the integer then it returns NaN
 //NaN - is not an number

 var a= parseInt("21 years old");
 console.log(a);

 var b = parseInt("I am 21 years old");
 console.log(b);

 var c = Number("21 years old");
 console.log(c);

 // Prompts only return strings

 var shoesHad = prompt("How many pairs of shoes did you own before?");

 var shoesBought = prompt("How many shoes did you buy?");

 //add shoesHad plus shoeBought for total number of shoes

 var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
 console.log(totalShoes);












