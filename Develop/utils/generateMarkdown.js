// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license please') {
    return `## License
${license}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let markdown = 
    `# ${response.title}

## Description
${response.description}

## Table of Contents
* [Installation](#Installation)
* [Usage Information](#Usage-Information)
* [Contributing](#Contributing)
* [Test Instructions](#Test-Instructions)
`;

// if the user selects a license, the markdown will display 'License' link in the table of contents
  if (response.license !== 'No license please') {
    markdown += `* [License](#License)\n\n`;
  }

  markdown += `* [Questions](#Questions)\n\n`;

  markdown += `## Installation
  ${response.installation}

## Usage Information
${response.usage}

## Contributing
${response.contribution}

## Test Instructions
${response.test}
\n`;

// if the user selects a license, renderLicenseSection will fire and the markdown...
//  will display the 'License' section header and the selected license
  if (response.license !== 'No license please') {
    markdown += renderLicenseSection(response.license);
  }

  markdown += `\n
## Questions
For additional questions, you can reach me at:
${response.questions}
`;

return markdown;
}

module.exports = generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge;
