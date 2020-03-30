import engine from '../index.js';
import generateNumber from '../numGenerator.js';

const operators = ['+', '-', '*'];

const calculateExpression = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const operator = operators[generateNumber(0, operators.length - 1)];
  const gameQuestion = `${randomNum1} ${operator} ${randomNum2}`;
  const rightAnswer = String(calculateExpression(randomNum1, randomNum2, operator));
  return [gameQuestion, rightAnswer];
};

export default () => engine(gameDescription, getGameData);
