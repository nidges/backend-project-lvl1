import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;

  while (i <= Math.sqrt(number)) {
    if (number % i === 0) return false;
    i += 1;
  }

  return true;
};

const generateRoundData = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  gameEngine(generateRoundData, description);
};
