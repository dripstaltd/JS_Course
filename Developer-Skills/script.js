// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [45, -2, -6, -1, 'error', 9, 13, -8, 15, 14, 9, 5];

// 1) Understanding the Problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// What is a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp arr
// - Find min value in temp arr
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitudeNew);

// max = 3
// is 3 > 3) false
// moves to next position of loop
// is 7 > 3) true so max is now 7

//-| USING BREAKPOINT IN SOURCES to Debug   ;
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX BUG
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND BUG
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG
console.log(measureKelvin());

//-| USING CHROME DEBUGGER TO FIX BUG      ;
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  // let max = temps[0];
  // let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// BUG IDENTIFY
console.log(amplitudeBug);
