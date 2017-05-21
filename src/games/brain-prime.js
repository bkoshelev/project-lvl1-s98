import getRandomNum from '../functions';
import startGame from '..';

const createQuestion = () => {
  const RandomN = getRandomNum(1, 20);

  const isPrime = (num, index) => {
    if (index >= num - 1) return 'yes';
    if (num % index === 0) return 'no';
    return isPrime(num, index + 1);
  };
  const rightAnswer = isPrime(RandomN, 2);

  return {
    text: RandomN,
    answer: rightAnswer,
  };
};

const gameRules = 'Is it a prime number?';
export default () => startGame(gameRules, createQuestion);
