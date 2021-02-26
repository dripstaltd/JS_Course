// 'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, your ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1991 && birthYear <= 1996) {
    var millenial = true;
    const firstName = `Steven`;
    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }
    output = 'NEW OUTPUT';
  }
  console.log(output);
  console.log(millenial);
  // console.log(add(2, 3)); // works without strict mode

  printAge();
  return age;
}

const firstName = 'Ben';
calcAge(1991);
