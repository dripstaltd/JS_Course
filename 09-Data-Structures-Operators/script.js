'use strict';

const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};

//-| Destructuring Array >>
//> [first, , , second] === first, skip, skip, fourth;👈
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

let [main, , secondary] = resturant.categories;
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
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function >>
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring >>
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values >>
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, r); // = [8, 1]
// Setting default values to 1;
// So it will not return an error;
