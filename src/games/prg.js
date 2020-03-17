import { cons } from '@hexlet/pairs';
import engine from '../index.js';
import generateNumber from '../num_generator.js';

export const gameDescription = 'What number is missing in the progression?';

export const getGameData = () => {
  const numberOfElements = 10;
  const firstNum = generateNumber(1, 30);
  const difference = generateNumber(1, 5);
  const hiddenElementIndex = generateNumber(0, numberOfElements);
  const hiddenElement = '..';
  const arr = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    const number = firstNum + difference * i;
    arr.push(number);
  }
  arr[hiddenElementIndex] = hiddenElement;
  const gameQuestion = arr.join(' ');
  const rightAnswer = String(firstNum + difference * hiddenElementIndex);
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameDescription, getGameData);
