import { cons } from '@hexlet/pairs';

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

export const gameDescription = 'What is the result of the expression?';

export const getGameData = () => {
  const randomNum1 = Math.floor(1 + Math.random() * 30);
  const randomNum2 = Math.floor(1 + Math.random() * 30);
  const operator = operators[Math.floor(0 + Math.random() * (operators.length))];
  const gameQuestion = `${randomNum1} ${operator} ${randomNum2}`;
  const rightAnswer = String(calculateExpression(randomNum1, randomNum2, operator));
  return cons(gameQuestion, rightAnswer);
};
