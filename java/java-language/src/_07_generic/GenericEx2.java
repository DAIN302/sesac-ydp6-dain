package _07_generic;

// 제네릭 제한 case1
// - Box 클래스는 제네릭 타입 T를 받지만, 제한을 두어 Number 를 상속한 클래스만 허용
// 참고) Number 클래스
// - 자바에서 모든 숫자 자료형의 부모 클래스
// - 정수형, 실수형 모두 포함(Byte, Short, Integer, Double 등...)
class Box<T extends Number> {
    // 필드
    private T item;

    // getter & setter
    public T getItem() {
        return item;
    }

    public void setItem(T item) {
        this.item = item;
    }
}

interface Movable {
    void move();
}

class Car implements Movable {
    @Override
    public void move() {
        System.out.println("자동차 출발");
}

class Bicycle implements Movable {
    @Override
    public void move() {
        System.out.println("자전거 출발");
    }
}

// 제네릭 제한 case2
// - Container 클래스는 제네릭 타입 T를 받지만, 제한을 두어 Movable 이라는 인터페이스를 구현한 클래스만 허용
// - makeItMove 메서드는 해당 객체으 move 메서드 호출
class Container<T extends Movable> {
    private T item;

    public Container(T item) {
        this.item = item;
    }
    public void makeItMove(){item.move();}
    // - Movable 이라는 것이 없으면 컴파일 에러남
    // Movable 에는 move() 라는 추상메서드가 있고, extends 함으로써 move() 가 있는 것이 보장받음? 그래서 extends 시 컴파일에러 X
}

public class GenericEx2 {
    public void main(String[] args) {
        // 제네릭 제한 case1
//        Box<String> strBox = new Box<>();
        // -> 컴파일 에러남, Box 클래스 제한에 어긋 남
        // -> 제네릭 타입에 Number 를 상속받지 않는 타입을 사용 중

        Box<Double> doubleBox = new Box<>();
        doubleBox.setItem(3.141592);
        Double doubleValue = doubleBox.getItem();
        System.out.println("doubleValue = " + doubleValue);

        Box<Integer> integerBox = new Box<>();
        integerBox.setItem(1000);
        Integer integerValue = integerBox.getItem();
        System.out.println("integerValue = " + integerValue);

        Box<Short> shortBox = new Box<>();
//        shortBox.setItem(100); -> 자바에서 정수 리터럴은 기본적으로 int 로 간주된다.
        // 100 이라는 short 형 정수를 인자로 넘기고 싶으면, 명시적으로 short 형으로 변환해야함
        shortBox.setItem((short) 100);
        Short shortValue = shortBox.getItem();
        System.out.println("shortValue = " + shortValue);

        // 제네릭 제한 case2
        // Container<Car> carContainer = new Container<>();
        // 컴파일 에러 나는 이유?
        // -> Container 클래스의 생성자에서 item 이라는 인수를 받는거로 정의 되어 있는데, 인스턴스 생성 시 인수 전달이 안되었음
        Container<Car> carContainer = new Container<>(new Car());
        carContainer.makeItMove();
        Container<Bicycle> bicycleContainer = new Container<>(new Bicycle());
        bicycleContainer.makeItMove();

    }
}
}
