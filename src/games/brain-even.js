import getRandomNum from '../functions';
import startGame from '..';

const createQuestion = () => {
  const number = getRandomNum(1, 20);

  return {
    text: number,
    answer: (number % 2 === 0) ? 'yes' : 'no',
  };
};

const gameRules = 'Answer "yes" if number even otherwise answer "no"';
export default () => startGame(gameRules, createQuestion);
