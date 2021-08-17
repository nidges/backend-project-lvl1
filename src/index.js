import readlineSync from 'readline-sync';
import getName from './cli.js';

export default (gameData) => {
  console.log('Welcome to the Brain Games!');

  const userName = getName();

  console.log(`Hello, ${userName}`);
  console.log(gameData.greeting);

  for (let i = 0; i < 3; i += 1) {
    const roundData = gameData.roundData();
    const randomQuestion = roundData.question;
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = roundData.answer;

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
