// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import colors from "colors";
import generateMarkdown from "./utils/generateMarkdown.js";

const questionColors = colors.magenta;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: `${questionColors("What is your project title?")}`,
    name: "projectTitle",
  },
  {
    type: "input",
    message: `${questionColors("Provide a short description:")}`,
    name: "projectDescription",
  },
  {
    type: "checkbox",
    message: `${questionColors("Add a table of content:")}`,
    name: "projectTableofContent",
    choices: ["Installation", "Usage", "Credits", "Contributing", "Tests", "License"],
  },
  {
    type: "input",
    message: `${questionColors("What are the stepts required to install your project?")}`,
    name: "projectInstallation",
  },
  {
    type: "input",
    message: `${questionColors("Provide instructions and examples for use:")}`,
    name: "projectUsage",
  },
  {
    type: "input",
    message: `${questionColors("List your collaborators, if any, with links to their GitHub profile:")}`,
    name: "projectCredit",
  },
  {
    type: "list",
    message: `${questionColors("Pick a license for your application:")}`,
    name: "projectLicense",
    choices: ["Apache License 2.0", "MIT License"],
  },
  {
    type: "input",
    message: `${questionColors("Add a badge:")}`,
    name: "projectBadge",
  },
  {
    type: "input",
    message: `${questionColors("Ask for help from other developers:")}`,
    name: "projectContribute",
  },
  {
    type: "input",
    message: `${questionColors("Ask to write tests for your applications")}`,
    name: "projectTest",
  },
  {
    type: "input",
    message: `${questionColors("What is your GitHub username?")}`,
    name: "projectAccount",
  },
  {
    type: "input",
    message: `${questionColors("What is your Email?")}`,
    name: "projectEmail",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(`There was an error writing the file: ${err}`);
    } else {
      console.log(`Success! ${fileName} created.`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
