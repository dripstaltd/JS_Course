'use strict';

const poll = {
  registerNewAnswer: promptInput => inputNum => {},
};

const pollBtn = document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);

/*
///////////////////////////////////////////////
const heathrow = {
  airline: 'London Heathrow',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};

// heathrow.book(239, 'Benjamin McCarthy');
// heathrow.book(666, 'Donald Duck');
// console.log(heathrow);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = heathrow.book;

// Does not work:
// book(23, 'Giselle McCarthy');

// Call method
// book.call(eurowings, 23, 'Giselle McCarthy');
// book.call(heathrow, 239, 'Gareth McCarthy');
// console.log(eurowings);
// console.log(heathrow);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
// book.call(swiss, 787, 'Lewis McCarthy');

// Apply method takes an array
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);

// Call method taking array
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(heathrow);
const bookLX = book.bind(swiss);
// bookEW(29, 'Steven Williams');

// Book function with 23 already defined
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Benjamin McCarthy');

// With Event Listeners
heathrow.planes = 300;
heathrow.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', heathrow.buyPlane.bind(heathrow));

//> Partial application;
// Preset the parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
///////////////////////////////////////////////
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const ukTax = addTaxRate(0.23);
console.log(ukTax(300));
///////////////////////////////////////////////
const addVA = rate => value => value + value * rate;
const uSATax = addVA(0.3);
console.log(uSATax(300));
*/
///////////////////////////////////////////////
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
*/
/*
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Ben');
greeterHey('Giselle');

greet('Waguan')('Mumzie!');
*/
///////////////////////////////////////////////
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
