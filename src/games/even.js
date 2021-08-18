import wrapDataInAGame from '../index.js';
import getRandomIntFromTo from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenData = () => {
  const roundData = () => {
    const question = getRandomIntFromTo(0, 100);

    const answer = (question % 2 === 0) ? 'yes' : 'no';

    return { question, answer };
  };

  return roundData;
};

export default () => {
  wrapDataInAGame(generateEvenData(), description);
};

// export const generateQuestion = () => Math.floor(Math.random() * 100);
//
// export const calculateCorrectAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');
