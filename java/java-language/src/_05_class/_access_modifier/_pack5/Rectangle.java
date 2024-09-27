package _05_class._access_modifier._pack5;

public class Rectangle {
    private int width;
    private int height;
    static int count;

    public Rectangle(int width){
        this.width = width;
    }

    public int getWidth(){
        return width;
    }

    public void setWidth(int width){
        this.width = width;
    }

    public int getHeight(){
        return height;
    }

    public void setHeight(int height){
        this.height = height;
    }

    public int getArea(){
        return width * height;
    }
}
