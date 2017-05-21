import getRandomNum from '../functions';
import startGame from '..';

const createQuestion = () => {
  const firstNum = [getRandomNum(1, 20)];
  const step = getRandomNum(1, 4);
  const missNum = getRandomNum(0, 9);

  const createStepProgr = (result, index) => {
    if (index === 10) return result;
    result.push(result[result.length - 1] + step);
    return createStepProgr(result, index + 1);
  };
  const newProgr = createStepProgr(firstNum, 0);

  const rightAnswer = newProgr[missNum];
  newProgr[missNum] = '..';

  return {
    text: newProgr.join(' '),
    answer: String(rightAnswer),
  };
};

const gameRules = 'What number is missing in this progression?';
export default () => startGame(gameRules, createQuestion);
