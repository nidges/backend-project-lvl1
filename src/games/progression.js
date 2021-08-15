export const generateQuestion = () => {
  // number of elements must be between 5 & 10 including both
  const numberOfProgressionElements = Math.floor(Math.random() * 6) + 5;

  // 5 so it wouldn't be too difficult to count. '+1' is needed for it not to be zero
  const progressionBase = Math.floor(Math.random() * 5) + 1;

  // first element is an integer from 0 to 100 including both
  const firstElement = Math.floor(Math.random() * 101);

  const progressionNumbers = [firstElement];

  for (let i = 1; i < numberOfProgressionElements; i += 1) {
    progressionNumbers.push(progressionNumbers[i - 1] + progressionBase);
  }

  const randomMissingElementIndex = Math.floor(Math.random() * (numberOfProgressionElements - 1));

  progressionNumbers[randomMissingElementIndex] = '..';

  return progressionNumbers.join(' ');
};

export const calculateCorrectAnswer = (string) => {
  const progressionElements = string.split(' ');
  const missingElementIndex = progressionElements.indexOf('..');
  let progressionBase;

  if (missingElementIndex > 1) {
    // two first elements are used to find the base of progression
    progressionBase = Number(progressionElements[1]) - Number(progressionElements[0]);
    // and it guarantees that the missing element has an identified element to the left
    return String(Number(progressionElements[missingElementIndex - 1]) + progressionBase);
  }
  // otherwise if the missing element is somewhere in the beginning, it's either first or second
  progressionBase = Number(progressionElements[3]) - Number(progressionElements[2]);
  // it guarantees that the missing element has a neighbour to the right
  return String(Number(progressionElements[missingElementIndex + 1]) - progressionBase);
};
