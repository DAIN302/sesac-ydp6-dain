package _08_collection._prac;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;

public class prac1 {
    public static void main(String[] args) {
        Set<Integer> set1 = new HashSet<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("정수를 입력하세요. -1을 입력하면 종료됩니다.");
        while (true){
            System.out.println("정수 입력 : ");
            set1.add(sc.nextInt());
            if(set1.contains(-1)){
                set1.remove(-1);
                break;
            }
        }

        System.out.println("중복 제거된 정수 목록 : " + set1);
    }
}


//        Iterator<Integer> it = set1.iterator();
//        while (it.hasNext());{
//            System.out.println("정수 입력 : ");
//            set1.add(sc.nextInt());
//            if()
//            set1.remove(-1);
//            Integer num = it.next();
//
//        }