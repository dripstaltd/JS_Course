'use strict'; 
/*

? FUNCTIONS


has to be the very first line of code to use Strict Mode. (Secures Code) creates visual errors and forbids us to do certain things;

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
/*
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
*/


//   / / / / / / / / / / / / / /
//      F U N C T I O N S    / /
//  D E C L A R A T I O N S  / /
//             &             / /
//   E X P R E S S I O N S   / /
//   / / / / / / / / / / / / / /

// D E C L A R A T I O N: Giving the function a name
// (declaring the function) (nameTheFunction) (function parameter) { (code) (return ) }
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// (functionName) (Function Arguements / which fills in the function parameter placeholder)
const age1 = calcAge1(1991);

// / / / / / / / / / / / / / / / / / / / / / / / / / /
// E X P R E S S I O N: No name (anonymous function)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);