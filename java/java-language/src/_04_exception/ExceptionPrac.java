package _04_exception;

import java.util.*;

public class ExceptionPrac {
    public static void main(String[] args) {
        // 실습 1.
//        int[] numArr = {1,2,3,4};
//        try {
//            for(int i = 0; i <= 5; i++){
//                System.out.println(numArr[i]);
//            }
//        } catch (ArrayIndexOutOfBoundsException e) {
//            System.out.println("인덱스가 범위를 벗어났습니다" + e.getMessage());
//        }

        // 싨습2

//        try {
//            Scanner sc = new Scanner(System.in);
//            System.out.println("배열의 크기를 입력해주세요.");
//            int idx = sc.nextInt();
//            int[] numArr = new int[idx];
//
//            int sum = 0;
//            for(int i = 0; i < numArr.length; i++){
//                sum += numArr[i];
//            }
//
//            double avg = (double) sum / numArr.length;
//            System.out.println("평균은 " + avg);
//
//        } catch (NumberFormatException e){
//            System.out.println("숫자 형식이 잘못되었습니다." + e.getMessage());
//        } catch (InputMismatchException e) {
//            System.out.println("정수가 아닙니다." + e.getMessage());
//        } catch (ArithmeticException e) {
//            System.out.println("0으로 나눌 수 없음" + e.getMessage());
//        } catch (Exception e) {
//            System.out.println("알 수 없는 에러가 발생했습니다." + e.getMessage());
//        } finally {
//            System.out.println("연산 종료");
//        }

        // 실습 3
        Scanner sc = null;
        List<Integer> numbers = new ArrayList<>();
//        Set<Integer> set = new HashSet<>();
        List<List<Integer>> duplicates = new ArrayList<>();

        try {
            sc = new Scanner(System.in);
            System.out.println("배열의 크기를 입력하십시오 : ");
            int idx = sc.nextInt();

            System.out.println("배열 요소를 입력하십시오 : ");
            for(int i = 0; i < idx; i++){
                int element = sc.nextInt();
                numbers.add(element);
            }

            System.out.println(numbers);

//            for(Integer n : numbers){
//                if(!set.add(n)) {
//                    duplicates.add(n);
//                }
//            }

            for(int i = 0; i < numbers.size() - 1; i++){
                for(int j = i + 1; j < numbers.size(); j++ ){
                    if(numbers.get(i).equals(numbers.get(j))){
                        duplicates.add(numbers.get(i));
                    }
                }
            }

            System.out.println("중복된 숫자 서브 배열 : " + duplicates);

        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("범위를 벗어났습니다" + e.getMessage());
        } finally {
            System.out.println("연산 종료");
        }
    }
}
