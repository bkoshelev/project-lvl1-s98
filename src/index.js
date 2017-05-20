import readlineSync from 'readline-sync';

const askPLayerName = () => readlineSync.question('May I have your name? ');

export default (GameObject) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${GameObject.getGameRules()}\n`);

  const player = {
    name: askPLayerName(),
  };

  console.log(`Hello, ${player.name}!\n`);


  const addRound = (round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${player.name}!`);
    }

    const question = GameObject.createQuestion();
    console.log(`Question: ${question.text}`);

    const getPlayerAnswer = () => {
      const answer = readlineSync.question('Your Answer: ');
      return isNaN(answer) ? answer : Number(answer);
    };

    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === question.answer) {
      console.log('Correct!');
      addRound(round + 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log(`Let's try again, ${player.name}!`);
      return false;
    }

    return false;
  };

  addRound(0);
  return false;
};
