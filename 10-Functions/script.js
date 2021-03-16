'use strict';

/*
// replace all spaces in a string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
console.log('....');
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('😘');
};

document.body.addEventListener('click', high5);
['Hob', 'Gucci Flip Flops', 'Peep'].forEach(high5);
*/
///////////////////////////////////////////////
// default parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);
*/
///////////////////////////////////////////////
/*
const flight = 'LH234';
const ben = {
  name: 'Benjamin McCarthy',
  passport: 28857403575,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 28857403575) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};
*/
/*

checkIn(flight, ben);
console.log(flight);
console.log(ben);
const flightNum = flight;
const passenger = ben;
*/
/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(ben);
checkIn(flight, ben);
*/
//-| javaScript Supports
/*
:First-Class-Functions:
all functions are values

:Higher-Order-Functions:
a function that recieves another
function as an argument, that
returns a new function or both

*/
