package _05_class._access_modifier._pack5;

public class Person {
    private int age;
    private String name;

    public Person(String name){
        this.name = name;
    }

    // getter, setter
    // 간접적으로 필드에 접근할 수 있는 public 메서드

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        // 이상한 값(음수) 입력 방지를 위한 설정
        if(age < 0) {
            this.age = 0;
            return;
        } else {
            this.age = age;
        }
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }
}
