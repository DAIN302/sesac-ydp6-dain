package _05_class;

public class Circle {
    // 필드
    final int radius;

    // 생성자
    public Circle(int radius){
        this.radius = radius;
    }

    public void calArea(){
        System.out.println("원의 반지름 : " + this.radius);
        System.out.println("원의 넓이 : " + (Math.PI * (this.radius * this.radius)));
    }

}
