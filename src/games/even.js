import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  return (number % 2 === 0);
}

const generateEvenData = () => {
  const getRoundData = () => {
    const question = getRandomInt(0, 100);

    const answer = isEven(question) ? 'yes' : 'no';

    return { question, answer };
  };

  return getRoundData;
};

export default () => {
  gameEngine(generateEvenData(), description);
};

// export const generateQuestion = () => Math.floor(Math.random() * 100);
//
// export const calculateCorrectAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');
