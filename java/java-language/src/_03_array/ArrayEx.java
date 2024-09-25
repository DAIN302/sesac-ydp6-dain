package _03_array;

import java.util.Arrays;
import java.util.Scanner;

// 배열
// - 배열에 저장할 자료형 선언 -> 배열 이름과 크기도 선언
// - 배열의 원소는 모두 같은 타입
// - 처음 선언한 배열 크기 변경 불가능
public class ArrayEx {
    public static void main(String[] args) {
        // 배열 변수 선언
        // - 두 가지 방법이 있음, 관례적으로 첫번째 방법을 많이 쓴다
        // 1. 타입[] 변수;
        // 2. 타입 변수[];

        int[] arr1;
        int arr2[];

        // - 배열 변수는 "참조 변수" -> 배열도 객체다.
        // 배열 변수는 힙 영역에 배열 주소를 저장, 따라서 참조할 배열이 없다면 null 로 초기화 가능
        // ex 타입[] 변수 = null; -> 가능
        String[] temp = null;
        System.out.println("temp = " + temp);

        // - 값 목록으로 배열 변수 선언과 생성
        // : 중괄호 ({}) : 나열된 값들을 항목으로 가지는 배열을 힙에 생성하고,
        // "번지"를 리턴 -> 배열 변수를 리턴된 번지를 저장함으로써 참조가 이루어짐
        int[] intArray ={16,22,32,41,59};
        System.out.println("intArray[0] = " + intArray[0]);
        System.out.println("intArray[1] = " + intArray[1]);
        System.out.println("intArray[2] = " + intArray[2]);
        System.out.println("intArray[3] = " + intArray[3]);
        System.out.println("intArray[4] = " + intArray[4]);
        System.out.println("intArray = " + intArray); // 임의의 문자열이 출력됨 -> 참조값이 출력된 것

        intArray[1] = 77; // 인덱스 1번 원소 값 변경
        System.out.println("intArray[1] = " + intArray[1]);

        // - new 연산자로 배열 선언과 생성
        double[] doubleArray = new double[3]; // 배열의 크기가 3인 double 배열 생성
        // new 연산자로 배열을 처음 생성하면 배열 항목은 기본 값으로 초기화 됨 -> 자료형마다 초기값은 정해져 있음

        System.out.println("doubleArray[0] = " + doubleArray[0]); // 0.0 출력
        System.out.println("doubleArray[1] = " + doubleArray[1]); // 0.0 출력
        System.out.println("doubleArray[2] = " + doubleArray[2]); // 0.0 출력

        // 원소값 변경
        doubleArray[0] = 0.2;
        doubleArray[1] = 2.4;
        doubleArray[2] = 1.8;
        System.out.println("doubleArray[0] = " + doubleArray[0]); // 0.2 출력
        System.out.println("doubleArray[1] = " + doubleArray[1]); // 2.4 출력
        System.out.println("doubleArray[2] = " + doubleArray[2]); // 1.8 출력

        // 배열 길이
        // - 배열변수.length;
        // - length 필드는 읽기만 가능하므로 값을 변경할 수 없음
        // 시도하면 컴파일 에러 뜨지롱
        System.out.println("doubleArray 배열길이 : " + doubleArray.length); // 1.8 출력

        // 배열 길이는 반복문에서 자주 쓰임
        // ex) 배열 원소끼리의 합계 구하기
        int sum = 0;
        for(int i =0; i < intArray.length; i++){
            sum += intArray[i];
        }
        System.out.println("sum = " + sum);

        // ex) 배열 원소끼리의 평균 구하기
        double avg = (double) sum / intArray.length;
        System.out.println("avg = " + avg);

        // System.out.println(doubleArray[doubleArray.length]);
        // 왜 에러가 날까?
        // -> 배열의 인덱싱은 0부터 시작하므로 길이에 벗어나므로 에러가 남
        System.out.println(doubleArray[doubleArray.length - 1]);

        // 배열 원소 출력
        // - toString() : 배열 내용을 문자열로 변환하여 출력
        // - 배열 주소값이 아닌 배열 내부값을 모두 보고 싶을 때 사용
        char[] charArray = {'A', 'B', 'C'};
        System.out.println("intArray : " + Arrays.toString(intArray));
        System.out.println("doubleArray : " + Arrays.toString(doubleArray));
        System.out.println("charArray : " + Arrays.toString(charArray));
        // 배열원소를 출력했을 때는 대괄호로 표시해서 나오넹...

        // 다차원 배열
        // - 배열 안에 또 다른 배열이 존재하는 배열
        // 2x3 배열 -> 해당하는 만큼 대괄호를 써주기
        int[][] matrix = {{1,2,3},{4,5,6}};
        System.out.println("matrix " );

        // for문으로 원소 출력
        for(int i = 0; i < matrix.length; i++){
            for(int j = 0; j <matrix[i].length; j++){
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        // 3x2 배열
        int[][] matrix2 = new int[3][2];
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;
        System.out.println("matrix2 " );
        // for문으로 원소 출력
        for(int i = 0; i < matrix2.length; i++){
            for(int j = 0; j <matrix2[i].length; j++){
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }

        // 3차원 배열
        int[][][] threeDimensionalArray = {{{1,2}, {3,4}}, {{5,6},{7,8}}};
        System.out.println("matrix3 " );
        // for문으로 원소 출력
        for(int i = 0; i < threeDimensionalArray.length; i++){
            for(int j = 0; j <threeDimensionalArray[i].length; j++){
                for(int k = 0; k <threeDimensionalArray[i][j].length; k++){
                    System.out.print(threeDimensionalArray[i][j][k] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }


        // 객체를 참조하는 배열
        // - 기본 타입 배열은 각 항목에 값을 직접 저장
        // - 참조 타입(클래스, 인터페이스) 배열은 각 항목에 객체의 번지를 저장
        String[] langs = new String[3];

        langs[0] = "Java";
        langs[1] = "Java";
        langs[2] = new String("Java");

        System.out.println("Array.toString(langs) : " + Arrays.toString(langs)); //[Java, Java, Java]
        System.out.println(langs[0] == langs[1]); // true -> 참조값을 비교하는 거라서 같은 참조값임 -> 같은 객체 참조
        System.out.println(langs[1] == langs[2]); // false -> 다른 참조값 -> 다른 객체 참조
        System.out.println(langs[0].equals(langs[2])); // true -> 값이 같아서

        Scanner sc = new Scanner(System.in);

        System.out.println("5개의 정수를 입력하세요");

        int[] nums = new int[5];
        int sum2 = 0;

        for(int i = 0; i < nums.length; i++){
            nums[i] = sc.nextInt();
            sum2 += nums[i];
        }

        double avg2 = (double) sum2 / nums.length;

        System.out.println(avg2);
    }
}
