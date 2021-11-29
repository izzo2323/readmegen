// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name. (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubname",
    message: "Please enter your GitHub username? (Required)",
    validate: (githubname) => {
      if (githubname) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email. (Required)",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectname",
    message: "Please enter the name of your application. (Required)",
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Please enter a Project Name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your application. (Required)",
    validate: (descriptioninput) => {
      if (descriptioninput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please enter what licence this project has.",
    choices: ["MIT", "GPLv2", "GPLv3", "Apache", "other", "none"],
  },
  {
    type: "input",
    name: "install",
    message: "What infomation is needed to install and run this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "What information is needed about using this application?",
  },
  {
    type: "input",
    name: "contribute",
    message: "What information is needed about contributing to the project?",
  },
  {
    type: "input",
    name: "testing",
    message:
      "What information should be included about testing this application?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("writetofile data", data);
  fs.writeToFile(fileName, data, (err) => {
    if (err) {
      console.log("There was a Problem. Please try again.");
    } else {
      console.log("File Successfully Created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    console.log(answer);
    writeToFile("README.md", markdown(answer));
  });
}

// Function call to initialize app
init();
