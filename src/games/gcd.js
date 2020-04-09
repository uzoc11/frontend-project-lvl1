import engine from '../index.js';
import generateNumber from '../numGenerator.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (a, b) => {
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return getGreatestCommonDivisor(b, remains);
};

const getGameData = () => {
  const randomNum1 = generateNumber(1, 100);
  const randomNum2 = generateNumber(1, 100);
  const gameQuestion = `${randomNum1} ${randomNum2}`;
  const rightAnswer = String(getGreatestCommonDivisor(randomNum1, randomNum2));
  return [gameQuestion, rightAnswer];
};

export default () => engine(gameDescription, getGameData);
