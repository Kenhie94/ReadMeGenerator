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
  const tableOfContentsLinks = data.projectTableofContent.map((item) => `- [${item}](#${item.toLowerCase().replace(/ /g, "-")})`).join("\n");
  return `
# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of Contents
${tableOfContentsLinks}

## Installation
${data.projectInstallation}

## Usage
${data.projectUsage}

## Credits
${data.projectCredit}

## License
This project is licensed under the ${data.projectLicense}.

## Badge
${data.projectBadge}

## Contributing
${data.projectContribute}

## Tests
${data.projectTest}

## Questions
If you have any questions, you can reach me at:

- GitHub: [${data.projectAccount}](https://github.com/${data.projectAccount})
- Email: ${data.projectEmail}
`;
}

export default generateMarkdown;
