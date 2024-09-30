package _06_wrapper;

// 포장 클래스의 값 비교
public class ValueCompareEx {
    public static void main(String[] args) {
        // -128 ~ 127 값을 갖는 경우
        Integer num1 = 10;
        Integer num2 = 10;
        System.out.println("num1 == num2  " + (num1 == num2)); // true
        System.out.println("num1.equals(num2) " + (num1.equals(num2))); // true

        // -128 ~ 127 초과 값을 갖는 경우
        Integer num3 = 1024;
        Integer num4 = 1024;
        System.out.println("num3 == num4  " + (num3 == num4)); // false
        System.out.println("num3.equals(num4) " + (num3.equals(num4))); // true

        // boolean
        Boolean bool1 = true;
        Boolean bool2 = false;
        System.out.println("bool1 == bool2 " + (bool1 == bool2)); // false
        System.out.println("bool1.equals(bool2) " + (bool1.equals(bool2))); // false
        System.out.println("bool1 != bool2 " + (bool1 != bool2)); // true

        // char
        Character char1 = 'A'; // 유니코드(\u0041)
        Character char2 = 'A';
        System.out.println("char1 == char2 " + (char1 == char2)); // true
        System.out.println("char1.equals(char2) " + (char1.equals(char2))); // true

        Character char3 = '\u0101';
        Character char4 = '\u0101';
        System.out.println("char3 == char4 " + (char3 == char4)); // false
        System.out.println("char3.equals(char4) " + (char3.equals(char4))); // true

        // => 결론 내용 비교하고 싶으면 걍 안전하게 equals 를 쓰자!


    }
}
