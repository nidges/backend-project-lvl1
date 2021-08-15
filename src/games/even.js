export const generateQuestion = () => Math.floor(Math.random() * 100);

export const calculateCorrectAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');
