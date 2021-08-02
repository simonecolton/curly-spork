// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "Describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message: "Who has contributed to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username? (Don't include @)",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid email is required");
      }
      return true;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses! Fetching your GitHub data next..."
    );
  } finally {
    userInfo = await api.getUser(userResponses);
    console.log("GitHub user info: ", userInfo);
    console.log("Creating your README");
  }
  const markdown = generateMarkdown(userResponse, userInfo);
  console.log(markdown);

  await writeFileAsync(ExampleREADME.md, markdown);
  console.log("README is Completed");
}

// Function call to initialize app
init();
