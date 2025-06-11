'use strict';
/*
let hasDriversLicence = false;
const pasTest = true;

if(pasTest) hasDriversLicence = true;
if(hasDriversLicence) console.log(`i can drive :D`)
    */
/*
function logger(){
    console.log (`my name is Ruan`);
}
logger();
logger();
logger();
*/
function fruitProcessor (apples,bananas){
console.log(apples, bananas);
const juice = `juice with ${apples} apples and ${bananas} bananas.`;
return juice;
}
let juiceResult = fruitProcessor(5,6);
console.log(juiceResult);
const secondJuice = fruitProcessor(2,3);
console.log(secondJuice);