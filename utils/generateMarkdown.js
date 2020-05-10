function generateMarkdown(data) {
  return `
  # **${data.title.trim()}**\n
  ![Github](https://img.shields.io/github/last-commit/${data.username.trim()}/${data.title.trim()})\n
  ## **Description**\n ${data.description.trim()}\n
  ## **Table of Contents**\n
  * Installation\n
  * Usage\n
  * License
  * Contributing
  * Tests
  * Questions
  ## **Installation**\n 
  To install necessary dependencies, run the following command:\n
  ${data.install.trim()}\n
  ## **Usage**\n ${data.usage.trim()}
  ## **License**\n
  This project is licensed under the ${data.license.trim()} license.\n
  ## **Contributing**\n
  ${data.contribution.trim()}\n




`;
}

module.exports = generateMarkdown;
