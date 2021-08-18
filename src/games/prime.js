import gameEngine from '../index.js';
import getRandomIntFromTo from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeData = () => {
  const roundData = () => {
    const question = getRandomIntFromTo(0, 100);

    let answer = 'yes';

    let i = 2;

    while (i < question) {
      if (question % i === 0) {
        answer = 'no';
      }
      i += 1;
    }

    return { question, answer };
  };

  return roundData;
};

export default () => {
  gameEngine(generatePrimeData(), description);
};

// export const generateQuestion = () => Math.floor(Math.random() * 100);
//
// export const calculateCorrectAnswer = (number) => {
//   if (number <= 3) return 'yes';
//
//   let i = 2;
//
//   while (i < number) {
//     if (number % i === 0) return 'no';
//     i += 1;
//   }
//
//   return 'yes';
// };
