const inquirer = require("inquirer");

const characterLimit = 3;

const validateNumber = (input) => {
  if (input.length <= characterLimit) {
    return true;
  } else {
    return `Please enter up to ${characterLimit} characters.`;
  }
};

const colorText = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter text:",
      name: "input",
      validate: validateNumber,
    },
    {
      name: "textColor",
      message: "Enter a color (Or a hexadecimal number):",
      validate: function (input) {
        if (colorText.test(input)) {
          return true;
        } else {
          return "Please enter a color (Or a hexadecimal number):";
        }
      },
    },
  ])
  .then((answers) => {
    console.log("Input:", answers.input);
    console.log("Text Color:", answers.textColor);
  })
  .catch((error) => {
    console.error(error);
  });
