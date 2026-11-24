class Shape {
  constructor(name) {
    this.name = name;
  }

  // Abstract methods that subclasses must implement
  getArea() {
    throw new Error('Method "getArea()" must be implemented by subclasses.');
  }

  getPerimeter() {
    throw new Error('Method "getPerimeter()" must be implemented by subclasses.');
  }

  toString() {
    return `This is a ${this.name} shape.`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    if (radius <= 0) {
      throw new Error('Radius must be positive.');
    }
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive.');
    }
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(base, height, sideA, sideC) {
    super('Triangle');
    if (base <= 0 || height <= 0 || sideA <= 0 || sideC <= 0) {
      throw new Error('All triangle dimensions must be positive.');
    }
    this.base = base;
    this.height = height;
    this.sideA = sideA; // For perimeter calculation
    this.sideC = sideC; // For perimeter calculation
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  getPerimeter() {
    // Assuming sideA, base, sideC are the three sides
    return this.base + this.sideA + this.sideC;
  }
}

module.exports = { Shape, Circle, Rectangle, Triangle };