#!/usr/bin/env node

import getName from '../src/cli.js';
import isUserWinning from '../src/index.js';
import { getRandomExpression, expressionResult } from '../src/games/calc-game.js';

console.log('Welcome to the Brain Games!');

const userName = getName();

console.log(`Hello, ${userName}`);

console.log('What is the result of the expression?');

const win = isUserWinning(getRandomExpression, expressionResult);

if (win) console.log(`Congratulations, ${userName}!`);
else console.log(`Let's try again, ${userName}!`);