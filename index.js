const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");
// Function to validate hexadecimal number
function validateColor(input) {
  const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const namedColorRegex = /^[a-zA-Z]+$/;
  return (
    hexRegex.test(input) ||
    namedColorRegex.test(input) ||
    "Enter a valid color."
  );
}
// Function to write svg file
function writeToFile(fileName, svgText) {
  fs.writeFile(fileName, svgText, { encoding: "utf8" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}
// User inputs for svg creation
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
        validate: validateColor,
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
        validate: validateColor,
      },
    ])
    .then((answers) => {
      let shape;
      let svgText =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

      switch (answers.shape) {
        case "Triangle":
          // Create a new instance of the Triangle shape
          shape = new Triangle();
          svgText += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
          break;
        case "Square":
          // Create a new instance of the Square shape
          shape = new Square();
          svgText += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
          break;
        case "Circle":
          // Create a new instance of the Circle shape
          shape = new Circle();
          svgText += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
          break;
      }
      svgText += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
      svgText += "</svg>";

      writeToFile("logo.svg", svgText);
    });
}
userInput();
