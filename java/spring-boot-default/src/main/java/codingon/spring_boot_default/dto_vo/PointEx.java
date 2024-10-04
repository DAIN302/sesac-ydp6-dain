package codingon.spring_boot_default.dto_vo;

import codingon.spring_boot_default.dto_vo.vo.Point;

public class PointEx {
    public static void main(String[] args) {
        Point p1 = new Point(0, 0);
        Point p2 = new Point(3, 4);

        System.out.println("p1 = " + p1);
        System.out.println("p2 = " + p2);
        System.out.println("두 점 사이의 거리 : " + p1.distanceTo(p2));

        Point p3 = new Point(3, 4);
        System.out.println("p1와 p3는 같은 객체임?" + p1.equals(p3));
        System.out.println("p2와 p3는 같은 객체임?" + p2.equals(p3));
        System.out.println("p1 : " + p1.hashCode());
        System.out.println("p2 : " + p2.hashCode());
        System.out.println("p3 : " + p3.hashCode());
    }
}
