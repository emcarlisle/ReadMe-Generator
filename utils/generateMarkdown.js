function generateMarkdown(data) {
  return `
  # **${data.title.trim()}**\n
  ![Github](https://img.shields.io/github/last-commit/${data.username.trim()}/${data.title.trim()})\n
  ## **Description**\n ${data.description.trim()}\n
  ## **Table of Contents**\n
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

  ## **Installation**\n 
  To install necessary dependencies, run the following command:\n
  \`${data.install.trim()}\`\n
  ## **Usage**\n ${data.usage.trim()}\n
  ## **License**\n
  This project is licensed under the ${data.license.trim()} license.\n
  ## **Contributing**\n
  ${data.contribution.trim()}\n
  ## **Tests**\n
  To run tests, run the following command:\n
  \`${data.test.trim()}\`\n
  ## **Questions**\n
  <img src="https://avatars.githubusercontent.com/${data.username.trim()}" style="width: 45px; height: 45px; border-radius:100%;">\n
  If you have any questions about the repo, open an issue or contact ${data.email.trim()}.




`;
}

module.exports = generateMarkdown;
