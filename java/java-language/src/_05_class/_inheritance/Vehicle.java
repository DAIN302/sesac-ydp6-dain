package _05_class._inheritance;

public class Vehicle {
    public String brand;
    public String model;
    public int year;

    public Vehicle(String brand, String model, int year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    void startVehicle (){
        System.out.println("차량 시동을 걸었습니다.");
    }

    void stateVehicle (){
        System.out.println("부릉부릉");
    }

    void stopVehicle (){
        System.out.println("차량을 정지했습니다.");
    }
}
