package _07_generic;

// 사람 객체 간 상속 관계
// Person
// ㄴ Teacher
// ㄴ Student
//     ㄴ WebStudent
//     ㄴ MobileStudent
class Person{}
class Teacher extends Person{}
class Student extends Person{}
class WebStudent extends Student{}
class MobileStudent extends Student{}

// 등록 class
// - 특정 종류(T) Applicant 를 나타내는 클래스
class Applicant<T> {
    public T kind;

    public Applicant(T kind) {
        this.kind = kind;
    }
}

// 과정 class
class Course {
    // 모든 사람이면 등록 가능
    public static void registerA(Applicant<?> applicant){ // 누가 등록하는지에 대한 정보를 받음
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course A 를 등록함");
    }
    // Student 객체만 등록 가능
    public static void registerB(Applicant<? extends Student> applicant){ // 누가 등록하는지에 대한 정보를 받음, Student 객체만 받기 떄문에 extends Student
        // Student, WebStudent, MobileStudent 객체만 가능
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course B 를 등록함");
    }
    // Student 가 아닌 Person 혹은 Teacher 만 등록 가능
    public static void registerC(Applicant<? super Teacher> applicant){ // 누가 등록하는지에 대한 정보를 받음
        // super Teacher -> Teacher 자기 자신과 그 위에 있는 누구나 -> 따라서 Student 객체와 그 하위 클래스는 불가능
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course C 를 등록함");
    }
}

// 참고) getClass(), getSimpleName()
// - Object 클래스에서 제공되는 메서드
// - getClass() : 객체 클래스 정보 반환, 반환 값은 클래스 객체(ex. class.java.lang.String)
// - getSimpleName() : Class 클래스의 메소드 클래스의 간결한 이름 반환, 패키지 정보만 제외한 클래스 이름만 가져오고 싶을 떄 사용

// 와일드 카드(?) : "알 수 없는 타입" -> 유연성을 얻기 위해 사용
public class GenericEx3 {
    public static void main(String[] args) {
        // Course.registerA 는 누구나 가능
        Course.registerA(new Applicant<Person>(new Person()));
        Course.registerA(new Applicant<Teacher>(new Teacher()));
        Course.registerA(new Applicant<Student>(new Student()));
        Course.registerA(new Applicant<WebStudent>(new WebStudent()));
        Course.registerA(new Applicant<MobileStudent>(new MobileStudent()));


        // Course.registerB 는 Student 와 그 하위(Web, Mobile)만 가능
        // Course.registerB(new Applicant<Person>(new Person())); // -> 컴파일 에러
        // Course.registerB(new Applicant<Teacher>(new Teacher())); // -> 컴파일 에러
        Course.registerB(new Applicant<Student>(new Student()));
        Course.registerB(new Applicant<WebStudent>(new WebStudent()));
        Course.registerB(new Applicant<MobileStudent>(new MobileStudent()));

        // Course.registerC 는 Teacher 와 그 상위(Person) 만 가능
        Course.registerC(new Applicant<Person>(new Person()));
        Course.registerC(new Applicant<Teacher>(new Teacher()));
        // Course.registerC(new Applicant<Student>(new Student())); // -> 컴파일 에러
        // Course.registerC(new Applicant<WebStudent>(new WebStudent())); // -> 컴파일 에러
        // Course.registerC(new Applicant<MobileStudent>(new MobileStudent())); // -> 컴파일 에러

        // 와일드 카드 주의사항
        // 1. 복잡성 : 와일드카드를 과도하게 사용하면 복잡성이 증가, 협업에 알맞지 않음
        // 2. 제한된 작업 : '? extends T' 같은 코드의 경우 새로운 요소 추가 불가능
        // 보통 권한을 디테일하게 부여할 떄 사용되는 것 같다.
    }
}
