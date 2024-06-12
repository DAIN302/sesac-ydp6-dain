// Shape
class Shape {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    getArea(){
        return `넓이는 ${this.width * this.height} 입니다`
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
        return `대각선의 길이는`
    }
}

// Triangle
class Triangle extends Shape {
    constructor(width, height){
        super(width, height)
    }
    getArea(){
        return
    }

}

// Circle
class Circle extends Shape {
    constructor(width, height){
        super(width, height)
        this.radius = radius
    }
    getArea(){
        return
    }
}

