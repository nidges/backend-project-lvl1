import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  const modulo = firstNumber % secondNumber;

  if (modulo === 0) return secondNumber;

  return findGCD(secondNumber, modulo);
};

const generateRoundData = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(findGCD(firstNumber, secondNumber));

  return { question, answer };
};

export default () => {
  gameEngine(generateRoundData, description);
};
