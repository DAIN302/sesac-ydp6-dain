package _05_class._inheritance;

public class Dog extends Animal {
    // 메소드 오버라이딩
    // : 부모 클래스의 makeSound 메소드 재정의
//    @Override
//    void makeSound(){ // 부모에 있는거랑 똑같이 쓰기
//        super.makeSound(); // super 키워드를 이용해서 부모의 메서드 호출
//        System.out.println("왈왈");
//    }
//
//    // 자식 클래스에서만 존재하는 추가 메소드
//    void fetch(){
//        System.out.println("공 가져왓");
//    }
    public Dog(String species, String name, int age){
        this.species = species;
        this.name = name;
        this.age = age;
    }

    @Override
    void makeSound(){ // 부모에 있는거랑 똑같이 쓰기
        System.out.println("왈왈하고 우는 " + name + "는 " + age + "살의 " + species);
    }
}


// 오버라이드된 곳에서 부모 메서드 호출
//- 메소드 재정의 :
// 부모 메소드는 숨겨지고 자식 메소드만 사용됨
// (부모 메소도의 일부만 변경되더라도 중복된 내용을 자식 메소드도 가지고 있어야 함)
// ex. 부모 메소드가 100줄의 코드를 가지고 있다면,
// 자식 메소드에서 1줄만 추가하고 싶어도 100줄 다 써야함
// - 자식 메소드와 부모 메소드의 공동 작업 처리를 이용하면 쉽게 가능
// (즉,자식 메소드 내에서 부모 메소드 호출)
// ex. super.메소드() : 숨겨진 부모 메소드 호출

