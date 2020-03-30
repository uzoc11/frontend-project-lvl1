import engine from '../index.js';
import generateNumber from '../numGenerator.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


const getGameData = () => {
  const gameQuestion = generateNumber(1, 11);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, rightAnswer];
};

export default () => engine(gameDescription, getGameData);
