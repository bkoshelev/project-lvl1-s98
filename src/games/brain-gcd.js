import getRandomNum from '../functions';
import startGame from '..';

export const createQuestion = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return {
    text: `${num1} ${num2}`,
    answer: String(gcd(num1, num2)),
  };
};

export const getGameRules = () => 'Find the greatest common divisor of given numbers.';

export default () => {
  const functions = {
    GameRules: getGameRules(),
    createQuestion,
  };
  startGame(functions);
  return true;
};
