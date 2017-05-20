import getRandomNum from '../functions';

export const createQuestion = () => {
  const number = getRandomNum();

  return {
    text: number,
    answer: (number % 2 === 0) ? 'yes' : 'no',
  };
};

export const getGameRules = () => 'Answer "yes" if number even otherwise answer "no"';
