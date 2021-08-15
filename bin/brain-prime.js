#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { generateQuestion, calculateCorrectAnswer } from '../src/games/prime.js';
import sayFarewell from '../src/farewell.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const win = isUserWinning(generateQuestion, calculateCorrectAnswer);

sayFarewell(win, userName);
