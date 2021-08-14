#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { getRandomPair, getGCD } from '../src/games/gcd-game.js';
import sayFarewell from '../src/farewell.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('Find the greatest common divisor of given numbers.');

const win = isUserWinning(getRandomPair, getGCD);

sayFarewell(win, userName);
