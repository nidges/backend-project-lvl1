// one sentence isn't correct in hexlet:
// '..'  is wrong answer ;(. Correct answer was '..'
// should be:
// '..' is the wrong answer ;(. Correct answer is '..'

import readlineSync from 'readline-sync';

export default (generateQuestion, calculateCorrectAnswer) => {
  let i = 0;

  while (i < 3) {
    const randomQuestion = generateQuestion();
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateCorrectAnswer(randomQuestion);

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
