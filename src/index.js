import readlineSync from 'readline-sync';

export default (question, game) => {
  let i = 0;

  while (i < 3) {
    const randomQuestion = question();
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = game(randomQuestion);

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
