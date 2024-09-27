package _05_class._inheritance;

public class Motorcycle extends Vehicle{
    public char licenseType;

    public Motorcycle(String brand, String model, int year, char licenseType){
        super(brand, model, year);
        this.licenseType = licenseType;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "brand='" + brand +
                ", model='" + model +
                ", year=" + year +
                ", licenseType=" + licenseType +
                '}';
    }

    @Override
    void stateVehicle(){
        System.out.println("울림통을 합니다.");
    }
}
