'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object
  openingHours,
  // Set property to function expression
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Function containing delivery infomation for current order
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Method to order just pasta, which needs just 3 ingredients
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // Method to or pizza, storing the main ingredient variable and storing the rest of the ingredients together in another variable called (otherIngredients)
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//-|                                              ;
//-|                MAPS-Part2                    ;
//-|                                              ;
/* Populating a map without the 'Set Method'. */

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😁'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(`Your answer was ${answer}`);

console.log(question.get(question.get('correct') === answer));

//-| Convert map to array;
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//-|                                              ;
//-|                   MAPS                       ;
//-|                                              ;
/* 
   - Maps are iterables
   - Data Structure that we can use to map values to keys
   - Like objects data is stored in key value pairs
   - Unlike objects Maps can use anytype of key
*/
// > mapName.set('Sets the name of the key','The value of the the key')
// > mapName.get('key') // Returns the chosen key
// > mapName.has('key') // Returns Boolean | checks if exist
// > mapName.delete('key') // Deletes key
// > mapName.size // Size | Length
// > mapName.clear // Empties the map
/*
const rest = new Map();
rest.set('name', 'CLassico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', '23')
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8; // using boolean as map key
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// using array as map keys
console.log(rest.get(arr));
*/
// -|                                              ;
// -|                   SETS                       ;
// -|                                              ;
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(new Set('Ben'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('benjaminmccarthy').size);
*/
//////////////////////////////////////////////////

// //-|                                                             ;
// //-|                   Coding Challenge #2                       ;
// //-|                                                             ;
// //>                                                              ;
// //>  -                                                           ;
// /*
// Your tasks:
// //>                                                              ;
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// //>                                                              ;
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// //>                                                              ;
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// //>                                                              ;
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// //-|                                                             ;
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// */
// //-|                                                             ;
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //-|                                                             ;
// // 1)
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// // 2)
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // 3)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//-|                                                             ;
/*
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const scored = Object.values(game.scored);
const goals = Object.keys(game.scored);
const odds = game.odds;
const values = Object.values(odds);
const keys = Object.keys(odds);
const entries = Object.keys(odds);

for (const goalNum of [1, 2, 3]) {
  console.log(goalNum);
}
// console.log(scored);
for (const player of scored) {
  console.log(player);
}
const aver = calcAverage(values);
// for(const average of )

console.log(aver);

// for(playerName of game.scored)
*/
//-|                                                             ;
///////////////////////////////////////
//          Looping Objects:         //
//  Object Keys, Values and Entries  //
///////////////////////////////////////

/////////////////////
// Property NAMES: //
/////////////////////
/*
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
//////////////////////
// Property VALUES: //
//////////////////////
const values = Object.values(openingHours);
console.log(values);
// entries turns the object into an array(so we can loop over the object)
const entries = Object.entries(openingHours);
console.log(entries);
//
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
//////////////////////////////////////////////////////////
/*
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
//WITHOUT optional chaining
// >console.log(restaurant.openingHours.mon.open);
// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example:
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'the following day';
  console.log(`On ${day}, we are open ${open}`);
}
// On Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// On Arrays
const users = [{ name: 'Ben', email: 'fdsasf@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');
*/
/////////////////////////////////
//   Enhanced Object Literals  //
/////////////////////////////////

/////////////////////////////////
// Looping Arrays: for-of Loop //
/////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // new array called menu, merging [starterMenu, mainMenu];

// for (const item of menu) console.log(item);
// // looping over new menu array and saving them to the variable called item;
// /*
// for (const item of menu.entries()) {
//   console.log(item);
// } // same as above + setting index
// */
// /*
// console.log([...menu.entries()]);
// // creating a new array for each 'item';
// */
// /*
// // Old way
// for (const item of menu.entries()) {
//   console.log(`${item[i] + 1}: ${item[1]}`);
// }
// */
// // Using Destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

/////////////////////////////////////
/*
/////////////////////////////////////
//-| The Nullish Coalescing Operator;
/////////////////////////////////////
// REMEMBER : The Nullish Coalescing Operator;
// 1) Introduced in ES2020
// 2) Work similar to || operator
// 3) Nullish: null and undefined (NOT 0 or '')
/////////////////////////////////////
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// In Practice:
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
//////////////////////////////////////////////////////////
/*
//////////////////////////////////////////////////////////
//-| Short Circuiting ( && AND || );
console.log('---- OR ----');
////////////////////////////////////
// REMEMBER : Short Circuiting ||;
////////////////////////////////////
// Returns: First Truthy Value of all operants;
// Returns: last value if all are falsy;
//: Useful for setting default values;
////////////////////////////////////
// Use ANY data type, return ANY data type, short-circuiting;
console.log(3 || 'Ben');
console.log('' || 'Ben');
console.log(true || 0);
console.log(undefined || null);
// Short circuiting will look for the first truthy value;
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// 1) inPractice:
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// 2) Best Method:
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
/////////////////////////////////////
console.log('---- AND ----');
////////////////////////////////////
// REMEMBER : Short Circuiting &&;
// && Short circuits on the first falsy value, then ignores the rest of the truthy values.
// it will return the first falsy value, if containing any truthy values.
// Returns the last falsy value if all are falsy!
//: Useful for executing code in the 2nd Operands if the 1st one is TRUE;
//////////////////////////////////////////////////////////
console.log(0 && 'Ben');
console.log(7 && 'Ben');
console.log('Hello' && 23 && 23 && null && 'Ben');
//////////////////////////////////////////////////////////
// 1) inPractice:
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// 2) Best Method:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', ' spinach');
*/
/*
//////////////////////////////////////////////////////////
// REMEMBER :  Spread Operator:
// Expand & Unpack Array into individual Elements;
// 1. Used to build new arrays;
// 2. pass multiple values into a function;
//: Where we would use VALUES seperated by commas: (1, 2, 3, 4)
//////////////////////////////////////////////////////////
// REMEMBER :  Rest Operator:
// Pack Elements into an Array;
// 1. Collect multiple elements and condense them into an array;
//: Where we would use VARIABLES seperated by commas: (main, main2, main3, other)
//////////////////////////////////////////////////////////
// 1) Destructuring
//-| Rest Pattern & Perameters;
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Objects
// We want to select only saturday from our opening hours
// throw the rest into a new object using rest
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// Ordering Pizza
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
*/
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*
//-| Using Spread Operator (...);
const arr = [7, 8, 9];
/////////////////////////
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // same as 👇
const newArr = [1, 2, ...arr];
console.log(badNewArr); // same as 👇
console.log(newArr);
/////////////////////////
console.log(...newArr); // same as 👇
console.log(1, 2, 7, 8, 9);
/////////////////////////
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// This is a new array, we are not pushing or shifting Gnocci into the old array;
/////////////////////////
// Spread operator takes all the elements from the array, but also doesn't create new variables, so we can use this where we would want to seperate these values by commas;

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread Operator can be used on all iterables
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Ben';
const letters = [...str, ' ', 'M.'];
console.log(letters);
console.log(...str);
/////////////////////////
// Real World Example //
/////////////////////////
// : Multiple Prompt inputs stored as array ingredients >>
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // Modern Es6 syntax
//////////////
// Objects //
//////////////
const newRestaurant = {
  foundedIn: 1995,
  ...restaurant,
  founder: 'Gezim Heartshaft',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*
//-| Destructuring Objects >>
restaurant.orderDelivery({
  time: '22:30',
  address: 'The Avenue, 27',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);
//-| Nested Objects >>
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
//////////////////////////////////////////////
*/
//-| Destructuring Array >>
//> [first, , , second] === first, skip, skip, fourth;👈
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

let [main, , secondary] = resturant.categories;
*/
// console.log(main, secondary);

//: Transfering with a temporary variable >>
// It is as if i have 3 cups, 1 with milk, 1 with cola and i need to make them swap.
// Use the temp like a temporary glass for transfering the contents of the cups!
/*
const temp = main; // temp = Italian, main = Italian, secondary = Pizzeria
main = secondary; // temp = Italian, main = Pizzeria, secondary = Pizzeria
secondary = temp; // temp = Italian, main = Pizzeria, secondary = Italian
*/
//: Transfering without a temporary variable >>
/*
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/
// Recieve 2 return values from a function >>
/*
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);
*/
// Nested Destructuring >>
/*
const nested = [2, 4, [5, 6]];
*/
// const [i, , j] = nested;
/*
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
// Default values >>
/*
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, r); // = [8, 1]
*/
// Setting default values to 1;
// So it will not return an error;
