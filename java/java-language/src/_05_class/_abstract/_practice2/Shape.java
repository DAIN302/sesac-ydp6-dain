package _05_class._abstract._practice2;

public abstract class Shape {
    String color;
    String type;

    // 생성자 선언
    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    // 추상 메서드 선언
    abstract double calculateArea();

    // 일반 메서드 선언
    void getColor(){
        System.out.println("도형의 색상 : " + color);
    }
}