/*
 *Brittany Darby
 *1/20/2015
 *For loops
 */



//alert("Testing");


//basic for loop structure



 //for(initialization: conditon to test; increment of change){
//
// 
//Code to run as long as the condititon is true
//
//}


for (var i=0; i<20; i+=4) {
    //code to run as long as i<20
    console.log("The value of i= "+i);
}


for (var k=0; k<5; k++) {
    console.log("The value for k is "+k);
    //add a break point
    //if k=3 then stop the code
    
    if (k===3) {
        
        break;
    }
}


for (var cat=0; cat<20; cat++) {
    console.log("You have "+cat+" cats.");

}