import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (numberOfElements, progressionBase, firstElement) => {
  const progressionNumbers = [firstElement];

  for (let i = 1; i < numberOfElements; i += 1) {
    progressionNumbers.push(firstElement + i * progressionBase);
  }

  return progressionNumbers;
};

const generateRoundData = () => {
  const numberOfElements = getRandomInt(5, 10);
  const progressionBase = getRandomInt(1, 5);
  const firstElement = getRandomInt(0, 100);
  const progressionNumbers = generateProgression(numberOfElements, progressionBase, firstElement);
  const randomMissingElementIndex = getRandomInt(0, numberOfElements - 1);

  const answer = String(progressionNumbers[randomMissingElementIndex]);

  progressionNumbers[randomMissingElementIndex] = '..';

  const question = progressionNumbers.join(' ');

  return { question, answer };
};

export default () => {
  gameEngine(generateRoundData, description);
};
