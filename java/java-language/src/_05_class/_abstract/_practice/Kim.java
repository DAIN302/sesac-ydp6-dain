package _05_class._abstract._practice;

public class Kim extends Student{
    public Kim(String name, String school, int age, int studentID){
        super(name, school, age, studentID);
    }

    @Override
    void todo(){
        System.out.println("점심은 김가네 김밥");
    }
}
