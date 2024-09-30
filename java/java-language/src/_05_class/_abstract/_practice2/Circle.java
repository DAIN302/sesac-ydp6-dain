package _05_class._abstract._practice2;

public class Circle extends Shape{
    int radius;

    public Circle(String color, String type, int radius){
        super(color, type);
        this.radius = radius;
    }

    @Override
    double calculateArea(){
        return radius * radius * Math.PI;
    }
}
