// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of the project?',
    'Enter the project description:',
    'Enter any installation instructions:',
    'What is the usage information?',
    'What are the contribution guidelines?',
    'What are the test instructions?',
    'Which open-source license would you prefer?'
];

// TODO: Create a function to write README file
function writeToFile(response) {
    const markdownContent = generateMarkdown(response);

    fs.writeFile('README.md', markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
)};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: questions[0],
        },
        {
        type: 'input',
        name: 'description',
        message: questions[1],
        },
        {
        type: 'input',
        name: 'installation',
        message: questions[2],
        },
        {
        type: 'input',
        name: 'usage',
        message: questions[3],
        },
        {
        type: 'input',
        name: 'contribution',
        message: questions[4],
        },
        {
        type: 'input',
        name: 'test',
        message: questions[5],
        },
        {
        type: 'list',
        name: 'license',
        message: questions[6],
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'MPL', 'No license please'],
        },
    ])
    .then((response) => {
        writeToFile(response);
    })
};

// Function call to initialize app
init();
