package _05_class._abstract;

public class Square extends Shape{
    // 생성자 선언
    public Square(String color){
        super(color);
    }

    // 추상 메서드 구현
    @Override
    void draw(){
        System.out.println("사각형 그리기");
    }
}
