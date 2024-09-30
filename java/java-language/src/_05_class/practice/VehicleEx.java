package _05_class.practice;

public class VehicleEx {
    public static void main(String[] args) {
        Car car = new Car();
        Airplane air = new Airplane();
        Vehicle[] vehicles = {car, air};

        for(Vehicle v : vehicles){
            v.move();
            if(v instanceof Airplane){
                ((Airplane) v).fly();
            }
        }

    }
}
