package _05_class._abstract._practice2;

import java.util.ArrayList;
import java.util.List;

public class ShapeEx {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();

        Circle c = new Circle("Red", "Circle", 5);
        Rectangle r = new Rectangle("Blue", "Rectangle", 6, 4);

        shapes.add(c);
        shapes.add(r);

        for(Shape s : shapes){
            System.out.println("=== " + s.type + " 도형의 정보 ===");
            s.getColor();
            System.out.println("도형의 넓이 : " + s.calculateArea());
        }
    }

}
