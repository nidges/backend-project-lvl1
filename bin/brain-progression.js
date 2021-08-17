#!/usr/bin/env node

// import getName from '../src/cli.js';
// import isUserWinning from '../src/index.js';
// import { generateQuestion, calculateCorrectAnswer } from '../src/games/progression.js';
// import sayFarewell from '../src/farewell.js';
//
// console.log('Welcome to the Brain Games!');
//
// const userName = getName();
//
// console.log(`Hello, ${userName}`);
//
// console.log('What number is missing in the progression?');
//
// const isItAWin = isUserWinning(generateQuestion, calculateCorrectAnswer);
//
// sayFarewell(isItAWin, userName);

import letsPlay from '../src/games/progression.js';

letsPlay();
