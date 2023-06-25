const { Circle } = require("./shapes");

describe("Circle", () => {
  test("should return SVG circle", () => {
    const circle = new Circle("red");
    const expectedSvg = '<circle cx="155" cy="120" r="80" fill="red" />';
    expect(circle.render()).toEqual(expectedSvg);
  });

  test("should return SVG circle with default color when no color is specified", () => {
    const circle = new Circle();
    const expectedSvg = '<circle cx="155" cy="120" r="80" fill="" />';
    expect(circle.render()).toEqual(expectedSvg);
  });
});
