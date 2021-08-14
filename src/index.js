//some sentences aren't stylistically correct

import readlineSync from 'readline-sync';

export default (gameQuestion, gameAnswer) => {
  let i = 0;

  while (i < 3) {
    const randomQuestion = gameQuestion();
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gameAnswer(randomQuestion);

    if (correctAnswer === userAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
