'use strict';

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// BANKIST APP
/*.:|REGION|:.*/
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
/////////////////////////////////////////////////
const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////
/*.:|REGION|:.*/
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
/////////////////////////////////////////////////
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
/////////////////////////////////////////////////
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
/////////////////////////////////////////////////
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/*.:|REGION|:.*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*.:|REGION|:.*/
/////////////////////////////////////////////////
// DEPOSITS CODE - Creating html with forEach
/////////////////////////////////////////////////
const displayMovements = function (movements) {
  // use this to read data
  containerMovements.innerHTML = ' ';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
/*.:|REGION|:.*/
// calcDisplayBalance function
displayMovements(account1.movements); // create usernames
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements); // CALL
/*.:|REGION|:.*/
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/**/
/*.:|REGION|:.*/ const eurToUsd = 1.1;
// using map method as an arrow function
const moveUSDArrow = movements.map(mov => mov * eurToUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescriptions);
/*.:|REGION|:.*/

/*
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/
/*.:|REGION|:.*/

// console.log(movements);
// (acc) accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
// console.log(balance2);

/*.:|REGION|:.*/
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log('deposits');
// console.log(deposits);
// console.log('------------');
// console.log('withdrawals');
// console.log(withdrawals);
// console.log('------------');
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

/*.:|REGION|:.*/
// using map method to create and fill
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
// // logging
// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDfor);
// console.log(moveUSDArrow);
/**/
/*.:|REGION|:.*/
/*
// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/
// LECTURES
/*
// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}
/////////////////////////////////////////////////
console.log('--- FOREACH ---');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
*/
/////////////////////////////////////////////////

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
// console.log(max);

/*.:|REGION|:.*/
const eurToUSD = 1.1;
console.log(movements);
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUSD;
  })
  //.map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
