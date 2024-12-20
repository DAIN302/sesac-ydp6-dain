package _08_collection._list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// ArrayList vs LinkedList
public class CompareList {
    public static void main(String[] args) {
        // ArrayList 컬렉션 객체 생성
        List<String> list1 = new ArrayList<>();

        // LinkedList 컬렉션 객체 생성
        List<String> list2 = new LinkedList<>();

        // 시작, 끝 변수 선언
        long startTime;
        long endTime;

        // ArrauList 의 0번 인덱스에 데이터 추가 (10000회 반복)
        startTime = System.nanoTime(); // 시작시간
        for(int i = 0; i < 10000; i++){
            list1.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime(); // 끝시간

        System.out.println("ArrayList 요소 추가 소요 시간 " + (endTime - startTime));


        // LinkedList 의 0번 인덱스에 데이터 추가 (10000회 반복)
        startTime = System.nanoTime(); // 시작시간
        for(int i = 0; i < 10000; i++){
            list2.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime(); // 끝시간

        System.out.println("LinkedList 요소 추가 소요 시간 " + (endTime - startTime));

        // -> 결론 : 요소 추가에 대한 것은 LinkedList 를 이용한 것이 훨씬 빠르당!
        // 왜??? ArrayList 는 0 번 인덱스에 새로운 요소를 추가하면서 기존 요소 인덱스를 한 칸씩 뒤로 미루는 작업을 해야함!

        // ArrauList 의 특정인덱스에 접근
        startTime = System.nanoTime(); // 시작시간
        for(int i = 0; i < 10000; i++){
            list1.get(40);
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList 요소 접근 소요 시간 " + (endTime - startTime));


        // LinkedList 의 특정 인덱스에 접근
        startTime = System.nanoTime(); // 시작시간
        for(int i = 0; i < 10000; i++){
            list2.get(40);
        }
        endTime = System.nanoTime(); // 끝시간

        System.out.println("LinkedList 요소 접근 소요 시간 " + (endTime - startTime));

    }
}
