package _05_class._inheritance;

public class AnimalEx {
    public static void main(String[] args) {
        Dog myDog = new Dog("강아지", "백구", 8);
        Cat myCat = new Cat("고양이", "나비", 3);

        myDog.makeSound();
        myCat.makeSound();
    }


}
