import getRandomNum from '../functions';
import startGame from '..';

export const createQuestion = () => {
  const randomNum = getRandomNum(100, 500);
  const stringRandomNum = String(randomNum).split('');
  const arrOfNums = stringRandomNum.map(x => Number(x));

  const balance = (arr) => {
    const sIncrease = (i, ii) => {
      if (i > ii) { return 1; } else if (i < ii) { return -1; }
      return 0;
    };
    const newArr = arr.sort(sIncrease());

    if ((arr[arr.length - 1] - arr[0]) <= 1) {
      return arr;
    }
    newArr[0] += 1;
    newArr[arr.length - 1] -= 1;

    return balance(newArr);
  };

  const balanceResult = balance(arrOfNums);
  const arrToStr = (element, acc) => element + acc;
  const rightAnswer = balanceResult.reduce(arrToStr, '', balanceResult);

  return {
    text: randomNum,
    answer: rightAnswer,
  };
};

const gameRules = 'Balance the given number.';
export default () => startGame(gameRules, createQuestion);
