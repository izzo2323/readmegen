// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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
