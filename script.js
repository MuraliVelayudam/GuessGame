'use strict';

//--

const againBtnEle = document.querySelector('.again');
const checkBtnEle = document.querySelector('.check');
const numberEle = document.querySelector('.number');
const inputELe = document.querySelector('.guess');
const messageELE = document.querySelector('.message');
const scoreEle = document.querySelector('.score');
const highScoreEle = document.querySelector('.highscore');
const bodyEle = document.body;

//--Random Number

let num = Math.trunc(Math.random() * 20) + 1;

//--score

let score = 20;
let highScore = 0;

//--functions

function displayMessage(message) {
  messageELE.textContent = `${message}`;
}

function calScore(guess) {
  if (score > 1) {
    displayMessage(`Guess is Too ${guess}`);
    score--;
    scoreEle.textContent = score;
  } else {
    scoreEle.textContent = 0;
    displayMessage(`😢 Game Over . . .`);
  }
}

function high_Score() {
  if (highScore < score) {
    highScore = score;
    highScoreEle.textContent = highScore;
  }
}

//Check

checkBtnEle.addEventListener('click', () => {
  const input = Number(inputELe.value);

  if (!input) {
    displayMessage('⭕ No Number . . . ');
  } else if (input === num) {
    displayMessage('🎉 Congratulations . . . ');
    bodyEle.style.backgroundColor = '#60b347';
    numberEle.textContent = num;
    high_Score();
  } else if (input > num) {
    calScore(`High ⬆`);
  } else if (input < num) {
    calScore(`low ⬇`);
  }
});

//--again

againBtnEle.addEventListener('click', () => {
  num = Math.trunc(Math.random() * 20) + 1;
  scoreEle.textContent = 0;
  numberEle.textContent = '?';
  bodyEle.style.backgroundColor = '#222';
  inputELe.value = '';
  score = 20;
  scoreEle.textContent = score;
  displayMessage('😁 Start Guessing . . .');
});
