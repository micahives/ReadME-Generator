// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let markdown = 
    `# ${response.title}

## Description
${response.description}

## Table of Contents
* [Installation](#Installation)
* [Usage Information](#Usage-Information)
* [Contribution Guidlines](#Contribution-Guidelines)
* [Test Instructions](#Test-Instructions)

## Installation
${response.installation}

## Usage Information
${response.usage}

## Contribution Guidelines
${response.contribution}

## Test Instructions
${response.test}
`

return markdown;
}

module.exports = generateMarkdown;
