class Shapes {
  constructor(color = "") {
    this.color = color;
  }
}

class Circle extends Shapes {
  render = () => `<circle cx="155" cy="120" r="80" fill="${this.color}" />`;
}

class Triangle extends Shapes {
  render = () =>
    `<polygon points="150, 20 255, 185 60, 185" fill="${this.color}" />`;
}

class Square extends Shapes {
  render = () =>
    `<rect x="75" y="45" width="165" height="165" fill="${this.color}" />`;
}

module.exports = { Circle, Triangle, Square };
