package _05_class;

import java.util.Scanner;

public class CircleEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("원의 반지름을 입력하세요");
        int radius = sc.nextInt();

        Circle c1 = new Circle(radius);
        c1.calArea();

        sc.close();
    }

}
