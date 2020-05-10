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
        name: 'username',
        message: 'What is your Github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github email?'
    },
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
        name: 'usage',
        message: 'What is your intended purpose?'
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
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
    }

];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function(err){
        if (err) {
            console.log(err);
            throw err;
        } 
        console.log('Success!');
    }) 
}

function init() {
    inquirer.prompt(questions).then((response) => {
        fs.readFile(genMarkdown());
        writeToFile(response);
    })
}

init();

// review activity 31 on video, @ 24 mins into saturday class