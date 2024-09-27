package _05_class;

public class Circle {
    // 필드
    public static final double PI = Math.PI;
    final double radius;

    // 생성자
    public Circle(int radius){
        this.radius = (double) radius;
    }

    public void calArea(){
        System.out.println("원의 반지름 : " + this.radius);
        System.out.println("원의 넓이 : " + (this.PI * (this.radius * this.radius)));
    }

}
