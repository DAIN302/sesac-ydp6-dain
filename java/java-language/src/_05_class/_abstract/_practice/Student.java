package _05_class._abstract._practice;

public abstract class Student {
    String name;
    String school;
    int age;
    int studentID;

    public Student(String name, String school, int age, int studentID){
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentID = studentID;
    }

    abstract void todo();

    void infos(){
        System.out.println("=== " + name + " 학생의 정보 ===");
        System.out.println("학교 : " + school);
        System.out.println("나이 : " + age);
        System.out.println("학번 : " + studentID);
    }
}
