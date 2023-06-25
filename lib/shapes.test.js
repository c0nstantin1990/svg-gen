const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  test("renders a circle with the specified color", () => {
    const circle = new Circle("red");
    expect(circle.render()).toBe(
      '<circle cx="155" cy="120" r="80" fill="red" />'
    );
  });

  test("renders a circle with the default color if no color is provided", () => {
    const circle = new Circle();
    expect(circle.render()).toBe('<circle cx="155" cy="120" r="80" fill="" />');
  });
});

describe("Triangle", () => {
  test("renders a triangle with the specified color", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150, 20 255, 185 60, 185" fill="blue" />'
    );
  });

  test("renders a triangle with the default color if no color is provided", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toBe(
      '<polygon points="150, 20 255, 185 60, 185" fill="" />'
    );
  });
});

describe("Square", () => {
  test("renders a square with the specified color", () => {
    const square = new Square("green");
    expect(square.render()).toBe(
      '<rect x="75" y="45" width="165" height="165" fill="green" />'
    );
  });

  test("renders a square with the default color if no color is provided", () => {
    const square = new Square();
    expect(square.render()).toBe(
      '<rect x="75" y="45" width="165" height="165" fill="" />'
    );
  });
});
