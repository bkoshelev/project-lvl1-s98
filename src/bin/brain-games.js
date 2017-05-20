#!/usr/bin/env node

import questionName from '..';

console.log('Welcome to the Brain Games!\n');
const name = questionName();
console.log(`Hello, ${name}!`);
