// array of objects containing urls for various software licenses (see license choices in index.js)
const licenseBadgeUrl = [
  {
    choice: 'MIT',
    svg: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT'
  },
  {
    choice: 'GNU GPL v3',
    svg: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    url: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    choice: 'Apache 2.0',
    svg: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    url: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    choice: 'BSD-3',
    svg: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    url: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    choice: 'Mozilla Public License 2.0',
    svg: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    url: 'https://opensource.org/licenses/MPL-2.0'
  },
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](${licenseBadgeUrl[0].svg})](${licenseBadgeUrl[0].url})`;
    case 'GNU GPL v3':
      return `[![License: GPL v3](${licenseBadgeUrl[1].svg})](${licenseBadgeUrl[1].url})`;
    case 'Apache 2.0':
      return `[![License: Apache 2.0](${licenseBadgeUrl[2].svg})](${licenseBadgeUrl[2].url})`;
    case 'BSD-3':
      return `[![License: BSD-3](${licenseBadgeUrl[3].svg})](${licenseBadgeUrl[3].url})`;
    case 'Mozilla Public License 2.0':
    return `[![License: MPL 2.0](${licenseBadgeUrl[4].svg})](${licenseBadgeUrl[4].url})`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// NOTE: 
// THE LICENSE LINK IS CONTAINED IN THE BADGE ICON, AND WHEN THE BADGE IS CLICKED,...
// THE LINK TO THE CORRESPONDING LICENSE PAGE IS REACHED. LINKS FOUND IN 'licenseBadeURL' OBJECTS, USED IN...
// THE 'renderLicenseBadge' FUNCTION. 
// THEREFORE, function renderLicenseLink(license) {} NOT NEEDED

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license please') {
    return `## License
This project is licensed under the ${license} license - click on the license badge near the top of the page for details.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let markdown = 
    `# ${response.title}

## Description
${response.description}\n\n`;

if (response.license !== 'No license please') {
  markdown += renderLicenseBadge(response.license);
}

  markdown += `\n\n## Table of Contents
* [Installation](#Installation)
* [Usage Information](#Usage-Information)
* [Contributing](#Contributing)
* [Test Instructions](#Test-Instructions)
`;

// if the user selects a license, the markdown will display a link to the'License' section in the table of contents
  if (response.license !== 'No license please') {
    markdown += `* [License](#License)\n`;
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
For additional questions, reach out here:\n
* GitHub: [${response.github}](https://github.com/${response.github})\n
* Email: ${response.email}
`;

return markdown;
}

module.exports = generateMarkdown, renderLicenseSection, renderLicenseBadge;
