import { cons } from '@hexlet/pairs';

export const gameDescription = 'What number is missing in the progression?';

export const getGameData = () => {
  const numberOfElements = 10;
  const firstNum = Math.floor(1 + Math.random() * 30);
  const difference = Math.floor(1 + Math.random() * 5);
  const hiddenElementIndex = Math.floor(0 + Math.random() * numberOfElements);
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
