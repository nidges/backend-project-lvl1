#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { getRandomExpression, expressionResult } from '../src/games/calc-game.js';
import sayFarewell from '../src/farewell.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('What is the result of the expression?');

const win = isUserWinning(getRandomExpression, expressionResult);

sayFarewell(win, userName);
