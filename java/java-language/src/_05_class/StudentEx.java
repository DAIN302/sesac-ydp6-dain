package _05_class;

public class StudentEx {
    public static void main(String[] args) {
        // new 키워드를 이용해서 s1 객체 생성
        Student s1 = new Student("김굉필", 1);
        // s1 변수가 Student 객체 참조

        System.out.println("s1 = " + s1);
        // toString() 메서드가 오버라이드 X
        // s1 = _05_class.Student@5ca881b5 참조값이 출력됨
        // toStrign() 메서드가 오버라이드 O
        // s1 = Student{name : '김굉필', grade : 1}

        // 메서드 사용
        s1.goToSchool();
        s1.study("성리학");
        System.out.println(s1.getGrade());
        System.out.println(s1.getTestResult(87));
        
        Student s2 = new Student("플라톤", 2);
        System.out.println("s2 = " + s2); // s2 변수가 Student 객체 참조
    }
}
