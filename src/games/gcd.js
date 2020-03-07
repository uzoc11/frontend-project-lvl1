import { cons } from '@hexlet/pairs';

export const gameDescription = 'Find the greatest common divisor of given numbers';


const calculateNod = (a, b) => {
    const remains = a % b;
    if (remains === 0 || b === 0) {
        return b;
    }
    return calculateNod(b, remains);
};

export const getGameData = () => {
    const randomNum1 = Math.floor(1 + Math.random() * 100);
    const randomNum2 = Math.floor(1 + Math.random() * 100);
    const gameQuestion = `${randomNum1} ${randomNum2}`;   
    const rightAnswer = String(calculateNod(randomNum1, randomNum2));
    return cons(gameQuestion, rightAnswer);
};