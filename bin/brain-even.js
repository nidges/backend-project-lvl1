#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { getRandomNumber, isEven } from '../src/games/even-game.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const win = isUserWinning(getRandomNumber, isEven);

if (win) console.log(`Congratulations, ${userName}!`);
else console.log(`Let's try again, ${userName}!`);
