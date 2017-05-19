import readlineSync from 'readline-sync';


//           OTHER FUNCTIONS
const GetRandomNum = () => Math.round(0.5 + (Math.random() * 20));

//          BRAIN-EVEN GAME
const CreateQuestionEvenGame = () => {
  const number = GetRandomNum();

  return {
    text: number,
    answer: (number % 2 === 0) ? 'yes' : 'no',
  };
};

//           BRAIN-CALC GAME
const CreateQuestionCalcGame = () => {
  const num1 = GetRandomNum();
  const num2 = GetRandomNum();
  const RandomN = Math.floor((Math.random() * 3) + 1);
  console.log(RandomN);
  let RightAnswer = 0;
  let Symbol = false;
  switch (RandomN) {
    case 1 :
      Symbol = '+';
      RightAnswer = num1 + num2;
      break;
    case 2 :
      Symbol = '-';
      RightAnswer = num1 - num2;
      break;
    case 3 :
      Symbol = '*';
      RightAnswer = num1 * num2;
      break;
    default:
      RightAnswer = 'error';
  }

  return {
    text: `${num1} ${Symbol} ${num2}`,
    answer: RightAnswer,
  };
};

//           BRAIN-GCD GAME
const CreateQuestionGcdGame = () => {
  const num1 = GetRandomNum();
  const num2 = GetRandomNum();

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };


  return {
    text: `${num1} ${num2}`,
    answer: gcd(num1, num2),
  };
};

//           MAIN GAME
const PrepareGame = () => {
  console.log('Welcome to the Brain Games!');
};

const GetGameRules = (game) => {
  switch (game.name) {
    case 'even' :
      return '\'Answer "yes" if number even otherwise answer "no"';
    case 'calc' :
      return 'What is the result of the expression?';
    case 'gcd' :
      return 'Find the greatest common divisor of given numbers.';
    default :
      return 'error';
  }
};

const AskPLayerName = () => readlineSync.question('May I have your name? ');

const CreateQuestion = (game) => {
  switch (game.name) {
    case 'even' :
      return CreateQuestionEvenGame();
    case 'calc' :
      return CreateQuestionCalcGame();
    case 'gcd' :
      return CreateQuestionGcdGame();
    default :
      return 'error';
  }
};

export default (game) => {
  PrepareGame();
  console.log(`${GetGameRules(game)}\n`);

  const Player = {
    name: AskPLayerName(),
  };

  console.log(`Hello, ${Player.name}!\n`);


  const AddRound = (round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${Player.name}!`);
    }

    const question = CreateQuestion(game);

    console.log(`Question: ${question.text}`);
    const PlayerAnswer = Number(readlineSync.question('Your Answer: '));


    if (PlayerAnswer === question.answer) {
      console.log('Correct!');
      AddRound(round + 1);
    } else {
      console.log(`'${PlayerAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log(`Let's try again, ${Player.name}!`);
      return false;
    }

    return false;
  };

  AddRound(0);
  return false;
};
