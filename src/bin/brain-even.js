#!/usr/bin/env node
import readlineSync from 'readline-sync';
import QuestionName from '..';

const RandomN = () => {
  const num = Math.round((1 - 0.5) + (Math.random() * 20));
  return {
    value: num,
    even: (num % 2 === 0) ? 'yes' : 'no',
  };
};

const game = (round, player) => {
  if (round === 3) {
    return console.log(`Congratulations, ${player.name}!`);
  }
  const number = RandomN();
  console.log(`Question: ${number.value}`);
  const ans = readlineSync.question('Answer: ');


  if (ans === number.even) {
    console.log('Correct!');
    game(round + 1, player);
  } else {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${number.even}'.`);
    console.log(`Let's try again, ${player.name}!`);
    return false;
  }

  return false;
};


console.log('Welcome to the Brain Games!\n');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const player = {
  name: QuestionName(),
};

console.log(`Hello, ${player.name}!`);
game(0, player);
