// Shape
class Shape {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    getArea(){
        return this.width * this.height
    }
}

let rec1 = new Shape(3,4)
// console.log(rec1.getArea());

// Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    getDiagonal(){
        return Math.sqrt(this.width**2 + this.height**2)
    }
}

let rec2 = new Rectangle(3,4)
console.log(rec2.getArea());
console.log(rec2.getDiagonal());


// Triangle
class Triangle extends Shape {
    constructor(width, height){
        super(width, height)
    }
    getArea(){
        return (this.width * this.height) / 2
    }
}

let tri = new Triangle(3,4)
console.log(tri.getArea());

// Circle
class Circle extends Shape {
    constructor(width, height, radius){
        super(width, height)
        this.radius = Math.PI
    }
    getArea(){
        return this.width*this.height*this.radius
    }
}

let circle = new Circle(3,4)



