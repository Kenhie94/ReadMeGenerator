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
function generateMarkdown(data) {
  return `
# ${answers.projectTitle}

## Description
${answers.projectDescription}

## Table of Contents
${answers.projectTableofContent.join(", ")}

## Installation
${answers.projectInstallation}

## Usage
${answers.projectUsage}

## Credits
${answers.projectCredit}

## License
This project is licensed under the ${answers.projectLicense}.

## Badge
${answers.projectBadge}

## Contributing
${answers.projectContribute}

## Tests
${answers.projectTest}

## Questions
If you have any questions, you can reach me at:

- GitHub: [${answers.projectAccount}](https://github.com/${answers.projectAccount})
- Email: ${answers.projectEmail}
`;
}

export default generateMarkdown;
