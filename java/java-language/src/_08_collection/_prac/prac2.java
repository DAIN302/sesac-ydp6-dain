package _08_collection._prac;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class prac2 {
    public static void main(String[] args) {
        Map<String, Integer> person = new HashMap<>();

        Scanner sc = new Scanner(System.in);

        System.out.println("이름과 나이를 입력하세요. '종료' 를 입력하면 종료됩니다.");
        while (true){
            System.out.println("이름 입력 : ");
            String name = sc.next();

            if(name.equals("종료")){
                break;
            } else {
                System.out.println("나이 입력 : ");
                int age = sc.nextInt();
                person.put(name, age);
            }
        }

        System.out.println("== 입력 받은 이름과 나이 == ");
        Iterator<Entry<String, Integer>> entryIterator = person.entrySet().iterator();
        while (entryIterator.hasNext()){
            Entry<String, Integer> entry = entryIterator.next();
            String k = entry.getKey();
            Integer v = entry.getValue();
            System.out.printf("이름: %s, 나이: %d %n", k, v);
        }

    }
}
