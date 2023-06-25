const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter text for logo:",
        name: "text",
        validate: (input) =>
          input.length <= 3 || "Enter no more than 3 characters.",
      },
      {
        type: "input",
        message: "Choose the text color (Or a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose logo shape:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose the shape color (Or a hexadecimal number)",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      let shape;
      let svgText =
        '<svg version="1.5.2" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

      switch (answers.shape) {
        case "Triangle":
          shape = new Triangle();
          svgText += `<polygon points="150, 20 255, 185 60, 185" fill="${answers.shapeColor}"/>`;
          break;
        case "Square":
          shape = new Square();
          svgText += `<rect x="75" y="45" width="165" height="165" fill="${answers.shapeColor}"/>`;
          break;
        case "Circle":
          shape = new Circle();
          svgText += `<circle cx="155" cy="120" r="80" fill="${answers.shapeColor}"/>`;
          break;
      }
    });
}
userInput();
