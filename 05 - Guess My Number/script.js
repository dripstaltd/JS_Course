'use strict';
//-| DOM = Document Object Model / A connection point for access by javaScript;
// > DOM is part of WEB APIs Application Programming Interface                ;

// document.querySelector('.message');
/*
document.querySelector('.message').textContent = '🤣 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 Not a Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤣 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛰️ Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤡 LOOSER';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤡 LOOSER';
      document.querySelector('.score').textContent = 0;
    }
  }
});
