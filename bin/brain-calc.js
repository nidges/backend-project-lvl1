#!/usr/bin/env node

// import getName from '../src/cli.js';
// import isUserWinning from '../src/index.js';
// import { generateQuestion, calculateCorrectAnswer } from '../src/games/calc.js';
// import sayFarewell from '../src/farewell.js';
//
// console.log('Welcome to the Brain Games!');
//
// const userName = getName();
//
// console.log(`Hello, ${userName}`);
//
// console.log('What is the result of the expression?');
//
// const win = isUserWinning(generateQuestion, calculateCorrectAnswer);
//
// sayFarewell(win, userName);

import play from '../src/games/calc.js';

play();
