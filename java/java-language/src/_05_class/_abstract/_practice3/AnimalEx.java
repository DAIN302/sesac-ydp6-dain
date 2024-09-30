package _05_class._abstract._practice3;

public class AnimalEx {
    public static void main(String[] args) {
        Cat cat = new Cat("고양이", "집", "치즈");
        Dolphin dolphin = new Dolphin("돌고래", "바다");

        System.out.println(cat.speak());
        System.out.println(dolphin.speak());

        cat.getName();
        cat.sleep();
        cat.getHabitat();

        dolphin.getHabitat();
    }
}
