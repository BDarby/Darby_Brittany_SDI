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