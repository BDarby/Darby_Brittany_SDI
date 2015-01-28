/*
 *Brittany Darby
 *1-24-2015
 *Random number generator
 */
//alert("testing");


//Create variables for min and max value
var min=prompt("Please enter a min value");
//validate our min prompt
while(isNaN(min) || min===""){
    //reprompt the user for orrect informations
    min=prompt("Please don't leave blank and use numbers only")
}


var max=prompt("Please enter a max value");
//if prompting must put it in a number casting
while(isNaN(max) || max==="" || Number(min)>= Number(max)){  //make sure the last one, min is not greater then max when asking the question
    //reprompt the user for orrect informations
    if (isNaN(max)) {
        max=prompt("Please only enter numbers\nwhat is the max value");
    }else if (max==="") {
        max =prompt("please don't leave blank\nWhat is the max value?")
    }else{
        max= prompt("max value is must be greater than min number")
    }
}
  

//create a function
    function randomnizer(mn, mx){   //this is the arguement
    //generate our random number
    var randomNum=Math.round(Math.random()*(mx-mn)+mn); //Number(mn) for the last on
    //return that random number to our main code
    return randomNum;
}
//function call BUT create a variable to catch the return value
   var ranNum=randomnizer(min, max); //this is the call
    console.log("Your random number is between "+min+" and "+max+" is "+ranNum);
    
    
    
//15 random numbers between our number min and max
//create a loop
for (var i=0; i<15; i++) {
    console.log(randomnizer(min,max));
}
















