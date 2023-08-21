class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      }
    }
  
    get area() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
export default Circle;
  