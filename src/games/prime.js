import { cons } from '@hexlet/pairs';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';



const isPrime = (num) => {
    if (num < 2) {
        return 'no';
    }
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};


export const getGameData = () => {
    const randomNum = Math.floor(1 + Math.random() * 11);
    const gameQuestion = randomNum;
    const rightAnswer = isPrime(randomNum);
    return cons(gameQuestion, rightAnswer);
};