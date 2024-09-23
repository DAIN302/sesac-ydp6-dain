package _02_control_statement;

import java.util.Scanner;

public class ConditinalPractice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        String str;
//        System.out.println("나이를 입력하세요 >> ");
//        int age = sc.nextInt();
//        if(age > 1 && age <= 7) {
//            str = "유아";
//        } else if (age >= 8 && age <= 13) {
//            str = "초등학생";
//        } else if (age >=14 && age <= 16) {
//            str = "중학생";
//        } else if (age >=17 && age <= 19) {
//            str = "고등학생";
//        } else {
//            str = "성인";
//        }
//
//        System.out.println(str);

//        String gender;
//        System.out.println("이름을 입력하세요 >> ");
//        String name = sc.nextLine();
//        switch (name) {
//            case "홍길동" : gender = "남자";
//            break;
//            case "성춘향" : gender = "여자";
//            break;
//            default: gender = "모르겠어요";
//            break;
//        }
//
//        System.out.println(gender);

        System.out.println("숫자를 3개 입력하세요 >>> ");
        int number1 = sc.nextInt();
        int number2 = sc.nextInt();
        int number3 = sc.nextInt();
        int maxNumber = number1;
        int minNumber = number1;
        if(number2 > maxNumber) {
            maxNumber = number2;
        }
        if(number3 > maxNumber) {
            maxNumber = number3;
        }
        if(number2 < minNumber) {
            minNumber = number2;
        }
        if(number3 < minNumber) {
            minNumber = number3;
        }

        int sumNumber = number1 + number2 + number3;

        int meanNumber = (number1 + number2 + number3) / 3;


        System.out.printf("최대값 %d, 최소값 %d, 합계 %d, 평균 %d", maxNumber, minNumber, sumNumber, meanNumber);

//        System.out.println("숫자를 입력하세요");
//        int number = sc.nextInt();
//        for(int i = 1; i <= number; i++){
//            System.out.print(i + " ");
//        }

    }
}
