package _05_class._inheritance;

public class VehicleEx {
    public static void main(String[] args) {
        Bus bus = new Bus("Hyundai", "Ciry Bus", 2022, 30);
        Car car = new Car("Toyota", "Camry", 2023, true);
        Motorcycle motorcycle = new Motorcycle("Harley-Dabidson", "Sportster", 2021, 'A');

        System.out.println("=== Bus 정보 ===");
        System.out.println(bus.toString());
        bus.startVehicle();
        bus.stateVehicle();
        bus.stopVehicle();
        System.out.println();
        System.out.println("=== Car 정보 ===");
        System.out.println(car.toString());
        car.startVehicle();
        car.stateVehicle();
        car.stopVehicle();
        System.out.println();
        System.out.println("=== Motorcycle 정보 ===");
        System.out.println(motorcycle.toString());
        motorcycle.startVehicle();
        motorcycle.stateVehicle();
        motorcycle.stopVehicle();
        System.out.println();




    }
}
