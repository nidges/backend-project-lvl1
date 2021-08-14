#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { getRandomProgression, getMissingElement } from '../src/games/progression-game.js';
import sayFarewell from '../src/farewell.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('What number is missing in the progression?');

const win = isUserWinning(getRandomProgression, getMissingElement);

sayFarewell(win, userName);
