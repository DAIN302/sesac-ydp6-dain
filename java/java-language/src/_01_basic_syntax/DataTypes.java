package _01_basic_syntax;

// Primitive Type (기본형)
// - 사용되기 전에 선언되어야 함
// - 비객체 타입 -> null 값을 가질 수 없음

// Reference Type (참조형)
// - java.lang.Object 클래스를 상속받음
// 기본형이 아니면 모두 참조형
public class DataTypes {
    public static void main(String[] args){
        // Primitive Type (기본형)
        System.out.println("=== Primitive Type ===");

        // 정수형 변수
        int x = 10; // 32bit
        long y = 1000000000L; // 64bit, long 타입은 뒤에 "L"또는 "ㅣ"을 붙여야함
        short z = 32767; // 16bit
        byte b = 127; // 8bit

        // 실수형 변수
        float a = 3.14F; // 32bit 마지막에 "F" 또는 "f"를 붙여야함
        double c = 2.71828; // 64bit

        // 문자형 변수
        char ch = 'A'; // 작은 따옴표 감싸야함

        // 논리형 변수
        boolean bool = true;

        // 변수 출력
        System.out.println("정수형 변수 : " + x + ", " + y +", "+z + ", " + b);
        System.out.println("실수형 변수 : " + a + ", " + c);
        System.out.println("문자형 변수 : " + ch);
        System.out.println("논리형 변수 : " + bool);

        // Reference Type (참조형)
        System.out.println("=== Reference Type ===");

        // 자바에서는 String 타입은 특별하게 다뤄짐 -> 참조형인데 기본형처럼 사용
        String greeting = "Hello, World!"; // 큰 따옴표로 감싸야함

        // 배열 (array)
        int[] numbers = { 1, 2, 3, 4, 5 }; // 원소가 int 만을 가지고 있는 배열

        // 클래스
        Person person = new Person("John", 30);

        System.out.println("String 변수 : " + greeting);
        System.out.println("Array 변수 : " );
        for(int i =0; i<numbers.length; i++){
            System.out.println(numbers[i]);
        }
        System.out.println("Person 객체 : " + person.getName() + ", " + person.getAge());

    }
}

// 사용자 정의 클래스
class Person {
    private String name;
    private int age;

    public Person(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public int getAge(){
        return age;
    }
}