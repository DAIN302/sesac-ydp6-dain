package _05_class._inheritance;

public class Bus extends Vehicle{
    public int passengerCapacity;

    public Bus(String brand, String model, int year, int passengerCapacity){
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "brand='" + brand +
                ", model='" + model +
                ", year=" + year +
                ", passengerCapacity=" + passengerCapacity +
                '}';
    }

    @Override
    void stateVehicle(){
        System.out.println("승객을 운송합니다.");
    }
}
