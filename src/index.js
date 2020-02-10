import readlineSync from 'readline-sync';

export const greetings = () => {
    const userName = readlineSync.question('May I have your name ');
    console.log('Hello ' + userName + '!');
};


export const isEven = (result) => {
    if (result % 2 === 0) {
        return 'yes';
    }
    if (result % 2 !== 0) {
        return 'no';
    }
};


export const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    
    const userName = readlineSync.question('May I have your name ');
    console.log('Hello ' + userName + '!');

    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    
    let i = 0;
    while (i < 3) {

    const randomNum = 1 + Math.random() * 30;
    const result = Math.floor(randomNum);

    
        console.log (`Question: ${result}`);
        const ans = readlineSync.question('Answer: ');
    
        if (ans === isEven(result)) {
            i += 1;
            i < 3 ? console.log('Correct!') : console.log(`Correct!\nCongratulations, ${userName}!`);
        }
        if (ans !== isEven(result)) {
            console.log(`${ans} is wrong answer ;(. Correct answer was ${isEven(result)}.\nLet's try again, ${userName}`);
            break;
        }
    }
 };