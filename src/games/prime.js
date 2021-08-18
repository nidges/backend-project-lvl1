import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;

  while (i < number) {
    if (number % i === 0) return false;
    i += 1;
  }

  return true;
}

// const generatePrimeData = () => {
  const generateRoundData = () => {
    const question = getRandomInt(0, 100);

    const answer = isPrime(question) ? 'yes' : 'no';

    return { question, answer };
  };

//   return getRoundData;
// };

export default () => {
  gameEngine(generateRoundData, description);
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
