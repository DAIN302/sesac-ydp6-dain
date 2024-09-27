package _05_class._inheritance;

public class Car extends Vehicle {
    public boolean convertible;

    public Car(String brand, String model, int year, boolean convertible){
        super(brand, model, year);
        this.convertible = convertible;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand +
                ", model='" + model +
                ", year=" + year +
                ", convertible=" + convertible +
                '}';
    }

    @Override
    void stateVehicle(){
        System.out.println("주차했습니다.");
    }
}
