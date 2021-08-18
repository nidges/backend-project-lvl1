import readlineSync from 'readline-sync';

export default (generateRoundData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const { question: randomQuestion, answer: correctAnswer } = generateRoundData();
    // const randomQuestion = roundData.question;
    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // const correctAnswer = roundData.answer;

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
