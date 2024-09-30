package _06_wrapper;

// Wrapper 객체
// - Primitive Type 값을 갖는 객체를 생성 가능
// - 'java.lang' 패키지에 포함되어 있음
// - 포장 객체는 포장하고 있는 기본 타입의 값을 변경할 수 없고, 단지 객체로 생성하는데 목적이 있다.
// - 컬렉션에서 주로 쓰임( 컬렉션 객체는 기본 타입의 값을 저장할 수 없기 때문)
public class BoxingUnboxingEx {
    public static void main(String[] args) {
        // Boxing
        // : 기본 타입을 포장 객체로 만드는 것
        // 포장 클래스 변수에 값이 "대입"될 때 발생
        Integer obj1 = 200;
        Double obj2 = 3.141592;
        Character obj3 = 'A';

        System.out.println("obj1 = " + obj1); // 200
        System.out.println("obj2 = " + obj2); // 3.141592
        System.out.println("obj3 = " + obj3); // A

        // 자료형Value() : 명시적 unboxing
        // - 코드의 명확성과 특정 상황에서의 안정성을 위해 사용되는 메서드
        // - 객체 값이 null 일 때 자동 언박싱은 NullPointerException 을 발생시킬 수 있지만,
        // - 자료형Value() 메서드를 사용하면 더 명확한 처리 가능
        System.out.printf("double value %.2f %n", obj2.doubleValue()); // 3.14
        System.out.printf("char value %c %n", obj3.charValue()); // A
        System.out.println();

        // Unboxing
        // - 포장 객체에서 기본 타입의 값을 얻는 과정
        // - 기본 타입 변수에 포장 객체가 대입될 떄 발생
        int value1 = obj1;
        double value2 = obj2;
        char value3 = obj3;

        System.out.println("value1 = " + value1); // 200
        System.out.println("value2 = " + value2); // 3.141592
        System.out.println("value3 = " + value3); // A
        
        // 연산 시 Boxing
        int result1 = obj1 + 100; // reference 와 primitive 연산 -> obj1은 연산되기 전에 "언박싱"됨
        System.out.println("result1 = " + result1);
        double result2 = obj2 + 1.5;
        System.out.println("result2 = " + result2);
        char result3 = (char) (obj3 + 1);
        // char 자료형은 숫자 연산이 가능하다. -> 아스키 코드에 연산을 해줌
        System.out.println("result3 = " + result3);
        
        char r = 'ㄲ';
        System.out.println("r = " + r);
        char resultR = (char) (r + 1);
        System.out.println("resultR = " + resultR); //ㄱㅅ 나옴 개신기

    }
}
