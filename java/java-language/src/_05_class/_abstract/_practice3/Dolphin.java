package _05_class._abstract._practice3;

public class Dolphin extends Animal{
    public Dolphin(String species, String habitat){
        super(species, habitat);
    }

    void swim(){
        System.out.println(species + "가 " + habitat + "에서 수영을 한다.");
    }

    @Override
    String speak(){return "돌고래는 어떻게 울지..?";}
}
