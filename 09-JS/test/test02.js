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
    // 대각선 길이 구하기
    getDiagonal(){ 
        return Math.sqrt(this.width**2 + this.height**2)
    }
}

let rec2 = new Rectangle(3,4)
console.log('직사각형 넓이',rec2.getArea());
console.log('직사각형 대각선 길이',rec2.getDiagonal());


// Triangle
class Triangle extends Shape {
    constructor(width, height){
        super(width, height)
    }
    // 삼각형 넓이
    getArea(){
        return (this.width * this.height) / 2
    }
}

let tri = new Triangle(3,4)
console.log('삼각형 넓이',tri.getArea());

// Circle
class Circle extends Shape {
    constructor(width){
        super(width)
        this.radius = width
    }
    // 원 넓이
    getArea(){
        return this.radius**2*Math.PI
    }
}

let circle = new Circle(4)
console.log('원의 넓이',circle.getArea());


