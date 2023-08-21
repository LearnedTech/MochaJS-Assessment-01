class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    getArea() {
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle("red", 5);

  console.log(circle.getColor()); // Output: red
  console.log(circle.getArea()); // Output: 78.53981633974483
  
  export default Circle;