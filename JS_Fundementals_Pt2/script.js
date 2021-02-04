'use strict'; 
/*
// has to be the very first line of code to use Strict Mode. (Secures Code) creates visual errors and forbids us to do certain things;

let hasDriversLicense = false;
const passTest = true;

// We want to write some logic so that that when they pass the test hasDriversLicense changes to true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// RESERVED WORDS FOR FUTURE USE BY JAVASCRIPT
// const interface = 'Audio';
// const private = 534;
// const if = 534;
*/

// function logger() {FUNCTION BUDDY}
// function logger() {
//   console.log('Hi My name is What?');
// }

// invoking / running / calling function
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
   // Creates the values of apples, oranges as juice
}

const appleJuice = fruitProcessor(5, 0); // Sets the values of apples, oranges and saves the value under a variable.
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// DRY CODE: Reusable code so to not repeat ourselfs.
