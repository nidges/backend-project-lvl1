import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateGCDData = () => {
  const roundData = () => {
    let firstNumber = getRandomInt(0, 100);
    let secondNumber = getRandomInt(0, 100);
    const question = `${firstNumber} ${secondNumber}`;

    while (secondNumber) {
      const buffer = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = buffer;
    }

    const answer = String(firstNumber);

    return { question, answer };
  };

  return roundData;
};

export default () => {
  gameEngine(generateGCDData(), description);
};

// export const generateQuestion = () => {
//   // will have 100 as a maximum number
//   const firstNumber = Math.floor(Math.random() * 101);
//   const secondNumber = Math.floor(Math.random() * 101);
//   return `${firstNumber} ${secondNumber}`;
// };
//
// export const calculateCorrectAnswer = (string) => {
//   let [
//     firstNumber,
//     secondNumber,
//   ] = string.split(' ').map((str) => Number(str));
//
//   while (secondNumber) {
//     const buffer = secondNumber;
//     secondNumber = firstNumber % secondNumber;
//     firstNumber = buffer;
//   }
//
//   return String(firstNumber);
// };
