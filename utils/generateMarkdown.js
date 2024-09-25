// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache License 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "MIT License") {
    return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU GPL v3") {
    return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache License 2.0") {
    return "![License](https://www.apache.org/licenses/LICENSE-2.0)";
  } else if (license === "MIT License") {
    return "![License](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPL v3") {
    return "![License](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else if (license === "Apache License 2.0") {
    return `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
  } else if (license === "MIT License") {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "GNU GPL v3") {
    return `This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContentsLinks = data.projectTableofContent.map((item) => `- [${item}](#${item.toLowerCase().replace(/ /g, "-")})`).join("\n");
  return `
# ${data.projectTitle}

## Badge
${renderLicenseBadge(data.projectLicense)}

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

## Contributing
${data.projectContribute}

## Tests
${data.projectTest}

## Questions
If you have any questions, you can reach me at:

- GitHub: [${data.projectAccount}](https://github.com/${data.projectAccount})
- Email: ${data.projectEmail}

## License
This project is licensed under the [${data.projectLicense}](${renderLicenseLink(data.projectLicense)}).

(${renderLicenseSection(data.projectLicense)})

`;
}

export default generateMarkdown;
