const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
/* * At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email
*/



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What are the table of contents?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do we install the application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of usage license does this project have?',
        choices: [
            'MIT',
            'ISC',
            'Apache',
            'BSD'
        ]
    }

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
