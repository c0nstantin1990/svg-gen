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
      console.log("Error writing file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// Generate SVG logo based on user input
function generateLogo(text, textColor, shape, shapeColor) {
  let svgText =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  switch (shape) {
    case "Triangle":
      shapeInstance = new Triangle();
      svgText += `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
      break;
    case "Square":
      shapeInstance = new Square();
      svgText += `<rect x="73" y="40" width="160" height="160" fill="${shapeColor}"/>`;
      break;
    case "Circle":
      shapeInstance = new Circle();
      svgText += `<circle cx="150" cy="115" r="80" fill="${shapeColor}"/>`;
      break;
    default:
      console.log("Invalid shape selected.");
      return;
  }

  svgText += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>`;
  svgText += "</svg>";

  writeToFile("logo.svg", svgText);
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
      generateLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

userInput();
