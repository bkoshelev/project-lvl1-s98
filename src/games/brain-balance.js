import getRandomNum from '../functions';
import startGame from '..';

export const createQuestion = () => {
  const randomNum = getRandomNum(100, 500);
  const stringRandomNum = String(randomNum).split('');
  const arrOfNums = stringRandomNum.map(x => Number(x));

  const Balance = (arr) => {
    console.log(arr);

    const sIncrease = (i, ii) => { // По возрастанию
      if (i > ii) { return 1; } else if (i < ii) { return -1; }
      return 0;
    };
    const newArr = arr.sort(sIncrease()); // Вернет [1,2,3,4,5,6,7,8,9,10]

    if ((arr[arr.length - 1] - arr[0]) <= 1) {
      return arr;
    }
    newArr[0] += 1;
    newArr[arr.length - 1] -= 1;

    return Balance(newArr);
  };

  const balanceResult = Balance(arrOfNums);
  const ArrToStr = (element, acc) => element + acc;
  const rightAnswer = balanceResult.reduce(ArrToStr, '', balanceResult);

  return {
    text: randomNum,
    answer: rightAnswer,
  };
};

export const getGameRules = () => 'Balance the given number.';

export default () => {
  const functions = {
    GameRules: getGameRules(),
    createQuestion,
  };
  startGame(functions);
  return true;
};
