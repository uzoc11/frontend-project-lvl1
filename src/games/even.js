import engine from '../index.js';
import generateNumber from '../numGenerator.js';

const isEven = (result) => result % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = generateNumber(1, 30);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, rightAnswer];
};

export default () => engine(gameDescription, getGameData);
