export const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = Math.floor(Math.random() * 3);
  const operator = operators[randomOperatorIndex];

  // max random number will be 29, so that expressions won't be too difficult
  const firstOperand = Math.floor(Math.random() * 30);
  const secondOperand = Math.floor(Math.random() * 30);

  return `${firstOperand} ${operator} ${secondOperand}`;
};

export const calculateCorrectAnswer = (string) => {
  const [firstOperand, operator, secondOperand] = string.split(' ');

  let answer;
  switch (operator) {
    case '+':
      // this is the only case where type conversion is necessary
      // nevertheless let's use it everywhere for better code readability
      answer = Number(firstOperand) + Number(secondOperand);
      break;
    case '-':
      answer = Number(firstOperand) - Number(secondOperand);
      break;
    case '*':
      answer = Number(firstOperand) * Number(secondOperand);
      break;
    default:
      break;
  }

  return String(answer);
};
