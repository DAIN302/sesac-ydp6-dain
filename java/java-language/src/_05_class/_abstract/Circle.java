package _05_class._abstract;

public class Circle extends Shape {
    // 클래스 'Circle' 은(는) abstract 로 선언되거나 'Shape' 에서 추상 메서드 'draw()'을(를) 구현해야 합니다
    // 추상클래스를 상속받고 싶으면 메서드를 구체적으로 실체를 구현하라고 함

    // 생성자 선언
    public Circle(String color){
        super(color);
        // super 메서드 -> 부모 클래스의 생성자가 호출됨
        // 추상클래스는 new 연산자로 직접 생성자 호출 불가능
        // 자식 객체 생성 시 'super' 연산자를 호출해서 추상 클래스 객체 생성
        //
    }

    // 추상 메서드 구현
    @Override
    void draw(){
        System.out.println("원 그리기");
    }


}
