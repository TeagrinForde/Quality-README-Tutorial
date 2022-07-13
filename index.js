// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log(process.argv);

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

var inquirerResponses = inquirer.prompt(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirerResponses
    .then((data) => {
        fs.writeFile(fileName, JSON.stringify(data), (error) => {  //look up writeFileSync (path.join(process.cwd(), fileName), data);
            if(error) {
                console.log(error)
            } else {
                console.log('Success!');
            }
        })
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
};

// Function call to initialize app
init();
