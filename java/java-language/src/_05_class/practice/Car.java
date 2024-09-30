package _05_class.practice;

public class Car extends Vehicle{
    public Car(){

    }

    @Override
    void move() {
        System.out.println("도로를 따라 이동 중");
    }
}
