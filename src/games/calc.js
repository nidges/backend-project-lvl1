import gameEngine from '../index.js';
import getRandomIntFromTo from '../utils.js';

const description = 'What is the result of the expression?';

const calcAnswer = (firstOperand, operator, secondOperand) => {
  let answer;

  switch (operator) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return String(answer);
}

const generateCalcData = () => {

  const roundData = () => {
    const operators = ['+', '-', '*'];
    const randomOperatorIndex = getRandomIntFromTo(0, operators.length - 1);
    const operator = operators[randomOperatorIndex];
    const firstOperand = getRandomIntFromTo(0, 30);
    const secondOperand = getRandomIntFromTo(0, 30);
    const question = `${firstOperand} ${operator} ${secondOperand}`;

    const answer = calcAnswer(firstOperand, operator, secondOperand);

    return { question, answer };
  };

  return roundData;
};

export default () => {
  gameEngine(generateCalcData(), description);
};

// export const generateQuestion = () => {
//   const operators = ['+', '-', '*'];
//   const randomOperatorIndex = Math.floor(Math.random() * 3);
//   const operator = operators[randomOperatorIndex];
//
//   // max random number will be 29, so that expressions won't be too difficult
//   const firstOperand = Math.floor(Math.random() * 30);
//   const secondOperand = Math.floor(Math.random() * 30);
//
//   return `${firstOperand} ${operator} ${secondOperand}`;
// };
//
// export const calculateCorrectAnswer = (string) => {
//   const [firstOperand, operator, secondOperand] = string.split(' ');
//
//   let answer;
//   switch (operator) {
//     case '+':
//       // this is the only case where type conversion is necessary
//       // nevertheless let's use it everywhere for better code readability
//       answer = Number(firstOperand) + Number(secondOperand);
//       break;
//     case '-':
//       answer = Number(firstOperand) - Number(secondOperand);
//       break;
//     case '*':
//       answer = Number(firstOperand) * Number(secondOperand);
//       break;
//     default:
//       break;
//   }
//
//   return String(answer);
// };
