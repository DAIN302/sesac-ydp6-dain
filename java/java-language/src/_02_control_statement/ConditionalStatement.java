package _02_control_statement;

import java.util.Scanner;

public class ConditionalStatement {
    public static void main(String[] args) {
        // if else 문
        int number = 10;
        if(number % 2 == 0){
            System.out.println("짝수");
        } else {
            System.out.println("홀수");
        }

        // string type 조건문
//        System.out.print("이름을 입력해주세요 >> ");
//        Scanner sc = new Scanner(System.in);
//        String name = sc.nextLine();
//        System.out.println("name 값 확인 " + name);

        // BAD case (== 비교연산자)
//        if(name == "김굉필"){
//            System.out.println("환영합니다.");
//        }else {
//            System.out.println("이름을 다시 확인해주세요"); // 여기가 출려ㄷ됨
//        }

        // 올바른 케이스 .equals() -> 문자열 비교는 equals 메서드로 해야함
//        if(name.equals("김굉필")){
//            System.out.println("환영합니다.");
//        } else {
//            System.out.println("이름을 다시 확인해주세요");
//        }

        // 이유?
        // == 연산자 : 두 객체의 "참조"를 비교 (동일한 메모리 위치를 가르키는지 검사)
        // equals : 두 객체의 "내용"이 동일한지를 비교

        // "문자열 리터럴"의 경우 자바에서 특별한 취급
        // 동일한 문자열 리터럴이 사용된 경우,
        // 자바 컴파일러는 문자열 풀(string pool)이라는 공유된 메모리 영역에 해당 문자열 저장

        // str1, str2 는 같은 문자열을 가르치고 있으므로  같은 참조를 가르킴 -> 비교 연산자로 비교하면 true
        String str1 = "hello"; // 문자열 리터럴
        String str2 = "hello"; // 문자열 리터럴

        if(str1 == str2) { // 참조값 비교
            System.out.println("같은 참조!"); // 출력
        } else {
            System.out.println("다른 참조!");
        }

        if(str1.equals(str2)) { // 내용 비교
            System.out.println("같은 내용!"); // 출력
        } else {
            System.out.println("다른 내용!");
        }

        // "문자열 동적할당" 의 경우, 'new String...'을 사용해 문자열 객체를 생성하면 서로 다른 객체를 가리킴
        String str3 = new String("hi");
        String str4 = new String("hi");

        // str3와 str4가 다른 객체 이므로 '==' 연산자로 비교시 false
        if(str3 == str4) { // 참조값 비교
            System.out.println("같은 참조!");
        } else {
            System.out.println("다른 참조!"); // 출력
        }

        if(str3.equals(str4)) { // 내용 비교
            System.out.println("같은 내용!"); // 출력
        } else {
            System.out.println("다른 내용!");
        }

        // 자바에서 문자열 내용을 비교하고 싶을 때는 equals 메서드로 비교하는 것이 바람직

        // if ~ else if문
        // top down 방식으로 처음 조건식이 참으로 평가되면 해당 식 수행한 다음에 if 절을 빠져나감
        if(number % 3 == 0){
            System.out.println("3의 배수");
        } else if (number % 5 == 0) {
            System.out.println("5의 배수");
        } else if (number % 2 == 0) {
            System.out.println("2의 배수");
        } else {
            System.out.println("3,5,2의 배수도 아니다.");
        }

        // switch case 문
        // 각 case 문의 break 문은 선택사항으로 break 문 생략 시 바로 밑의 case 문으로 넘어감
        // 여러 case 문으로 하나의 시행문 지정 가능
        String dayOfWeek;
        int day = 4;

        switch (day){
            case 1 : dayOfWeek = "일";
            break;
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 6 : dayOfWeek = "월 ~ 금";
            break;
            case 7 : dayOfWeek = "토";
            break;
            default: dayOfWeek = "잘못된 입력입니다.";
            break;
        }

        System.out.println(dayOfWeek);

    }
}
