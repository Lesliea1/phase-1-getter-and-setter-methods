// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

const circle = new Circle(5);

console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area);

circle.diameter = 12;
console.log(circle.radius);

circle.circumference = 25;
console.log(circle.radius);

circle.area = 50;
console.log(circle.radius); 