import { cons } from '@hexlet/pairs';
import engine from '../index.js';
import generateNumber from '../num_generator.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


export const getGameData = () => {
  const randomNum = generateNumber(1, 11);
  const gameQuestion = randomNum;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameDescription, getGameData);
