package _05_class._abstract._practice2;

public class Rectangle extends Shape {
    int width;
    int height;

    public Rectangle(String color, String type, int width, int height){
        super(color, type);
        this.width = width;
        this.height = height;
    }

    @Override
    double calculateArea(){
        return width * height;
    }


}
