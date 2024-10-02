package _08_collection._list;

import java.util.LinkedList;

public class LinkedListEx {
    public static void main(String[] args) {
        // LinkedList 생성
        LinkedList<String> list = new LinkedList<>();
        
        // 요소 추가
        list.add("Apple");
        list.add("Banana");
        list.add("Kiwi");
        list.add("Orange");
        System.out.println("list = " + list);
        
        // 첫번째, 마지막 위치에 요소 추가
        list.addFirst("Grape"); // 첫번째 위치에 요소 추가
        list.addLast("Cherry"); // 마지막 위치에 요소 추가
        // - addFirst, addLast 는 LinkedList 에 특화된 메서드
        System.out.println("list = " + list);

        // 특정 위치에 요소 삽입
        list.add(2, "Blueberry"); // 2번 인덱스에 "Blueberry" 요소 추가
        // -> ArrayList의 add 메서드와 똑같은 방법으로 쓰인다. list.add(n, element) -> n번째 인덱스에 element 추가
        System.out.println("list = " + list);

        // 첫번째와 마지막 요소 가져오기
        System.out.println("첫번째 요소 : " + list.getFirst()); // 첫번쨰 요소 가져오기
        System.out.println("마지막 요소 : " + list.getLast()); // 마지막 요소 가져오기
        // - getFirst, getLast 는 LinkedList 에 특화된 메서드
        // 첫번째 요소는 head 가 비어있고 마지막 요소는 tail 이 비어있음 -> 이 특징을 이용한 메소드들이 있는거임
        
        // 요소 삭제
        list.remove("Banana");
        System.out.println("list = " + list);
        
        // 첫번째와 마지막 요소 삭제
        String first = list.removeFirst(); // 첫번쨰 요소 삭제
        String last= list.removeLast(); // 마지막 요소 삭제
        System.out.println("list = " + list);
        System.out.println("삭제된 첫번째 요소 : " + first);
        System.out.println("삭제된 마지막 요소 : " + last);

        // 요소 검색
        boolean containsCherry = list.contains("Cherry");
        System.out.println("Cherry 포함 여부 : " + containsCherry);

        // 요소 위치 찾기
        int indexOfApple = list.indexOf("Apple");
        System.out.println("Apple 의 인덱스 : " + indexOfApple);
        
        // 순회
        for(String f : list) {
            System.out.println("f = " + f);
        }

        // 리스트 크기
        System.out.println("LinkedList 크기 : " + list.size());

        // 요소 모두 삭제
        list.clear();
        System.out.println("list = " + list);
        System.out.println("LinkedList 크기 : " + list.size());

    }
}
