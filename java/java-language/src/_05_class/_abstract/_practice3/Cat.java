package _05_class._abstract._practice3;

public class Cat extends Animal{
    String name;
    public Cat(String species, String habitat, String name){
        super(species, habitat);
        this.name = name;
    }

    void sleep(){
        System.out.println(name + "가(이) 소파에서 잠을 잔다.");
    }

    void getName(){
        System.out.println("우리집 "+ species +" 이름은 " + name + "다");
    }

    @Override
    String speak(){return species + "는 야옹야옹하고 운다";}
}
