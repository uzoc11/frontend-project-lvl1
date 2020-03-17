import { cons } from '@hexlet/pairs';
import engine from '../index.js';
import generateNumber from '../num_generator.js';

const isEven = (result) => result % 2 === 0;

export const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export const getGameData = () => {
  const gameQuestion = generateNumber(1, 30);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameDescription, getGameData);
