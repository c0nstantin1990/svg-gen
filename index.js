const inquirer = require("inquirer");

const characterLimit = 3;

const validateLength = (input) => {
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
      name: "text",
      type: "input",
      message: "Enter text:",
      validate: validateLength,
    },
    {
      name: "color",
      message: "Enter a color (Or a hexadecimal number):",
      validate: function (input) {
        if (colorText.test(input)) {
          return true;
        } else {
          return "Please enter a color (Or a hexadecimal number):";
        }
      },
    },
    {
      name: "shape",
      type: "list",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Enter the shape color (keyword or hexadecimal):",
    },
  ])
  .then((answers) => {
    console.log("Text:", answers.text);
    console.log("Color:", answers.color);
    console.log("Shape:", answers.shape);
    console.log("Shape Color:", answers.shapeColor);
  })
  .catch((error) => {
    console.error(error);
  });
