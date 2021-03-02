'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Function containing delivery infomation for current order
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Method to order just pasta, which needs just 3 ingredients
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // Method to or pizza, storing the main ingredient variable and storing the rest of the ingredients together in another variable called (otherIngredients)
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Use ANY data type, return ANY data type, short-circuiting;
console.log(3 || 'Ben');

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
