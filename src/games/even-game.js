import readlineSync from 'readline-sync';

export default () => {
  let i = 1;

  const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

  while (i <= 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven(randomNumber) === userAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.`);
      return false;
    }
  }

  return true;
};
