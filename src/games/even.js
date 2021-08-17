import wrapDataInAGame from '../index.js';
import getRandomIntFromTo from '../utils.js';

const generateEvenData = () => {
  const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

  const roundData = () => {
    const question = getRandomIntFromTo(0, 100);

    const answer = (question % 2 === 0) ? 'yes' : 'no';

    return { question, answer };
  };

  const gameData = { greeting, roundData };

  return gameData;
};

export default () => {
  wrapDataInAGame(generateEvenData());
};

// export const generateQuestion = () => Math.floor(Math.random() * 100);
//
// export const calculateCorrectAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');
