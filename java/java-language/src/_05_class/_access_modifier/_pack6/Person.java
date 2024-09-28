package _05_class._access_modifier._pack6;

public class Person {
    public static void main(String[] args) {
        String name = "김굉필";
        int age = 30;
        int grade = 2;
        double score = 80.2;
        Favorite favorite = new Favorite("인사이드 아웃", 33);

//        System.out.println("name :" + name);
//        System.out.println("age :" + age);
//        System.out.println("grade :" + grade);
//        System.out.println("score :" + score);
//        System.out.println("favorite :" + favorite);

        String name1 = "하츄핑";
        String name2 = "하츄핑";
        String name3 = new String("하츄핑");
        String name4 = new String("하츄핑");

        System.out.println("name1 == name2 : " +  (name1 == name2));
        System.out.println("name1 == name3 : " +  (name1 == name3));
        System.out.println("name4 == name3 : " +  (name4 == name3));

        System.out.println("name1.equals(name2) : " + (name1.equals(name2)));
        System.out.println("name1.equals(name3) : " + (name1.equals(name3)));
        System.out.println("name4.equals(name3) : " + (name4.equals(name3)));
    }
}
