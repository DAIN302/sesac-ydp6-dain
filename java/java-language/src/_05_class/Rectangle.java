package _05_class;

public class Rectangle {
    public int width;
    public int height;

    public Rectangle(int width, int height){
        this.width = width;
        this.height = height;
    }

    public int getArea(){
        return this.width * this.height;
    }
}
