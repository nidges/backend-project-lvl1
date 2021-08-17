import wrapDataInAGame from '../index.js';

const generateGCDData = () => {
  const greeting = 'Find the greatest common divisor of given numbers.';

  const roundData = () => {
    //  will have 100 as a maximum number
    let firstNumber = Math.floor(Math.random() * 101);
    let secondNumber = Math.floor(Math.random() * 101);
    const question = `${firstNumber} ${secondNumber}`;

    while (secondNumber) {
      const buffer = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = buffer;
    }

    const answer = String(firstNumber);

    return { question, answer };
  };

  const gameData = { greeting, roundData };

  return gameData;
};

export default () => {
  wrapDataInAGame(generateGCDData());
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
