package _05_class._interface._02;

// 상수 인터페이스 패턴
// - enum 이나 상수 유틸리티 클래스를 사용하는 것이 더 바람직한 코드
// - 문법적으로 문제는 없지만 자바 프로그래밍 방ㅂ식에서 다른 방법이 사용되는 것이 좋음
// => 주로 interface 는 메서드 선언을 위해 사용, 상수 정의만을 위한 인터페이스는 피하는 것이 바람직
// => 좋지 않은 예시라는 얘기임 ㅎ
interface Constants {
    // 상수 필드 선언
    public static final int MAX_VALUE = 100;
    double PI = 3.141592; // => public static final 생략
    // 인터페이스에서 정의하는 모든 필드는 public static final 이 자동으로 적용됨
}

class ConstantsEx implements Constants {
    // 일반 메서드 정의
    void display(){
        System.out.println("Max Value : " + MAX_VALUE);
        System.out.println("PI : " + PI);
    }
}

public class InterfaceEx02 {
    public static void main(String[] args) {
        ConstantsEx obj = new ConstantsEx();
        obj.display();
    }
}
