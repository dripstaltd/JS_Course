'use strict'; 

// -| Titles                             
// > This is where i type project Notes  
// Standard Comments
// ? 
// *
// !
// Todo: 



//-|                FUNCTIONS                    
// > has to be the very first line of code to use Strict Mode. (Secures Code) creates visual errors and forbids us to do certain things;

// let hasDriversLicense = false;
// const passTest = true;

// TODO: We want to write some logic so that that when they pass the test hasDriversLicense changes to true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

//-| RESERVED WORDS FOR FUTURE USE BY JAVASCRIPT 
// > const interface = 'Audio';                  
// > const private = 534;                        
// > const if = 534;                             


// function logger() {FUNCTION BUDDY}
// function logger() {
//   console.log('Hi My name is What?');
// }

// invoking / running / calling function
// logger();
// logger();
// logger();

// > Creates the values of apples, oranges as juice
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// 
// Sets the values of apples, oranges and saves the value under a variable.
// const appleJuice = fruitProcessor(5, 0); 
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// -|               DRY CODE:                 
// > Reusable code so to not repeat ourselves.


//-|                     FUNCTIONS                            
//-|            DECLARATIONS & EXPRESSIONS                    
//> Functions are values that can be stored inside a variable;
//-|                    Declaration;                          
//> Can be called before they are defined;                    
//> Giving the function a name;                               
//> (declaring the function) (nameTheFunction) (function parameter) { (code) (return ) };
//>                                                           
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//> (functionName) (Function Arguments / which fills in the function parameter placeholder);
const age1 = calcAge1(1991);
*/

//-|                   EXPRESSIONS;                           
//> No name (anonymous function);                             
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//-|                ARROW FUNCTIONS;                          
//> Good for executing 1 parameter and 1 line of code;        
//> Shorter function expression;                              
//>                                                           
//>                                                           
//-| Arrow function                                           

/*
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
*/
//-|  FUNCTIONS CALLING OTHER FUNCTIONS                                                 
//>   line 123: apples we set as 2;                                                     
//>   line 110: Creates a function that cuts value into 4;                              
//>   line 117: We call Line 110 function;                                              
//>   line 120: We output a template string with out new values stored in placeholders; 

/*
const cutPieces = function (fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {

  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2,3));
*/
//-|       REVIEWING FUNCTIONS                  
//>  function ( THIS IS LOCAL TO THE FUNCTION); 
//>                                             
//>                                             
//>  return exits!                              
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if(retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
    console.log(`${firstName} retires in ${retirement} years`); //* invalid placement
  } else {
    // console.log(`${firstName} has already retired `);
    return `${firstName} has already retired `;
  }
}
console.log(yearsUntilRetirement(1991, 'Benjamin'));
console.log(yearsUntilRetirement(1950, 'Sunny'));
*/
//>   Three different ways of writing functions, but they all work in a similar way;  
//>                        Receive INPUT data, TRANSFORM data, and then OUTPUT data;  

//-| INTRODUCTION TO ARRAYS  
//>                   
/*
const friends = ['Michael', 'Steven', 'Peter']; // literal syntax


const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Ben';
console.log(friends);
//friends = ['yourmum', 'biscuits']; //! NOPE
const firstName = 'Benjamin';
const ben = [firstName, 'McCarthy', 2021 - 1991, 'Driven!', friends];

console.log(ben);
console.log(ben.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const years = [1991, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
*/
//-| Array Operations / Methods             
//>  Push Method adds to the end of array;  
//>                                         
//>                                         

const friends = ['Michael', 'Steven', 'Dennis'];

// Adds elements
//To the end [.length - 1]
const newLength = friends.push('Jack');
console.log(friends);
console.log(newLength);
// to position [0]
friends.unshift('Jenn');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Bob'));

friends.push('23');
console.log(friends.includes('Steven'));
console.log(friends.includes('Graham'));
console.log(friends.includes('23'));

if (friends.includes('Mohammed')) {
  console.log(`Mohammed is already here!`);
} else {
  friends.push('Mohammed');
  console.log(`Mohammed has been added!`);
  console.log(friends.includes('Mohammed'));
  console.log(friends);
}