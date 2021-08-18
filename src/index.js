import readlineSync from 'readline-sync';

export default (gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(gameData.greeting);

  for (let i = 0; i < 3; i += 1) {
    const roundData = gameData.roundData();
    const { question: randomQuestion, answer: correctAnswer } = roundData;
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
