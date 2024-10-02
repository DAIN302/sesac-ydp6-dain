package _08_collection._set;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HashSetEx {
    public static void main(String[] args) {
        // HashSet 컬렉션 생성
        Set<String> set1 = new HashSet<>();

        // 객체 저장
        set1.add("apple");
        set1.add("banana");
        set1.add("kiwi");
        set1.add("orange");
        set1.add("banana"); // 중복 객체 -> 중복이기 때문에 저장이 안됨
        System.out.println("set1 = " + set1); // set1 = [banana, orange, apple, kiwi]

        // 저장된 객체 수 출력
        System.out.printf("총 %d 종류의 과일이 있다. %n%n" , set1.size()); // 총 4 종류의 과일이 있다.
        // set 은 중복 허용 ㄴㄴ

        //
        Set<Course> set2 = new HashSet<>();

        // 객체 저장
        Course java = new Course(101, "Java");
        Course js1 = new Course(102, "JavaScript");
        Course js2 = new Course(102, "JavaScript");
        System.out.println(java.hashCode()); //2301607
        System.out.println(js1.hashCode()); // 1266328083
        System.out.println(js2.hashCode()); // 1266328083
        System.out.println(js1.equals(js2)); // true

        set2.add(java);
        set2.add(js1);
        set2.add(js2); // 인스턴스는 js1, js2 로 2개지만, 해시코드가 같으므로 동등객체여서 1개만 저장
        System.out.println("set2 = " + set2);
        System.out.printf("총 %d 종류의 과정이 있다. %n%n" , set2.size());
        
        // 전체 요소 출력
        // case1. 반복문 이용
        for(Course c : set2){
            System.out.println("c = " + c);
        }
        System.out.println();

        // case2. iterator 메소드로 반복자를 얻어 객체 하나씩 얻어오기
        // iterator 가 제공하는 메소드
        // - iterator<E> iterator() : 컬렉션 요소를 순회하기 위한 Iterator 객체를 반환
        // - boolean hasNext() : 가져올 객체가 있으면 true, 없으면 false
        // - E next() : 컬렉션에서 하나의 객체를 가져옴
        // - void remove() : next() 로 가져온 객체를 Set 컬렉션에서 제거
        Iterator<Course> it = set2.iterator();
        while (it.hasNext()){
            Course c = it.next();
            System.out.println(c);
        }
        System.out.println();




    }
}
