import { cons } from '@hexlet/pairs';

const operators = ['+', '-', '*'];

export const gameDescription = 'What is the result of the expression?';

export const getGameData = () => {
    const randomNum1 = Math.floor(1 + Math.random() * 30);
    const randomNum2 = Math.floor(1 + Math.random() * 30);
    const operator = () => operators[Math.floor(0 + Math.random() * (operators.length))];
    const gameQuestion = `${randomNum1} ${operator()} ${randomNum2}`;
    const rightAnswer = String(eval(gameQuestion));
    return cons(gameQuestion, rightAnswer);
};