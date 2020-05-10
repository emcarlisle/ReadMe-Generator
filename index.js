const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs").promises;



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

const writeToFile = async(fileName, data) => {
    const content = genMarkdown(data);
    await fs.writeFile(fileName, content);
}

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);

        await writeToFile('README.md', userInput);
    } catch (err) {
        console.log(err);
    }
}

init();

// review activity 31 on video, @ 24 mins into saturday class