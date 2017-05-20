import getRandomNum from '../functions';

export const createQuestion = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const randomN = Math.floor((Math.random() * 3) + 1);
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
      rightAnswer = 'error';
  }

  return {
    text: `${num1} ${symbol} ${num2}`,
    answer: rightAnswer,
  };
};

export const getGameRules = () => 'What is the result of the expression?';
