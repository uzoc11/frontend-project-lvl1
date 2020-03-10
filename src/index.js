import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const engine = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameDescription}`);
  const steps = 3;
  for (let i = 1; i <= steps; i += 1) {
    const gameData = getGameData();
    const getQuestion = car(gameData);
    const getAnswer = cdr(gameData);
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === getAnswer) {
      i < 3 ? console.log('Correct!') : console.log(`Correct!\nCongratulations, ${userName}!`);
    }
    if (userAnswer !== getAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
