import engine from '../index.js';
import generateNumber from '../numGenerator.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const numberOfElements = 10;
  const firstNum = generateNumber(1, 30);
  const difference = generateNumber(1, 5);
  const hiddenElementIndex = generateNumber(0, numberOfElements - 1);
  const hiddenElementSign = '..';
  const progression = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    const number = firstNum + difference * i;
    progression.push(number);
  }
  progression[hiddenElementIndex] = hiddenElementSign;
  const gameQuestion = progression.join(' ');
  const rightAnswer = String(firstNum + difference * hiddenElementIndex);
  return [gameQuestion, rightAnswer];
};

export default () => engine(gameDescription, getGameData);
