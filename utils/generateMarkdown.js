function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `\n* [License](#license)\n`;
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me at ${data.questions}.
`;
}

module.exports = generateMarkdown;
