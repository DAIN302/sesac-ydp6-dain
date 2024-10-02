package _08_collection._set;

import java.util.Objects;

public class Course {
    // 필드
    private int id;
    private String title;

    public Course(int id, String title) {
        this.id = id;
        this.title = title;
    }

    // hashCode() 의 역할
    // - id, title 값이 같으면 동일한 hashCode 리턴
    // 참고) hashCode 란?
    // - 객체의 메모리 주소를 기반으로 한 정수 값의 해시 코드
    // - hashCode() : Object 클래스에 정의되어 있으며, 객체의 해시 코드 반환하는 역할
    // 해당 클래스에서 객체 내부 상태를 기반으로 한 고유의 해시 코드를 커스터마이징 한거
    @Override
    public int hashCode() {
        // title 은 String(reference type) 이므로 hashCode() 사용 가능
        // id 는 정수형(Primitive type) 이므로 정수값의 해시 코드에 더하기 연산
        return title.hashCode() + id;
    }

    // id, title 값이 같으면 true 리턴
    @Override
    public boolean equals(Object o) {
        if(o instanceof Course target){
            // instanceof
            // - 문법 : object instanceof Type
            // - object "검사할 객체", Type "비교할 클래스/인터페이스"
            // - 객체의 타입을 확인하는데 사용되는 키워드
            // o instanceof Course target
            // o 변수는 Course Type 으로 형변환해서 target 변수에 할당

            // id 는 int 이므로 == 으로 내용 비교
            // title 은 String 이므로 equals() 로 내용 비교
            return target.id == id && target.title.equals(title);
        } else {
            return false;
        }
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                '}' + '\n';
    }
}
