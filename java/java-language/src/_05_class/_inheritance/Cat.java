package _05_class._inheritance;

public class Cat extends Animal {
    public Cat(String species, String name, int age){
        this.species = species;
        this.name = name;
        this.age = age;
    }

    @Override
    void makeSound(){ // 부모에 있는거랑 똑같이 쓰기
        System.out.println(age + "살의 "+species + " " + name + "가 야옹하고 운다. ");
    }
}
