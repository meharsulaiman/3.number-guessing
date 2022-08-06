'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const body = document.querySelector('.body');

const again = document.querySelector('.again');

let secretNum = Math.trunc(Math.random() * 20) + 1;
let totalScore = 20;
let highScore = 0;

console.log(secretNum)

check.addEventListener(
    'click', function () {
        const guessNum = Number.parseInt(guess.value);

        if (!guessNum) {
            message.textContent = "⛔ No Number";
        } else if (guessNum === secretNum) {
            message.textContent = "🎉 Correct Number";
            number.textContent = secretNum
            body.style.background = "#60b347"
            number.style.width = "30rem"
            if (totalScore > highScore) {
                highScore = totalScore;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guessNum > secretNum) {
            if (totalScore > 1) {
                message.textContent = "📈 Too high";
                totalScore--;
                score.textContent = totalScore;
            } else {
                message.textContent = "💥 You lose the Game";
                score.textContent = 0;
                body.style.background = "red"
            }

        } else if (guessNum < secretNum) {

            if (totalScore > 1) {
                message.textContent = "📉 Too Low";
                totalScore--;
                score.textContent = totalScore;
            } else {
                message.textContent = "💥 You lose the Game";
                score.textContent = 0;
                body.style.background = "red"
            }
        }
    }
)



again.addEventListener(
    'click', function () {
        totalScore = 20;
        secretNum = Math.trunc(Math.random() * 20) + 1;
        body.style.background = "#222";
        message.textContent = "Start guessing...";
        number.style.width = "15rem"
        guess.value = " ";
        number.textContent = "?";
        score.textContent = totalScore;
    }
)