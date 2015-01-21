/*
 *Brittany Darby
 *1/20/2015
 *Zombie attack
 */
//alert("testing");

//Zombie attack
//There is a zombie at full sail
//it can bite 4 ppl aday an turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days


var numZombies=1;   // how many zombies do we have.
var numBites=4;    // number of bites per zombie, per day
var days=8;       // number of days
var daysTake=0;
/*

for(var i=1; i <=days; i++){
    //how many new zombies get made AND when do they go bite ppl
    //They get bitten and the next day they can bite
    
    //New zombies made everyday
    var newZombies=numBites*numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies+= newZombies;
    
    //report at the end of the day
    console.log("There are " +numZombies+ " zombies at the end of the day # " +i+ "!");
    
    
}
  */
  
//How many days will it take to reach a million days

while(numZombies<=1000000){
    //new zombies per day
    var newZombies= numZombies*numBites;
    //how many zombies we have?
    numZombies+=newZombies;
    
    //add one to the total number of days it take
    daysTake++;
    
}



console.log("It will take "+daysTake+ " days for one million zombies")


























