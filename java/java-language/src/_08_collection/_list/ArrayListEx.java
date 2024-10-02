package _08_collection._list;

import java.util.ArrayList;
import java.util.List;

public class ArrayListEx {
    public static void main(String[] args) {
        // ArrayList 컬레션 생성

        // 원소가 Book 인 ArrayList
        List<Book> list = new ArrayList<>();
        
        // 객체 추가
        list.add(new Book("제목1", "저자1"));
        list.add(new Book("제목2", "저자2"));
        list.add(new Book("제목3", "저자3"));
        list.add(new Book("제목4", "저자4"));
        list.add(new Book("제목5", "저자5"));

        System.out.println("list = " + list);
        
        // 리스트 개수 얻기
        System.out.printf("총 %d 권이 책이 존재합니다 %n", list.size());
        
        // 특정 인덱스의 객체 가져오기
        // 자료형 변수명 = list.get(n); -> 자료형 어떻게 써야하지?
        // get()이라는 메서드가 반환하는 자료의 타입을 적어야함
        Book thirdBook = list.get(2);
        System.out.println("thirdBook = " + thirdBook);

        // 특정 객체 삭제
        list.remove(2);
        list.remove(2);
        for(Book b : list) {
            System.out.println("b = " + b);
        }

        checkIfEmpty(list);
        // 모든 객체 삭제
        list.clear();
        System.out.println("list = " + list);
        checkIfEmpty(list);

    }

    private static void checkIfEmpty(List<?> list){
        // isEmpty -> boolean 값으로 반환
        System.out.println("list 비었니? : " + list.isEmpty());
    }
}
