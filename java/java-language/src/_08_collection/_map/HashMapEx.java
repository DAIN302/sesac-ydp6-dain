package _08_collection._map;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class HashMapEx {
    public static void main(String[] args) {
        // key (Integer id, 정수형), value(String name, 문자형)인 HashMap 예제

        // Map 컬렉션 생성
        Map<Integer, String> map = new HashMap();
        
        // 객체 저장
        map.put(1001, "김민지");
        map.put(1002, "강해린");
        map.put(1003, "팜하니");
        map.put(1004, "모지혜");
        map.put(1005, "이혜인");
        map.put(1006, "홍길동");
        System.out.println("map = " + map); // key = value 로 출력됨

        // 전체 객체 수
        System.out.printf("총 %d 명의 학생이 있습니다. %n%n", map.size());

        // key 로부터 value 얻기
        int key = 1003;
        String value = map.get(key);
        System.out.printf(" %d 번에 해당하는 학생은 %s 입니다. %n%n", key, value);

        // entry : key 와 value 의 쌍
        // key 와 value 로 구성된 모든 Map.Entry 객체를 Set 에 담아서 리턴
        Set<Map.Entry<Integer, String>> entrySet = map.entrySet(); // Set 에 있는 고유한 메서드를 사용하기 위해 사용
        System.out.println("entrySet = " + entrySet); // key=value
        System.out.println();

        // Map 컬렉션 순회
        // Map 에서는 직접 iterator 를 사용할 수 없어서 Set 에 담아서 사용 한다.
        Iterator<Map.Entry<Integer, String>> entryIterator = entrySet.iterator();
        while (entryIterator.hasNext()){
            Map.Entry<Integer, String> entry = entryIterator.next();
            Integer k = entry.getKey();
            String v = entry.getValue();
            System.out.printf(" %s 학생은 %d 번 입니다. %n%n", v, k);
        }

        System.out.println();
        
        // key 만 Set 컬렉션으로 얻기
        Set<Integer> ketSet = map.keySet();
        System.out.println("ketSet = " + ketSet);

        // 주어진 키와 일치하는 entry 삭제
        String deleteValue = map.remove(1006); // value 가 String 타입이므로 String 으로 함
        System.out.printf(" %s 학생이 삭제되었습니다. %n%n", deleteValue);
        System.out.printf("총 %d 명의 학생이 있습니다. %n%n", map.size());





    }
}
