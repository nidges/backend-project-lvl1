import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

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
};

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const firstOperand = getRandomInt(0, 30);
  const secondOperand = getRandomInt(0, 30);

  const question = `${firstOperand} ${operator} ${secondOperand}`;

  const answer = calcAnswer(firstOperand, operator, secondOperand);

  return { question, answer };
};

export default () => {
  gameEngine(generateRoundData, description);
};
