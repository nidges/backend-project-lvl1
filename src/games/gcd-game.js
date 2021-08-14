export const getRandomPair = () => {
  // will have 100 as a maximum number
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  return `${firstNumber} ${secondNumber}`;
};

export const getGCD = (string) => {
  const numbers = string.split(' ');
  let firstNumber = Number(numbers[0]);
  let secondNumber = Number(numbers[1]);

  while (secondNumber) {
    const buffer = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = buffer;
  }

  return String(firstNumber);
};
