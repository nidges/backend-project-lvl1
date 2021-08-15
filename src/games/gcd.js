export const generateQuestion = () => {
  // will have 100 as a maximum number
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  return `${firstNumber} ${secondNumber}`;
};

export const calculateCorrectAnswer = (string) => {
  let [
    firstNumber,
    secondNumber,
  ] = string.split(' ').map((str) => Number(str));

  while (secondNumber) {
    const buffer = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = buffer;
  }

  return String(firstNumber);
};
