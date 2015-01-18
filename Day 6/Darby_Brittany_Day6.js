//alert("JavaScript works!");

/*
 * Brittany Daby
 * SDI 1502
 * Day6
 * 1/17/2015
 */
// Is my steak done

/*
 *120 and under is undercook
 *120-124 - steak is rare
 *125-129 - steak is med-rare
 *130-139 - steak is med
 *140-149 - steak is med-well
 *150-165 - steak is well done
 *> 165 is burnt to a crisp
 */

var steakTemp = 451;


if (steakTemp < 120){
    steakDone = "Not done";
}else if (steakTemp <=124) {
    steakDone="Rare steak";
}else if (steakTemp <=129) {
    steakDone= "Medium Rare";
}else if (steakTemp<=139) {
    steakDone="medium";
}else if (steakTemp <=149) {
    steakDone= "Medium-well";
}else if (steakTemp<= 165) {
    steakDone="well done";
}else{
    console.log("The steak is " +steakTemp+ ".");
}




//get outside temperature

var airTemp = parseInt(prompt("What is the temp outside?", "65"));

//create the variable for the water temperature
var waterTemp;

//conditional to see what we're doing
if (airTemp>= 85) {
    console.log("Let's go to the beach.");

    waterTemp= parseInt(prompt("What's the temperature of the water?", "75"));


    if (waterTemp >=75) {
    console.log("Lets go in the water");
    }else{
    console.log("Let's build a sandcastle.");
    }
}else{
    console.log("We're going to the movies")
}













































