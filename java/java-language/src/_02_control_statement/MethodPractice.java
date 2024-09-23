package _02_control_statement;

import java.util.Scanner;

public class MethodPractice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        System.out.println("숫자 두 개를 입력하세요");
//        double num1 = sc.nextDouble();
//        double num2 = sc.nextDouble();
//
//        System.out.printf("덧셈 결과\t : %.1f\n", add(num1, num2));
//        System.out.printf("뺄셈 결과\t : %.1f\n", subtract(num1, num2));
//        System.out.printf("나눗셈 결과 : %f\n", divide(num1, num2)); // 1f? -> 소수 첫째자리까지만 출력
//        System.out.printf("곱셈 결과\t : %.1f\n", multiply(num1, num2));

        int radius = 5;
        int width = 4;
        int height = 7;
        int triBase = 6;
        int triHeight = 3;

        MethodPractice ol = new MethodPractice();

        System.out.printf("반지름이 %d 인 원의 넓이 : %f\n", radius, ol.area(radius));
        System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이 : %.1f\n", width, height, ol.area(width, height));
        System.out.printf("밑변 %d, 높이 %d인 삼각형의 넓이 : %.1f", triBase, triHeight, ol.area(triBase, triHeight, true));
    }

    public double area(double x){
        return Math.PI * (x * x);
    }

    public double area(double x, double y){
        return x * y;
    }

    public double area(double x, double y, boolean isTriangle){
        return (x * y) / 2;
    }


    public static double add(double x, double y){
        return x + y;
    }

    public static double subtract(double x, double y){
        return x - y;
    }

    public static double divide(double x, double y){
        return x / y;
    }

    public static double multiply(double x, double y){
        return x * y;
    }
}
