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
      rightAnswer = 'error';
  }

  return {
    text: `${num1} ${symbol} ${num2}`,
    answer: String(rightAnswer),
  };
};

const getGameRules = () => 'What is the result of the expression?';

export default () => {
  const functions = {
    GameRules: getGameRules(),
    createQuestion,
  };
  startGame(functions);
  return true;
};
