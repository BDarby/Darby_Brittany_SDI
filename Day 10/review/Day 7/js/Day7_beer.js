/*
 *Brittany Darby
 *1/20/2015
 *beer counting
 */ 


//alert("testing");

//99 bottles of beer on the wall

for(var i=99; i>0; i--){

    
   //add a check for the last round of beers
   if (i===1) {
     console.log(i+" bottle of beer on the wall. "+i+" bottle of beer. You take one down and pass it around, no more bottles of beer on the wall. \n the end");
   }else{
   console.log(i+" bottles of beer on the wall. "+i+" bottle of beer. You take one down and pass it around, " +(i-1)+" bottle of beer on the wall.");
   }
    
    
}


//this is a for loop
for (var bb=54; bb>0; bb--){
  if (bb===1) {
    console.log("You have "+bb+" bottle of vodka");
  }else{
    console.log("You have "+bb+" bottles of vodka");
  }
}

//got it right!!