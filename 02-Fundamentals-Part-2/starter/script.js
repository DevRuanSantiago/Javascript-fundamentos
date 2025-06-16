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
/*
function fruitProcessor (apples,bananas){
console.log(apples, bananas);
const juice = `juice with ${apples} apples and ${bananas} bananas.`;
return juice;
}
let juiceResult = fruitProcessor(5,6);
console.log(juiceResult);
const secondJuice = fruitProcessor(2,3);
console.log(secondJuice);
*/
/*
function calcage1(birthdayyear)
{
    return 2025-birthday;
}
calcage1(2001)
console.log(`${calcage1(2001)}`)
 const calcage2 = function(birthdayyear){
    return 2025-birthdayyear;
 }
 const age2 = calcage2(2000)
 console.log(`${Age2}`);
 */
/*
const  calcactualage = birthday => 2025 - birthday;
const actualAge = calcactualage(2001);
console.log(`${actualAge}`);
const yearsUntilRetirement = birthdayYear => {
    const age = 2025 - birthdayYear;
    const yearsUntilRequired = 70-age;
    return yearsUntilRequired;
}
console.log(yearsUntilRetirement(2001))
*/
/*
function fruitProcessor (apples,bananas){
console.log(apples, bananas);
const juice = `juice with ${apples} apples and ${bananas} bananas.`;
return juice;
*/
/*
const yearsUntilRetirement = (birthdayYear, FirstName) => {

    const age = 2025 - birthdayYear;
    const retirement = 70 - age;
    return (`${FirstName} need to work more ${retirement} years to be retired `);

}


console.log(yearsUntilRetirement(2005, `Ruan`));
*/
/*
calcAge = function (birthdayYear) {
    return 2025 - birthdayYear;
}

console.log(yearsUntilRetirement(2001, `Ruan`));

const yearsUntilRetiremet = function (birthdayYear, FirstName) 
     {

    const age = calcAge(birthdayYear)
    const retirement = 70 - age;
    if(retirement > 0)
    {
       return (`${FirstName} need to work more ${retirement} years to be retired `);
    }
    else
    {
        return (`thanks for your contribuation you can now retire :D`)
    }

}
console.log(yearsUntilRetiremet(2005, `Ruan`));
*/
const friends = [`michael`, `steven`, `jonas`];
console.log(` ${friends}`)


//exercise
const CalcAge = function(birthdayYear)
{
    return 2025-birthdayYear;
}
const years = [2000,2001,2003,2005,2004,2006];
console.log(CalcAge(years[0]))
const ages = [CalcAge(years[0]), CalcAge(years[1]), CalcAge[(years.length - 1)]]
console.log(ages);
