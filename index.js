const inquirer = require("inquirer");

const characterLimit = 3;

const validateInput = (input) => {
  if (input.length <= characterLimit) {
    return true;
  } else {
    return `Please enter up to ${characterLimit} characters.`;
  }
};

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter text:",
      name: "input",
      validate: validateInput,
    },
  ])
  .then((answers) => {
    console.log("Input:", answers.input);
  })
  .catch((error) => {
    console.error(error);
  });
