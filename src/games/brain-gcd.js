import getRandomNum from '../functions';

export const createQuestion = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return {
    text: `${num1} ${num2}`,
    answer: gcd(num1, num2),
  };
};

export const getGameRules = () => 'Find the greatest common divisor of given numbers.';
