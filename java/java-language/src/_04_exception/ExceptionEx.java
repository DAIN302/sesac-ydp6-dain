package _04_exception;

// 예외
// - 일반 예외(Exception)
// -> 컴파일러가 예외 처리 코드 여부 검사하는 예외
// -> 개발자가 예외 처리를 해줘야 함. 그렇지 않으면 컴파일 에러 발생 (즉, 코드를 작성하는 시점)
// - 실행 예외(Runtime Exception)
// -> 컴파일러가 예외 처리 코드 여부를 검사하지 않는 예외
// -> 개발자가 예외 처리를 명시적으로 하지 않아도 컴파일 됨. 프로그램의 실행 시점에 발생
// -> 예외를 처리하는 것이 권장됨

import java.util.InputMismatchException;
import java.util.Scanner;

// 자바는 예외가 발생하면 "예외 클래스" 로부터 객체 생성, 해당 객체는 예외 처리 시 사용됨
// 예외 발생 시 프로그램의 갑작스런 종료를 막고 정상 실행할 수 있도록 처리하는 코드를
// "예외 처리 코드" 라고 하며, try-catch-finally 블록으로 구성
// * 다중 catch 블록 : 여러 유형의 예외 처리 가능
public class ExceptionEx {
    public static String divide(int x, int y){return x + " / " + y + " = " + (x/y);}

    public static int getLength(String str){return str.length();}

    public static int getValueByIdx(int[] arr, int idx){return arr[idx];}

    public static void main(String[] args) {
        // case1. 예외 발생 코드
        // System.out.println(divide(6,2));
        // System.out.println(divide(6,0)); // 예외 발생

        // case1. 예외 처리 코드
        try {
            System.out.println("연산 시작");
            System.out.println(divide(6, 2));
//            System.out.println(divide(6, 0));
//            System.out.println(divide(6, 3)); // 위의 코드가 예외가 발생해서 catch 절로 빠진다.
        } catch (ArithmeticException e) { // e -> 에러 객체
//            System.out.println("예외가 발생함");

            // 1. 예외 발생 이유 보여줌
            System.out.println("나누기 연산 중 에러 발생 >> " + e.getMessage()); // / by zero

            // 2, 예외 종류 리턴
            System.out.println("나누기 연산 중 에러 발생 >> " + e.toString()); // java.lang.ArithmeticException: / by zero

            // 3. 예외가 어디서 발생했는지 추적한 내용 출력
            e.printStackTrace();

        } finally { // 예외 발생 여부와 상관없이 무조건 실행되는 문장
            System.out.println("연산 종료");
        }

        // case2. 예외 발생 코드
//        System.out.println("단어 길이 : " + getLength(new String("Hello")));
//        System.out.println("단어 길이 : " + getLength(null));

        // case2. 예외 처리 코드
        try {
            System.out.println("단어 길이 : " + getLength(null));
        } catch (NullPointerException e){
            System.out.println("단어 길이 연산 중 에러 발생 >> " + e.toString());
            // java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null
        }

        int[] numbers = {10,20,30,40,50};
        // case3. 예외 발생 코드
//        System.out.println(getValueByIdx(numbers, 1));
//        System.out.println(getValueByIdx(numbers, numbers.length));

        // case3. 예외 처리 코드
        try{
            System.out.println(getValueByIdx(numbers, numbers.length));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 에러 발생 >> " + e.toString());
            // java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
        }

        // case4
        Scanner sc = new Scanner(System.in);

        try {
            System.out.println("정수를 입력해주세요 >>");
            int number = sc.nextInt(); // 정수 값 읽어오기
            System.out.println("입력한 정수는 다음과 같습니다. >> " + number);
        } catch (InputMismatchException e){
            System.out.println("InputMismatchException 발생 >> " + e.getMessage());
            // InputMismatchException 발생 >> null
        } finally {
            sc.close();
        }


    }
}
