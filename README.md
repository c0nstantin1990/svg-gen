# svg-gen

## Description

- The Node.js app presented here is an interactive SVG logo generator.
- It utilizes the inquirer package for obtaining user input and the fs module to write the generated logo as an SVG file.
- The user is prompted to enter text for the logo, choose a text color, select a logo shape (Triangle, Square, or Circle), and specify a shape color.
- Based on these inputs, the app generates an SVG text string with the specified text and shape, and saves it as "logo.svg".
- The resulting file can be used as a custom logo for various purposes, such as branding, graphic design, or web development projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Video](#walkthrough_video)

## Installation

- npm init (to create node js project)
- npm i inquirer@8.2.4 (to install inquirer)
- npm i jest (to install jest for tests)
- node index.js (to run the app)

## Usage

![Input](/screenshots/input.png)
![Result](/screenshots/result.png)

## Walkthrough_video

https://drive.google.com/file/d/1xPCqglhzmIOougA8Cua6KKCDSrnCux5b/view

## Tests

The tests in the code verify that the shapes (Circle, Triangle, and Square) are rendered correctly. They check if the shapes are rendered with the specified color or the default color when no color is provided, using expected render output comparisons.

![Tests](/screenshots/test.jpeg)
