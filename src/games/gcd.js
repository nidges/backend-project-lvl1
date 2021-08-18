import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  const modulo = firstNumber % secondNumber;
  if (modulo === 0) return secondNumber;
  return findGCD(secondNumber, modulo);
 }

// const generateGCDData = () => {
  const generateRoundData = () => {
    let firstNumber = getRandomInt(0, 100);
    let secondNumber = getRandomInt(0, 100);
    const question = `${firstNumber} ${secondNumber}`;

    // while (secondNumber) {
    //   const buffer = secondNumber;
    //   secondNumber = firstNumber % secondNumber;
    //   firstNumber = buffer;
    // }

    const answer = String(findGCD(firstNumber, secondNumber));

    return { question, answer };
  };

//   return getRoundData;
// };

export default () => {
  gameEngine(generateRoundData, description);
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
