'use strict'; 

// ! ALERTS & TITLES  
// TODO
// * Notes
// Standard Comments




//!   FUNCTIONS    

// * has to be the very first line of code to use Strict Mode. (Secures Code) creates visual errors and forbids us to do certain things;

// let hasDriversLicense = false;
// const passTest = true;

// TODO: We want to write some logic so that that when they pass the test hasDriversLicense changes to true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

//! RESERVED WORDS FOR FUTURE USE BY JAVASCRIPT 
// * const interface = 'Audio';
// * const private = 534;
// * const if = 534;


// function logger() {FUNCTION BUDDY}
// function logger() {
//   console.log('Hi My name is What?');
// }

// invoking / running / calling function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// * NOTE: Creates the values of apples, oranges as juice
// }
// Sets the values of apples, oranges and saves the value under a variable.
// const appleJuice = fruitProcessor(5, 0); 
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// TODO; DRY CODE: 
// TODO; Reusable code so to not repeat ourselves.


//!                    F U N C T I O N S                    
//! D E C L A R A T I O N S    &    E X P R E S S I O N S   
/*
//TODO: Functions are values that can be stored inside a variable;
//! Declaration:
//* Can be called before they are defined
//* Giving the function a name
// (declaring the function) (nameTheFunction) (function parameter) { (code) (return ) }
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// (functionName) (Function Arguements / which fills in the function parameter placeholder)
const age1 = calcAge1(1991);


//! E X P R E S S I O N:  
//* No name (anonymous function)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//! ARROW FUNCTIONS:  
//* Good for executing 1 parameter and 1 line of code;
//* Shorter function expression;
//*
//*
// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log (yearsUntilRetirement(1991, 'Ben'));


