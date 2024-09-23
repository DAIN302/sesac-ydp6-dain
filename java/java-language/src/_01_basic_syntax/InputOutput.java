package _01_basic_syntax;

import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        int amount = 3;
        String product = "코카콜라 제로";

        //System.out.printf("편의점에서 %s 제품을 %d 개 구매했습니다", product, amount);
        // printf 메서드
        // : printf("출력 서식", 출력 내용)
        // * 출력 서식
        // %s(문자열) %d(정수형) %f(실수향) %c(문자형) %b(불리언) %n(개행)

        int year = 2024;
        boolean bool = true;
        //System.out.printf("올해는 %d 년 입니다. 올해가 벌써 반이나 지나갔습니까? %b ", year, bool);

        char pi = 'π';
        double p = 3.14;
        //System.out.printf("%c 는 %.2f 다. ", pi, p);

//        System.out.println("저는 김굉필입니다.");
//        System.out.print("안녕하세요.");
//        System.out.println("힝");
//        System.out.print("방가방가");

        System.out.println();
        // 입력
        // - Scanner 클래스
//        System.out.println("공백으로 구분하여 이름/나이/키/결혼여부를 입력해주세요 >>");
//
//        Scanner scanner = new Scanner(System.in);
//
//        String name = scanner.next(); // 공백 이전까지의 문자열을 읽음
//        int age = scanner.nextInt(); // 공백 이전까지 정수를 읽음
//        double height = scanner.nextDouble(); // 공백 이전까지 실수를 읽음
//        boolean single = scanner.nextBoolean(); // 공백 이전까지 불리언을 읽음
//
//        System.out.println("=== 입력 결과 출력 ===");
//        System.out.printf("이름\t\t\t : %s (님)\n", name);
//        System.out.printf("나이\t\t\t : %d (세)\n", age);
//        System.out.printf("키\t\t\t : %.1f (cm)\n", height); // 1f? -> 소수 첫째자리까지만 출력
//        System.out.printf("결혼여부\t : %b\n", single);
//
//        scanner.close(); // scanner 닫기

        // 실습
        Scanner scanner2 = new Scanner(System.in);

        System.out.println("이름을 입력하세요");
        String name2 = scanner2.next();

        System.out.println("나이를 입력하세요");
        int age2 = scanner2.nextInt();

        System.out.printf("안녕하세요! %s 님 (%d 세)", name2, age2);

        scanner2.close();
    }
}
