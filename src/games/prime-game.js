export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const isPrime = (number) => {
  if (number <= 3) return 'yes';

  let i = 2;

  while (i < number) {
    if (number % i === 0) return 'no';
    i += 1;
  }

  return 'yes';
};
