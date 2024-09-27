package _05_class;

// 클래스
// - 객체 지향 프로그래밍의 기초
// - 클래스를 통해 인스턴스 생성

// 공개(public) 클래스 선언
public class Student {
    // 필드
    public String name;
    public int grade;

    // 생성자
    // - 객체가 생성될 떄 자동으로 호출되는 특별한 종류의 메서드
    // 생성자의 이름은 클래스 이름과 동일해야하고 리턴 타입이 없음
    public Student(String name, int grade) {
        // this -> 자기 자신을 의미
        // this.name, this.grade -> 현재 인스턴스의 name, grade 필드
        // 멤버 변수와 생성자의 매개변수 이름이 도일하다면 this 를 이용해 구분
        this.name = name; // 매개변수의 name 을 현재 객체의 name 필드에 할당
        this.grade = grade; // 매개변수의 grade 을 현재 객체의 grade 필드에 할당
    }

    // this 를 쓰지 않는 경우
    // 명확한 구분을 위해 this 를 사용하는 것이 바람직
//    public Student(String n, int g){
//        name = n;
//        grade = g;
//    }

    // 메소드
    // 1) 인자 X, 반환값 X
    public void goToSchool(){
        System.out.println(this.name + "가(이) 학교에 간다.");
    }
    // 2) 인자 O, 반환값 X
    public void study(String subject){
        System.out.println(this.name + "가(이) " + subject + " 과목을 공부한다.");
    }
    // 3) 인자 X, 반환값 O
    public int getGrade(){
        return this.grade;
    }
    // 4) 인자 O, 반환값 O
    public String getTestResult(int score){
        return this.name + " 학생의 점수 : " + score;
    }

    // 오버리이드

    @Override
    public String toString() {
        return "Student{" +
                "name : '" + name + '\'' +
                ", grade : " + grade +
                '}';
    }
}
