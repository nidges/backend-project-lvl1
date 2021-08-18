import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (firstOperand, operator, secondOperand) => {
 switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      break;
  }
};

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const firstOperand = getRandomInt(0, 30);
  const secondOperand = getRandomInt(0, 30);

  const question = `${firstOperand} ${operator} ${secondOperand}`;

  const answer = String(calculate(firstOperand, operator, secondOperand));

  return { question, answer };
};

export default () => {
  gameEngine(generateRoundData, description);
};
