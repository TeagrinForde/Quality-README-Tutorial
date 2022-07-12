// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instructions of your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which licesnse will you be using for your application?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'CC0'],
        default: 'Apache'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
