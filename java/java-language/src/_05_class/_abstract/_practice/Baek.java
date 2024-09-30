package _05_class._abstract._practice;

public class Baek extends Student{
    public Baek(String name, String school, int age, int studentID){
        super(name, school, age, studentID);
    }

    @Override
    void todo(){
        System.out.println("점심은 백종원 피자");
    }
}
