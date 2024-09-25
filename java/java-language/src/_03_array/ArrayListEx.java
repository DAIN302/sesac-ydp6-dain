package _03_array;

// ArrayList 클래스
// - List 컬렉션에서 가장 많이 사용
// - 표준 배열보다 조금 느릴 수 있으나, 배열에 많은 조작이 필요할 떄 유용
// - 동적 할당이 가낭하므로 크기를 미리 지정하지 않아도 됨
// - List 컬렉션은 객체 자체를 저장하는 것이 아니라 객체 번지 저장

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

// 참고. Collection(컬렉션)
// : 객체를 효율적으로 추가, 삭제, 검색할 수 있도록 관련 인터페이스 & 클래스를 java.util 패키지에 포함시켜 놓은 것
// 데이터 구조와 알고리즘을 제공하는 프레임워크
public class ArrayListEx {
    // ArrayList 선언하는 3가지 방법
    // 1. List<E> list = new ArrayList<E>();
    // - E에 지정된 타입의 객체만 저장 가능
    // 2. List<E> list = new ArrayList<>();
    // - 1번의 간소화된 문법으로 컴파일러가 타입을 추론
    // 3. List list = new ArrayList();
    // - 모든 타입의 객체 저장(단, 타입 안정성이 보장되지 않음)

    // 참고. 변수 타입 선언 시 List, ArrayList 모두 사용 가능
    // - 같은 결과를 의미하지만, List 타입으로 ArrayList 를 생성하면
    //   다형성(하나의 객체가 여러 타입을 가짐)을 이용하므로 유연함
    // ArrayList<E> list = new ArrayList<E>(); -> 이렇게 선언하면 다형성을 이용못해

    public static void main(String[] args) {
        // 1. ArrayList 생성(정수형 요소를 저장하는 ArrayList)
        List<Integer> numbers = new ArrayList<>();

        // 2. 요소 추가
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        // 3. 요소 접근
        System.out.println("첫번째 요소 : " + numbers.get(0)); // 배열이 아니므로 get 메서드를 이용해서 인덱스에 접근
        System.out.println("세번째 요소 : " + numbers.get(2));

        // 4. 요소 수정
        numbers.set(1, 77);
        System.out.println("numbers = " + numbers); // numbers = [10, 77, 30, 40, 50]
        // Array.toString() 메서드는 "배열"을 인자로 받음
        // 하지만, numbers 는 ArrayList 이므로 toArray()를 이용해서 배열로 변환해야함
        
        // 5. 요소 삽입
        numbers.add(1, 58); // 1번 인덱스에 값 추가하는 것
        System.out.println("numbers = " + numbers); // numbers = [10, 58, 77, 30, 40, 50]
        // add() 메서드는 인자를 하나만 받으면 맨 마지막에 추가됨,
        // 2개 받으면 (인덱스, 값) 이다. 그 인덱스 위치에 값을 넣는 것

        // 6. ArrayList 끼리 연결
        System.out.println(Arrays.asList(99,88,77));
        // Arrays.asList() : 매개변수로 주어진 요소들을 고정 크기의 List 로 생성
        List<Integer> numbers2 = new ArrayList<>(Arrays.asList(99,88,77));
        System.out.println("numbers2 = " + numbers2);

        numbers.addAll(numbers2); // numbers 에 numbers2 내용 추가
        System.out.println("numbers = " + numbers);

        // 7. 요소 위치 찾기
        System.out.println(numbers.indexOf(10)); // 0 -> 0 번 인덱스에 위치
        System.out.println(numbers.indexOf(50)); // 5 -> 5번 인덱스에 위치
        System.out.println(numbers.indexOf(89)); // -1 -> 요소가 존재하지 않으면 -1 반환

        // 8. 요소 삭제
        numbers.remove(2); // 인자로 인덱스 번호를 받는다. 해당 인덱스에 위치한 요소 삭제
        System.out.println("numbers = " + numbers);

        // 9. 리스트 크기 확인
        System.out.println("리스트 크기 : " + numbers.size()); // 리스트에서는 length 대신 size()를 사용한다.

        // int[] numArray = {99, 88, 77};
        // System.out.println(numArray == numbers2); // 이거 안됨

        // 10. 모든 요소 출력
        for(Integer n : numbers){
            System.out.println(n + " ");
        }

        System.out.println();

        // 11. 요소 포함 확인
        System.out.println("요소 포함 확인 : " + numbers.contains(7));
        System.out.println("요소 포함 확인 : " + numbers.contains(77));

        // 12. 모든 요소 삭제
        numbers.clear();
        System.out.println("number = " + numbers); // 비었슈

        // practice
//        List<String> strList = new ArrayList<>();
//
//        Scanner sc = new Scanner(System.in);
//        int count = 0;
//        while (!strList.contains("exit")){
//            System.out.println("문자를 입력해 주세요. : ");
//            strList.add(sc.next());
//            count++;
//        }
//        for(String n : strList){
//            System.out.println(n + " ");
//        }
//        sc.close();

        // ArrayList 의 원소가 사용자 정의 클래스인 버전
        // Student 타입의 ArrayList
        List<Student> std = new ArrayList<>();
        std.add(new Student("John", 30));
        std.add(new Student("Jane", 31));
        std.add(new Student("Rose", 32));
        std.add(new Student("Lily", 30));
        std.add(new Student("Jim", 32));

        System.out.println("std = " + std);
        System.out.println("학생수 = " + std.size());

        Student std1 = std.get(0);
        System.out.println("std1 = " + std1);
        System.out.println(std1.getName() + " 학생의 나이는 " + std1.getAge() + "(세) 입니다.");

        System.out.println("=== 학생 명단 ===");
        for(Student s :std){
            System.out.println(s);
        }

        std.remove(2); // 2번 인덱스 삭제; 3번 인덱스부터 하나씩 당겨짐
        System.out.println("std = " + std);
        std.remove(2);
        System.out.println("std = " + std);
    }
}

class Student {
    private String name;
    private int age;

    public Student(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName() {return name;}
    public void setName(String name){this.name = name;}
    public int getAge(){return age;}
    public void setAge(int age){this.age = age;}

    // toString() 메서드 오버라이드(재정의)
    // : 객체를 문자열로 표현할 때 어떻게 출력할지 정의
    // 오버라이드를 하지 않으면 Object 객체의 toString() 메서드가 호출되면,
    // 이는 객체의 클래스 이름과 해시코드를 문자열로 반환(참조값 반환)
    @Override
    public String toString() {
        return "{" +
                "name : '" + name + '\'' +
                ", age : " + age +
                '}';
    }
}
