package _05_class._abstract;

public class ShapeEx {
    public static void main(String[] args) {
//        Shape shape = new Shape("green");
        // -> 추상 클래스인 shape 은 new 연산자로 인스턴스 직접 생성 불가능
        // 추상 클래스를 상속받은 자식 클래스가 new 연산자로 인스턴스 생성 가능

        Circle circle = new Circle("blue");
        Square square = new Square("yellow");

        // 매개변수의 다형성
        // : Shape 이 알아서 각각의 실체 클래스로 자동 타입 변환
        // circle 의 자료형은 Circle, square 의 자료형은 Square
        // circle 클래스가 Shpae 를 상속받고 있기 때문에 go 라는 static method 에서 사용 가능이며, 자동으로 타입을 변경한다.
        go(circle);
        // 실행결과
//        도형을 그려보자
//        원 그리기
//        도형의 색상은 blue
        go(square);
        // 실행결과
//        도형을 그려보자
//        사각형 그리기
//        도형의 색상은 yellow



    }
    // static method
    public static void go(Shape shape){
        shape.start();
        shape.draw();
        System.out.println("도형의 색상은 " + shape.color);
    }
}
