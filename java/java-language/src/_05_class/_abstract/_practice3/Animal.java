package _05_class._abstract._practice3;

public abstract class Animal {
    String species;
    String habitat;

    // 생성자 선언
    public Animal(String species, String habitat){
        this.species = species;
        this.habitat = habitat;
    }

    // 추상 메서드 선언
    abstract String speak();

    // 일반 메서드 선언
    void getHabitat(){
        System.out.println(species +"는 " + habitat + "에서 산다.");
    }
}
