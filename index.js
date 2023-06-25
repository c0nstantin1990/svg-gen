const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, svgText) {
  fs.writeFile(fileName, svgText, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

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
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

      switch (answers.shape) {
        case "Triangle":
          shape = new Triangle();
          svgText += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
          break;
        case "Square":
          shape = new Square();
          svgText += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
          break;
        case "Circle":
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
