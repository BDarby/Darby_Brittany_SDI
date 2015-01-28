
 /*
Brittany Darby
SDI Campus
1/15/2015
Logical Operators
 */
//alert("Testing to see if it work");

 /*

 true && true=true
 true && false=false
 false && true=false
 false && false=false

 true ||true= true
 true|| false= true
 false|| true= true
 false|| false= false

 !(true)= false
 !(false)= true
  */

 //if the price of the 3ds is less then budget lets buy it
//AND if our pay check is over $500

 var budget = 200;
 var dsPrice = 169;
 var payCheck= 600;


 if(dsPrice<budget && payCheck > 500){
  console.log("Buy the 3DS!");
 } else{
  console.log("Don't buy, you are broke!");
 }



 //Lets buy a smart tv if it's less then our budget OR we won the lottery

 var tvPrice= 540;
 var tvBudget= 500;
 var wonLottery= false;

 if(tvPrice < tvBudget||wonLottery){  // the || means false in this citizen
  console.log("Get the Smart TV!");
 } else{
  console.log("Keep your basic tv");
 }

//this is practice for the exam
var popcorn=2
var moneyIGot=10
var drink=9


if (popcorn<moneyIGot && moneyIGot>drink) {
    console.log("you can get the drink and the popcorn");
}else{
    console.log ("You can't get anything, BYE FELICIA!");
}

































