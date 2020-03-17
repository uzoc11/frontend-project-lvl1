import { cons } from '@hexlet/pairs';
import engine from '../index.js';
import generateNumber from '../num_generator.js';

export const gameDescription = 'Find the greatest common divisor of given numbers';

const calculateNod = (a, b) => {
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return calculateNod(b, remains);
};

export const getGameData = () => {
  const randomNum1 = generateNumber(1, 100);
  const randomNum2 = generateNumber(1, 100);
  const gameQuestion = `${randomNum1} ${randomNum2}`;
  const rightAnswer = String(calculateNod(randomNum1, randomNum2));
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameDescription, getGameData);
