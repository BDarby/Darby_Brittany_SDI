/*
 *Brittany Darby
 *1/22/2015
 *validation
 */
//alert("Testing");

//user leaves it blank?
//returns an empty text string""
var movie=prompt("What is your fav movie");

while(movie===""){
    //Then user has left the prompt blank
    //reprompt the user
    movie=prompt("Please don't leave blank. \nwhat is your fav movie?");
}


//test to see if the user typed in a number or not
//isNsN() - is not a number
//text strings return true
//numbers returns false

var ticketPrice=prompt("How much is a movie ticket?");

while(isNaN(ticketPrice)){
    //user did not type a number
    //reprompt for a number
    ticketPrice=prompt("reenter the ticket price");
}


//use both validation in the same loop
var age=prompt("To get in R rate movies we must know your age. \nHow old are you");

//validate that the prompt is not blank AND is a number.

while (isNaN(age) || age===""){
    //the user typed in a tet string or left it blank
    console.log("Inside the while loop");
    
    //test to see what went wrong
    if (isNaN(age)) {
        age=prompt("please only use numbers")
    }else
    age=prompt("opps something went wrong. \nPlease type in numbers")
}



//validate somwthing specific
var movieGenre=prompt("Do you want to see an action movie or a comedy?");

//validate that the user typed in one of the 2 genres
//Change to lower case
movieGenre= movieGenre.toLowerCase();
while(movieGenre!= "action" && movieGenre != "comedy"){
    movieGenre=prompt("Only type in action and comedy");
}















