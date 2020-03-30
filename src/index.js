import readlineSync from 'readline-sync';

const stepsCount = 3;

const engine = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameDescription}`);
  for (let i = 1; i <= stepsCount; i += 1) {
    const gameData = getGameData();
    const getQuestion = gameData[0];
    const getAnswer = gameData[1];
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== getAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
