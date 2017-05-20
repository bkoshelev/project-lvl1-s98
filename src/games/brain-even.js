import getRandomNum from '../functions';
import startGame from '..';

const createQuestion = () => {
  const number = getRandomNum(1, 20);

  return {
    text: number,
    answer: (number % 2 === 0) ? 'yes' : 'no',
  };
};

const getGameRules = () => 'Answer "yes" if number even otherwise answer "no"';

export default () => {
  const functions = {
    GameRules: getGameRules(),
    createQuestion,
  };
  startGame(functions);
  return true;
};
