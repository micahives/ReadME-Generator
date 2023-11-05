// NOTE: Sample README.md generated through the CLI app is located in the Develop folder
// NOTE: README.md file for the repository is located in the project root folder

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
    'Which open-source license would you prefer?',
    'What is your GitHub username? (To be listed in the Questions/Contact section of the README)',
    'What is your email address? (To be listed in the Questions/Contact section of the README)'
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
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'BSD-3', 'Mozilla Public License 2.0', 'No license please'],
        },
        {
        type: 'input',
        name: 'github',
        message: questions[7],
        },
        {
        type: 'input',
        name: 'email',
        message: questions[8],
        },
    ])
    .then((response) => {
        writeToFile(response);
    })
};

// Function call to initialize app
init();
