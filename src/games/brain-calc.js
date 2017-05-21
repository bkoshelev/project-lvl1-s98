import getRandomNum from '../functions';
import startGame from '..';

const createQuestion = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const randomN = getRandomNum(1, 3);
  let rightAnswer = 0;
  let symbol = false;
  switch (randomN) {
    case 1 :
      symbol = '+';
      rightAnswer = num1 + num2;
      break;
    case 2 :
      symbol = '-';
      rightAnswer = num1 - num2;
      break;
    case 3 :
      symbol = '*';
      rightAnswer = num1 * num2;
      break;
    default:
      return false;
  }

  return {
    text: `${num1} ${symbol} ${num2}`,
    answer: String(rightAnswer),
  };
};

const gameRules = 'Find the greatest common divisor of given numbers.';
export default () => startGame(gameRules, createQuestion);
