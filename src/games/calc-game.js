import _ from 'lodash';

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  // max random number will be 29, so that expressions won't be too difficult
  const firstOperand = Math.floor(Math.random() * 30);
  const secondOperand = Math.floor(Math.random() * 30);
  const operator = _.sample(operators);
  return `${firstOperand} ${operator} ${secondOperand}`;
};

export const expressionResult = (string) => {
  const symbols = string.split(' ');
  const operators = ['+', '-', '*'];
  const firstOperand = Number(symbols[0]);
  const secondOperand = Number(symbols[2]);
  const operatorIndex = operators.indexOf(symbols[1]);

  switch (operatorIndex) {
    case 0:
      return String(firstOperand + secondOperand);
    case 1:
      return String(firstOperand - secondOperand);
    default:
      return String(firstOperand * secondOperand);
  }
};
