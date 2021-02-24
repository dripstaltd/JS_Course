'use strict';
//-| MODAL START;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--new');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
//-| MODAL END;

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// Current player
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//-| Initiate function;
const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // Adding the 'hidden' class to the dice
};

//-| Starting Conditions;
init();

//-| Switch to next player;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//-| Rolling dice functionality;
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random number between 1 and 6;
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display Dice;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //-| 3. Check for rolled 1;
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // current0El.textContent = currentScore; // BUG CHANGE LATER
    } else {
      switchPlayer();
    }
  }
});

//-| Hold button;
btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score;
    //: scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //-| 2. Check if player's score is >= 100;
    if (scores[activePlayer] >= 100) {
      //-| Finish the game and playing state;
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }

    // Switch to the next player;
    switchPlayer();
  }
});
//-| Reset Game;
btnNew.addEventListener('click', function () {
  // Start new game;
  init();
});

//-| Setting player names;
