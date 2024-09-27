package _05_class._static;

import java.util.ArrayList;

public class StudentEx {
    public static void main(String[] args) {
        ArrayList<Student> std = new ArrayList<>();

        Student s1 = new Student("김새싹", 20231001, 1);
        Student s2 = new Student("홍길동", 20231002, 2);
        Student s3 = new Student("김굉필", 20231003, 3);

        std.add(s1);
        std.add(s2);
        std.add(s3);

        for(Student s : std){
            s.displayInfo();
            System.out.println();
        }

        Student.totalStudent = std.size();
        System.out.println("총 학생 수는 " + std.size() + "명 입니다.");
    }



}
