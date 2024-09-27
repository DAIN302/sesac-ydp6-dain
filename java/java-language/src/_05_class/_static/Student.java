package _05_class._static;

public class Student {
    public String name;
    public int student_ID;
    public int grade;
    static int totalStudent;

    public Student(String name, int student_ID, int grade){
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getStudent_ID(){
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade(){
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void displayInfo(){
        System.out.println("=== 학생 정보 ===");
        System.out.println("이름 : " + this.name);
        System.out.println("학번 : " + this.student_ID);
        System.out.println("학년 : " + this.grade);
    }
}
