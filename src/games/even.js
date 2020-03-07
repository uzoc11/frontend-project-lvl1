import { cons } from '@hexlet/pairs';

const isEven = result => result % 2 === 0

export const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export const getGameData = () => {
  const gameQuestion = Math.floor(1 + Math.random() * 30);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};