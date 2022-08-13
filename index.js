import inquirer from 'inquirer';
import questions from './questions.js';
import mdGen from './utils/markdown.js';

 inquirer.prompt(questions).then(mdGen);