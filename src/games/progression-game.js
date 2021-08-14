export const getRandomProgression = () => {
    const numberOfProgressionElements = Math.floor(Math.random() * 6) + 5;
    //5 so it wouldn't be too difficult to count. '+1' is needed for it not to be zero
    const progressionBase = Math.floor(Math.random() * 5) + 1;
    const firstElement = Math.floor(Math.random() * 101);
    const progressionNumbers = [firstElement];

    for (let i = 1; i < numberOfProgressionElements; i += 1) {

        progressionNumbers.push(progressionNumbers[i - 1] + progressionBase);
    }

    const randomMissingElementIndex = Math.floor(Math.random() * (numberOfProgressionElements - 1));

    progressionNumbers[randomMissingElementIndex] = '..';

    return progressionNumbers.join(' ');
}

export const getMissingElement = (string) => {
    const progressionNumbers = string.split(' ');
    const missingElementIndex = progressionNumbers.indexOf('..');
    let progressionBase;

    if (missingElementIndex > 1) {
        progressionBase = Number(progressionNumbers[1]) - Number(progressionNumbers[0]);
        return String(Number(progressionNumbers[missingElementIndex - 1]) + progressionBase);
    } else {
        progressionBase = Number(progressionNumbers[3]) - Number(progressionNumbers[2]);
        return String(Number(progressionNumbers[missingElementIndex + 1]) - progressionBase);
    }
}
