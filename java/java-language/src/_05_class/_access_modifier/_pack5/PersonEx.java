package _05_class._access_modifier._pack5;

public class PersonEx {
    public static void main(String[] args) {
        // 객체 생성
        Person p1 = new Person("김굉필");
        Person p2 = new Person("플라톤");

//        p1.age = 44; // age 필드는 private 이런식으로 직접 변경 불가
        p1.setAge(66); // setter 를 이용해 간접적으로 변경해야함
        System.out.println(p1.getName() + "의 나이 : " + p1.getAge());

        p2.setAge(-55);
        // age 필드는 음수인 경우, setAge 메서드 내부 로직에 의해 0으로 변경
        System.out.println(p2.getName() + "의 나이 : " + p2.getAge());
    }
}
