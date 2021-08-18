import gameEngine from '../index.js';
import getRandomIntFromTo from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgressionData = () => {
  const roundData = () => {
    const numberOfProgressionElements = getRandomIntFromTo(5, 10);

    // 5 so it wouldn't be too difficult to count.
    const progressionBase = getRandomIntFromTo(1, 5);

    const firstElement = getRandomIntFromTo(0, 100);

    const progressionNumbers = [firstElement];

    for (let i = 1; i < numberOfProgressionElements; i += 1) {
      progressionNumbers.push(progressionNumbers[i - 1] + progressionBase);
    }

    const randomMissingElementIndex = getRandomIntFromTo(0, numberOfProgressionElements - 1);

    const answer = String(progressionNumbers[randomMissingElementIndex]);

    progressionNumbers[randomMissingElementIndex] = '..';

    const question = progressionNumbers.join(' ');

    return { question, answer };
  };

  return roundData;
};

export default () => {
  gameEngine(generateProgressionData(), description);
};
//
// const calculateCorrectAnswer = (string) => {
//   const progressionElements = string.split(' ');
//   const missingElementIndex = progressionElements.indexOf('..');
//   let progressionBase;
//
//   if (missingElementIndex > 1) {
//     // two first elements are used to find the base of progression
//     progressionBase = Number(progressionElements[1]) - Number(progressionElements[0]);
//     // and it guarantees that the missing element has an identified element to the left
//     return String(Number(progressionElements[missingElementIndex - 1]) + progressionBase);
//   }
//   // otherwise if the missing element is somewhere in the beginning, it's either first or second
//   progressionBase = Number(progressionElements[3]) - Number(progressionElements[2]);
//   // it guarantees that the missing element has a neighbour to the right
//   return String(Number(progressionElements[missingElementIndex + 1]) - progressionBase);
// };
